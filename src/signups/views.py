from django.shortcuts import render, render_to_response
from django.core.context_processors import request

from django.core import serializers
from django.utils import simplejson
from django.template.context import RequestContext
from django.template import Context, loader, context
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import redirect

from django.db.transaction import commit
from django.contrib import messages
from django.http.response import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from .info import *
from .models import Review, Macs, macsModel, macStatus, Newsletter, Contact
from .models import Screen,Processor, hardDrive, macsBuy, Faqs
from .forms import * 
from django.test.testcases import to_list

context = Context({
    'PHONE': PHONE,
    'PHONE1': PHONE1,
    'STREET_ADDRESS':STREET_ADDRESS,  
    'CITY':CITY,
    'STATE':STATE,
    'EMAIL':EMAIL,
    'FACEBOOK':FACEBOOK,
    'TWITTER':TWITTER,
    'LINKEDIN':LINKEDIN,
    'MONFRI':MONFRI,
    'SAT':SAT,
    'SUN':SUN,
              
})

#this populate the Home
def home (request):
    all_review = Review.objects.all().order_by('-data_pub')[:5]
    if all_review.count() > 0:
        t = loader.get_template('home.html')
        context['all_review'] = all_review
        return HttpResponse(t.render(context))
    else:
        messages.error(request, 'not found Reviews.')
        return render(request, 'home.html', context) 
    
#this return the mac Model and price
def getPriceMac (request):
    
    if  request.method == 'GET':
        getState = request.GET.get('getState');
        modelMac = request.GET.get('modelMac');
        all_PriceMac = macStatus.objects.filter(idModelKey=modelMac, status=getState).order_by('id');
    if all_PriceMac.count() > 0:
        json = serializers.serialize("json",  all_PriceMac)
        return HttpResponse(json, mimetype="text/javascript") 
    else:
        all_PriceMac = [{"pk":"0","fields":{'all_PriceMac':"nothing"}}]
        json = simplejson.dumps(all_PriceMac)
        return HttpResponse(json, mimetype="text/javascript")  


#this save form buying mac
@csrf_exempt
def sellMac(request):
    
    context = RequestContext(request)
    if request.method == "POST":
        # Cria form
        form = macsBuyForm(request.POST)
        
        fullName = request.POST.get('fullName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        zipCode = request.POST.get('zipCode')
        address = request.POST.get('address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        macModel = request.POST.get('macModel')
        macPrice = request.POST.get('macPrice')
        macState = request.POST.get('macState')

        # Valida e salva
        if form.is_valid():
            post = form.save(commit=True)
            subjects = "Macwiggle - Selling Form"
            msg = "Full Name: " +fullName+ "\nEmail: " + email + "\nPhone: "+phone+ "\nZipCode: "+zipCode+"\nAddress : " +address+ "\nCity: " + city + "\nState: "+state+ "\nMac Model: "+macModel+"\nMacBook Price: " +macPrice+ "\nMacBook Condition: " + macState
        
            from_email = settings.EMAIL_HOST_USER
            to_list = [email, settings.EMAIL_HOST_USER]
            send_mail(subjects, msg, from_email, to_list, fail_silently=True)
            
            messages.success(request, 'Thanks for Sell to us. Wait for your contact E-mail.') 
            return render(request, 'msgSold.html', context)                     
        else:
            # The supplied form contained errors - just print them to the terminal.
            print form.errors
    else:
    # Chama Template
        messages.error(request, 'not found.')
        return render_to_response("macPaidForm.html", 
                              locals(), 
                context_instance=RequestContext(request))
     
# This open the form buying macs 
def getPaid (request):  
    if request.method == 'GET':
        state = request.GET.get('state');
        modelMac = request.GET.get('modelMac');
        all_Paid = macStatus.objects.filter(idModelKey=modelMac, status=state).order_by('id')
   
    if all_Paid.count() > 0:
        t = loader.get_template('macPaidForm.html')
        context['all_Paid'] = all_Paid 
        context['STATES'] = STATES
        return HttpResponse(t.render(context)) 
    else:
        messages.error(request, 'not found Model for this product.')
        return render(request, 'macPaidForm.html', context) 

#This show the page macbook model and configuration
def searchModel (request):
    
    if request.method == 'GET':
        screen = request.GET.get('screen');
        processor = request.GET.get('processor');
        hd = request.GET.get('hd'); 
        md = request.GET.get('md'); 
        all_Model = macsModel.objects.filter(idScreenKey_id=screen, idProcessorKey=processor,idHdKey=hd,id=md).order_by('id')
    if  all_Model.count() > 0:
        t = loader.get_template('macModelForm.html')
        context['all_Model']=all_Model
        return HttpResponse(t.render(context))
    else:
        messages.error(request, 'Model not found, Macwigle doens`t buy this model, Thanks for choose us.')
        return render(request, 'macModelForm.html', context) 
        

#this populate the Sreens control
def getScreen (request):
    
    if  request.method == 'GET':
        id = request.GET.get('id');
        all_Screen = Screen.objects.filter(idMacKey=id).order_by('size')
    if all_Screen.count() > 0:
        json = serializers.serialize("json",  all_Screen)
    else:
        all_Screen = [{"pk":"0","fields":{'all_Screen':"nothing"}}]
        json = simplejson.dumps(all_Screen)
    return HttpResponse(json, mimetype="text/javascript")  

#this populate the Processors control
def getProcessor (request):
    
    if  request.method == 'GET':
        id = request.GET.get('id');
        all_Processor = Processor.objects.filter(idScreenKey_id=id).order_by('processor')
    if  all_Processor.count() > 0:
        json = serializers.serialize("json",  all_Processor)
    else:
        all_Processor = [{"pk":"0","fields":{'all_Processor':"nothing"}}]
        json = simplejson.dumps(all_Processor)
    return HttpResponse(json, mimetype="text/javascript")  


#this send Processors for select Colocar a variable
def getHd (request):
    
    if request.method == 'GET':
        id_p = request.GET.get('id_p');
        id_s = request.GET.get('id_s');
        all_Hd = hardDrive.objects.filter(idProcessorKey_id=id_p, idScreenKey_id=id_s).order_by('drive')  
    if  all_Hd.count() > 0:
        json = serializers.serialize("json",  all_Hd)
    else:
        all_Hd = [{"pk":"0","fields":{'all_Hd':"nothing"}}]
        json = simplejson.dumps(all_Hd)
    return HttpResponse(json, mimetype="text/javascript")

def getModel (request):
    
    if request.method == 'GET':
        idValue = request.GET.get('id');
        all_Md = macsModel.objects.filter(idHdKey_id=idValue).order_by('id')  
    if  all_Md.count() > 0:
        json = serializers.serialize("json",  all_Md)
    else:
        all_Md = [{"pk":"0","fields":{'all_Md':"nothing"}}]
        json = simplejson.dumps(all_Md)
    return HttpResponse(json, mimetype="text/javascript")      
    
    
# This show page Macs.html search data table_Macs
def macs (request):    
    all_Macs = Macs.objects.all().order_by('id')[:3]
    if all_Macs.count() > 0:
        t = loader.get_template('macs.html')
        context['all_Macs'] = all_Macs   
        return HttpResponse(t.render(context))
    else:
        messages.error(request, 'not found Macbooks.')
        return render(request, 'macs.html', context) 

#This save form contact and send email for Macwiggle adm
@csrf_exempt  
def contactForm(request):
    
    if request.method == 'POST':
        # Cria form
        form = contactForms(request.POST or None)   
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        msg = request.POST.get('msg')
        # Valida e salva
        form.is_valid()
        salvar = form.save(commit=False)
        salvar.save()
        
        #send_email(subject, message, frim_email, to_list, fail_silently=True)
        subjects = "Macwiggle - Contact Form"
        msg = "Full Name: " +name+ "\nEmail: " + email + "\nSubject: "+subject+ "\nMsg: "+msg
        
        from_email = settings.EMAIL_HOST_USER
        to_list = [email, settings.EMAIL_HOST_USER]
        send_mail(subjects, msg, from_email, to_list, fail_silently=True)
       
       
        messages.success(request, 'Thanks for you Contact us.') 
        #return HttpResponse("Dados inseridos com sucesso!")
        return render(request, 'msgContact.html', context) 

    else:
    # Chama Template
        messages.error(request, 'Model not found.')
        return render(request, 'msgContact.html', context) 

            
@csrf_exempt        
def newslatter(request):

    if request.method == 'POST':
        # Cria form
        form = newslatterForm(request.POST or None)   
        message = request.POST.get('email')
        # Valida e salva
        form.is_valid()
        salvar = form.save(commit=False)
        salvar.save()
        
        #send_email(subject, message, frim_email, to_list, fail_silently=True)
        subjects = "Macwiggle - Newslatter"
        from_email = settings.EMAIL_HOST_USER
        to_list = [message, settings.EMAIL_HOST_USER]
        send_mail(subjects, message, from_email, to_list, fail_silently=True)
       
       
        messages.success(request, 'Thanks for assign our Newslatter.') 
        #return HttpResponse("Dados inseridos com sucesso!")
        return render(request, 'msgNewslatter.html', context) 

    else:
    # Chama Template
        messages.error(request, 'not found.')
        return render(request, 'msgNewslatter.html', context) 
       
        
#This open faqs.html       
def faqs (request):    
    all_faqs = Faqs.objects.all().order_by('-data_pub')[:5]
    t = loader.get_template('faqs.html')
    context['all_faqs'] = all_faqs
    return HttpResponse(t.render(context))
    #print all_faqs[0]
  
  
#This open contact.html    
def contact (request):    
    return render(request, 'contact.html', context) 


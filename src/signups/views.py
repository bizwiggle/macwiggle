from django.shortcuts import render, render_to_response
from django.views.decorators.csrf import csrf_exempt
from django.core.context_processors import request
from django.core import serializers
from django.utils import simplejson
from django.template.context import RequestContext
from django.template import Context, loader, context
from django.conf import settings
from django.core.mail import send_mail

from hgext.mq import save
from django.db.transaction import commit
from django.contrib import messages
from django.http.response import HttpResponseRedirect, HttpResponse

from .info import*
from .models import Review, Macs, macsModel, macStatus, Newsletter, Contact
from .models import Screen, Processor, hardDrive, macsBuy, Faqs
from .forms import*
from reportlab.lib.randomtext import subjects
from hgext.histedit import message
from django.test.testcases import to_list

context = Context({
    'PHONE': PHONE,
    'STREET_ADDRESS':STREET_ADDRESS,  
    'CITY':CITY,
    'STATE':STATE,
    'EMAIL':EMAIL,
    'FACEBOOK':FACEBOOK,
    'TWITTER':TWITTER,
    'LINKEDIN':LINKEDIN,
    'MONFRIOPEN':MONFRIOPEN,
    'MONFRICLOSE':MONFRICLOSE,
    'SATOPEN':SATOPEN,
    'SATCLOSE':SATCLOSE,
    'SUNOPEN':SUNOPEN,
    'SUNCLOSE':SUNCLOSE,
              
})
def home (request):
    all_review = Review.objects.all().order_by('-data_pub')[:5]
    t = loader.get_template('home.html')
    context['all_review'] = all_review
   
    
    return HttpResponse(t.render(context))
    #print all_review[0]
    return render_to_response("home.html", 
                              locals(), 
                context_instance=RequestContext(request))

#this send Sreens for select Colocar a variable
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

def sellMac(request):
    # Cria form
    form = macsBuyForm(request.GET or None)   
    # Valida e salva
    if form.is_valid():
        salvar = form.save(commit=False)
        salvar.save()
        #send_email(subject, message, frim_email, to_list, fail_silently=True)
        subjects = "Pre-Order Macwiggle"
        message = "Thanks for Sell to us"
        from_email = settings.EMAIL_HOST_USER
        to_list = ["fabiano.rdj@gmail.com"]
        
        send_mail("jjjj", "oooo", from_email, to_list, fail_silently=True)
       
        messages.success(request, 'Thanks for Sell to us. Wait for your contact E-mail.') 
        #return HttpResponse("Dados inseridos com sucesso!")
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))
    else:
    # Chama Template
        messages.error(request, 'Model not found.')
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))
     
#def searchModel (request):
    
  #if request.method == 'GET':
    #screen = request.GET.get('screen');
    #processor = request.GET.get('processor');
    #hd = request.GET.get('hd'); 
    #all_Model = macsModel.objects.filter(idScreenKey_id=screen, idProcessorKey=processor,idHdKey=hd).order_by('id')
    #if all_Model.count() > 0:
    #    json = serializers.serialize("json",  all_Model)
    #else:
     #   all_Model = [{"pk":"0","fields":{'all_Model':"Nothing"}}]
     #   json = simplejson.dumps(all_Model)
    #return HttpResponse(json, mimetype="text/javascript") 

def getPaid (request):
    
    if request.method == 'GET':
        state = request.GET.get('state');
        modelMac = request.GET.get('modelMac');
        all_Paid = macStatus.objects.filter(idModelKey=modelMac, status=state).order_by('id')
   
    if all_Paid.count() > 0:
        t = loader.get_template('macPaidForm.html')
        context['all_Paid'] = all_Paid 
        
        return HttpResponse(t.render(context))
        #print all_review[0]
        return render_to_response("macPaidForm.html", 
                              locals(), 
                context_instance=RequestContext(request))
        
    else:
        messages.success(request, 'not found Model for this.')
        return render_to_response("macPaidForm.html", 
                              locals(), 
                context_instance=RequestContext(request))


def searchModel (request):
    
  if request.method == 'GET':
    screen = request.GET.get('screen');
    processor = request.GET.get('processor');
    hd = request.GET.get('hd'); 
    all_Model = macsModel.objects.filter(idScreenKey_id=screen, idProcessorKey=processor,idHdKey=hd).order_by('id')
    if all_Model.count() > 0:
        t = loader.get_template('macModelForm.html')
        c = Context ({
        'all_Model':all_Model,
        })
    
        return HttpResponse(t.render(c))
    else:
        #all_Model = [{"pk":"0","fields":{'all_Model':"Nothing for this Model"}}]
        #json = simplejson.dumps(all_Model)
    #return HttpResponse(json, mimetype="text/javascript") 
        messages.error(request, 'Model not found, Macwigle doens`t buy this model, Thanks for choose us.')
        return render_to_response("macModelForm.html", 
                              locals(), 
                context_instance=RequestContext(request))
        

#this send Sreens for select Colocar a variable
def getScreen (request):
    
  if request.method == 'GET':
    id = request.GET.get('id');
    all_Screen = Screen.objects.filter(idMacKey=id).order_by('id')
    if all_Screen.count() > 0:
        json = serializers.serialize("json",  all_Screen)
    else:
        all_Screen = [{"pk":"0","fields":{'all_Screen':"nothing"}}]
        json = simplejson.dumps(all_Screen)
    return HttpResponse(json, mimetype="text/javascript")  

#this send Processors for select Colocar a variable
def getProcessor (request):
    
  if request.method == 'GET':
    id = request.GET.get('id');
    all_Processor = Processor.objects.filter(idScreenKey_id=id).order_by('id')
    if all_Processor.count() > 0:
        json = serializers.serialize("json",  all_Processor)
    else:
        all_Processor = [{"pk":"0","fields":{'all_Processor':"nothing"}}]
        json = simplejson.dumps(all_Processor)
    return HttpResponse(json, mimetype="text/javascript")  


#this send Processors for select Colocar a variable
def getHd (request):
    
  if request.method == 'GET':
    id = request.GET.get('id');
    all_Hd = hardDrive.objects.filter(idProcessorKey_id=id).order_by('id')
    if all_Hd.count() > 0:
        json = serializers.serialize("json",  all_Hd)
    else:
        all_Hd = [{"pk":"0","fields":{'all_Hd':"nothing"}}]
        json = simplejson.dumps(all_Hd)
    return HttpResponse(json, mimetype="text/javascript")    
    
# This show page Macs search data table_Macs
def macs (request):    
    all_Macs = Macs.objects.all().order_by('id')[:3]
    t = loader.get_template('macs.html')
    c = Context ({
        'all_Macs':all_Macs,
    })
    
    return HttpResponse(t.render(c))


# This show page Macs search data table_Macs
def macss (request):    
    all_Macs = Macs.objects.all().order_by('id')[:3]
    t = loader.get_template('macss.html')
    c = Context ({
        'all_Macs':all_Macs,
    })
    
    return HttpResponse(t.render(c))


def contactForm(request):
    # Get the context from the request.
    context = RequestContext(request)

    # A HTTP POST?
    if request.method == 'POST':
        # Cria form
        form = contactForms(request.POST or None)   
        # Valida e salva
        form.is_valid()
        salvar = form.save(commit=False)
        salvar.save()
        
        subject='teste'
        message='jjjjjjj'
        from_email=settings.EMAIL_HOST_USER
        recipient_list=(salvar.email, settings.EMAIL_HOST_USER)
        
        send_mail(subject, message, from_email, recipient_list, fail_silently=True)
        
        
   
        messages.success(request, 'Thanks for Sell to us. Wait for your contact E-mail.') 
        #return HttpResponse("Dados inseridos com sucesso!")
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))
    else:
    # Chama Template
        messages.error(request, 'Model not found.')
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))
        
        
        
def newslatter(request):

    if request.method == 'GET':
        # Cria form
        form = newslatterForm(request.GET or None)   
        # Valida e salva
        form.is_valid()
        salvar = form.save(commit=False)
        salvar.save()
        #send_email(subject, message, frim_email, to_list, fail_silently=True)
        subjects = "Pre-Order Macwiggle"
        message = "Thanks for Sell to us"
        from_email = settings.EMAIL_HOST_USER
        to_list = ["fabiano.rdj@gmail.com"]
        
        send_mail("jjjj", "oooo", from_email, to_list, fail_silently=True)
       
        messages.success(request, 'Thanks for Sell to us. Wait for your contact E-mail.') 
        #return HttpResponse("Dados inseridos com sucesso!")
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))
    else:
    # Chama Template
        messages.error(request, 'Model not found.')
        return render_to_response("msgSold.html", 
                              locals(), 
                context_instance=RequestContext(request))        
        
       
def faqs (request):    
    all_faqs = Faqs.objects.all().order_by('-data_pub')[:5]
    t = loader.get_template('faqs.html')
    context['all_faqs'] = all_faqs
   
    
    return HttpResponse(t.render(context))
    #print all_faqs[0]
    return render_to_response("faqs.html", 
                              locals(), 
                context_instance=RequestContext(request))
    
    
def contact (request):    
    return render_to_response("contact.html", 
                              locals(), 
                context_instance=RequestContext(request))
    



    return render_to_response("quote.html", 
                              locals(), 
                context_instance=RequestContext(request))
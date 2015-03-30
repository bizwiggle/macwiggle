from django.shortcuts import render, render_to_response
from django.core.context_processors import request
from django.template.context import RequestContext

from .forms import SignUpForm
from django.forms.forms import Form
from hgext.mq import save
from django.db.transaction import commit
from django.contrib import messages
from django.http.response import HttpResponseRedirect

# Create your views here.
def home (request):
    return render_to_response("home.html", 
                              locals(), 
                context_instance=RequestContext(request))
    
    
def faqs (request):
    return render_to_response("faqs.html", 
                              locals(), 
                context_instance=RequestContext(request))
    
def contact (request):
    return render_to_response("contact.html", 
                              locals(), 
                context_instance=RequestContext(request))
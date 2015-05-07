from django import forms
from .models import macsBuy, Contact, Newsletter


class macsBuyForm(forms.ModelForm):
    class Meta:
        model = macsBuy
        

class contactForms(forms.ModelForm):
    class Meta:
        model = Contact
 

class newslatterForm(forms.ModelForm):
    class Meta:
        model = Newsletter   
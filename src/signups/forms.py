from django import forms
from .models import macsBuy, Contact, Newsletter


class macsBuyForm(forms.ModelForm):
    class Meta:
        model = macsBuy
        fields = ('id', 'fullName', 'email','phone','address','city','state','macModel','macPrice','macState')
        

class contactForms(forms.ModelForm):
    class Meta:
        model = Contact
 

class newslatterForm(forms.ModelForm):
    class Meta:
        model = Newsletter   
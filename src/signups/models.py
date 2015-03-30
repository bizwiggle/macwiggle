from django.db import models
from django.utils.encoding import smart_unicode
from sqlite3.dbapi2 import Timestamp
from pygments.lexers._vimbuiltins import auto

# Create your models here.
class SignUp(models.Model):
    first_name = models.CharField(max_length=120, null=True, blank=True)
    last_name = models.CharField(max_length=120, null=True, blank=True)
    email = models.EmailField()
    Timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

def __unicode__(self):
    return smart_unicode(self.email)
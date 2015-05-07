from django.db import models

# Create your models here.
#class SignUp(models.Model):
    #first_name = models.CharField(max_length=120, null=True, blank=True)
    #last_name = models.CharField(max_length=120, null=True, blank=True)
    #email = models.EmailField()
    #Timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    #updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    
class Review(models.Model):
        
    review = models.CharField(max_length=200, null=False, blank=True)
    ReviewName = models.CharField(max_length=200, null=False, blank=True)
    ReviewProf = models.CharField(max_length=200, null=False, blank=True)
    data_pub = models.DateTimeField(auto_now_add=True,auto_now=False)

    def __unicode__(self):
        return self.review
    
class Faqs(models.Model):
        
    question = models.CharField(max_length=150, null=False, blank=True)
    answer = models.CharField(max_length=900, null=False, blank=True)
    data_pub = models.DateTimeField(auto_now_add=True,auto_now=False)

    def __unicode__(self):
        return self.question
    
class Macs(models.Model):

    nameMac = models.CharField(max_length=200, null=False, blank=True)
    imgMac = models.CharField(max_length=200, null=False, blank=True)
    
    def __unicode__(self):
        return u'{0}'.format(self.nameMac) 
    
       
class Screen(models.Model):
    
    size = models.FloatField(null=False)
    idMacKey = models.ForeignKey('Macs')
    
    def __unicode__(self):
        return u'{0}'.format(self.size)
    
class Processor (models.Model):
    
    processor = models.CharField(max_length=30, null=False, blank=True)
    idMacKey = models.ForeignKey('Macs')
    idScreenKey = models.ForeignKey('Screen')
    
    def __unicode__(self):
        return u'{0}'.format(self.processor)
    
    
class hardDrive (models.Model):

    idMacKey = models.ForeignKey('Macs')
    idScreenKey = models.ForeignKey('Screen')
    idProcessorKey = models.ForeignKey('Processor')
    drive = models.CharField(max_length=30, null=False, blank=True)
     
    def __unicode__(self):
        return u'{0}'.format(self.drive)
    
    
    
class macsModel (models.Model):

    idMacKey = models.ForeignKey('Macs')
    idScreenKey = models.ForeignKey('Screen')
    idProcessorKey = models.ForeignKey('Processor')
    idHdKey = models.ForeignKey('hardDrive')
    model = models.CharField(max_length=50, null=False, blank=True)
    
     
    def __unicode__(self):
        return u'{0}'.format(self.model)
    
class macStatus (models.Model):

    idMacKey = models.ForeignKey('Macs')
    idModelKey = models.ForeignKey('macsModel')
    status = models.CharField(max_length=50, null=False, blank=True)
    price = models.CharField(max_length=30, null=False, blank=True)
    msg = models.CharField(max_length=900, null=False, blank=True)


    
    def __unicode__(self):
        return u'{0}'.format(self.price)  
    
    
    
class macsBuy (models.Model):
    
    fullName = models.CharField(max_length=100, null=False, blank=True)
    email = models.CharField(max_length=50, null=False, blank=True)
    phone = models.CharField(max_length=20, null=False, blank=True)
    address = models.CharField(max_length=150, null=False, blank=True)
    city = models.CharField(max_length=50, null=False, blank=True)
    state = models.CharField(max_length=5, null=False, blank=True)
    macModel = models.CharField(max_length=100, null=False, blank=True)
    macPrice = models.CharField(max_length=20, null=False, blank=True)
    macState = models.CharField(max_length=20, null=False, blank=True)
    
    
    def __unicode__(self):
        return u'{0}'.format(self.fullName)
    
    
    
class Contact (models.Model):

    name = models.CharField(max_length=100, null=False, blank=True)
    email = models.CharField(max_length=100, null=False, blank=True)
    subject = models.CharField(max_length=100, null=False, blank=True)
    msg = models.CharField(max_length=200, null=False, blank=True)
    
    def __unicode__(self):
        return u'{0}'.format(self.name)  
 
   

class Newsletter (models.Model):

    email = models.CharField(max_length=100, null=False, blank=True)   
    
    def __unicode__(self):
        return u'{0}'.format(self.email) 
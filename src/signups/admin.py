from django.contrib import admin

# Register your models here.
from models import Review, Screen, Macs, Processor, hardDrive, Newsletter
from models import macsBuy, macsModel, macStatus, Faqs,  Contact
from django.forms.models import fields_for_model

class macAdmin(admin.ModelAdmin):
    class Meta:
        model = Macs      
admin.site.register(Macs, macAdmin)

class ScreenAdmin (admin.ModelAdmin):
    class Meta:
        model = Screen
admin.site.register(Screen, ScreenAdmin)

class ProcessorAdmin (admin.ModelAdmin):
    class Meta:
        model = Processor
admin.site.register(Processor, ProcessorAdmin)

class hardDriveAdmin (admin.ModelAdmin):
    class Meta:
        model = hardDrive
admin.site.register(hardDrive, hardDriveAdmin)


class ReviewAdmin (admin.ModelAdmin):
    class Meta:
        model = Review
admin.site.register(Review, ReviewAdmin)

class FaqsAdmin (admin.ModelAdmin):
    class Meta:
        model = Faqs
admin.site.register(Faqs, FaqsAdmin)

class macsModelAdmin (admin.ModelAdmin):
    class Meta:
        model = macsModel
admin.site.register(macsModel, macsModelAdmin)


class macStatusAdmin (admin.ModelAdmin):
    class Meta:
        model = macStatus
admin.site.register(macStatus, macStatusAdmin)


class macsBuyAdmin (admin.ModelAdmin):
    class Meta:
        model = macsBuy
admin.site.register(macsBuy, macsBuyAdmin)



class contactAdmin (admin.ModelAdmin):
    class Meta:
        model = Contact
admin.site.register(Contact, contactAdmin)


class newsletterAdmin (admin.ModelAdmin):
    class Meta:
        model = Newsletter
admin.site.register(Newsletter, newsletterAdmin)

    
            
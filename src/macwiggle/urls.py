from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static




from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^$', 'signups.views.home', name='home'),
     url(r'^faqs/$', 'signups.views.faqs', name='faqs'),
     url(r'^contactForm/$', 'signups.views.contactForm', name='contactForm'),
     url(r'^macs/$', 'signups.views.macs', name='macs'),
     url(r'^contact/$', 'signups.views.contact', name='contact'),
     url(r'^newslatter/$', 'signups.views.newslatter', name='newslatter'),
     

     url(r'^sellMac/$', 'signups.views.sellMac', name='sellMac'),
     url(r'^getPaid/$', 'signups.views.getPaid', name='getPaid'),
     url(r'^getPriceMac/$', 'signups.views.getPriceMac', name='getPriceMac'),
     url(r'^searchModel/$', 'signups.views.searchModel', name='searchModel'),

     url(r'^getScreen/$', 'signups.views.getScreen', name='getScreen'),
     url(r'^getProcessor/$', 'signups.views.getProcessor', name='getProcessor'),
     url(r'^getHd/$', 'signups.views.getHd', name='getHd'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
         document_root=settings.STATIC_ROOT)
    
    urlpatterns += static(settings.MEDIA_URL,
         document_root=settings.MEDIA_ROOT)
    

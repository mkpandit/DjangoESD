from django.contrib import admin

from .models import Content
from .models import Product
from django_summernote.admin import SummernoteModelAdmin

class ContentAdmin(SummernoteModelAdmin):
    list_display = ('title', 'excerpt', 'mod_date')
    summernote_fields = '__all__'

admin.site.register(Content, ContentAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'mod_date')

admin.site.register(Product, ProductAdmin)
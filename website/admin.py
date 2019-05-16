from django.contrib import admin

from .models import Content
from .models import Product
from django_summernote.admin import SummernoteModelAdmin

class ContentAdmin(SummernoteModelAdmin):
    list_display = ('title', 'slug', 'mod_date')
    summernote_fields = ('body')

admin.site.register(Content, ContentAdmin)

class ProductAdmin(SummernoteModelAdmin):
    list_display = ('name', 'slug', 'mod_date')
    summernote_fields = ('description')

admin.site.register(Product, ProductAdmin)
from django.contrib import admin

from .models import Content
from .models import Product

class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'excerpt', 'mod_date')

admin.site.register(Content, ContentAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'mod_date')

admin.site.register(Product, ProductAdmin)
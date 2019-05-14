from django.http import HttpResponse
from django.template import loader

from .models import Content
from .models import Product

def index(request):
    content = Content.objects.all()
    template = loader.get_template('website/index.html')
    context = {
        'content': content
    }
    return HttpResponse(
        template.render(context, request)
    )

def whoWeAre(request):
    content = Content.objects.get(pages='team')
    template = loader.get_template('website/who-we-are.html')
    context = {
        'content': content
    }
    return HttpResponse(
        template.render(context, request)
    )

def product(request):
    products = Product.objects.all()
    template = loader.get_template('website/product.html')
    context = {
        'products': products
    }
    return HttpResponse(
        template.render(context, request)
    )
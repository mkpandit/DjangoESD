from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, get_object_or_404, render_to_response, redirect
from django.views.generic import View, ListView

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

class ContentDetailView(View):
    def get(self, request, *args, **kwargs):
        content = get_object_or_404(Content, slug=kwargs['slug'])
        context = {'content': content}
        return render(request, 'website/content.html', context)

class ProductDetailView(View):
    def get(self, request, *args, **kwargs):
        product = get_object_or_404(Product, slug=kwargs['slug'])
        context = {'product': product}
        return render(request, 'website/product-detail.html', context)

class ProductListView(ListView):
    queryset = Product.objects.filter()
    # print(queryset)
    template_name = 'website/product.html'
    context_object_name = 'products'
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('who-we-are/', views.whoWeAre, name='who-we-are'),
    path('product/', views.product, name='product'),
]
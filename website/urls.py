from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('product/', views.ProductListView.as_view(), name='products'),
    path('<str:slug>/', views.ContentDetailView.as_view(), name='content'),
    path('product/<str:slug>/', views.ProductDetailView.as_view(), name='product'),
]
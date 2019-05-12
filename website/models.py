from django.db import models

class Content(models.Model):
    STATUS = (
        ('Published', 'Published'),
        ('Draft', 'Draft'),
        ('Deleted', 'Deleted'),
    )
    PAGES = (
        ('team', 'Who we are?'),
        ('privacy', 'Privacy Statements'),
        ('terms', 'Terms & Conditions'),
    )
    pages = models.CharField(max_length=16, choices=PAGES, default='Team')
    title = models.TextField(max_length=1000, default='Title')
    excerpt = models.TextField(default='Excerpt')
    body = models.TextField(default='Body')
    status = models.CharField(max_length=16, choices=STATUS, default='Draft')
    mod_date = models.DateTimeField('Date modified')

class Product(models.Model):
    STATUS = (
        ('Available', 'Available'),
        ('Deleted', 'Deleted'),
    )
    name = models.TextField(max_length=1000, default='Product name')
    description = models.TextField(default='Product description')
    image = models.ImageField(upload_to='product/', blank=True)
    price = models.CharField(max_length=16, default='$20')
    status = models.CharField(max_length=16, choices=STATUS, default='Available')
    mod_date = models.DateTimeField('Date modified')
from django.db import models

class Content(models.Model):
    STATUS = (
        ('Published', 'Published'),
        ('Draft', 'Draft'),
        ('Deleted', 'Deleted'),
    )
    SLUG = (
        ('who-we-are', 'Who we are?'),
        ('privacy-policy', 'Privacy Policy'),
        ('terms-condition', 'Terms & Conditions'),
        ('esd-philosophy', 'ESD\'s Philosophy' ),
    )
    slug = models.CharField(max_length=16, choices=SLUG, default='Team')
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
    slug = models.CharField(max_length=256, default='slug')
    name = models.TextField(max_length=1000, default='Product name')
    description = models.TextField(default='Product description')
    image = models.ImageField(upload_to='product/', blank=True)
    price = models.CharField(max_length=16, default='$20')
    status = models.CharField(max_length=16, choices=STATUS, default='Available')
    mod_date = models.DateTimeField('Date modified')
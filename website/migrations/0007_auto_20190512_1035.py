# Generated by Django 2.0.2 on 2019-05-12 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0006_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, upload_to='product/'),
        ),
    ]

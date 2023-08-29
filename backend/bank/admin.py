from django.contrib import admin

from .models import Models

# Register your models here.

for model in Models:
    admin.site.register(model.value, model.value.Article)

__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 03:18"


from django.db import models
from django.contrib.admin import ModelAdmin


class PaymentProcessingModel(models.Model):
    name = models.TextField(unique=True, verbose_name="Название платежной системы")
    code = models.TextField(unique=True, verbose_name="Шифр платежной системы")

    def __str__(self):
        return self.name

    class Article(ModelAdmin):
        list_display = ["id", "name", "code"]
        ordering = ["id"]
        actions = []

    class Meta:
        verbose_name_plural = "Платежные системы"
        verbose_name = "Платежная система"

__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 02:56"

from django.db import models
from django.contrib.admin import ModelAdmin


class CurrencyModel(models.Model):
    name = models.TextField(unique=True, verbose_name="Название валюты")
    symbol = models.CharField(max_length=1, unique=True, verbose_name="Значек валюты")

    def __str__(self):
        return f"{self.symbol} {self.name}"

    class Article(ModelAdmin):
        list_display = ["id", "name"]
        ordering = ["id"]
        actions = []

    class Meta:
        verbose_name_plural = "Валюта"
        verbose_name = "Валюту"

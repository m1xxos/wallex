__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 03:57"

from django.db import models
from django.contrib.admin import ModelAdmin

from .CurrencyExchangeType import CurrencyExchangeType
from ..CurrencyModel import CurrencyModel


class CurrencyExchangeModel(models.Model):
    from_currency = models.ForeignKey(CurrencyModel, on_delete=models.CASCADE, null=True, related_name="from_currency", verbose_name="С валюты")
    to_currency = models.ForeignKey(CurrencyModel, on_delete=models.CASCADE, null=True, related_name="to_currency", verbose_name="В валюту")
    difference = models.FloatField(default=1.0, verbose_name="Разница в валюте")
    exchange_type = models.CharField(
        max_length=3,
        choices=CurrencyExchangeType.choices,
        verbose_name="Тип обмена"
    )

    def __str__(self):
        return f"{self.exchange_type} {self.difference}. {self.from_currency} -> {self.to_currency}"

    class Article(ModelAdmin):
        list_display = ["id", "difference", "exchange_type", "from_currency", "to_currency"]
        ordering = ["id", "exchange_type"]
        actions = []

    class Meta:
        verbose_name_plural = "Обмен валют"
        verbose_name = "Обмен валюты"

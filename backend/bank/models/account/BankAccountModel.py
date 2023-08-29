__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 02:53"

from django.db import models
from django.contrib.admin import ModelAdmin

from ..UserModel import UserModel
from ..CurrencyModel import CurrencyModel


class BankAccountModel(models.Model):
    name = models.TextField(null=True, blank=True, verbose_name="Пользовательское название счета")
    amount = models.FloatField(default=0.0, verbose_name="Количество валюты")
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True, blank=True, verbose_name="Пользователь счета")
    currency = models.ForeignKey(CurrencyModel, on_delete=models.CASCADE, null=True, verbose_name="Валюта счета")

    def __str__(self):
        return f"Счет №{self.id}. {self.currency}"

    class Article(ModelAdmin):
        list_display = ["id", "amount", "user", "currency"]
        ordering = ["id"]
        actions = []

    class Meta:
        verbose_name_plural = "Счета пользователя"
        verbose_name = "Счет пользователя"

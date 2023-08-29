__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 19:56"

from django.db import models
from django.contrib.admin import ModelAdmin

from bank.models import BankAccountModel


class BankAccountTopUpModel(models.Model):
    amount = models.FloatField(verbose_name="Сумма пополнения")
    account = models.ForeignKey(BankAccountModel, on_delete=models.CASCADE, null=True, verbose_name="Счет пополнения")

    def __str__(self):
        return f"{self.amount} -> {self.account}"

    class Article(ModelAdmin):
        list_display = ["id", "amount", "account"]
        ordering = ["id", "amount"]
        actions = []

    class Meta:
        verbose_name_plural = "Пополнение счетов"
        verbose_name = "Пополнение счета"


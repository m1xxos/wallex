__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 03:57"

from django.db import models
from django.contrib.admin import ModelAdmin


class CurrencyExchangeHistoryModel(models.Model):
    currency_exchange = models.ForeignKey("CurrencyExchangeModel", on_delete=models.CASCADE, null=True, verbose_name="Курс обмена валют")
    from_account = models.ForeignKey("BankAccountModel", on_delete=models.CASCADE, null=True, related_name="from_account", verbose_name="С счета")
    to_account = models.ForeignKey("BankAccountModel", on_delete=models.CASCADE, null=True, related_name="to_account", verbose_name="На счет")
    amount = models.FloatField(verbose_name="Количество валюты с счета")

    def __str__(self):
        return f"{self.currency_exchange.exchange_type} {self.from_account} -> {self.to_account} {self.amount}{self.from_account.currency.symbol}"

    class Article(ModelAdmin):
        list_display = ["id", "currency_exchange", "from_account", "to_account", "amount"]
        ordering = ["id", "currency_exchange"]
        actions = []

    class Meta:
        verbose_name_plural = "Истории обмена валют"
        verbose_name = "История обмена валюты"

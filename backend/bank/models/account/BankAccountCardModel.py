__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 03:05"

import random

from django.utils import timezone

from django.db import models
from django.contrib.admin import ModelAdmin

from .BankAccountModel import BankAccountModel
from ..PaymentProcessingModel import PaymentProcessingModel


def get_default_card_number() -> int:
    return int(f"5302{random.randrange(1000, 9999)}{random.randrange(1000, 9999)}{random.randrange(1000, 9999)}")


def get_cvv() -> int:
    return random.randrange(100, 999)


class BankAccountCardModel(models.Model):
    number = models.BigIntegerField(default=get_default_card_number, verbose_name="Номер карты")
    secure_code = models.IntegerField(default=get_cvv, verbose_name="Секретный код")
    expired_at = models.DateField(default=timezone.now().replace(year=2027), verbose_name="Срок действия")
    account = models.ForeignKey(BankAccountModel, on_delete=models.CASCADE, null=True, verbose_name="Счет")
    payment_processor = models.ForeignKey(PaymentProcessingModel, on_delete=models.CASCADE, null=True, verbose_name="Платежная система")

    def __str__(self):
        return f"Карта № {self.number}"

    class Article(ModelAdmin):
        list_display = ["id", "number", "expired_at", "account"]
        ordering = ["id"]
        actions = []

    class Meta:
        verbose_name_plural = "Карты счетов пользователя"
        verbose_name = "Карта счета пользователя"

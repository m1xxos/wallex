__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 04:00"

from enum import Enum

from django.db.models import TextChoices
from django.utils.translation import gettext_lazy as _


class CurrencyExchangeType(TextChoices, Enum):
    BUY = 'BUY', _("Купить")
    SELL = 'SEL', _("Продать")

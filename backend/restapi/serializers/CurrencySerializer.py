__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 16:44"

from rest_framework import serializers

from bank.models import CurrencyModel


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrencyModel
        fields = ["id", "name", "symbol"]

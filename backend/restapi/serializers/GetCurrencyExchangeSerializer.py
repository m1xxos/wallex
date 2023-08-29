__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 18:34"

from rest_framework import serializers

from bank.models import CurrencyExchangeModel

from restapi.serializers.CurrencySerializer import CurrencySerializer


class GetCurrencyExchangeSerializer(serializers.ModelSerializer):

    from_currency = CurrencySerializer(many=False, read_only=True)
    to_currency = CurrencySerializer(many=False, read_only=True)

    class Meta:
        model = CurrencyExchangeModel
        fields = ["from_currency", "to_currency", "difference", "exchange_type"]

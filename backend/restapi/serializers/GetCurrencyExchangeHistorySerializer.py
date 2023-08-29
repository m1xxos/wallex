__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 18:34"

from rest_framework import serializers

from bank.models.currency_exchange.CurrencyExchangeHistoryModel import CurrencyExchangeHistoryModel

from restapi.serializers.GetCurrencyExchangeSerializer import GetCurrencyExchangeSerializer

from restapi.serializers.BankAccountSerializer import BankAccountSerializer


class GetCurrencyExchangeHistorySerializer(serializers.ModelSerializer):
    currency_exchange = GetCurrencyExchangeSerializer(many=False, read_only=True)
    from_account = BankAccountSerializer(many=False, read_only=True)
    to_account = BankAccountSerializer(many=False, read_only=True)

    class Meta:
        model = CurrencyExchangeHistoryModel
        fields = ["id", "currency_exchange", "from_account", "to_account", "amount"]

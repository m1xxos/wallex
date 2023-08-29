__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 18:34"

from rest_framework import serializers

from bank.models.currency_exchange.CurrencyExchangeHistoryModel import CurrencyExchangeHistoryModel


class CurrencyExchangeHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrencyExchangeHistoryModel
        fields = ["id", "currency_exchange", "from_account", "to_account", "amount"]

    def create(self, validated_data: dict):
        from_account = validated_data.get("from_account")
        to_account = validated_data.get("to_account")
        currency_exchange = validated_data.get("currency_exchange")
        if from_account.currency.id == currency_exchange.from_currency.id and to_account.currency.id == currency_exchange.to_currency.id:
            amount = validated_data.get("amount") * currency_exchange.difference
            validated_data.update({"amount": amount})
            from_account.amount = from_account.amount - amount
            from_account.save()
            # to_account.amount =
            return super().create(validated_data)
        else:
            raise Exception("Не верные валюты счетов и курса")

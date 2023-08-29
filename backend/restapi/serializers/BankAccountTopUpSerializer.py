__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 20:15"

from rest_framework import serializers

from bank.models.account.BankAccountTopUpModel import BankAccountTopUpModel


class BankAccountTopUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankAccountTopUpModel
        fields = ["amount", "account"]

    def create(self, validated_data: dict):
        account = validated_data.get("account")
        amount = validated_data.get("amount")
        account.amount = account.amount + amount
        account.save()
        return super().create(validated_data)

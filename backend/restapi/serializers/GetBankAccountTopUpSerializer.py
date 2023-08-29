__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 20:15"

from rest_framework import serializers

from bank.models.account.BankAccountTopUpModel import BankAccountTopUpModel

from restapi.serializers.BankAccountSerializer import BankAccountSerializer


class GetBankAccountTopUpSerializer(serializers.ModelSerializer):
    account = BankAccountSerializer(many=False, read_only=True)

    class Meta:
        model = BankAccountTopUpModel
        fields = ["amount", "account"]

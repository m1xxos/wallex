__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 17:16"

from rest_framework import serializers

from bank.models import BankAccountCardModel


class CreateBankAccountCardSerializer(serializers.ModelSerializer):

    class Meta:
        model = BankAccountCardModel
        fields = ["payment_processor"]

    def create(self, validated_data: dict):
        return super().create(validated_data)

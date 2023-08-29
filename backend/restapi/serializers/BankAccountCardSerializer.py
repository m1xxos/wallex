__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 17:16"

from rest_framework import serializers

from bank.models import BankAccountCardModel

from restapi.serializers.BankAccountSerializer import BankAccountSerializer


class BankAccountCardSerializer(serializers.ModelSerializer):
    payment_processor = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
    )

    account = BankAccountSerializer(many=False, read_only=True)

    class Meta:
        model = BankAccountCardModel
        fields = ["number", "secure_code", "expired_at", "payment_processor", "account"]


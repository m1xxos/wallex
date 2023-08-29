__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 16:25"

from rest_framework import serializers

from bank.models import BankAccountModel


class BankAccountSerializer(serializers.ModelSerializer):

    currency = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = BankAccountModel
        fields = ["id", "name", "currency", "amount"]


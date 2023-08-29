__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 06:50"

from rest_framework import serializers

from bank.models.UserModel import UserModel


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["first_name", "last_name", "email", "password", "username"]

    def update(self, instance, validated_data: dict):

        return super().update(instance, validated_data)
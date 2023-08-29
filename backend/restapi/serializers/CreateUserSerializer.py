__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 06:50"

from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from bank.models.UserModel import UserModel


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["first_name", "last_name", "email", "password"]

    def create(self, validated_data: dict):
        username = self.__get_username(validated_data)
        validated_data.update({"username": username})
        password = validated_data.pop("password")
        validated_data.update({"password": make_password(password)})
        return super().create(validated_data)

    @staticmethod
    def __get_username(validated_data: dict) -> str:
        email: str = validated_data.get("email")
        return email.split("@")[0]

__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 05:57"

from django.contrib.auth.models import AbstractUser
from django.contrib.admin import ModelAdmin


class UserModel(AbstractUser):

    class Article(ModelAdmin):
        pass

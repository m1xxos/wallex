__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 07:10"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from restapi.serializers.UpdateUserSerializer import UpdateUserSerializer


class AuthUserController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serializer_class = UpdateUserSerializer

    # ddd
    def get(self, request: Request) -> Response:
        """
        Получение информации о пользователе
        """
        user = request.user
        return Response(data={
            "first_name": user.first_name,
            "last_name": user.last_name,
            "username": user.username,
            "email": user.email
        })

    def put(self, request: Request) -> Response:
        """
        Изменение информации о пользователе
        """
        serializer = UpdateUserSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

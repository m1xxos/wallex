__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 16:24"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from restapi.serializers.CreateBankAccountSerializer import CreateBankAccountSerializer

from bank.models.account.BankAccountModel import BankAccountModel

from restapi.serializers.BankAccountSerializer import BankAccountSerializer


class BankAccountController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serializer_class = CreateBankAccountSerializer

    def get(self, request: Request) -> Response:
        """
        Обзор счетов
        """
        return Response(BankAccountSerializer(BankAccountModel.objects.filter(user_id=request.user.id), many=True).data)

    def post(self, request: Request) -> Response:
        """
        Создание счета
        """
        serializer = CreateBankAccountSerializer(BankAccountModel(user=request.user), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

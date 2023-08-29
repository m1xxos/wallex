__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 20:57"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from bank.models import BankAccountTopUpModel, BankAccountModel
from restapi.serializers.BankAccountTopUpSerializer import BankAccountTopUpSerializer

from restapi.serializers.GetBankAccountTopUpSerializer import GetBankAccountTopUpSerializer


class BankAccountTopUpController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serializer_class = BankAccountTopUpSerializer

    def get(self, request: Request) -> Response:
        """
        История пополнения счетов
        """
        account = BankAccountModel.objects.get(user_id=request.user.id)
        if account is not None:
            return Response(GetBankAccountTopUpSerializer(BankAccountTopUpModel.objects.filter(account_id=account.id).all(), many=True).data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request: Request) -> Response:
        """
        Пополнить аккаунт
        """
        serializer = BankAccountTopUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


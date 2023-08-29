__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 18:40"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from restapi.serializers.CurrencyExchangeHistorySerializer import CurrencyExchangeHistorySerializer

from bank.models.currency_exchange.CurrencyExchangeHistoryModel import CurrencyExchangeHistoryModel

from bank.models import BankAccountModel

from restapi.serializers.GetCurrencyExchangeHistorySerializer import GetCurrencyExchangeHistorySerializer


class CurrencyExchangeController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serializer_class = CurrencyExchangeHistorySerializer

    def get(self, request: Request) -> Response:
        """
        Получить все истории обмена валют
        """
        accounts = BankAccountModel.objects.filter(user_id=request.user.id).all()
        history_models = [CurrencyExchangeHistoryModel.objects.filter(from_account_id=account.id).all() for account in accounts]
        result = []
        for item in [GetCurrencyExchangeHistorySerializer(item, many=True).data for item in history_models]:
            for sub_item in item:
                result.append(sub_item)
        return Response(result)

    def post(self, request: Request) -> Response:
        """
        Обмен валюты с счета на счет

        """
        serializer = CurrencyExchangeHistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


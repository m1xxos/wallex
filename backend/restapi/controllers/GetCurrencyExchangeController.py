__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 18:32"

from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from bank.models import CurrencyExchangeModel
from restapi.serializers.GetCurrencyExchangeSerializer import GetCurrencyExchangeSerializer


class GetCurrencyExchangeController(APIView):
    permission_classes = []
    serializer_class = GetCurrencyExchangeSerializer

    def get(self, request: Request) -> Response:
        serializer = GetCurrencyExchangeSerializer(CurrencyExchangeModel.objects.all(), many=True)
        return Response(serializer.data)

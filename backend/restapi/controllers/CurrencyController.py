__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 16:39"

from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from bank.models.CurrencyModel import CurrencyModel

from restapi.serializers.CurrencySerializer import CurrencySerializer


class CurrencyController(APIView):
    permission_classes = []
    serializer_class = CurrencySerializer

    def get(self, request: Request) -> Response:
        serializer = CurrencySerializer(CurrencyModel.objects.all(), many=True)
        return Response(serializer.data)

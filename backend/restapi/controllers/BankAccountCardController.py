__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 17:08"

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from bank.models import BankAccountCardModel
from restapi.serializers.BankAccountCardSerializer import BankAccountCardSerializer

from bank.models import BankAccountModel


class BankAccountCardController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serialized_clas = BankAccountCardSerializer

    def get(self, request: Request) -> Response:
        """
        Обзор карт
        """
        accounts = BankAccountModel.objects.filter(user_id=request.user.id)
        cards = [BankAccountCardSerializer(BankAccountCardModel.objects.filter(account_id=account.id).all(), many=True).data for account in accounts]
        return Response(cards)

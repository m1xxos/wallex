__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 17:08"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from bank.models import BankAccountCardModel

from bank.models import BankAccountModel

from restapi.serializers.CreateBankAccountCardSerializer import CreateBankAccountCardSerializer

from restapi.serializers.BankAccountCardSerializer import BankAccountCardSerializer

from restapi.controllers import BankAccountCardController


class CreateBankAccountCardController(APIView):
    authentication_classes = [SessionAuthentication, JWTAuthentication, IsAuthenticated]
    permission_classes = []
    serialized_clas = CreateBankAccountCardSerializer

    def post(self, request: Request, account_id: int) -> Response:
        """
        Создание карты
        """
        account = BankAccountModel.objects.get(id=account_id)
        if account.user.id != request.user.id:
            return Response(status=status.HTTP_403_FORBIDDEN)
        if account is not None:
            serializer = CreateBankAccountCardSerializer(BankAccountCardModel(account=account), data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(BankAccountCardController().get(request).data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 05:31"

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


from bank.models.UserModel import UserModel

from ..serializers.CreateUserSerializer import CreateUserSerializer


class UserController(APIView):
    queryset = UserModel.objects.all()
    permission_classes = []
    serializer_class = CreateUserSerializer

    def post(self, request: Request) -> Response:
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


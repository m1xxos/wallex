__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 05:28"

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from .AuthUserController import AuthUserController
from .BankAccountCardController import BankAccountCardController
from .BankAccountController import BankAccountController
from .BankAccountTopUpController import BankAccountTopUpController
from .CreateBankAccountCardController import CreateBankAccountCardController
from .CurrencyController import CurrencyController
from .CurrencyExchangeController import CurrencyExchangeController
from .GetCurrencyExchangeController import GetCurrencyExchangeController
from .UserController import UserController

urlpatterns = [
    path("user/create", UserController.as_view()),
    path("user/", AuthUserController.as_view()),
    path("bank/account/", BankAccountController.as_view()),
    path("bank/account/topup", BankAccountTopUpController.as_view()),
    path("bank/account/card", BankAccountCardController.as_view()),
    path("bank/account/<int:account_id>/card", CreateBankAccountCardController.as_view()),
    path("bank/currency/", CurrencyController.as_view()),
    path("bank/currency/exchange/info", GetCurrencyExchangeController.as_view()),
    path("bank/currency/exchange/", CurrencyExchangeController.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += [
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

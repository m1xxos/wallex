__author__ = "Николай Витальевич Никоноров (Bitnik212)"
__date__ = "29.08.2023 02:56"

from enum import Enum

from .CurrencyModel import CurrencyModel
from .PaymentProcessingModel import PaymentProcessingModel
from .UserModel import UserModel
from .account.BankAccountCardModel import BankAccountCardModel
from .account.BankAccountModel import BankAccountModel
from .account.BankAccountTopUpModel import BankAccountTopUpModel
from .currency_exchange.CurrencyExchangeHistoryModel import CurrencyExchangeHistoryModel
from .currency_exchange.CurrencyExchangeModel import CurrencyExchangeModel


class Models(Enum):
    currency = CurrencyModel
    payment = PaymentProcessingModel
    account = BankAccountModel
    account_card = BankAccountCardModel
    cex = CurrencyExchangeModel
    user = UserModel
    cexx = CurrencyExchangeHistoryModel
    topup = BankAccountTopUpModel

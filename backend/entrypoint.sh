#!/bin/bash

python ./manage.py makemigrations

python ./manage.py migrate

cat init.sql | python manage.py dbshell

python manage.py runserver 0.0.0.0:8000

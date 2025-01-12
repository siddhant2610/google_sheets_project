from django.urls import path
from . import views

urlpatterns = [
    path('', views.spreadsheet_view, name='spreadsheet'),  # Define the home view
]
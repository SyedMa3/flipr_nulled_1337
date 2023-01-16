from django.shortcuts import render
from .models import Company, StockMarket
from rest_framework import viewsets 
from .serializers import CompanySerializer, MarketSerializer
# Create your views here.


class CompanyDetailView(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'slug'


class MarketDetailView(viewsets.ModelViewSet):
    queryset = StockMarket.objects.all()
    serializer_class = MarketSerializer
    lookup_field = 'slug'

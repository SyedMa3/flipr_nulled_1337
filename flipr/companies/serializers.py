from rest_framework import serializers
from .models import Company, StockMarket, CompanyDay, MarketDay

class CompanyDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyDay
        fields = '__all__'

class MarketDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketDay
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    company_day = CompanyDaySerializer(many=True)
    class Meta:
        model=Company
        lookup_field = 'slug'
        fields = ['id', 'name', 'company_day']

class MarketSerializer(serializers.ModelSerializer):
    market_day = MarketDaySerializer(many=True)
    class Meta:
        model=StockMarket
        lookup_field = 'slug'
        fields = ['id', 'name', 'market_day']

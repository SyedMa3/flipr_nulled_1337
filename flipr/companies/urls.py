from django.urls import path
from .views import CompanyDetailView, MarketDetailView
from rest_framework import routers


router = routers.DefaultRouter()

router.register('company', CompanyDetailView, 'company')
router.register('market', MarketDetailView, 'market')
urlpatterns = router.urls
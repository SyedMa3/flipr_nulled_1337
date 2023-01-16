from django.db import models
from django.urls import reverse
from datetime import date
from django.utils.text import slugify

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(null = True, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
      return reverse('company_detail', kwargs={'slug': self.slug})

class StockMarket(models.Model):
    name = models.CharField(max_length=10)
    slug = models.SlugField(null = True, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
      return reverse('market_detail', kwargs={'slug': self.slug})



class CompanyDay(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE,
        related_name='company_day'
    )
    date = models.DateField(default=date.today)
    open = models.DecimalField(max_digits=10, decimal_places=6)
    close = models.DecimalField(max_digits=10, decimal_places=6)
    low = models.DecimalField(max_digits=10, decimal_places=6)
    high = models.DecimalField(max_digits=10, decimal_places=6)
    adj_close = models.DecimalField(max_digits=10, decimal_places=6)
    volume = models.PositiveBigIntegerField()

    def __str__(self):
        return f'{self.company}, {str(self.date)}'

    class Meta:
        ordering = ['company', 'date']

class MarketDay(models.Model):
    market = models.ForeignKey(
        StockMarket, on_delete=models.CASCADE,
        related_name='market_day'
    )
    date = models.DateField(default=date.today)
    open = models.DecimalField(max_digits=10, decimal_places=6)
    close = models.DecimalField(max_digits=10, decimal_places=6)
    low = models.DecimalField(max_digits=10, decimal_places=6)
    high = models.DecimalField(max_digits=10, decimal_places=6)
    adj_close = models.DecimalField(max_digits=10, decimal_places=6)
    volume = models.PositiveBigIntegerField()

    def __str__(self):
        return f'{self.market}, {str(self.date)}'

    class Meta:
        ordering = ['market', 'date']


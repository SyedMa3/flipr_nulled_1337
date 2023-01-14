from django.db import models
from datetime import date

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)

class BusinessDay(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE
    )
    date = models.DateField(default=date.today)
    open = models.DecimalField(max_digits=10, decimal_places=6)
    close = models.DecimalField(max_digits=10, decimal_places=6)
    low = models.DecimalField(max_digits=10, decimal_places=6)
    high = models.DecimalField(max_digits=10, decimal_places=6)
    adj_close = models.DecimalField(max_digits=10, decimal_places=6)
    volume = models.PositiveBigIntegerField()

    def __str__(self):
        return str(self.date)

    class Meta:
        ordering = ['company', 'date']


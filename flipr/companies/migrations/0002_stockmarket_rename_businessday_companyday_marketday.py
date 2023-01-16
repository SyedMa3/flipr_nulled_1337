# Generated by Django 4.1.5 on 2023-01-15 10:14

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='StockMarket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
            ],
        ),
        migrations.RenameModel(
            old_name='BusinessDay',
            new_name='CompanyDay',
        ),
        migrations.CreateModel(
            name='MarketDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today)),
                ('open', models.DecimalField(decimal_places=6, max_digits=10)),
                ('close', models.DecimalField(decimal_places=6, max_digits=10)),
                ('low', models.DecimalField(decimal_places=6, max_digits=10)),
                ('high', models.DecimalField(decimal_places=6, max_digits=10)),
                ('adj_close', models.DecimalField(decimal_places=6, max_digits=10)),
                ('volume', models.PositiveBigIntegerField()),
                ('market', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='companies.stockmarket')),
            ],
            options={
                'ordering': ['market', 'date'],
            },
        ),
    ]
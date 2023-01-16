from companies.models import Company, CompanyDay, StockMarket, MarketDay
import csv
from django.core.management import BaseCommand


ALREDY_LOADED_ERROR_MESSAGE = """
If you need to reload the child data from the CSV file,
first delete the db.sqlite3 file to destroy the database.
Then, run `python manage.py migrate` for a new empty
database with tables"""


class Command(BaseCommand):
    # Show this when the user types help
    help = "Loads data from csv"

    def handle(self, *args, **options):
        
        BASE = '../assets/Data/'

        companyNames = [
            'ASHOKLEY.NS.csv',
            'CIPLA.NS.csv',
            'RELIANCE.NS.csv',
            'TATASTEEL.NS.csv',
            'EICHERMOT.NS.csv',
            ]

        marketNames = [
            'BSE.NS.csv',
            'NSE.V.csv'
        ]

        for i in companyNames:
            temp = i
            i = BASE + i
            with open(i) as f:
                c, created = Company.objects.get_or_create(
                    name = temp
                )
                reader = csv.reader(f)
                next(reader, None)
                for row in reader:
                    _, created = CompanyDay.objects.get_or_create(
                        company = c,
                        date = row[0],
                        open = row[1],
                        high = row[2],
                        low = row[3],
                        close = row[4],
                        adj_close = row[5],
                        volume = row[6]
                    )
        print("===========================\n\n")
        for i in marketNames:
            temp = i
            i = BASE + i
            with open(i) as f:
                c, created = StockMarket.objects.get_or_create(
                    name = temp
                )
                reader = csv.reader(f)
                next(reader, None)
                for row in reader:
                    if "null" in row:
                        continue
                    _, created = MarketDay.objects.get_or_create(
                        market = c,
                        date = row[0],
                        open = row[1],
                        high = row[2],
                        low = row[3],
                        close = row[4],
                        adj_close = row[5],
                        volume = row[6]
                    )

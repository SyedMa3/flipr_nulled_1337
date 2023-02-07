# flipr_nulled_1337

Website Link - https://luminous-gnome-4d411a.netlify.app

## Setup

### Backend

Do this only once, while you are in the folder `flipr_nulled_1337/flipr`

```bash
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```

> This is only for linux.

You have to activate venv everytime you open a shell.

```bash
source venv/bin/activate
```

To start the server:

```bash
python manage.py runserver
```

### Frontend

## Database Design

- Company
  - Name
  - CompanyDay(One to Many relationship)

- StockMarket
  - Name
  - MarketDay(One to Many relationship)

- CompanyDay
  - Date
  - Open
  - Close
  - Low
  - High
  - Adj Close
  - Volume
  - Company(Many to One relationship)

- MarketDay
  - Date
  - Open
  - Close
  - Low
  - High
  - Adj Close
  - Volume
  - StockMarket(Many to One relationship)

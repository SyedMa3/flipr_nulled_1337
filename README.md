# flipr_nulled_1337

## Setup

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

### Superuser creds

```bash
python manage.py createsuperuser
email: admin@admin.com
password: admin
```

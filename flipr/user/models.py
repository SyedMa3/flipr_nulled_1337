from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail
from django.shortcuts import redirect
from django.contrib import messages

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "localhost:8000{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Flipr Hackathon Team - nulled_1337"),
        # message:
        email_plaintext_message,
        # from:
        "nulled.1337.flipr@gmail.com",
        # to:
        [reset_password_token.user.email],
        fail_silently=False
    )
    
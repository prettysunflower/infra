DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "ourfigurecollection",
        "USER": "ourfigurecollection",
        "PASSWORD": "xxHWl#d$FoYZ54",
        "HOST": "100.85.208.69",
        "PORT": "5432",
    }
}

import sentry_sdk

ALLOWED_HOSTS = ["ourfigurecollection.moe"]
DEBUG = False
KAKIGOORI_API_KEY = "63586938-dd4b-4e01-a48a-6344e0bc226b"
OIDC_CLIENT_ID = "749bcfb1-ee32-4c79-85b5-92062d7192b3"
OIDC_CLIENT_SECRET = "dEhOJ6pvfy3d95Cx7kMq0SHBEgb6romd"
OIDC_DISCOVERY_URL = "https://auth.remilia.ch/.well-known/openid-configuration"

sentry_sdk.init(
    dsn="https://62638433153873bc2395021d22e96972@o134957.ingest.us.sentry.io/4508270934360064",
    # Add data like request headers and IP for users;
    # see https://docs.sentry.io/platforms/python/data-management/data-collected/ for more info
    send_default_pii=True,
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for tracing.
    traces_sample_rate=1.0,
    # To collect profiles for all profile sessions,
    # set `profile_session_sample_rate` to 1.0.
    profile_session_sample_rate=1.0,
    # Profiles will be automatically collected while
    # there is an active span.
    profile_lifecycle="trace",
)
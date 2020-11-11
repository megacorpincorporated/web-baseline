from django.urls import path
from backend.device.views import ListDevices 

urlpatterns = [
    path("", ListDevices.as_view())
]
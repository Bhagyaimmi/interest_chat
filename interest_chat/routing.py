from django.urls import re_path
from msg.consumers import ChatConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/', ChatConsumer.as_asgi()),
]
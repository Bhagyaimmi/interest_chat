from django.shortcuts import render
from rest_framework import viewsets
from msg.models import Interest, Message
from .serializers import InterestSerializer, MessageSerializer

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

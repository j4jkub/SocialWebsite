from django.shortcuts import render
from django_filters import rest_framework as django_filters
from .models import UserProfile
from .filters import UserFilter
from .serializers import UserProfileSerializer, UserSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

# Create your views here.
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    pagination_class = None
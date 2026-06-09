
from .models import Follow, UserProfile
from rest_framework import serializers
from django.contrib.auth.models import User

#TODO add follow count to serializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'bio', 'profile_picture']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower', 'following']
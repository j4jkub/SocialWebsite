
from .models import Follow, UserProfile
from rest_framework import serializers
from django.contrib.auth.models import User


#TODO add follow count to serializer

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'profile_picture']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower', 'following']
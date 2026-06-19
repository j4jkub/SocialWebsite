
from .models import Follow, UserProfile
from rest_framework import serializers
from django.contrib.auth.models import User


class UserProfileSerializer(serializers.ModelSerializer):
    # user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['bio', 'profile_picture']

class UserSerializer(serializers.ModelSerializer):
    # user_profile = serializers.RelatedField('UserProfile_set')
    user_profile = UserProfileSerializer()
    class Meta:
        model = User
        fields = ['id', 'username', 'user_profile']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower', 'following']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email","password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )

        UserProfile.objects.create(user=user)

        return user
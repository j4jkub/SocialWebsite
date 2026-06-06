from django.contrib import admin
from django.urls import include, path
from posts.views import PostViewSet, CommentViewSet
from user.views import UserProfileSerializer
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'user', UserProfileSerializer)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]

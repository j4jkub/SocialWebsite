from django.contrib import admin
from django.urls import include, path
from posts.views import PostViewSet, CommentViewSet
from user.views import UserProfileViewSet
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'user', UserProfileViewSet, basename='UserProfile')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


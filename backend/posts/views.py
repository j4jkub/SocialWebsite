from django.shortcuts import render
from django_filters import rest_framework as django_filters
from .filters import CommentFilter, PostFilter
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.views import APIView

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.objects.all()
    filter_backends = (django_filters.DjangoFilterBackend,)
    filterset_class = PostFilter
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = (django_filters.DjangoFilterBackend,)
    filterset_class = CommentFilter
    Comment.objects.order_by('created_at')

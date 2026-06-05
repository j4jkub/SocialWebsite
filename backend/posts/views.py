from django.shortcuts import render
from django_filters import rest_framework as django_filters
from .filters import CommentFilter
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework import viewsets

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = (django_filters.DjangoFilterBackend,)
    filterset_class = CommentFilter
    Comment.objects.order_by('created_at')
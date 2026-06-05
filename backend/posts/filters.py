from django_filters import rest_framework as django_filters
from .models import Comment

class CommentFilter(django_filters.FilterSet):
    post_id = django_filters.NumberFilter(field_name='post__id')
    author = django_filters.NumberFilter(field_name='author')

    class Meta:
        model = Comment
        fields = ['post_id', 'author']
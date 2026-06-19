from django_filters import rest_framework as django_filters
from .models import UserProfile

class UserFilter(django_filters.FilterSet):
    id = django_filters.NumberFilter(field_name='user')

    class Meta:
        model = UserProfile
        fields = ['id']
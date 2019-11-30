#This file specifies the fields from the Todo model that we want to be converted into a JSON file for the front-end to take care of

from rest_framework import serializers #may have to import from Todo instead
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
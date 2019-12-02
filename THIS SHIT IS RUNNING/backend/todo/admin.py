from django.contrib import admin
from .models import Todo #imports the created Todo class in "models.py" to be used here 

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(Todo, TodoAdmin)
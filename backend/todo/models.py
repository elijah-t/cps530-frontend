from django.db import models

# Create your models here.
class Todo(models.Model): #creates 3 properties to the Todo model (Title / Description of todo elem I THINK / completed(yes ir no))
    title = models.CharField(max_length=128)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
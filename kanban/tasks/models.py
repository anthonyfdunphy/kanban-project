from django.db import models
from django.contrib.auth.models import User

# Create your models here.

STATUS = (
    (0,"To-Do"),
    (1,"In-Progress"),
    (2,"Complete")
)

class Tasks(models.Model):
    task = models.CharField(max_length=300, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    status = models.IntegerField(choices=STATUS, default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Task"
    
    def __str__(self):
        return self.task


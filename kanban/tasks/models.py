from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Tasks(models.Model):
    task = models.CharField(max_length=300, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    status_choices = [
        ('to-do', 'to-do'),
        ('in-progress', 'in-progres'),
        ('done', 'done'),
    ]
    status = models.CharField(choices=status_choices, default='to-do', max_length=12)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Task"
    
    def __str__(self):
        return self.task


from django.contrib import admin
from .models import Tasks

# Register your models here.

class TaskAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "status"]

admin.site.register(Tasks, TaskAdmin)

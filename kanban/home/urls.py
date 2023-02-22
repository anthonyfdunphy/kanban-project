from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('update-task-status', views.update_task_status, name='update_task_status'),
]

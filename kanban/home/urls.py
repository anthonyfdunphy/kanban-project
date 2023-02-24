from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('update_task_status/<int:task_id>/', views.update_task_status, name='update_task_status'),
]

from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from tasks.models import Tasks
from django.http import JsonResponse

def index(request):
    tasks_todo = Tasks.objects.filter(status=0)
    tasks_inprog = Tasks.objects.filter(status=1)
    tasks_done = Tasks.objects.filter(status=2)

    todo_list = [{'task': task.task, 'content': task.content, 'id': task.status} for task in tasks_todo]
    inprog_list = [{'task': task.task, 'content': task.content, 'id': task.status} for task in tasks_inprog]
    done_list = [{'task': task.task, 'content': task.content, 'id': task.status} for task in tasks_done]

    context = {
        'todo_list': todo_list,
        'inprog_list': inprog_list,
        'done_list': done_list,
    }

    return render(request, 'home/index.html', context)

def update_task_status(request, task_id):

    # Get the Task object with the given task_id from the database
    task = get_object_or_404(Task, pk=task_id)

    if request.method == 'POST':
        # Get the new id value from the form data
        new_id = request.POST.get('new_id')
        print('new_id')

        return redirect('home')


from django.shortcuts import render
from django.shortcuts import render, get_object_or_404, redirect
from tasks.models import Tasks

# Create your views here.


def index(request):
    tasks_todo = Tasks.objects.filter(status=0)
    tasks_inprog = Tasks.objects.filter(status=1)
    tasks_done = Tasks.objects.filter(status=2)

    todo_list = [{'task': task.task, 'content': task.content} for task in tasks_todo]
    inprog_list = [{'task': task.task, 'content': task.content} for task in tasks_inprog]
    done_list = [{'task': task.task, 'content': task.content} for task in tasks_done]

    context = {
        'todo_list': todo_list,
        'inprog_list': inprog_list,
        'done_list': done_list,
    }

    return render(request, 'home/index.html', context)


def update_task_status(request, task_id):
    task = get_object_or_404(Tasks, id=task_id)
    status = request.POST.get('status', None)
    if status is not None:
        task.status = status
        task.save()
    return redirect('my_task_list_url')
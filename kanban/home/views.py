from django.shortcuts import render
from tasks.models import Tasks

# Create your views here.

def index(request):
    tasks = Tasks.objects.all()
    cards = []
    for task in tasks:
        card = {
            'title': task.title,
            'content': task.content,
        }
        cards.append(card)
    context = {'cards': cards}

    return render(request, 'home/index.html', context)

# Generated by Django 3.2.18 on 2023-02-21 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0010_alter_tasks_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='status',
            field=models.IntegerField(choices=[(0, 'To-Do'), (1, 'In-Progress'), (2, 'Finsihed')], default=0),
        ),
    ]

# Generated by Django 3.2.18 on 2023-02-21 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_auto_20230221_1555'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tasks',
            old_name='title',
            new_name='task',
        ),
        migrations.AlterField(
            model_name='tasks',
            name='status',
            field=models.IntegerField(choices=[(0, 'To-Do'), (1, 'In Progress'), (2, 'Done')], default=0),
        ),
    ]

# Generated by Django 3.2.18 on 2023-02-21 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_auto_20230221_1938'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='status',
            field=models.IntegerField(choices=[('to-do', 'To do'), ('in-progress', 'In progress'), ('done', 'Done')], default='to-do'),
        ),
    ]

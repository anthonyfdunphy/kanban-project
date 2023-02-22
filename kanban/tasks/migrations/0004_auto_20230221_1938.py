# Generated by Django 3.2.18 on 2023-02-21 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_auto_20230221_1930'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='completed_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='status',
            field=models.IntegerField(choices=[('to-do', 'To do'), ('in-progress', 'In progress'), ('done', 'Done')], default='to-do', max_length=12),
        ),
    ]
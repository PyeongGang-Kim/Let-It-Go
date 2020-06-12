# Generated by Django 3.0.6 on 2020-06-12 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200612_2011'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='legoset',
            name='sub_set',
        ),
        migrations.CreateModel(
            name='SubSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('legoset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parent_set', to='api.LegoSet')),
                ('subset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.LegoSet')),
            ],
        ),
    ]

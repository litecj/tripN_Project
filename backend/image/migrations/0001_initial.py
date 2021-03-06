# Generated by Django 3.2.5 on 2022-01-04 03:29

from django.db import migrations, models
import django.db.models.deletion
import django_mysql.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.TextField()),
                ('category', models.TextField()),
            ],
            options={
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('url', django_mysql.models.ListTextField(models.CharField(max_length=255), size=6)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'image',
            },
        ),
    ]

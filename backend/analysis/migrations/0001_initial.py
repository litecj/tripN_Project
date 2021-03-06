# Generated by Django 3.2.5 on 2022-01-04 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AnalysisVisitor',
            fields=[
                ('month', models.DateField(primary_key=True, serialize=False)),
                ('local', models.IntegerField(null=True)),
                ('foreigner', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='VisitorNumber',
            fields=[
                ('month', models.DateField(primary_key=True, serialize=False)),
                ('local', models.IntegerField()),
                ('foreigner', models.IntegerField()),
            ],
        ),
    ]

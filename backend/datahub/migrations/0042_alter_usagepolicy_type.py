# Generated by Django 4.1.5 on 2023-08-11 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datahub', '0041_usagepolicy_api_key_usagepolicy_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usagepolicy',
            name='type',
            field=models.CharField(choices=[('dataset_file', 'dataset_file'), ('api', 'api')], default='dataset_file', max_length=20, null=True),
        ),
    ]

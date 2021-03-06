import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api.settings")

import django
django.setup()
from datetime import datetime

import csv
import sys
from common.models import ValueObject, Reader, Printer
from person.models import Person

# system setup
#
# SET FOREIGN_KEY_CHECKS = 0;

from image.models import Category, Image

from icecream import ic

from sphinx.util import requests
import json

class DbUploader():
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = 'person/data/'
        vo.fname = 'persons.csv'
        # vo.fname = 'person.csv'
        self.csvfile = reader.new_file(vo)


    def insert_data(self):
        print('############ 2 ##########')
        self.insert_category_person()
        print('############ 3 ##########')
        # self.insert_table_user()
        print('############ 4 ##########')
        # self.insert_test()
        print('############ 5 ##########')
        # self.insert_jeju()
        print('############ ok ##########')

    def insert_category_person(self):
        with open(self.csvfile, newline='', encoding='utf8') as f:
            data_reader = csv.DictReader(f)
            for row in data_reader:
                ic(row)
                c = Category()
                category = Category.objects.all().filter(category='person').values()[0]
                c.id = category['id']

                # if row['gender'] == '여':
                #     True
                # if not row['gender'] == '여':
                #     False

                # if not Person.objects.filter(type=row['category']).exists():  # 동일한 값 있으면 넘어가
                a = Person.objects.create(age=row['age'],
                                          # gender=row['gender'],
                                          gender= True if row['gender'] == 'woman' else False,
                                          mbti=row['mbti'],
                                          category=c)
                print(f' 1 >>>> {a}')
        print('Person DATA UPLOADED SUCCESSFULY!')

    # def insert_table_user(self):
    #     with open(self.csvfile, newline='', encoding='utf8') as f:
    #         data_reader = csv.DictReader(f)
    #         for row in data_reader:
    #             c = Category()
    #             category = Category.objects.all().filter(category='person').values()[0]
    #             c.id = category['id']
    #
    #             cp = Person()
    #             today = datetime.now()
    #             brith = datetime.strptime(row['birth'], '%Y-%m-%d')
    #             age = today.year-brith.year
    #             age = f'{str(int(age/10))}0'
    #             # print(age)
    #             categoryP = Person.objects.all().filter(mbti=row['mbti'],
    #                                                    gender=True if row['gender'] == '여' else False,
    #                                                    age=age).values()[0]
    #             cp.id = categoryP['id']
    #             i = Image()
    #             image = Image.objects.all().filter(name=row['gender']).values()[0]
    #             i.id = image['id']
    #
    #             # if not User.objects.filter(name=row['name']).exists():  # 동일한 값 있으면 넘어가
    #
    #             #         person = User.objects.create(username=row['username'],
    #             #                                    password=row['password'],
    #             #                                    name=row['name'],
    #             #                                   email=row['email'],
    #             #                                    birth=row['birth'],
    #             #                                    gender=row['gender'],
    #             #                                    mbti=row['mbti'],
    #             #                                    mbti_list=row['mbti_list'],
    #             #                                    card_number=row['card_number'],
    #             #                                    card_company=row['card_company'],
    #             #                                    person_category=cp,
    #             #                                    category=c,
    #             #                                    image=i,)
    #             #         print(f' 1 >>>> {person}')
    #     print('User DATA UPLOADED SUCCESSFULY!')
    #
    # def insert_test(self):
    #     with open('person/data/sorry.csv', newline='', encoding='utf8') as f:
    #         data_reader = csv.DictReader(f)
    #         for row in data_reader:
    #             a = Pay.objects.create(re_id=row['te_id'],
    #                                    reg_date=row['reg_date'],
    #                                    user=row['person'],
    #                                    day=row['day'],
    #                                    people=row['people'],
    #                                    plane=row['plane'],
    #                                    acc=row['acc'],
    #                                    activity=row['activity'])
    #             print(f' 1 >>>> {a}')
    #     print('Person DATA UPLOADED SUCCESSFULY!')

from flask_restful import reqparse

create_task_parser = reqparse.RequestParser()
create_task_parser.add_argument('email', type=str, required=True, help="Email is empty!")
create_task_parser.add_argument('task_id', type=str, required=True, help="Task id is empty!")
create_task_parser.add_argument('task_code', type=str, required=True, help="Task code is empty!")
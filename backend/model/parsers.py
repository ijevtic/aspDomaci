from flask_restful import reqparse

create_user_parser = reqparse.RequestParser()
create_user_parser.add_argument('email', type=str, required=True, help="Email is empty!")
create_user_parser.add_argument('first_name', type=str, required=True, help="First name is empty!")
create_user_parser.add_argument('last_name', type=str, required=True, help="Last name is empty!")

create_task_parser = reqparse.RequestParser()
create_task_parser.add_argument('email', type=str, required=True, help="Email is empty!")
create_task_parser.add_argument('task_id', type=str, required=True, help="Task id is empty!")
create_task_parser.add_argument('task_code', type=str, required=True, help="Task code is empty!")
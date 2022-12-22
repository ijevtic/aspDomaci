from google.oauth2 import id_token
from google.auth.transport import requests
from dotenv import load_dotenv
import os

def check_token(token):
  if token is None:
    return False
  
  load_dotenv()
  try:
      idinfo = id_token.verify_oauth2_token(token, requests.Request(), os.getenv('GOOGLE_AUTH_CLIENT_ID'))
      userid = idinfo['sub']
      return True
  except ValueError:
      return False

from google.oauth2 import id_token
from google.auth.transport import requests
from dotenv import load_dotenv
from constants import AUTH
import os

def auth_check(email, token):
  
  if not AUTH:
    return True

  token_email = check_token(token)
  if email is None or token_email is None or email != token_email:
    return False
  return True

def check_token(token):
  if not AUTH:
    return "mtrajkovic320rn@raf.rs"
  if token is None:
    return None

  load_dotenv()
  try:
      idinfo = id_token.verify_oauth2_token(token, requests.Request(), os.getenv('GOOGLE_AUTH_CLIENT_ID'))
      print(idinfo)
      return idinfo['email']
  except ValueError:
      return None

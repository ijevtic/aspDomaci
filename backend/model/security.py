from constants import AUTH
import requests

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

  URL='https://oauth2.googleapis.com/tokeninfo?id_token=' + token

  r = requests.get(url = URL)
  data = r.json()

  if 'error' in data:
    return None
  else:
    return data['email']

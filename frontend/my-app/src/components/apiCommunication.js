async function postTask (token, email, task_id, task_code) {
  if(task_code === ""){
    alert("Prazan kod!")
    return null;
  }
  let res = await fetch(process.env.REACT_APP_SERVER_URL+'/tasks', {
    'method': 'POST',
    // 'mode': 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({
      "email": email,
      "task_id": task_id,
      "task_code": task_code
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error));
  return res;
}

const fetchTasks = async (url, argument=null, parameters=null, token=null) => {
  console.log(token)
  if(argument != null) {
    url = url + "/" + argument;
  }
  if (parameters != null) {
    console.log(parameters)
    for(let i = 0; i < parameters.length; i++)
      url = url + "?" + parameters[i].name + "=" + parameters[i].value;
  }
  let data = await fetch(url, {
    'method': 'GET',
    // 'mode': 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  }).then(res => res.json()).catch(error => console.error('Error:', error));
  return data;
}

const createUser = async (url, token) => {
  let data = await fetch(url, {
    'method': 'POST',
    // 'mode': 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  }).then(res => res.json()).catch(error => console.error('Error:', error));
  return data;
}

export {
  postTask,
  fetchTasks,
  createUser
}
document.getElementById('login').onsubmit = () => {
  let validation = validate();

  if (validation !== true) {
    alert(validation)
  } else {
    alert('Login success!');
    return true
  }

  return false;
};

const validate = () => {
  let username = document.getElementById('inputUsername').value;
  let password = document.getElementById('inputPassword').value;

  if (username === '') {
    return 'Username is required'
  }
  if (username.length > 15) {
    return 'Username exceeds max character length (15)'
  }
  if (/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(username)) {
    return 'Special characters are not allowed'
  }

  if (password === '') {
    return 'Password is required'
  }
  if (password.length < 10) {
    return 'Password does not meet minimum character length (10)'
  }

  let i = 0;
  let hasUppercase = false;
  let hasDigit = false;
  let hasSpace = false;
  while (i++ <= password.length) {
    let char = password.charAt(i);
    if (char.toLowerCase() !== char) {
      hasUppercase = true;
    }
    if (!isNaN(char)) {
      hasDigit = true;
    }
    if (char === ' ') {
      hasSpace = true;
    }
  }
  if (!hasUppercase) {
    return 'Password must have at least 1 uppercase'
  }
  if (!hasDigit) {
    return 'Password must have at least 1 digit'
  }
  if (hasSpace) {
    return 'Password cannot have spaces'
  }

  return true
};
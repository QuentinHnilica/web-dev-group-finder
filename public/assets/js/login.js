const loginFormHandler = async (event) => {
  event.preventDefault();
  const userName = document.querySelector('#user-id').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (userName && password) {

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in!');
    };
  };
};
  
document
  .querySelector('.login_form')
  .addEventListener('submit', loginFormHandler);
  

  const signup = document.getElementById('signUp')

function signUpRoute(){
  window.location.href = '/signUp'
}


  signup.addEventListener('click', signUpRoute)
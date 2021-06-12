
async function signupFormHandler(event) {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const company = document.querySelector('#company-signup').value.trim();
    const abn = document.querySelector('#abn-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstname && lastname && email && password && company && abn && address && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                phone,
                company,
                abn,
                address,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
  
  
            document.location.replace('/yourDetails');
  
        } else {
            alert(response.statusText);
        }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  
  
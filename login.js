async function login() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email && password) {
    try {
      const response = await fetch('https://admin-dashboard-json-live-t4sd.vercel.app/Registration');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const userData =await data.find(user => user.email === email && user.password === password);
      if (userData) {
        localStorage.setItem('logininfo', JSON.stringify(userData));
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home.html
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      alert(`Error logging in: ${error.message}`);
    }
  } else {
    alert('Please enter both email and password');
  }

  return false; // Prevent form submission
}
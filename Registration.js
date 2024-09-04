const registration = async () => {
  // Get the values from the HTML form elements
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let img = document.querySelector("#img").value;
  let mobile = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  // Basic validation
  if (password !== cpassword) {
    alert("Error: Passwords do not match");
    return;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    alert("Error: Invalid email address");
    return;
  }

  // Create a JavaScript object to hold the user data
  let userData = {
    name,
    email,
    img,
    mobile,
    password,
    cpassword,
  };

  // Define the URL and method for the API request
  let url = "https://admin-dashboard-json-live-t4sd.vercel.app/Registration";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
fetch(url, options);
  try {
    
    alert("Registration successful!");
    window.location.href = "index.html"; // Redirect to index.html
  } catch (error) {
    alert("Error registering user: " + error.message);
  }
};

function loginredirect() {
  window.location.href = "index.html";
}
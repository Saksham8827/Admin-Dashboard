const run = async () => {
  // Get the values from the HTML form elements
  let pname = document.querySelector("#pname").value;
  let pprice = document.querySelector("#pprice").value;
  let pimage = document.querySelector("#pimage").value;
  let pbrand = document.querySelector("#pbrand").value;
  let preview = document.querySelector("#preview").value;
  let prating = document.querySelector("#prating").value;

  // Create a JavaScript object to hold the product data
  let product_data = {
    product_name: pname,
    product_price: pprice,
    product_image: pimage,
    product_brand: pbrand,
    product_review: preview,
    product_rating: prating,
  };

  // Define the URL and method for the API request
  let url = "https://admin-dashboard-json-live-t4sd.vercel.app/Product";
  let method = {
    method: "POST", // Send a POST request to create a new product
    headers: {
      "Content-Type": "application/json", // Specify the request body format as JSON
    },
    body: JSON.stringify(product_data), // Convert the product data to a JSON string
  };

  // Send the request to the API using the fetch API
  try {
    const response = await fetch(url, method);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Log the response data
    } else {
      console.error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error); // Log any errors
  }

  // Get the element with the id "website" and remove any filter effects
  let select = document.querySelector("#product_form");
  select.style.display = "none";

  // Hide the close button
  let closebtn = document.querySelector("#close");
  closebtn.style.display = "none";

  // Remove the blur filter from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";

  // Prevent the default form submission behavior
  return false;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to show the product form
const show_form = () => {
  // Clear the values of the form fields
  document.querySelector("#pname").value = "";
  document.querySelector("#pprice").value = "";
  document.querySelector("#pimage").value = "";
  document.querySelector("#pbrand").value = "";
  document.querySelector("#preview").value = "";
  document.querySelector("#prating").value = "";

  // Get the product form element and show it
  let select = document.querySelector("#product_form");
  select.style.display = "block";
  select.style.marginTop = "50px";

  // Get the website background element and apply a blur filter
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "blur(5px)";

  // Show the close button, add button, and hide the update button
  let selectclose = document.querySelector("#close");
  selectclose.style.display = "block";
  let selectadd = document.querySelector("#addbutton");
  selectadd.style.display = "block";
  let selectupdate = document.querySelector("#updatebutton");
  selectupdate.style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to close the product form
const Close = () => {
  // Get the product form element and hide it
  let select = document.querySelector("#product_form");
  select.style.display = "none";

  // Hide the close button
  let closebtn = document.querySelector("#close");
  closebtn.style.display = "none";

  // Remove the blur filter from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//IIFE
//function for product data show in table form
// Immediately Invoked Function Expression (IIFE) to fetch and display product data
// (async function () {
//   // Define the URL for the API endpoint to fetch product data
//   let url = "https://admin-dashboard-json-live-t4sd.vercel.app/Product";

//   // Use the fetch API to send a GET request to the API endpoint
//   let data = await fetch(url);

//   // Parse the response data as JSON
//   let response = await data.json();

//   // Log the response data to the console for debugging purposes
//   console.log(response);

//   // Get the HTML element to display the product data
//   let showProductDataElement = document.querySelector("#showproductdata");

//   // Use the map() method to create an array of HTML table rows for each product
//   let productRows = response.map((product) => {
//     // Create a table row for each product with the product details
//     return `
//       <tr>
//         <td>${product.product_name}</td>
//         <td>${product.product_price}</td>
//         <td><img width="70px" src="${product.product_image}"></td>
//         <td>${product.product_brand}</td>
//         <td>${product.product_review}</td>
//         <td>${product.product_rating}</td>
//         <td onclick="del('${product.id}')"><i class="fa-solid fa-trash"></i></td>
//         <td onclick="upd('${product.id}')"> <i class="fa-solid fa-pen"></i></td>
//       </tr>
//     `;
//   });

//   // Join the array of table rows into a single string
//   let productTableHtml = productRows.join(" ");

//   // Set the innerHTML of the showProductDataElement to the product table HTML
//   showProductDataElement = document.querySelector("#showproductdata");
//   showProductDataElement.innerHTML = await productTableHtml;
// })();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to delete a product by ID
function del(arg) {
  // Construct the URL for the API endpoint to delete a product
  // The ${arg} is replaced with the actual product ID passed as an argument
  let url = `https://admin-dashboard-json-live-t4sd.vercel.app/Product/${arg}`;

  // Define the request method as DELETE
  let method = {
    method: "DELETE",
  };

  // Use the fetch API to send a DELETE request to the API endpoint
  fetch(url, method);

  // Log the product ID to the console for debugging purposes
  console.log(arg);
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// update function start
let storeid = null;

// Async function to update a product by ID
async function upd(arg) {
  // Store the product ID in a global variable
  storeid = arg;

  // Fetch the product data from the API endpoint
  try {
    const response = await fetch(`https://admin-dashboard-json-live-t4sd.vercel.app/Product/${arg}`);
    const data = await response.json();
    console.log(data);

    // Show the update form and hide the add button
    let selectclose = document.querySelector("#close");
    selectclose.style.display = "block";
    let selectadd = document.querySelector("#addbutton");
    selectadd.style.display = "none";
    let selectupdate = document.querySelector("#updatebutton");
    selectupdate.style.display = "block";
    let selectbg = document.querySelector("#website");
    selectbg.style.filter = "blur(5px)";

    // Show the product form and populate it with the product data
    let select = document.querySelector("#product_form");
    select.style.marginTop = "50px";
    select.style.display = "block";
    document.querySelector("#pname").value = data.product_name;
    document.querySelector("#pprice").value = data.product_price;
    document.querySelector("#pimage").value = data.product_image;
    document.querySelector("#pbrand").value = data.product_brand;
    document.querySelector("#preview").value = data.product_review;
    document.querySelector("#prating").value = data.product_rating;
  } catch (error) {
    console.error(error);
  }
}

const updateproduct = async () => {
  // Get the updated product data from the form
  let product_name = document.querySelector("#pname").value;
  let product_price = document.querySelector("#pprice").value;
  let product_image = document.querySelector("#pimage").value;
  let product_brand = document.querySelector("#pbrand").value;
  let product_review = document.querySelector("#preview").value;
  let product_rating = document.querySelector("#prating").value;

  // Create a new product object with the updated data
  let product = {
    product_name: product_name,
    product_price: product_price,
    product_image: product_image,
    product_brand: product_brand,
    product_review: product_review,
    product_rating: product_rating,
  };

  console.log(product);

  // Construct the URL for the API endpoint to update the product
  let url = `https://admin-dashboard-json-live-t4sd.vercel.app/Product/${storeid}`;

  // Define the request method as PUT and set the request body to the updated product data
  let method = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  };
  fetch(url, method)
  // Send the update request to the API endpoint
  try {
    if (response.ok) {
      console.log("Product updated successfully!");
    } else {
      console.error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }

  // Remove the blur effect from the website background
  let select = document.querySelector("#product_form");
  select.style.display = "none";

  // Hide the close button
  let closebtn = document.querySelector("#close");
  closebtn.style.display = "none";

  // Remove the blur filter from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";

  // Prevent the default form submission behavior
  return false;
};

// update function end


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// login page redirect function
function loginredirect() {
  document.location.href = "index.html";
}

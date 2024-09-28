var password = prompt("Please enter your password:");

  if (password === null || password === "") {
    alert("Password field cannot be empty.");
  } else {
    // Here you can add your logic for validating the password
    alert("You entered: " + password);
  }
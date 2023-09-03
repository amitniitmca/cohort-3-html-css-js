function verifyLogin() {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let username = usernameInput.value;
    let password = passwordInput.value;
    if (username === "Yoll" && password === "Yoll") {
      console.log("Logged in Successfully");
    } else {
      console.log("Sorry, Wrong Id and Password");
    }
}
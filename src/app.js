var userName = "test";
var password = "test";

function login(form) {
  if (form.username.value == "test" && form.password.value == "test") {
    self.location.href = "policy.html";
  } else {
    alert("Wrong username or password");
    return false;
  }
}

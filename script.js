const btnEl = document.getElementById("btn");
let emailEl = document.querySelector("#email-el");
let alertEl = document.querySelector(".alert");
let errorEl = document.querySelector("#error");

btnEl.addEventListener("click", function () {
  alertEl.innerHTML = "";
  emailEl.style.borderColor = 'hsla(0, 36%, 70%, 0.4)'
  ValidateEmail(emailEl.value);
  if (ValidateEmail(emailEl) === true) {
      errorEl.innerHTML=""
      alertEl.innerHTML += `<p>Thank You! You will be notified soon!</p>`;
      emailEl.value=""
    } else {
        alertEl.innerHTML += `<p style='color: red;'>Please provide a valid mail</p>`;
        errorEl.innerHTML += `<img src="./images/icon-error.svg" alt="error" aria-hidden="true" style='position:absolute; right:20%; top:15px;'>`;
        emailEl.style.borderColor = "red"
    }
});
function ValidateEmail(mail) {
  if (
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      mail.value
    )
  ) {
    return true;
  } else {
    return false;
  }
}

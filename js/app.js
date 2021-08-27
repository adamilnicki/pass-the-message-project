let message = document.querySelector("#message");
let form = document.querySelector("#message-form");
let feedback = document.querySelector(".feedback");
let messageContent = document.querySelector(".message-content");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  if (message.value == "") {
    feedback.classList.add("show");
    setTimeout(function(){
        feedback.classList.remove("show");
    },2000)
  } else{
    messageContent.textContent = message.value;
    message.value = '';
  }
});

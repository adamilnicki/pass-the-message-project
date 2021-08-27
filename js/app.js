let message = document.querySelector("#message");
let form = document.querySelector("#message-form");
let feedback = document.querySelector(".feedback");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  if (message.value == "") {
    feedback.classList.add("show");
    setTimeout(function(){
        feedback.classList.remove("show");
    },2000)
  } else{
    document.querySelector(".message-content").innerHTML = message.value;
  }
});

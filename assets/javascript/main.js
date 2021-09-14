$(document).ready(function () {

  //Mouse toggle animation
    var $mouseIcon = $("#mouse");
    (function toggleMouse() {
      $mouseIcon.slideDown().slideToggle();
      setTimeout(function () {
        toggleMouse();
      }, 1000)
    })();

// what we do behaviour
      $(".simg1").click(function(){
        $("#design").slideToggle();
        $(".designh").slideToggle();
      });

      $(".simg2").click(function(){
        $("#development").slideToggle();
        $(".developmenth").slideToggle();
      });

      $(".simg3").click(function(){
        $("#product").slideToggle();
        $(".producth").slideToggle();
      })

  }
)

//contact us processing

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = (document.getElementById("name").value) + " we have received your message. Thank you fro reaching out!";
    alert((document.getElementById("name").value) + " we have received your message. Thank you for reaching out!");
  
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

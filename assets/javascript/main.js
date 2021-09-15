$(document).ready(function () {

  //Mouse toggle animation
    var $mouseIcon = $("#mouse");
    (function toggleMouse() {
      $mouseIcon.slideToggle().slideDown();
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

//portfolio hover behaviour
      $("#p1").mouseenter(function(){
        $("#w1").show();
      })
      .mouseleave(function(){
        $("#w1").hide();
      })

      $("#p2").mouseenter(function(){
        $("#w2").show();
      })
      .mouseleave(function(){
        $("#w2").hide();
      })

      $("#p3").mouseenter(function(){
        $("#w3").show();
      })
      .mouseleave(function(){
        $("#w3").hide();
      })

      $("#p4").mouseenter(function(){
        $("#w4").show();
      })
      .mouseleave(function(){
        $("#w4").hide();
      })

      $("#p5").mouseenter(function(){
        $("#w5").show();
      })
      .mouseleave(function(){
        $("#w5").hide();
      })

      $("#p6").mouseenter(function(){
        $("#w6").show();
      })
      .mouseleave(function(){
        $("#w6").hide();
      })

      $("#p7").mouseenter(function(){
        $("#w7").show();
      })
      .mouseleave(function(){
        $("#w7").hide();
      })

      $("#p8").mouseenter(function(){
        $("#w8").show();
      })
      .mouseleave(function(){
        $("#w8").hide();
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
    status.innerHTML = (document.getElementById("name").value) + " we have received your message. Thank you for reaching out!";
    alert((document.getElementById("name").value) + " we have received your message. Thank you for reaching out!");
  
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

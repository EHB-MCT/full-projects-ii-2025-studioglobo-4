
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');


function LogInForm() {

  document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();
    console.log('start fetch...');
    fetch("http://127.0.0.1:8090/api/collections/school_users/records")
        .then(function(response) {
            console.log('start receiving response...')
              return response.json();
              

        })

        .then(function (data) {
            console.log(data);
            localStorage.setItem("email", "studioGlobo@gmail.com");
            localStorage.setItem("password", "studioGlobo!");
            localStorage.setItem("data", "");
            
        })

    });

  };

function secretButton() {
  alert("Hello! I am an alert box!");
  var element = document.getElementById("submit");
  element.classList.remove("secretButton")


  document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("kleuter").href = "kleuter.html";
    localStorage.setItem("data", "");
  });

}


LogInForm();


  
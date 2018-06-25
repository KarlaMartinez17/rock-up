












$(document).ready(function () {

    setTimeout(function () {
        $('#splash').fadeOut(500);
    }, 2000);

    var inputs = document.getElementsByClassName("formulario-input");
    for (var i = 0; i < inputs.length; i++) {
        //evento cuando suelte la tecla cuando termine de escribir
        inputs[i].addEventListener("keyup", function () {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add("fijar");
            } else {
                this.nextElementSibling.classList.remove("fijar");
            }
        });
    }


    $('#submit').click(login);

    function login(event) {
        event.preventDefault();
        var email = $('#email-val').val();
        var password = $('#password-val').val();

        for (var i = 0; i < USERS_DATA.users.length; i++) {
            var user = USERS_DATA.users[i];



            
            if (email === user.email && password === user.password) {
                window.location.href = 'views/principalvw.html';
                localStorage.rockUpUserId = user.id;
          
                
                $('#email-val').val('');
                $('#password-val').val('');
            }
        }
    }
});




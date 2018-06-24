
function getPostText(event){
    event.preventDefault();
    var postText = $('#post-text').val();
    console.log(postText);

    $('#post-text').val('');
    
    var userImage = '';
    var userName = 'Karla';
    var numOfLikes = 5;
    
    var postHtml = '<div class="row">'+
            '<div class="col-auto foto">'+
                '<a href="#">'+
                    '<img src="'+userImage+'" alt="">'+
                '</a>'+
            '</div>'+
            '<div class="col">'+
                '<div class="post">'+
                    '<a href="#" class="nombre">'+userName+'</a>'+
                    '<p class="texto">'+postText+'</p>'+
                    '<div class="caja-botones d-flex justify-content-between align-items-center">'+
                        '<button>'+
                            '<i class="icon-thumbs-up"></i>'+
                        '</button>'+
                        '<p>'+numOfLikes+'<i class="icon-thumbs-up"></i></p>'
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="row">'+
            '<div class="col-10 offset-2">'+
                '<div class="comentarios"></div>'+
            '</div>'+
        '</div>';

    var firstPost = $('#publicaciones .publicacion')[0];

    var post = document.createElement('div');
    post.classList.add('publicacion');
    post.innerHTML = postHtml;

    $(post).insertBefore(firstPost);
    
}

$(document).ready(function (){
    $('#publish').click(getPostText);
   
    
});



var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user);
        saveDatos(result.user);
        $('#login').hide();
        $('#root').append("<img src='" + result.user.photoURL + "'/>");
    });

});


function saveDatos(user){
    var usuario = {
        uid: user.uid,
        nombre: user.displayName,
        email: user.email,
        photo: user.photoURL
    }
    firebase.database().ref("datosUsuario/" + user.uid)
    .set(usuario)
}





//escribir en la base de datos

$('#guardar').click(function(){
   firebase.database().ref("name")
   .set({
       nombre: "nadya",
       edad: "25",
       sexo: "fem"


   });

});

//leyendo de la base de datos

firebase.database().ref("datosUsuario")
.on("child_added", function(s){
    var user = s.val();
    $('#root').append("<img width='100px'src='" + user.photo + "'/>");


});







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


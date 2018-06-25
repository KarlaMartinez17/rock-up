$(document).ready(function (){
    var userProfile;
    for (var i = 0; i < USERS_DATA.users.length; i++) {
        var user = USERS_DATA.users[i];
        
        if( user.id === parseInt(localStorage.rockUpProfileId) ) {
            userProfile= user;
            
            $('#profile').attr('src', userProfile.photo);
            $('#profile-name').html(userProfile.name);
            $('#portada').css('background-image', 'url('+userProfile.cover+')');  
        }
    }
});

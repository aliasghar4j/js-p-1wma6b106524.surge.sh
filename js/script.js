
let oName = 'Ali Asghar'
let oEmail = 'admin@user'
let oPassword = '123456'
document.getElementById('submit').onclick = function () {
    var Name = document.getElementById('fName').value;
    var Email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    event.preventDefault();
    if(Name == oName && Email == oEmail && password == oPassword){
        window.location.href = window.origin + "/home.html"
    }
    else{
        return alert('Please enter right credentials')
    }
}




































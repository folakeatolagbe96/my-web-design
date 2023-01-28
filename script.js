function sendMail() {
    var parans = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_yc56em8", "template_bwyu3v3", parans).then(function(res){
        alert("success! " + res.status);
    }
)}sss
   function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
} 
     function sendMail() {
        let parms = {
            message : document.querySelector(".input").value
        }
        emailjs.send("service_75pg3vm","template_pg0ujc9",parms).then(alert("Email Sent !!"))
     }

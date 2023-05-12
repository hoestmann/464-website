function sendForm() {
    console.log("Send Form called");
    // emailjs.init("OuGOJqkZSLvQiUFQd");
    // emailjs.send("contact_service","contact_form");
    var form = document.getElementById("contactform");
    emailjs.sendForm('contact_service', 'contact_form', form, 'OuGOJqkZSLvQiUFQd')
                    .then(function() {
                        console.log('SUCCESS!');
                        alert("Email sent");
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert("Failed to send email");
                    });
}
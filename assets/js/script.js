

// form send mail

function sendmail(){
       
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'OmarSk112233@gmail.com',
        From: "demooptimalweb@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert (" Your Massege Sent Successfully ");
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}


function emailsend(){
Email.send({
    Host : "s1.maildns.net",
    Username : "itsflimshit@gmail.com",
    Password : "70D7DE086ABC672265511421E336993A5DCB",
    To : 'itsflimshit@gmail.com@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);


}
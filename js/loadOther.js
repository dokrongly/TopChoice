"use strict";
function setCopyrightYear(){
			
    var crElement = document.getElementById("copyright_year");
    
    jQuery.get('copyright.txt', function(crdata) {
        crElement.innerHTML = crdata;
    });

}

function setPhoneNumber(){

    jQuery.get('phone.txt', function(phdata) {

        var PhoneHeader = document.getElementById("phheader");
        var PhoneFooter = document.getElementById("phfooter");
        var PhoneNav = document.getElementById("phNav");

        PhoneHeader.innerHTML = phdata;
        PhoneFooter.innerHTML = phdata;
        PhoneNav.innerHTML = phdata;
    });

}

function setEmail(){

    var emailContainer = document.getElementById('emladdr');
    var e = document.createElement('a');
    
    jQuery.get('email.txt', function(emldata) {
        emailContainer.innerHTML = emldata;
        e.href = emldata;
        e.innerText = emldata;
    });

    emailContainer.appendChild(e);
} 

function setSvcArea(){

    var saElement = document.getElementById("svcArea");
    
    jQuery.get('svcarea.txt', function(sadata) {
        saElement.innerHTML = sadata;
    });

} 

function setMethod(){

    var meTitle = document.getElementById("title");
    var meElement = document.getElementById("methodTop");
    var meElement2 = document.getElementById("methodTop2");
    
    jQuery.get('method.txt', function(medata) {
        meTitle.innerHTML = medata + " Method Dog Training";
        meElement.innerHTML = medata + " Method";
        meElement2.innerHTML = medata + " Method Dog Training";
    });

}

function setPage(){
    setCopyrightYear();
    setPhoneNumber();
    setEmail();
    setSvcArea();
    setMethod();
}

window.onload = setPage();

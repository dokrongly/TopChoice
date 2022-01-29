"use strict";
function setCopyrightYear(){
                 
    var crElement = document.getElementById("copyright_year");
    jQuery.get('copyright.txt', function(crdata) {
        crElement.innerHTML = crdata;
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
             
function setPhoneNumber(){
                 
    var PhoneHeader = document.getElementById("phheader");
    var PhoneFooter = document.getElementById("phfooter");
    var PhoneNav = document.getElementById("phNav");
    var a1 = document.createElement('a');
    a1.setAttribute('class', 'btn btn-maincolor');
    var a2 = document.createElement('a');
    a2.setAttribute('class', 'btn btn-outline-maincolor');
    a2.href = 'services.html';
    a2.innerText = 'More Details';
                 
    jQuery.get('phone.txt', function(phdata) {
        let shortPh = phdata.substring(8, 22);
        PhoneHeader.innerHTML = phdata;
        PhoneFooter.innerHTML = phdata;
        PhoneNav.innerHTML = phdata;
        a1.href = shortPh;
        a1.innerText = shortPh;
    });
            
    var container1 = document.getElementById('layer1');
    container1.appendChild(a1);
    container1.appendChild(a2);
} 
             
function setMethod(){
                 
    var meTitle = document.getElementById("title");
    var meElement = document.getElementById("methodTop");
    var meElement2 = document.getElementById("methodTop2");	
    var meElement3 = document.getElementById("methodMid");	
    var meElement4 = document.getElementById("describe1");	
    var meElement5 = document.getElementById("describe2");
    
    jQuery.get('method.txt', function(medata) {
        meTitle.innerHTML = medata + " Method Dog Training";
        meElement.innerHTML = medata + " Method";
        meElement2.innerHTML = medata + " Method Dog Training";
        meElement3.innerHTML = medata + " Method";
    });
    
    jQuery.get('description1.txt', function(d1data) {
        meElement4.innerHTML = d1data;
    });
    
    jQuery.get('description2.txt', function(d2data) {
        meElement5.innerHTML = d2data;
    });

}
             
function setPage(){
    setCopyrightYear();
    setEmail();
    setSvcArea();
   /* setPhoneNumber(); */
    setMethod();
}
             
window.onload = setPage();
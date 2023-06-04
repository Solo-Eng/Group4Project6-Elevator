var el, elform, nonReqU = false, nonReqP = false, nonReqA = false;
var fnameFeedback, lnameFeedback, emailFeedback, unameFeedback, pwordFeedback, aboutYouFeedback;
var fnameIn, lnameIn, emailIn, unameIn, pwordIn, aboutYouIn;

elForm = document.getElementById('requestAccess');
fnameFeedback = document.getElementById('fnameFeedback');
lnameFeedback = document.getElementById('lnameFeedback');
emailFeedback = document.getElementById('emailFeedback');
unameFeedback = document.getElementById('unameFeedback');
pwordFeedback = document.getElementById('pwordFeedback');
aboutYouFeedback = document.getElementById('aboutYouFeedback');
fnameIn = document.getElementById('fname');
lnameIn = document.getElementById('lname');
emailIn  = document.getElementById('email');
unameIn = document.getElementById('uname');
pwordIn = document.getElementById('pword');
aboutYouIn = document.getElementById('aboutYou');

function checkfname(event){
    if(fnameIn.value.length < 1){
        fnameFeedback.innerHTML = 'First Name is Required!!!';
        event.preventDefault();
    }
    else{
        fnameFeedback.innerHTML = '';
    }
}
function checklname(event){
    if(lnameIn.value.length < 1){
        lnameFeedback.innerHTML = 'Last Name is Required!!!';
        event.preventDefault();
    }
    else{
        lnameFeedback.innerHTML = '';
    }
}
function checkemail(event){
    if(emailIn.value.length < 1){
        emailFeedback.innerHTML = 'Needed for us to send your login info';
        event.preventDefault();
    }
    else{
        emailFeedback.innerHTML = '';
    }
}
function checkuname(event){
    if(unameIn.value.length < 1){
        unameFeedback.innerHTML = 'We will create a username for you';
        if(nonReqU == false){
            event.preventDefault();
            nonReqU = true;
        }
    }
    else{
        unameFeedback.innerHTML = '';
    }
}
function checkpword(event){
    if(pwordIn.value.length < 1){
        pwordFeedback.innerHTML = 'We will create a password for you';
        if(nonReqP == false){
            event.preventDefault();
            nonReqP = true;
        }
    }
    else{
        pwordFeedback.innerHTML = '';
    }
}
function checkaboutyou(event){
    if(aboutYouIn.value.length < 1){
        aboutYouFeedback.innerHTML = 'This will help us to know who you are';
        if(nonReqA == false){
            event.preventDefault();
            nonReqA = true;
        }
    }
    else{
        aboutYouFeedback.innerHTML = '';
    }
}


function charCount(){
    var textEntered, charDisplay, counter;
    textEntered = document.getElementById('aboutYou').value;
    charDisplay = document.getElementById('charLeft');

    counter = (180 - (textEntered.length));
    if(counter < 0){
        charDisplay.innerHTML = 'Whoa! This is too much for Furret to carry! Please shorten your message by ' 
                                + (counter*-1) + ' characters';
    }
    else{
        charDisplay.innerHTML = 'Characters remaining: ' + counter;
    }

}

el = document.getElementById('aboutYou');
el.addEventListener('keypress', charCount, false);
elForm.addEventListener('submit', function(event) {checkfname(event); checklname(event); checkemail(event);
                                                   checkuname(event); checkpword(event); checkaboutyou(event);},
                                                   false );

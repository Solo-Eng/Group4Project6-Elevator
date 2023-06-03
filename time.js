var today = new Date();
var year = today.getFullYear();

/*  The script fails if it can't find the element its trying to update
    For example, the birthdays only show on the about page, but we want the footer on every page
    So the footer needs to come first because the script won't be able to find the birthday IDs
    */

if(document.getElementById('footLogBs')){
        var ftLBS = document.getElementById('footLogBs');
        ftLBS.innerHTML = '<p>Copyright &copy ' + year + ' Ben Allen, Liam Cain, Guneet Matharu, Nickolas Raghunath</p>';
}
if(document.getElementById('foot')){
        var ft = document.getElementById('foot');
        ft.innerHTML = '<p>Copyright &copy ' + year + ' Ben Allen, Liam Cain, Guneet Matharu, Nickolas Raghunath</p>';
}

if(document.getElementById('time')){
        var date = document.getElementById('time');
        var currentMonth = today.toLocaleString('default', { month: 'long' });
        var currentDay = today.getDate();
        var currentHour = today.getHours();
        var currentMinute = today.getMinutes();
        if(currentMinute < 10){
                date.innerHTML = '<h3>' + currentHour + ':' + '0'+ currentMinute + ' ' + currentMonth + ' ' + currentDay + ', ' + year + '</h3>';
        }
        else{
                date.innerHTML = '<h3>' + currentHour + ':' + currentMinute + ' ' + currentMonth + ' ' + currentDay + ', ' + year + '</h3>';
        }
        
}


// Ben birthday:
if(document.getElementById('benBirthday')){
        var BenBday = new Date('January 17, 2002');
        var BenAge = today.getTime() - BenBday.getTime();
        BenAge = Math.floor(BenAge / 31556900000);

        msg = '<b>Ben: </b> Hello, I\'m Ben! I am ' + BenAge + ' years old. I will mostly be working on what makes the elevator '
        +'functional to the user. This includes the physical wiring of indicators and switches, as well as '
        +'user authentication and a speaker system for elevator announcements.';
        var elemt = document.getElementById('benBirthday');
        elemt.innerHTML = msg;
}


// Liam birthday:
if(document.getElementById('liamBirthday')){
        var LiamBday = new Date('November 23, 2000');
        var LiamAge = today.getTime() - LiamBday.getTime();
        LiamAge = Math.floor(LiamAge / 31556900000);
        
        msg = '<b>Liam: </b> Hello, I\'m Liam! I am ' + LiamAge + ' years old. I will mostly be working on the function of the elevator and connecting it to the website.'
                +'I also hope to work more on the website itself because I think it is fun to work on and explore';
        var elemt = document.getElementById('liamBirthday');
        elemt.innerHTML = msg;
}


// Guneet birthday:
if(document.getElementById('guneetBirthday')){
        var guneetBday = new Date('December 22, 2001');
        var guneetAge = today.getTime() - guneetBday.getTime();
        guneetAge = Math.floor(guneetAge / 31556900000);
        
        msg = '<b>Guneet: </b> Hello, I\'m Guneet! I am ' + guneetAge + ' years old. I will be focusing on the front end UI of the website as well as'
        +' some of the back end linking to the elevator. I will also be helping Ben with wiring the STMs and switches on the elevator system.'
        +'<br>I enjoy playing video games and watching anime when I\'m not working on the elevator project.';
        var elemt = document.getElementById('guneetBirthday');
        elemt.innerHTML = msg;
}


// Nick birthday:
if(document.getElementById('nickBirthday')){
        var NickBday = new Date('September 19, 1999');
        var NickAge = today.getTime() - NickBday.getTime();
        NickAge = Math.floor(NickAge / 31556900000);
        
        msg = '<b>Nick: </b> Hello, I\'m Nick! I am ' + NickAge + ' years old. I will be working on the indicators, logging CAN communications, '
                        +'producing diagnostic reports, speaker announcements and potentially voice commands through machine learning';
        var elemt = document.getElementById('nickBirthday');
        elemt.innerHTML = msg;
}





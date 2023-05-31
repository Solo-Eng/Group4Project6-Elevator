var today = new Date();
var year = today.getFullYear();

/*  The script fails if it can't find the element its trying to update
    For example, the birthdays only show on the about page, but we want the footer on every page
    So the footer needs to come first becuase the script won't be able to find the birthday IDs
    */
var ft = document.getElementById('foot');
ft.innerHTML = '<p>Copyright &copy ' + year + ' Ben Allen, Liam Cain, Guneet Matharu, Nickolas Raghunath</p>';

var currentMonth = today.toLocaleString('default', { month: 'long' });
var currentDay = today.getDate();
var currentHour = today.getHours();
var currentMinute = today.getMinutes();
var date = document.getElementById('time');
date.innerHTML = '<h3>' + currentHour + ':' + currentMinute + ' ' + currentMonth + ' ' + currentDay + ', ' + year + '</h3>';

// Ben birthday:
var BenBday = new Date('January 17, 2002');
var BenAge = today.getTime() - BenBday.getTime();
BenAge = Math.floor(BenAge / 31556900000);

msg = '<b>Ben: </b> Hello, I\'m Ben! I am ' + BenAge + ' years old. I will mostly be working on what makes the elevator '
        +'functional to the user. This includes the physical wiring of indicators and switches, as well as '
        +'user authentication and a speaker system for elevator announcements.';
var elemt = document.getElementById('benBirthday');
elemt.innerHTML = msg;

// Liam birthday:
var LiamBday = new Date('January 17, 2002');
var LiamAge = today.getTime() - LiamBday.getTime();
LiamAge = Math.floor(LiamAge / 31556900000);

msg = '<b>Liam: </b> Hello, I\'m Liam! I am ' + LiamAge + ' years old. I...';
var elemt = document.getElementById('liamBirthday');
elemt.innerHTML = msg;

// Guneet birthday:
var guneetBday = new Date('January 17, 2002');
var guneetAge = today.getTime() - guneetBday.getTime();
guneetAge = Math.floor(guneetAge / 31556900000);

msg = '<b>Ben: </b> Hello, I\'m Guneet! I am ' + guneetAge + ' years old. I...';
var elemt = document.getElementById('guneetBirthday');
elemt.innerHTML = msg;

// Nick birthday:
var NickBday = new Date('January 17, 2002');
var NickAge = today.getTime() - NickBday.getTime();
NickAge = Math.floor(NickAge / 31556900000);

msg = '<b>Ben: </b> Hello, I\'m Nick! I am ' + NickAge + ' years old. I...';
var elemt = document.getElementById('nickBirthday');
elemt.innerHTML = msg;




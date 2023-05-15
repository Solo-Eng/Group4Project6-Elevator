//fucntion for opening the tab
function openTab(evt, tabName) {
  if(tabName == 'Elevator UI'){
    //redirects to another file
    window.location = "index.html";
  }
  else if(tabName == 'Documents') {
    window.location = "documents.html";
  }
  else if(tabName == 'About Us') {
    window.location = "about.html";
  }
}
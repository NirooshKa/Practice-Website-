//This is the part where I make the sidebar menu function 

//Toggle between hiding and showing the dropdown contents (takes all <a href> elements, and displays them)

function openSlideMenu() {
	document.getElementById('side-menu').style.width = "250px";
	document.getElementById('main').style.marginLeft='250px';	
}

function closeSlideMenu() {
	document.getElementById('side-menu').style.width = "0px";
	document.getElementById('main').style.marginLeft='0px';	
}

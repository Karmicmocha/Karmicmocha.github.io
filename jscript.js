
function dropdown(){
	var height = document.getElementById('dropdown').style.height;
	if(height == "30vh"){
		document.getElementById("dropdown").style.height = "0px";
		document.getElementById("dropdown").style.width = "0px";
		document.getElementById("header2").style.marginRight = "0px";
		
	}
	else{
		document.getElementById("dropdown").style.height = "30vh";
		document.getElementById("dropdown").style.width = "20vw";
		document.getElementById("header2").style.marginRight = "20vw";
	}
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
		
	var st = window.pageYOffset || document.documentElement.scrollTop;
	   
	if (st > lastScrollTop) {
		document.getElementById("header2").style.position = "static";
	} 
	else if (st < lastScrollTop) {
		document.getElementById("header2").style.position = "sticky";
	} 
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
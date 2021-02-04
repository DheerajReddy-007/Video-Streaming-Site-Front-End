function label01(){
    document.getElementById('l1').style.cssText="top: 15px;font-size: 0.6rem;";
}function label02(){
    document.getElementById('l2').style.cssText="top: 15px;font-size: 0.6rem;";
}function label03(){
    document.getElementById('l3').style.cssText="top: 15px;font-size: 0.6rem;";
}
function label1(){
	var a=document.getElementById("e").value;
	if(a.length){
    	document.getElementById('l1').style.cssText="top: 15px;font-size: 0.6rem;";
	}
	else{
		document.getElementById('l1').style.cssText="top: 26px;font-size: 1rem;";
	}
}function label2(){
var a=document.getElementById("pass").value;
	if(a.length){
    	document.getElementById('l2').style.cssText="top: 15px;font-size: 0.6rem;";
	}
	else{
		document.getElementById('l2').style.cssText="top: 26px;font-size: 1rem;";
	}
}function label3(){
	var a=document.getElementById("cpass").value;
	if(a.length){
    	document.getElementById('l3').style.cssText="top: 15px;font-size: 0.6rem;";
	}
	else{
		document.getElementById('l3').style.cssText="top: 26px;font-size: 1rem;";
	}
}function passcheck(){
var b=document.getElementById('pass').value;
var a=document.getElementById('cpass').value;
var pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
if(b.match(pattern)){
if(a=="" || b=="" || b!=a){
	errorP.textContent="";
	error.textContent = "Password mismatch!"; 
    error.style.color = "#e50914";
}
else{
	errorP.textContent="";
	error.textContent="";
	window.location.href="main.html";
}
}
else{
	errorP.textContent="Invalid Password Pattern!";
}
}
function email(){
	var a=document.getElementById('e').value;
	var pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
	if(a.match(pattern)){
		errorE.textContent = "";
		window.location.href="Signup.html";
	}
	else{
		errorE.textContent = "Enter a valid Email"; 
	}
}
function email1(){
	var a=document.getElementById('e').value;
	var pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
	if(a.match(pattern)){
		errorE.textContent = "";
	}
	else{
		errorE.textContent = "Enter a valid Email"; 
	}
}
function check(){
	email1();
	passcheck();
}function signin(){
	document.getElementById("head1").style.display="none";
	document.getElementById("head2").style.display="all";
}function lpage(){
	document.getElementById("head1").style.display="all";
	document.getElementById("head2").style.display="none";
}
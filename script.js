window.alert(5+6);
document.write(5+6)

function prayut(){
    window.alert(5+6);
    document.write(10+1);
}
function syntax(){
    var x=5;
    var y=6;
    var z=x+y;
    document.getElementById("txt2").innerHTML = z;
}
function OC(){
    document.getElementById("txt3").innerHTML = "IT5101";
    var x = document.getElementById("txt3");
    if(x.style.display === "none"){
        x.style.display = "block"
    }else{
        x.style.display = "none";
    }
}
function select(){
    var x = document.getElementById("txt4").value;
    document.getElementById("txt5").innerHTML = "YOUR SELECT " + x;
}
function fncalert(){
    alert("INTFORMATIN THEACHNOLOGY");
}
function fconfirm(){
    if(confirm('DO YOU WANT YO VISIT : https:www.//google.com') == true){
        alert('Going to https:www.//google.com')
        window.location = 'https://www.google.com';
    }else{
        alert('You select to cancel')
    }
}
function fsubmit(){
    if(confirm('Confirm to submit') == true){
        return true;
    }else{
        return false;
    }
}
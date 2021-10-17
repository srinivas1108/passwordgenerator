function passwordGenerator(){
    document.getElementById("screen").innerHTML="";
    document.getElementById("screen").style.color="blue";

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let len = charset.length;
    let res=""
    for(let i=0;i<12;i++){
        res+=charset.charAt(Math.floor(Math.random()*len));
    }
    document.getElementById("screen").value=res;
    
    console.log(res);
}
function copy(){
    let copyText=document.getElementById("screen");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Password copied");
    document.getElementById("screen").value="";
}
var i=0;
function typeEffect(){
    var txt="Generated password 🔑 will appear here 😊";
    var len=txt.length;
    document.getElementById("screen").style.color="grey";

    if(i<len){
        document.getElementById("screen").value+=txt.charAt(i);
        setTimeout(typeEffect,50);
        i++;
    }
} 
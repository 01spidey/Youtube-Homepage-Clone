const sub_btn = document.getElementById("sub");

let sub = false;

sub_btn.onclick = function(){
    if(!sub){
        sub_btn.style.backgroundColor = "#282828";
        sub_btn.innerHTML = "SUBSCRIBED";
        sub = true;
    }
    else{
        sub_btn.style.backgroundColor = "#c00";
        sub_btn.innerHTML = "SUBSCRIBE";
        sub = false;
    }
}
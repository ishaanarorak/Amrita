function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("fadeOut");
    popup.classList.toggle("show");
   
    popup.play(true)

    var btn=document.getElementById("btn");
    var data=document.getElementById("data");
    if(btn.innerHTML==="See More"){
        btn.innerHTML="close";
        data.style.display="none";
        popup.play();
        popup.muted= false;
    }
    else{
        btn.innerHTML="See More";
        data.style.display="block";
        popup.muted= true;
        popup.pause();
    }
  }


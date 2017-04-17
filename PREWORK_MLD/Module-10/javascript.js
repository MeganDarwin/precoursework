      document.getElementById("growbtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";
            document.getElementById("box").style.width = "250px";


         });

        document.getElementById("bluebtn").addEventListener("click", function(){

            document.getElementById("box").style.backgroundColor = "blue";

        });
var cat = document.getElementById("box");

function fade() {
    if (cat.style.opacity > 0) {

        cat.style.opacity = (cat.style.opacity - 0.1).toFixed(2);

        setTimeout( fade, 90 );
    } else { 
        cat.style.visibility = "hidden";
    }
}

function unfade() {
    cat.style.opacity = 1;
    cat.style.visibility = "visible";
}

document.getElementById("fadebtn").addEventListener("click", fade , false);
document.getElementById("bluebtn").addEventListener("click", unfade , false);
document.getElementById("resetbtn").addEventListener("click", unfade , false);
document.getElementById("growbtn").addEventListener("click", unfade , false);

        document.getElementById("resetbtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
             document.getElementById("box").style.width = "150px";
             document.getElementById("box").style.backgroundColor = "orange";

        });

    

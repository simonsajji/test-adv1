








let open = document.getElementsByClassName('btn')[0];

open.addEventListener ('focusin', function() {

    open.style.width = '100%';
    open.style.height = '100%';
    let i=document.getElementById("image1");
    i.style.width = '100%';
    i.style.height = '100%';
    open.style.transition="all 0.6s";
    i.style.transition="all 0.6s"


});

let bod=document.getElementsByTagName("body")[0];
bod.addEventListener ('focusout', function() {

open.style.width = '10%';
open.style.height = '30%';
let i=document.getElementById("image1");
i.style.width = '6.5rem';
i.style.height = '6.5rem';
open.style.transition="all 0.6s"
i.style.transition="all 0.6s"


});

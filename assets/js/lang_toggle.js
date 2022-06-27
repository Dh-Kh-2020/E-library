// ########################## Language Toggler ##########################

const language_toggler  = document.querySelectorAll("#language_toggler");
const htmlElement       = document.getElementsByTagName("html")[0]; 

language_toggler.forEach(element =>{

    element.addEventListener('click', ()=>{

        if (htmlElement.dir === "rtl") {
            htmlElement.setAttribute("dir", "ltr");
            element.querySelector(".li__text").innerHTML = "عربي";
        } 
        else {
            htmlElement.setAttribute("dir", "rtl");
            element.querySelector(".li__text").innerHTML = "English";
        }
    });
    
});
// ########################## ######################## ##########################
document.addEventListener("DOMContentLoaded", function(){

    const products = ["WEB APPLICATIONS", "API's", "DATABASES", "UI/UX"]

    setInterval(function() {
        document.querySelector(".iworkwith").textContent = "return";
    }, 1000)


    // this will show what I do
     let counter = 0;
     setInterval(function(){
         if (counter >= products.length) {
             counter = 0;
         }
         document.querySelector(".console").textContent = `${products[counter]}`;
         counter++;
     }, 1500)


document.querySelector(".about-button").addEventListener("click", function(){
    document.querySelector("#keyboard-typing-sound").volume = .5;
    document.querySelector("#keyboard-typing-sound").play();
})
document.querySelector(".portfolio-button").addEventListener("click", function(){
    document.querySelector("audio").volume = .5;
    document.querySelector("audio").play();
})

document.querySelector(".contact-me").style.display = "none";


function showAbout(){


       const about_description = document.querySelector(".about-description");
       about_description.textContent = "";
       const description = "I am professional Web Developer with expertise in Web Application development. From simple static sites to data driven dynamic web applications, I can build for you what you need. Send me direct email to discuss your next project and answer your question!";
       let char_counter = 0;
       setInterval(function() {
       if (char_counter >= description.length){
                counter = 0;
                document.querySelector(".contact-me").style.display = "block";
                return 0;
            }
            about_description.textContent = about_description.textContent + description[char_counter];
            char_counter++;
       }, 18);



}


document.querySelector(".about").addEventListener("click", showAbout);


})

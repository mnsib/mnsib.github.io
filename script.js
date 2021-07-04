document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector(".home").addEventListener("click", () => {
      alert(`You clicked on ${event.target.textContent}`)
    })
    
    document.querySelector(".about").addEventListener("click", function(){
      alert(`You clicked on ${event.target.textContent}`)
    })
    
    document.querySelector(".projects").addEventListener("click", function(){
      alert(`You clicked on ${event.target.textContent}`)
    })
    
    document.querySelector(".blog").addEventListener("click", function(){
      alert(`You clicked on ${event.target.textContent}`)
    })
  })
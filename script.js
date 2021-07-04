document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector(".home").addEventListener("click", show_home)
    
    document.querySelector(".about").addEventListener("click", show_about)
    
    document.querySelector(".projects").addEventListener("click", show_projects)
    
    document.querySelector(".blog").addEventListener("click", show_blog)
  })
  
  
function show_about(){
    const parent = document.querySelector(".container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    const center = document.createElement("center")
    const p = document.createElement("p")
    p.textContent = "Hello Welcome to about page"
    center.appendChild(p)
    parent.appendChild(center)
    
}

function show_home(){
    const parent = document.querySelector(".container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    const center = document.createElement("center")
    const p = document.createElement("p")
    p.textContent = "Hello Welcome to Home page"
    center.appendChild(p)
    parent.appendChild(center)
    
}

function show_projects(){
    const parent = document.querySelector(".container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    const center = document.createElement("center")
    const p = document.createElement("p")
    p.textContent = "Hello Welcome to Projects page"
    center.appendChild(p)
    parent.appendChild(center)
    
}

function show_blog(){
    const parent = document.querySelector(".container")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    const center = document.createElement("center")
    const p = document.createElement("p")
    p.textContent = "Hello Welcome to Blog page"
    center.appendChild(p)
    parent.appendChild(center)
    
}
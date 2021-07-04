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
    
    fetch("posts.json")
    .then(response => response.json())
    .then(posts => {
        for (let i = 0; i < Object.keys(posts).length; i++){
            const a = document.createElement("a")
            const hr = document.createElement("hr")
            a.href = `#${posts[i].title}#`
            a.addEventListener("click", () => {
                const parent = document.querySelector(".container")
                while (parent.firstChild) {
                    parent.firstChild.remove()
                }
                const center = document.createElement("center")
                const title = document.createElement("h4")
                const body  = document.createElement("p")
                title.textContent = posts[i].title
                body.textContent = posts[i].body
                document.querySelector(".container").appendChild(center)
                center.appendChild(title)
                center.appendChild(body)
            })
            a.textContent = posts[i].title
            document.querySelector(".container").appendChild(a)
            document.querySelector(".container").appendChild(hr)
        }
    })
    
}
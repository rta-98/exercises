const uls = document.querySelector("ul") 
const button = document.querySelector("button") 
const clicker = function(e) { 
    if (e) {
      e.preventDefault() // wrapped in a form element; pressing enter triggers form to submit
      const inputValue = document.getElementById("item").value
      document.getElementById("item").value = "" // clears so the user can enter another
      console.log(inputValue)
      const listItem = document.createElement("li") 
      const spanItem = document.createElement("span") 
      const buttonItem = document.createElement("button") 
      buttonItem.textContent = "Delete"
      spanItem.textContent = inputValue
      spanItem.style.padding = "10px"
      listItem.appendChild(buttonItem)
      listItem.appendChild(spanItem) 
      const uls = document.querySelector("ul") 
      uls.appendChild(listItem)
      document.querySelector("input").focus()
      buttonItem.addEventListener("click", (e) => {
        e.preventDefault()
        listItem.remove()
      });
    }

}; 
button.addEventListener("click", clicker); 



/* llamado de elementos de html mediante id y classnames */

const title_html = document.getElementById("title") 
const lista = document.getElementById("list")
const list_item_html = document.getElementsByClassName("list-item")

/* creacion de un nuevo list item */

const new_li = document.createElement("li") 

/* se asigna a new_li como hijo de lista (ul) */

lista.appendChild(new_li)

/* a new_li se le insterta el texto "Horno" */

new_li.innerText = "Horno"

/* bucle forof que hace que por cada item en la coleccion list_item_html se cree un boton que se le inserta el texto "ver mas" */

for (const item of list_item_html) {
    const btn = document.createElement("button")
    item.appendChild(btn)
    btn.innerText = "ver mas"
}

/* list_item_html es una coleccion, es decir, hay que acceder a ellos mediante [] */

list_item_html[2].innerText = "Licuadora"
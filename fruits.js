const form=document.querySelector("form");
const fruits=document.querySelector(".fruits");
const description=document.createElement("input");
const button=document.querySelector(".add")
description.setAttribute("type","text");
description.setAttribute("class","descrip")
form.insertBefore(description,button);

const list=document.getElementsByTagName("li");
for(let i=0;i<list.length;i++)
{
    const editbtn=document.createElement("button");
    editbtn.classList.add('edit-btn');
    editbtn.innerText="Edit";

    list[i].appendChild(editbtn);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fruitToAdd=document.getElementById("fruit-to-add");
    const desc=document.querySelector(".descrip");
    
    
    const newlist=document.createElement("li");
    newlist.className='fruit';
    newlist.innerHTML=fruitToAdd.value + `<button class="delete-btn">x</button><button class="edit-btn">Edit</button><p><i>${desc.value}</i></p>`;
    fruits.appendChild(newlist);

    
    fruitToAdd.value="";
    desc.value="";

})

fruits.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("delete-btn")){
        const fruitsToDelete=e.target.parentElement;
        fruits.removeChild(fruitsToDelete);
    }
})

const filter=document.querySelector("#filter");
filter.addEventListener("keyup",(e)=>{
        e.preventDefault();
        const textEntered=e.target.value.toLowerCase();
        const fruit=document.querySelectorAll(".fruit")
        for(let i=0;i<fruit.length;i++)
        {
            const currentfruits=fruit[i].firstChild.textContent.toLowerCase();
            const descriptionText=fruit[i].lastChild.textContent.toLowerCase();
            console.log(descriptionText);
            if(currentfruits.indexOf(textEntered)===-1 && descriptionText.indexOf(textEntered)===-1){
                fruit[i].style.display="none"
            }
            else{
                fruit[i].style.display="flex"
            }
        }
})
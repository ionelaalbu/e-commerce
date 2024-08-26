import { listOfProducts } from "./product.js";


let createElement=(element)=> document.createElement(element)
let parentofList=document.querySelector(".cardContainer")
let list=listOfProducts

//search
let input=document.querySelector(".input")
let searchValue=""
let filteredArrofProduct=[]

function handleInput(event){
    searchValue=event.target.value.toLowerCase()
    let filterBySearch=getFiltered()
    parentofList.innerHTML=""
    createList(filterBySearch)
}
input.addEventListener("keyup", handleInput)

//price
let productPrice=document.querySelector("#price")
let price=0

function getFiltered(){
    filteredArrofProduct=searchValue?.length > 0 ? list.filter((item) =>
        searchValue === item.name.toLowerCase()) : list
    if(price > 0){
        filteredArrofProduct=searchValue?.length > 0 ? filteredArrofProduct : list
        filteredArrofProduct=filteredArrofProduct.filter((item) => item.price >= price)
        console.log(filteredArrofProduct);
        
    }
    // if(price > 0 || star > 0  ){
    //     filteredArrofProduct=searchValue?.length > 0 ? filteredArrofProduct : list
    //     filteredArrofProduct=filteredArrofProduct.filter((item) => item.price >= price)

    //     filteredArrofProduct=searchValue?.length > 0 ? filteredArrofProduct : list
    //     filteredArrofProduct=filteredArrofProduct.filter((item) => item.star >= star)
    // } 
    if( star > 0) {
        filteredArrofProduct=searchValue?.length > 0 ? filteredArrofProduct : list
        filteredArrofProduct=filteredArrofProduct.filter((item) => item.star >= star)
    }

    return filteredArrofProduct
}

function HandlePrice(event){
    price=event.target.value
    let filterByPrice=getFiltered()
    parentofList.innerHTML=""
    createList( price? filterByPrice : list)
    //console.log(filterByPrice);
    
}
productPrice.addEventListener("change", HandlePrice)

//star
let productStar=document.querySelector("#star")
let star=0

function HandleStar(event){
    star=event.target.value
    let filterByStar=getFiltered()
    parentofList.innerHTML=""
    createList( star? filterByStar : list)
}

productStar.addEventListener("change", HandleStar)

//list of products imported from product.js
const createList=(list)=>{
    for(let item in list){
         const card=createElement('div')
         card.classList.add('cardTemplate')
         parentofList.appendChild(card)

         const imgContainer=createElement('div')
         imgContainer.classList.add('img')
         card.appendChild(imgContainer)

         const img=createElement('img')
         img.classList.add('picture')
         img.setAttribute("src", list[item].img) 
         imgContainer.appendChild(img)

         const detail=createElement('div')
         detail.classList.add('details')
         card.appendChild(detail)

         const p1=createElement('p')
         p1.classList.add('name')
         detail.appendChild(p1)
         p1.innerText=list[item].name + ""

         const p2=createElement('p')
         p2.classList.add('productPrice')
         detail.appendChild(p2)
         p2.innerText=list[item].price + " $"

         const p3=createElement('p')
         p3.classList.add('productStar')
         card.appendChild(p3)
         p3.innerText=list[item].rating

         const buttonAdd=createElement('button')
         buttonAdd.classList.add('addBtn')
         buttonAdd.setAttribute("name", list[item]._id)
         card.appendChild(buttonAdd)
         buttonAdd.innerText="Add to cart"


    }
}
createList(list)

//toggle
const bg=document.getElementById('icon')
const bgc=document.querySelector(".bill")

bg.addEventListener("click", ()=>{
    bgc.classList.toggle('active')
    bg.classList.toggle('active2')
})
const removepayBt=document.querySelector(".removepay")
removepayBt.addEventListener("click", ()=>{
    bgc.classList.remove('active')
    bg.classList.toggle('active2')
    console.log("clicked");  
})

//pay
const AddtoCartBtn=document.querySelectorAll('.addBtn')
AddtoCartBtn.forEach(button => {
    button.addEventListener('click', ()=>{
        const productId=button.getAttribute('name')
         bg.style.color="rgb(32, 120, 158)"
        addtoCart(productId)
        console.log(productId);
        
    })
})

let cart= []
 function addtoCart(productId){
    const product=list.find(p=> p._id == productId)
    const cartItem=cart.find(item => item._id == productId)
    console.log(product);
    if(cartItem){
        cartItem.quantity++;
    }else{
        cart.push({...product, quantity:1})
    }
    updateCartDisplay()
}

function updateCartDisplay(){
    const cartContainer=document.getElementById("cart")
    cartContainer.innerHTML=""

    cart.forEach(item => {
        const itemDiv=document.createElement("div")
        itemDiv.innerHTML=`
        <div class="check">
        <h4> ${item.name}</h4>
        <p> Price: $${item.price} | Quantity: ${item.quantity} </p>
        <div class="AddandRemove">
        <button class="remove" data-id="${item._id}"> Delete </button>
        <button class="add" data-id="${item._id}"> Add </button>
        </div>
        </div>
        `
        cartContainer.appendChild(itemDiv)
        console.log(itemDiv);
        
        itemDiv.querySelector('.remove').addEventListener("click", ()=>{
            removeQuantity(item._id)
        })

        itemDiv.querySelector('.add').addEventListener("click", ()=>{
            addQuantity(item._id)
        })

    })
    
    const total=cart.reduce((sum, item)=> 
    sum+item.price*item.quantity, 0)
    const totalDiv=document.createElement("div")
    totalDiv.innerHTML=`
    <p class="total"> Total : $${total} </p>
    `
    if(total === 0){
        bg.style.color="orangered"
   }
    cartContainer.appendChild(totalDiv)
}

function removeQuantity(productId){
    const index=cart.findIndex(item => item._id == productId)
    if(index > -1){
            cart.splice(index,1)
        }
    updateCartDisplay()
}

function addQuantity(productId){
    const cartItem=cart.find(item => item._id == productId)
    if(cartItem){
        cartItem.quantity++
    }
    updateCartDisplay()
}
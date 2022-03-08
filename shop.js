const displayLocalStoragecart=()=>{
const cart =getCart();
for(const product in cart){
        displayProduct(product) 
}

}



const addItem =()=>{
        const nameField=document.getElementById('product-name')
       
        const name = nameField.value
        if(!name){
                return false;
        }
        // display ui=

        displayProduct(name)


        // add to localStorage
        addProductTocart(name)

        nameField.value='';
}

const displayProduct =name=>{
        const ul =document.getElementById('products');

        const li=document.createElement('li');
        li.innerText=name;

        ul.appendChild(li)
}

const  getCart=()=>{
        const cart=localStorage.getItem('cart');
        let cartobj;

        if(cart){
                cartobj=JSON.parse(cart)
        }

        else{
                cartobj={}
        }
        return cartobj;
}

const addProductTocart=name=>{
        const cart =getCart();

        // cart [name]=1;

        if(cart[name]){
                cart[name]=cart[name]+1   
        }
        else{
                cart[name]=1;
        }
        console.log(cart)
        const cartStrigified=JSON.stringify(cart)
        localStorage.setItem('cart',cartStrigified)
}

displayLocalStoragecart();

const placeOrder=()=>{
        document.getElementById('products').textContent='';
        localStorage.removeItem('cart')
}
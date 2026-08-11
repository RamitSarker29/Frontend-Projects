document.addEventListener('DOMContentLoaded', ()=>{
    const products = [
        { id: 1 , name: 'product 1' , price: 29.99},
        { id: 2 , name: 'product 2' , price: 39.99},
        { id: 3 , name: 'product 3' , price: 59.99},
    ]

    const cart = JSON.parse(localStorage.getItem('productData'))|| []
    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMsg = document.getElementById('empty-cart')
    const cartTotalMsg = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkoutBtn = document.getElementById('checkout-btn')

    products.forEach(product =>{
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id='${product.id}'>Add to cart</button>`
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', (e)=>{
        if (e.target.tagName ==='BUTTON'){
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p=> p.id ===productId)
            addToCart(product)
            
        }
    })

    function addToCart(product){
        cart.push(product)
        localStorage.setItem('productData', JSON.stringify(cart))
        renderCart()
    }

    function renderCart(){
        cartItems.innerText = ""
        let totalPrice = 0
        if (cart.length > 0) {
            emptyCartMsg.classList.add('hidden')
            cartTotalMsg.classList.remove('hidden')
            cart.forEach((item,index)=>{
                totalPrice +=item.price
                const cartItem = document.createElement('div')
                const deleteBtn = document.createElement('button')
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}`
                cartItems.appendChild(cartItem)
                deleteBtn.setAttribute('data-id',item.id)
                deleteBtn.textContent = `Delete`
                cartItem.appendChild(deleteBtn)
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
                deleteBtn.addEventListener('click', (e)=>{
                    if (e.target.tagName==='BUTTON'){
                        const productId = parseInt(e.target.getAttribute('data-id'))
                        const productIndex = cart.findIndex(p=> p.id ===productId)
                        cart.splice(productIndex,1)
                        localStorage.setItem('productData',JSON.stringify(cart))
                        renderCart()
                    }
                })
            })
        } else {
            emptyCartMsg.classList.remove('hidden')
            totalPriceDisplay.textContent = `0.00`

            
        }
    }


    
    renderCart()

    

    checkoutBtn.addEventListener('click',()=>{
        cart.length = 0
        localStorage.removeItem('productData')
        alert("Checkout Successful!!!")
        renderCart()
    })



})

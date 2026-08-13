document.addEventListener('DOMContentLoaded', ()=>{
    const inputItem = document.getElementById('inputItem')
    const inputAmount = document.getElementById('inputAmount')
    const form = document.getElementById('form')
    const totalAmount = document.getElementById('totalAmount')
    const expenseList = document.getElementById('expenseList')


    let itemsArray = JSON.parse(localStorage.getItem('itemsData')) || []

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const itemData = inputItem.value.trim()
        const itemPrice = parseFloat(inputAmount.value.trim())

        if (itemData !=='' &&  !isNaN(itemPrice) && itemPrice >0){
            const data = {
                id: Date.now(),
                itemData: itemData,
                itemPrice: itemPrice
            }
            itemsArray.push(data)
            saveData()
            render()

            inputItem.value= ''
            inputAmount.value= ''
            totalAmount.textContent = calculateTotal()
        }


        

    })

    function render(){
        expenseList.innerHTML=''
        itemsArray.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML = `
            ${element.itemData} - $${element.itemPrice}
            <button data-id =${element.id}>Delete</button>
            `
            expenseList.appendChild(li)

        });
    }
    function saveData(){
        localStorage.setItem('itemsData', JSON.stringify(itemsArray))
    }

    function calculateTotal(){
        return itemsArray.reduce((sum,items)=> sum+items.itemPrice,0)
    }


    expenseList.addEventListener('click',(e)=>{
        if (e.target.tagName === 'BUTTON'){
            const del = parseInt(e.target.getAttribute('data-id'))
            itemsArray = itemsArray.filter((item) => item.id !=del)
            saveData()
            render()
            calculateTotal()
            totalAmount.textContent = calculateTotal()

        }
    })

    
})
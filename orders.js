const menuElement = document.querySelector('#menu')

fetch('http://52.90.190.236:5000/orders')
// fetch('http://localhost:5000/orders')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(orders => {
    console.log(orders)
    const menuCards = orders.map(order => {
      console.log(order)

      return `<div class="menu-item">
          <h3>${order.item} ${order.total}</h3>
          <p></p>
          <p> Order Number: ${order.orderNumber}</p>
          <p> Customer Number: ${order.customerID}</p>
        </div>`
    })
    menuElement.innerHTML = menuCards.join('')
  })

  .catch(error => console.error(error))

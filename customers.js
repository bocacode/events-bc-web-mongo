const menuElement = document.querySelector('#menu')

fetch('http://52.90.190.236:5000/customers')
// fetch('http://localhost:5000/customers')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(customers => {
    console.log(customers)
    const menuCards = customers.map(customer => {
      console.log(customer)

      return `<div class="menu-item">
          <h3>${customer.fName} ${customer.lName}</h3>
          <br>
          <p><b>email:</b> ${customer.email}</p>
          <p><b>phone:</b> ${customer.phone}</p>
          <br>
        </div>`
    })
    menuElement.innerHTML = menuCards.join('')
  })

  .catch(error => console.error(error))

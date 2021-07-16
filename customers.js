const menuElement = document.querySelector('#menu')

// fetch('http://52.90.190.236:5000/customers')
fetch('http://localhost:5000/customers')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(customers => {
    console.log(customers)
    const menuCards = customers.map(customer => {
      console.log(customer)

      return `<div class="menu-item">
          <h3>${customer.fName} ${customer.lName}</h3>
          <p></p>
          <p>${customer.email}</p>
          <p>${customer.phone}</p>
        </div>`
    })
    menuElement.innerHTML = menuCards.join('')
  })

  .catch(error => console.error(error))
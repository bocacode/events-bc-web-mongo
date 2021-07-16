const menuElement = document.querySelector('#menu')

// fetch('http://52.90.190.236:5000/customers')
fetch('http://52.90.190.236:5000/events')
  .then((response) => response.json())
  // .then(data => console.log(data))
  .then((menuItems) => {
    console.log(menuItems)
    const menuCards = menuItems.map((event) => {
      console.log(event)

      return `<div class="menu-item">
          <h3> Title: ${event.title} </h3>
          <p> Date: ${event.date}</p>
          <p> Description: ${event.description}</p>
          <p> Cost: ${event.cost}</p>
          <p> Attendees: ${event.attendees}</p>
        </div>`
    })
    menuElement.innerHTML = menuCards.join('')
  })

  .catch((error) => console.error(error))

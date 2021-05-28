const menuElement = document.querySelector('#menu')

fetch('https://codice-boca.web.app/menu')
  .then(response => response.json())
  .then(menuItems => {
    
    const menuCards = menuItems.map(recipe => {
      console.log(recipe)

      return `<div class="menu-item">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
        </div>`
    })
    menuElement.innerHTML = menuCards.join('')
  })

  .catch(error => console.error(error))

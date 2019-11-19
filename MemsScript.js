const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

// request.open('GET', 'http://slu-acm.herokuapp.com/members', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(Member => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h2')
      h1.textContent = Member.first_name + " " + Member.last_name

      container.appendChild(card)
      card.appendChild(h1)

    })
  }
}

request.send()
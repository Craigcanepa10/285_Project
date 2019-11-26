// import {router} from './routes/api';
// var express = require('express')
// var app = express()

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:3000/member?member=w4635876', true)
request.onload = function() {
  // app.route('/member')
  //   .get(function (req, res){})
  // Begin accessing JSON data here
  var memdat = JSON.parse(this.response)
    memdat.forEach(Member => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h2 = document.createElement('h7')
      h2.textContent = Member.first_name + " " + Member.last_name

      const info_e = document.createElement('p')
      info_e.textContent = `Email: ` + Member.email

      const info_m = document.createElement('p')
      info_m.textContent = `Major: ` + Member.major

      const info_w = document.createElement('p')
      info_w.textContent = `W Num: ` + Member.w_num

      const info_s = document.createElement('p')
      info_s.textContent = `Signup Data: ` + Member.signup_date

      const info_ed = document.createElement('p')
      info_ed.textContent = `Expiration Date: ` + Member.expiration_date


      container.appendChild(card)
      card.appendChild(h2)
      card.appendChild(info_e)
      card.appendChild(info_m)
      card.appendChild(info_w)
      card.appendChild(info_s)
      card.appendChild(info_ed)

    })
  }

// })
request.send()
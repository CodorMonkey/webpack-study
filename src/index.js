import {square} from './math'
// import './css/style.css'

function render () {
  var element = document.createElement('div')
  element.innerHTML = ['hello webpack', 'square(5) = ' + square(5)].join('\r\n')
  document.body.appendChild(element)
}

render()
import _ from 'lodash'
import './css/style.css'
import img from './img/monkey2.jpg'

function component () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  element.classList.add('hello')
  return element
}

function icon () {
  var element = document.createElement('img')
  element.src= img
  return element
}

document.body.appendChild(component())
document.body.appendChild(icon())

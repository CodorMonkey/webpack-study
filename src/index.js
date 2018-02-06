import _ from 'lodash'
import print from './print'

function render () {
  var element = document.createElement('div')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  document.body.appendChild(element)

  var btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = print
  document.body.appendChild(btn)
}

render()
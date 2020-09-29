import _ from 'lodash'
import printMe from './print'
import './style.css'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component () {
  var element = document.createElement('div')
  console.log('component -> element', element)
  element.classList.add('hello')

  var btn = document.createElement('button')
  console.log('component1232 -> btn', btn)

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click1 me and check the console!'

  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

let element = component() // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
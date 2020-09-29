import _ from 'lodash'
import './style.css'
import Icon from './avatar2.jpg'
import Data from './data.xml'

function component () {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var myIcon = new Image()
  myIcon.src = Icon
  console.log('component -> myIcon', myIcon)
  element.appendChild(myIcon)

  console.log('Data', Data)

  return element;
}

document.body.appendChild(component());
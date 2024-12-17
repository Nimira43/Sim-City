import { createScene } from './src/createScene.js'
import { createCity } from './src/city.js'

window.onload = () => {
  const scene = createScene()
  const city = createCity(8)

  scene.initialise(city)
  window.scene = scene
  document.addEventListener('mousedown', window.scene.onMouseDown, false)
  document.addEventListener('mouseup', window.scene.onMouseUp, false)
  document.addEventListener('mousemove', window.scene.onMouseMove, false)
  window.scene.start()
}


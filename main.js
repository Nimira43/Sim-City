import { createScene } from './src/createScene.js'

window.onload = () => {
  window.scene = createScene()
  window.scene.start()
}


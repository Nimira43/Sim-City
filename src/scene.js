import * as THREE from 'https://unpkg.com/three/build.module.js'

export function createScene() {
  const gameWindow = document.getElementById('render-target')
  
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x777777)
  
  const camera = new THREE.PerspectiveCamera(75, gameWindow.offsetWidth / gameWindow.offsetHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow,offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement)

  function draw() {
    renderer.render(scene, camera)
  }

  function start() {
    renderer.setAnimationLoop(draw)
  }
}
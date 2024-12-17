import * as THREE from 'three'

export function createScene() {
  const gameWindow = document.getElementById('render-target')
   
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x777777)
  
  const camera = new THREE.PerspectiveCamera(75, gameWindow.offsetWidth / gameWindow.offsetHeight, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  function draw() {
    mesh.rotation.x += 0.01 
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  function start() {
    renderer.setAnimationLoop(draw)
  }
  
  function stop() {
    renderer.setAnimationLoop(null)
  }

  function onMouseDown() {
    console.log('mousedown')
  }

  function onMouseUp() {
    console.log('mouseup')
  }
  
  function onMouseMove() {
    console.log('mousemove')
  }

  return {
    start,
    stop,
    onMouseDown,
    onMouseUp,
    onMouseMove
  }
}

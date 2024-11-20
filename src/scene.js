import * as THREE from 'three'

export function createScene() {
  const gameWindow = document.getElementById('render-target')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x999999)

   

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff4500})
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
    isMouseDown = true
  }

  function onMouseUp() {
    isMouseUp = false
  }

  function onMouseMove(event) {
    if (isMouseDown) {
      cameraAzimuth += -((event.clientX - prevMouseX) * 0.5)
      cameraElevation += ((event.clientY - prevMouseY) * 0.5)
      cameraElevation = Math.min(90, Math.max(0, cameraElevation))
      updateCameraPosition()
    }
    prevMouseX = event.clientX
    prevMouseY = event.clientY
  }

  function updateCameraPosition() {
    camera.position.x = cameraRadius * Math.sin(cameraAzimuth * Math.PI / 180) * Math.cos(cameraElevation * Math.PI / 180)
    
    camera.position.y = cameraRadius * Math.sin(cameraElevation * Math.PI / 180)
    
    camera.position.z = cameraRadius * Math.cos(cameraAzimuth * Math.PI / 180) * Math.cos(cameraElevation * Math.PI / 180)

    camera.lookAt(0, 0, 0)
    camera.updateMatrix()
  }

  return {
    start,
    stop,
    onMouseDown,
    onMouseUp,
    onMouseMove
  }
}


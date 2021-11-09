const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create graphics on the canvas
const renderer = new THREE.WebGLRenderer();
// set renderer to the size of the window
renderer.setSize(window.innerWidth, window.innerHeight);
// add the renderer to the body
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.render(scene, camera);

function animate() {
    renderer.render(scene, camera);
    cube.rotation.y += .01;
    cube.rotation.x += .01;
    requestAnimationFrame(animate);
}
// "renderer to update the swebsite"
animate();
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


const textContainer = document.querySelector('.text-container');
const textItems = textContainer.querySelectorAll('.text-item');
const toggleButtons = document.querySelectorAll('.toggle-button');
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const clock = new THREE.Clock();
const gltfLoader = new GLTFLoader();

const text = document.querySelector('.circleText h5');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style = "transform:rotate(${i * 8.3}deg)">${char}</span>`
    ).join('');

let mixer;
let model = null;
let currentActiveText = 0;



textItems[currentActiveText].classList.add('active');

window.setActiveText = function (index) {
  textItems[currentActiveText].classList.remove('active');
  toggleButtons[currentActiveText].style.backgroundColor = "";

  currentActiveText = index;

  textItems[currentActiveText].classList.add('active');
  toggleButtons[currentActiveText].style.backgroundColor = "red";
}

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    setActiveText(i);
  });
}


canvas.addEventListener('wheel', (event) => {
  if (event.ctrlKey) {
    controls.enableZoom = true;
  } else {
    controls.enableZoom = false;
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'p') {
    pointLight.intensity = pointLight.intensity === 1 ? 0.01 : 1;
  }
});



gltfLoader.load(
  'computer/scene.gltf',
  
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    scene.add(model)
    mixer = new THREE.AnimationMixer( gltf.scene );
    mixer.timeScale = 5;

    gltf.animations.forEach( ( clip ) => {
      mixer.clipAction( clip ).play();
       } );
// animate();
  }, (progress) => {
    console.log(progress);
},
(error) => {
    console.error(error);}
    
)


const sizes ={
  width: window.innerWidth/3,
  height: window.innerHeight/2,
}


const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 1, 1000)
// camera.position.x = 5555
// scene.add(camera)


const renderer = new THREE.WebGL1Renderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



let lastElapsedTime = 0

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - lastElapsedTime
  lastElapsedTime = elapsedTime
  console.log('tick')
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()


const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set( 3, 3.5, 3 );
controls.update();



function animate() {//write a function to recursivealy call sth

 
  requestAnimationFrame( animate );
  controls.update();
  let delta = clock.getDelta();
  
  if ( mixer ) mixer.update( delta );
  
  
  
  // renderer.setSize(container.clientWidth, container.clientHeight);
}
animate();





//lights
const pointLight = new THREE.PointLight(0xffffff,0.1)
pointLight.position.set(10,10,10)

const ambientLight = new THREE.AmbientLight(0xffffff,0.1);
scene.add(pointLight, ambientLight)

//light helper and grid helper
const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(500,500);
scene.add(lightHelper)


// function addStar() {
//   const geometry = new THREE.SphereGeometry(25,124,124);
//   const material = new THREE.MeshStandardMaterial( { color: 0xffffff});
//   const star = new THREE.Mesh( geometry, material)
  
//   const[x,y,z] = Array(13).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

//   star.position.set(x,y,z);
//   scene.add(star)
   
// }

// Array(200).fill().forEach(addStar)


document.getElementById("myButt").addEventListener("click", function(){
  window.location.href = "https://github.com/wanghveganjerky/deploying-vite-project-5";
});


// window.addEventListener("load", function () {
//   document.getElementById("loading-screen").style.display = "none";
//   document.getElementById("main-content").style.display = "block";
// });


const oldButton = document.querySelector("#oldButton");
const textToToggle = document.querySelector("#textToToggle");



oldButton.addEventListener("click", function() {
  if (textToToggle.style.display === "none") {
    textToToggle.style.display = "block";
  } else {
    textToToggle.style.display = "none";
  }
});


document.getElementById("big-button").addEventListener("click", function() {
  window.location.href = "https://js.f22.href.blue/";
});

document.getElementById("big-button2").addEventListener("click", function() {
  window.location.href = "https://a-generative-web.com/";
});

document.getElementById("big-button3").addEventListener("click", function() {
  window.location.href = "https://courses.newschool.edu/courses/LMTH2080/7800/";
});


document.getElementById("classButton1").addEventListener("click", function() {
  window.location.href = "https://www.newschool.edu/parsons/bfa-communication-design/";
});

document.getElementById("classButton2").addEventListener("click", function() {
  window.location.href = "https://www.newschool.edu/parsons/bfa-communication-design/";
});

document.getElementById("classButton3").addEventListener("click", function() {
  window.location.href = "https://www.newschool.edu/parsons/bfa-communication-design/";
});



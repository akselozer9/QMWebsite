import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, RGBA_ASTC_8x5_Format } from 'three';
import * as THREE from 'three';
//import { Interaction } from 'three.interaction';
import * as TWEEN from '@tweenjs/tween.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import TextSprite from '@seregpie/three.text-sprite';

import { Object3D } from 'three/src/core/Object3D.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';


//object 3d imports end
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
//import {TextureLoader} from 'three/examples/jsm/loaders/ImageLoader.js';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector'




/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////FIRST EXPERIMENT/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const width  = 3200;
const length = 2200;
var hardsa = 0;
var softsa = 0;


//camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30,width/ length, 1, 1500)
camera.position.set(-50, 50, 150)
camera.lookAt(0,0,0)



//renderer
const renderer : THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(width,length)
renderer.shadowMap.enabled = true;
//document.body.appendChild(renderer.domElement);

//scene
const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x4c3f91);
const scene2: THREE.Scene = new THREE.Scene();
scene2.background = new THREE.Color(0x4c3f91);

//orbital controls
const control = new OrbitControls(camera, renderer.domElement)

const light = new THREE.DirectionalLight(0xfff0dd, 1);
light.position.set(0, 5, 10);
scene.add(light);

const lightk = new THREE.DirectionalLight(0x6a0dad, 1);
lightk.position.set(-40.5, 8, 40.5);
scene.add(lightk);

// ambient light
let hemiLight = new THREE.AmbientLight(0xffffff, 0.20);
scene.add(hemiLight);

//Add directional light
let dirLight = new THREE.DirectionalLight(0xffffff, .5);
dirLight.position.set(-30, 50, -30);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.left = -70;
dirLight.shadow.camera.right = 70;
dirLight.shadow.camera.top = 70;
dirLight.shadow.camera.bottom = -70;


function hard_percent(hards: number, softs: number){
  var sum = hards + softs;
    return Math.round(((hards/sum))*100)
  }

///mirrors
const mirrorBack1: Reflector = new Reflector(
 new THREE.CircleGeometry(15, 1000),
 {
     color: new THREE.Color(0x7f7f7f),
     textureWidth: window.innerWidth * window.devicePixelRatio,
     textureHeight: window.innerHeight * window.devicePixelRatio
 }
)
mirrorBack1.position.x = -45
mirrorBack1.position.y = 5
mirrorBack1.position.z = -45
mirrorBack1.rotateY((Math.PI)/4)
scene.add(mirrorBack1)


const mirrorBack2: Reflector = new Reflector(
 new THREE.CircleGeometry(15, 1000),
 {
     color: new THREE.Color(0x7f7f7f),
     textureWidth: window.innerWidth * window.devicePixelRatio,
     textureHeight: window.innerHeight * window.devicePixelRatio
 }
)
mirrorBack2.position.x = 45+3
mirrorBack2.position.y = 5
mirrorBack2.position.z = 45+3
mirrorBack2.rotateY((Math.PI)/4)
scene.add(mirrorBack2)
//mirrors


////src/assets/Quantum_Regular (1).json
const light_hard_path_mesh = new THREE.DirectionalLight(0x000000, 1);

var hard_path_mesh = new THREE.Mesh;
var soft_path_mesh = new THREE.Mesh;
var red_path_mesh = new THREE.Mesh;
var blue_path_mesh =new THREE.Mesh;

  const fontLoaderkk = new FontLoader();
  fontLoaderkk.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("CUBE PATH", {
  font,
  size: 5,
  height: 1,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  hard_path_mesh.geometry =  textGeometry;
  hard_path_mesh.material = textMaterial;
  hard_path_mesh.position.set(-37,-4,26-5);
  hard_path_mesh.rotateX(-(Math.PI)/2)
  hard_path_mesh.rotateZ(Math.PI/2)
  hard_path_mesh.castShadow = true;
  hard_path_mesh.receiveShadow = true;
  scene.add(hard_path_mesh);
  });

  const fontLoaderd = new FontLoader();
  fontLoaderd.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("BLUE PATH", {
  font,
  size: 10,
  height: .001,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x00008B});
  blue_path_mesh.geometry =  textGeometry;
  blue_path_mesh.material = textMaterial;
  blue_path_mesh.position.set(45,-5,-85);
  blue_path_mesh.rotateX(-(Math.PI)/2)
  blue_path_mesh.rotateZ(Math.PI/2)
  blue_path_mesh.castShadow = true;
  blue_path_mesh.receiveShadow = true;
  scene.add(blue_path_mesh);
  });




  const fontLoaderkkk = new FontLoader();
  fontLoaderkkk.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("DIAMOND PATH", {
  font,
  size: 5,
  height: 1,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0xEEBC1D});
  soft_path_mesh.geometry =  textGeometry;
  soft_path_mesh.material = textMaterial;
  soft_path_mesh.position.set(-30,-4,42);
  soft_path_mesh.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
  soft_path_mesh.castShadow = true;
  soft_path_mesh.receiveShadow = true;
  scene.add(soft_path_mesh);
  });

  const fontLoaderss = new FontLoader();
  fontLoaderss.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("RED PATH", {
  font,
  size: 8,
  height: .001,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0x8b0000});
  red_path_mesh.geometry =  textGeometry;
  red_path_mesh.material = textMaterial;
  red_path_mesh.position.set(50,-5,-43);
  red_path_mesh.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
  red_path_mesh.castShadow = true;
  red_path_mesh.receiveShadow = true;
  scene.add(red_path_mesh);
  });


var Hard_Num = 0;
var Soft_Num = 0;

var text_hard = new THREE.Mesh;
function LoadFont_Hard(hards: number){
const fontLoader = new FontLoader();
fontLoader.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(hards.toString(), {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
text_hard.geometry =  textGeometry;
text_hard.material = textMaterial;
text_hard.position.set(12,25,-70);
});
}
scene.add(text_hard);
//src/assets/ArcadeClassic_Regular (1).json
///assets/Lacona Demo_Regular (1).json
var hard_words = new THREE.Mesh;
const fontLoaderh = new FontLoader();
fontLoaderh.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Blue Electrons', {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
hard_words.geometry =  textGeometry;
hard_words.material = textMaterial;
hard_words.position.set(20,25,-70);
});
scene.add(hard_words);

var perc_hard = new THREE.Mesh;
function LoadFontPercHard(percent: number){
const fontLoaderPercHard = new FontLoader();
fontLoaderPercHard.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: .01
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
perc_hard.geometry =  textGeometry;
perc_hard.material = textMaterial;
perc_hard.position.set(52,25,-70);
});
}


var text_soft = new THREE.Mesh;

function LoadFont_Soft(softs: number){
const fontLoader = new FontLoader();
fontLoader.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(softs.toString(), {
font,
size: 4,
height: .01
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
text_soft.geometry =  textGeometry;
text_soft.material = textMaterial;
text_soft.position.set(12-3,30,-70);
});
}

const glftLoaderc = new GLTFLoader();
glftLoaderc.load("./assets/cyberpunk_diner_sign_japanese (1)/scene.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(3.7,2,1.5);
gltfScene.scene.position.set(40,11,-73);
});

const geomety = new THREE.PlaneGeometry( 57, 10 );
const materil = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geomety, materil );
plane.position.set(35,29,-72)
scene.add( plane );




var soft_words = new THREE.Mesh;
const fontLoaders = new FontLoader();
fontLoaders.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Red Electrons', {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
soft_words.geometry =  textGeometry;
soft_words.material = textMaterial;
soft_words.position.set(20,30,-70);
});
scene.add(soft_words);

var perc_soft = new THREE.Mesh;
function LoadFontPercSoft(percent: number){
const fontLoaderPercSoft = new FontLoader();
fontLoaderPercSoft.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: .01
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
perc_soft.geometry =  textGeometry;
perc_soft.material = textMaterial;
perc_soft.position.set(52,30,-70);
});
}




const light2 = new THREE.DirectionalLight(0xff0000, 1);
light2.position.set(25, 5, 125);
//scene.add(light2);
const light3 = new THREE.DirectionalLight(0xFFFF00, 1);
light3.position.set(-25, 5, -125);
//scene.add(light3);
const light4 = new THREE.DirectionalLight(0x0000FF, 1);
light2.position.set(-25, 5, 125);
scene.add(light4);
const light5 = new THREE.DirectionalLight(0x0000FF, 1);
light3.position.set(25, 5, -125);
//scene.add(light5);

const raycaster = new THREE.Raycaster(); // create once
const clickMouse = new THREE.Vector2();  // create once
const moveMouse = new THREE.Vector2();   // create once
var draggable: THREE.Object3D;

function intersect(pos: THREE.Vector2) {
 raycaster.setFromCamera(pos, camera);
 return raycaster.intersectObjects(scene.children,true);
}


// const glftLoadera = new GLTFLoader();
// glftLoadera.load("./assets/mario_mystery_box/scene.gltf", (gltfScene) => {
// scene.add(gltfScene.scene);
// gltfScene.scene.scale.set(25,25,25);
// gltfScene.scene.position.set(-40.2,-15,40.2);
// });
//src/assets/gart130_sci-fi_crate/scene.gltf
// const glftLoadera = new GLTFLoader();
// glftLoadera.load("./assets/sci-fi_crate_matthew_brett/scene.gltf", (gltfScene) => {
// scene.add(gltfScene.scene);
// gltfScene.scene.scale.set(6,6,6);
// gltfScene.scene.position.set(-40.2,3,40.2);
// });


//40.2
const glftLoaderb = new GLTFLoader();
glftLoaderb.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(39.2,-15,-40.2);
});
const glftLoaderr = new GLTFLoader();
glftLoaderr.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(41.2,-15,-40.2);
});
const glftLoaderbkx = new GLTFLoader();
glftLoaderbkx.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(40.2,-14.8,-41.2);
});
const glftLoaderrpx = new GLTFLoader();
glftLoaderrpx.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(40.2,-14.8,-39.2);
});


const lftLoaderb = new GLTFLoader();
lftLoaderb.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(39.2,-15,-40.2);
});
const lftLoaderr = new GLTFLoader();
lftLoaderr.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(41.2,-15,-40.2);
});
const lftLoaderbkx = new GLTFLoader();
lftLoaderbkx.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(40.2,-14.8,-41.2);
});
const lftLoaderrpx = new GLTFLoader();
lftLoaderrpx.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(40.2,-14.8,-39.2);
});








///////////////////////////////////
const gglftLoaderb = new GLTFLoader();
gglftLoaderb.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-39.2,-15,40.2);
});
const gglftLoaderr = new GLTFLoader();
gglftLoaderr.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-41.2,-15,40.2);
});
const gglftLoaderbkx = new GLTFLoader();
gglftLoaderbkx.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-40.2,-14.8,41.2);
});
const gglftLoaderrpx = new GLTFLoader();
gglftLoaderrpx.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-40.2,-14.8,39.2);
});

const gglftLoaderbs = new GLTFLoader();
gglftLoaderbs.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-39.2,-15,40.2);
});
const gglftLoaderrs = new GLTFLoader();
gglftLoaderrs.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-41.2,-15,40.2);
});
const gglftLoaderbkxs = new GLTFLoader();
gglftLoaderbkxs.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-40.2,-14.8,41.2);
});
const gglftLoaderrpxs = new GLTFLoader();
gglftLoaderrpxs.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-40.2,-14.8,39.2);
});














const geomtry = new THREE.BoxGeometry( 12, 12,.5);
const matrial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plan = new THREE.Mesh( geomtry, matrial );
plan.position.set(40,8.4-.3,-40)
plan.rotateX((Math.PI)/2)
scene.add( plan );
const geomtryy = new THREE.BoxGeometry( 12, 12,.5);
const matrialy = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plany = new THREE.Mesh( geomtryy, matrialy );
plany.position.set(40,8.4-.3,-40)
plany.rotateX((Math.PI)/2)
scene2.add( plany );


const hardobjects : THREE.Mesh[] = []
const cubes: THREE.Mesh[] = []
function createHardElectron() {
  //let truthy = true;
   var x = Math.random();
 let sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1),
 new THREE.MeshPhongMaterial({ color: 0xff0000}))
sphere1.position.set(-20, .2, 20)
sphere1.castShadow = true
sphere1.receiveShadow = true
hardobjects.push(sphere1);
scene.add(sphere1)


const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(4,10,0);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);
cube.visible = false;
cubes.push(cube);





 var start = {x: -60, y: .2, z: 42 };
 var target1 = { x: -42, y: .2, z: 42 };
 var target2 = { x: -42, y: .2, z: -42 };
 var target3 = { x: 42, y: .2, z: -42 };


 var tar_x = { x: 43, y: .2, z: -42 };
 var target4 = { x: 200, y: .2, z: -42 };

 var tar_z = { x: 42, y: .2, z: -43 };
 var target5  = { x: 42, y: .2, z: -200 };


 const updateFunc = function (object: {
   x: number;
   y: number;
   z: number;
 }, elapsed: number) {
   sphere1.position.x = object.x;
   sphere1.position.y = object.y;
   sphere1.position.z = object.z;

   cube.position.x = object.x;
   cube.position.y = object.y;
   cube.position.z = object.z;

   if(sphere1.position.z == 42 && sphere1.position.x == -42){
    sphere1.material.color.setHex(0x0000ff);
    sphere1.visible = false;
    cube.visible = true;
  }

   if(sphere1.position.z == -42 && sphere1.position.x == 42 ){

    sphere1.visible = false;
    cube.visible = true;
 }
if(sphere1.position.x == 42 && sphere1.position.z == -43){
  //++hardsa;
  ++softsa;
  var percent = hard_percent(0,softsa);
  scene.remove(text_hard);
  scene.remove(perc_hard);
  scene.remove(perc_soft);
  LoadFont_Hard(0);
  LoadFont_Soft(softsa);
  LoadFontPercHard(percent);
  LoadFontPercSoft(Math.round((1-(percent/100))*100));
  scene.add(text_hard);
  scene.add(perc_hard);
  scene.add(perc_soft);
  sphere1.material.color.setHex(0xffffff);
  sphere1.visible = true;
  sphere1.material.color.setHex(0Xff0000)
sphere1.scale.set(2.2,2.2,2.2)
  cube.visible = false;
}
if(sphere1.position.z == -42 && sphere1.position.x == 43 ){
  ++softsa;
  var percent = hard_percent(0,softsa);
  scene.remove(text_soft);
  scene.remove(perc_soft);
  scene.remove(perc_hard);
  LoadFont_Soft(softsa);
  LoadFontPercHard(percent);
  LoadFontPercSoft(Math.round((1-(percent/100))*100));
  scene.add(text_soft);
  scene.add(perc_soft);
  scene.add(perc_hard);
  sphere1.visible = true;
  sphere1.material.color.setHex(0Xff0000)
sphere1.scale.set(2.2,2.2,2.2)
   cube.visible = false;
}
if(sphere1.position.x == 200){
  scene.remove(sphere1);
  scene.remove(cube);
}
if(sphere1.position.z == -200){
  scene.remove(sphere1);
  scene.remove(cube);
}

 }
 //path_start
 var decision1;
 var decision2;
 var tween1 = new TWEEN.Tween(start).to(target1, 2000)
 var tween2 = new TWEEN.Tween(start).to(target2, 2000)
 var tween3 = new TWEEN.Tween(start).to(target3, 2000)
 if(x <= 0.5){
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }
 else{
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }


 tween1.chain(tween2).start()
 tween2.chain(tween3)
 tween3.chain(decision1)
 decision1.chain(decision2)

 tween1.onUpdate(updateFunc)
 tween2.onUpdate(updateFunc)
 tween3.onUpdate(updateFunc)
 decision1.onUpdate(updateFunc)
 decision2.onUpdate(updateFunc)
 //path_end
}






const softobjects : THREE.Mesh[] = []
const diamonds: THREE.Mesh[] = []


function createSoftElectron() {
  //let truthy = true;
  let x = Math.random()
  const front = Math.tan(Math.PI / 6)
  const back = Math.cos(Math.PI / 6)
  const vertices = [
    0, 1, 0, // 0: top
    1, 0, front, // 1: right
    -1, 0, front, // 2: left
    0, 0, -back, // 3: back middle
    0, -1, 0, // 4: bottom
  ]
  const faces = [
    2, 1, 0, // left, right, top
    1, 3, 0, // right, back, top
    3, 2, 0, // back, left, top
    2, 4, 1, // left, bottom, right
    1, 4, 3, // right, bottom, back
    3, 4, 2, // back, bottom, left
  ]
  const geometrykk = new THREE.PolyhedronGeometry(vertices, faces, 30, 0)
   const materialkk = new THREE.MeshBasicMaterial({color: 0xFFD700})
   const meshkk = new THREE.Mesh(geometrykk, materialkk)
  meshkk.scale.set(0.06,0.08,0.06)
  scene.add(meshkk)
  meshkk.castShadow = true;
  meshkk.receiveShadow = true;
  meshkk.visible = false;
  diamonds.push(meshkk);




  const sphere2 = new THREE.Mesh(
 new THREE.SphereGeometry(1),
 new THREE.MeshPhongMaterial({color: 0xff0000})
);
sphere2.position.set(10,.3,-10);
sphere2.castShadow = true;
sphere2.receiveShadow = true;
softobjects.push(sphere2);
scene.add(sphere2);

 var start = {x: -60, y: .2, z: 42 };
 var target1 = { x: -42, y: .2, z: 42 };
 var target2 = { x: 42, y: .2, z: 42 };
 var target3 = { x: 42, y: .2, z: -42 };

var tar_x =  { x: 43, y: .2, z: -42 };
 var target4 = { x: 200, y: .2, z: -42};

 var tar_z =  { x: 42, y: .2, z: -43 };
 var target5 = { x: 42, y: .2, z: -200 };


 const updateFunc = function (object: {
   x: number;
   y: number;
   z: number;
 }, elapsed: number) {

   sphere2.position.x = object.x;
   sphere2.position.y = object.y;
   sphere2.position.z = object.z;

   meshkk.position.x = object.x;
   meshkk.position.y = object.y;
   meshkk.position.z = object.z;


    if(sphere2.position.z == 42 && sphere2.position.x == -42){
      // sphere2.material.color.setHex(0x0000ff);
      sphere2.visible = false;
      meshkk.visible = true;
    }


   if(sphere2.position.z == -42 && sphere2.position.x == 42){
    sphere2.visible = false;
    meshkk.visible = true;
  }

  if(sphere2.position.z == -42 && sphere2.position.x == 43 ){
    ++softsa;
    var percent = hard_percent(0,softsa);
    scene.remove(text_soft);
    scene.remove(perc_soft);
    scene.remove(perc_hard);
    LoadFont_Soft(softsa);
    LoadFontPercHard(percent);
    LoadFontPercSoft(Math.round((1-(percent/100))*100));
    scene.add(text_soft);
    scene.add(perc_soft);
    scene.add(perc_hard);

    sphere2.material.color.setHex(0xff0000);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk.visible = false;

  }

  if(sphere2.position.x == 42 && sphere2.position.z == -43){
   // ++hardsa;
    ++softsa
    var percent = hard_percent(0,softsa);
    scene.remove(text_hard);
    scene.remove(perc_hard);
    scene.remove(perc_soft);
    LoadFont_Hard(0);
    LoadFont_Soft(softsa);
    LoadFontPercHard(percent);
    LoadFontPercSoft(Math.round((1-(percent/100))*100));
    scene.add(text_hard);
    scene.add(perc_hard);
    scene.add(perc_soft);
    sphere2.material.color.setHex(0Xff0000);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk.visible = false;
  }

  if(sphere2.position.z == -200){
    scene.remove(sphere2);
    scene.remove(meshkk);
  }
  if(sphere2.position.x == 200){
    scene.remove(sphere2);
    scene.remove(meshkk);
  }

 }

 var decision1;
 var decision2;
 var tween1 = new TWEEN.Tween(start).to(target1, 2000)
 var tween2 = new TWEEN.Tween(start).to(target2, 2000)
 var tween3 = new TWEEN.Tween(start).to(target3, 2000)

 if(x <= 0.5){
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }
 else{
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }

 tween1.chain(tween2).start()
 tween2.chain(tween3)
 tween3.chain(decision1)
 decision1.chain(decision2)
 tween1.onUpdate(updateFunc)
 tween2.onUpdate(updateFunc)
 tween3.onUpdate(updateFunc)
 decision1.onUpdate(updateFunc)
 decision2.onUpdate(updateFunc)
}

function createPixels(){
  for(let i = 0; i < 500; i++){
    var q1_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q2_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q3_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q4_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q5_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q6_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q7_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q8_color = '#'+(Math.random()*0xff0000<<0).toString(16)
  let quad1 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q1_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad1.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000)
  scene.add(quad1)


  let quad2 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q2_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad2.position.set(Math.random()*1000, Math.random()*1000*-1, Math.random()*1000)
  scene.add(quad2)


  let quad3 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q3_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad3.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000*-1)
  scene.add(quad3)


  let quad4 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.PointsMaterial({ color: q4_color, size: 15, transparent: false}))
  quad4.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000)
  scene.add(quad4)


  let quad5 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q5_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad5.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000*-1)
  scene.add(quad5)


  let quad6 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q6_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad6.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000)
  scene.add(quad6)



  let quad7 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q7_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad7.position.set(Math.random()*1000, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene.add(quad7)


  let quad8 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q8_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad8.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene.add(quad8)

  }

  }

createPixels();







 let scale = { x: 3, y: 3, z: 3 }
 let pos = { x: 5, y: 5, z: -15 }

 let button = new THREE.Mesh(new THREE.BoxBufferGeometry(),
     new THREE.MeshPhongMaterial({ color: 0xffffff },));
     button.position.set(0, -5, 0);
     button.scale.set(94, -3, 94);
     button.castShadow = true;
     button.receiveShadow = true;
 scene.add(button)
 var button_num = button.id;
//////////////button end/////////////


var buttonid = 0;
const glftLoaderk = new GLTFLoader();
glftLoaderk.load("./assets/emergency_stop_button/scene.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(.05,.07,.05);
gltfScene.scene.position.set(-40.5,8,40.5);
buttonid = gltfScene.scene.id;
});


var button_elec1 = new THREE.Mesh;
const fontLoaderx = new FontLoader();
fontLoaderx.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Fire', {
font,
size: 2,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
button_elec1.geometry =  textGeometry;
button_elec1.material = textMaterial;
button_elec1.position.set(-43,12.5,45.5);
});
scene.add(button_elec1);
var button_elec2 = new THREE.Mesh;
const fontLoaderxx = new FontLoader();
fontLoaderx.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Electrons', {
font,
size: 1.4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial();
button_elec2.geometry =  textGeometry;
button_elec2.material = textMaterial;
button_elec2.position.set(-45.2,9.5,45.5);
});
scene.add(button_elec2);




var clock = new THREE.Clock;

export function animate(){
  TWEEN.update();
  var t = clock.getElapsedTime();
  if (t >= 1)
  {
      clock = new THREE.Clock;
      button_elec1.scale.set(1,1,1);
      button_elec2.scale.set(1,1,1);
  }
  else
  {
      button_elec1.scale.x = 1-(t/14.0);
      button_elec1.scale.y = 1-(t/14.0);
      button_elec1.scale.z = 1-(t/14.0);
      button_elec2.scale.x = 1-(t/14.0);
      button_elec2.scale.y = 1-(t/14.0);
      button_elec2.scale.z = 1-(t/14.0);
  }

 for(var i = 0; i < hardobjects.length ; ++i){
  cubes[i].rotation.x += 0.1;
  cubes[i].rotation.z += 0.1;
 }

 for(var i = 0; i < diamonds.length ; ++i){
  diamonds[i].rotation.y += 0.07;
 }
 requestAnimationFrame(animate);
 renderer.render(scene,camera);
}

const container = document.createElement('ex1');
container.style.position = 'relative';
container.style.left = '1800px';
container.style.top = '-6400px'
container.style.width = "700px";
container.style.height = "700px";
container.style.display = "flex";
document.body.appendChild(container)
container.appendChild(renderer.domElement)

container.addEventListener('click', event => {

  // let canvasBounds = this.renderer.context.canvas.getBoundingClientRect();
  // this.mouse.x = ( ( event.clientX - canvasBounds.left ) / ( canvasBounds.right - canvasBounds.left ) ) * 2 - 1;
  // this.mouse.y = - ( ( event.clientY - canvasBounds.top ) / ( canvasBounds.bottom - canvasBounds.top) ) * 2 + 1;

let canvasBounds  = container.getBoundingClientRect();
  let x = Math.random()
  let x2 = Math.random()

  // clickMouse.x = ( ( event.clientX - 1500 ) / ( (1500+700) - 1500 ) ) * 2 - 1;
  // clickMouse.y = - ( ( event.clientY - (-10500) ) / ( (-10500+700) - (-10500)) ) * 2 + 1;
  clickMouse.x = ((event.clientX-container.getBoundingClientRect().left) / window.innerWidth) * 2 - 1;
  clickMouse.y = -((event.clientY-container.getBoundingClientRect().top) / window.innerHeight) * 2 + 1;
  const found = intersect(clickMouse);
  if (found.length > 0) {
       if(x <= .5){
        createHardElectron();
       }
       else{
        createSoftElectron();
       }
  }
})

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2  EX2 EX2 EX2   EX2 EX2 EX2         /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////// /////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////



const width2  = 3200;
const length2 = 2200;
var hardsa2 = 0;
var softsa2 = 0;


//camera
const camera2: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30,width2/ length2, 1, 1500)
camera2.position.set(-50, 500, 150)
camera2.lookAt(0,0,0)



//renderer
const renderer2 : THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true})
renderer2.setPixelRatio(window.devicePixelRatio)
renderer2.setSize(width2,length2)
renderer2.shadowMap.enabled = true;
//document.body.appendChild(renderer.domElement);

//scene


//orbital controls
const control2 = new OrbitControls(camera2, renderer2.domElement)

const light2x = new THREE.DirectionalLight(0xfff0dd, 1);
light2x.position.set(0, 5, 10);
scene2.add(light2x);

const lightk2 = new THREE.DirectionalLight(0x6a0dad, 1);
lightk2.position.set(-40.5, 8, 40.5);
scene2.add(lightk2);

// ambient light
let hemiLight2 = new THREE.AmbientLight(0xffffff, 0.20);
scene2.add(hemiLight2);

//Add directional light
let dirLight2 = new THREE.DirectionalLight(0xffffff, .5);
dirLight2.position.set(-30, 50, -30);
scene2.add(dirLight2);
dirLight2.castShadow = true;
dirLight2.shadow.mapSize.width = 2048;
dirLight2.shadow.mapSize.height = 2048;
dirLight2.shadow.camera.left = -70;
dirLight2.shadow.camera.right = 70;
dirLight2.shadow.camera.top = 70;
dirLight2.shadow.camera.bottom = -70;


function hard_percent2(hards: number, softs: number){
  var sum = hards + softs;
    return Math.round(((hards/sum))*100)
  }

///mirrors
const mirrorBack12: Reflector = new Reflector(
 new THREE.CircleGeometry(15, 1000),
 {
     color: new THREE.Color(0x7f7f7f),
     textureWidth: window.innerWidth * window.devicePixelRatio,
     textureHeight: window.innerHeight * window.devicePixelRatio
 }
)
mirrorBack12.position.x = -45
mirrorBack12.position.y = 5
mirrorBack12.position.z = -45
mirrorBack12.rotateY((Math.PI)/4)
scene2.add(mirrorBack12)


const mirrorBack22: Reflector = new Reflector(
 new THREE.CircleGeometry(15, 1000),
 {
     color: new THREE.Color(0x7f7f7f),
     textureWidth: window.innerWidth * window.devicePixelRatio,
     textureHeight: window.innerHeight * window.devicePixelRatio
 }
)
mirrorBack22.position.x = 45
mirrorBack22.position.y = 5
mirrorBack22.position.z = 45
mirrorBack22.rotateY((Math.PI)/4)
scene2.add(mirrorBack22)
//mirrors


////src/assets/Quantum_Regular (1).json
const light_hard_path_mesh2 = new THREE.DirectionalLight(0x000000, 1);

var hard_path_mesh2 = new THREE.Mesh;
var soft_path_mesh2 = new THREE.Mesh;
var red_path_mesh2 = new THREE.Mesh;
var blue_path_mesh2 =new THREE.Mesh;

  const fontLoaderkk2 = new FontLoader();
  fontLoaderkk2.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("CUBE PATH", {
  font,
  size: 5,
  height: 1,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  hard_path_mesh2.geometry =  textGeometry;
  hard_path_mesh2.material = textMaterial;
  hard_path_mesh2.position.set(-37,-4,26);
  hard_path_mesh2.rotateX(-(Math.PI)/2)
  hard_path_mesh2.rotateZ(Math.PI/2)
  hard_path_mesh2.castShadow = true;
  hard_path_mesh2.receiveShadow = true;
  scene2.add(hard_path_mesh2);
  });

  const fontLoaderd2 = new FontLoader();
  fontLoaderd2.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("BLUE PATH", {
  font,
  size: 10,
  height: .001,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x00008B});
  blue_path_mesh2.geometry =  textGeometry;
  blue_path_mesh2.material = textMaterial;
  blue_path_mesh2.position.set(45,-5,-85);
  blue_path_mesh2.rotateX(-(Math.PI)/2)
  blue_path_mesh2.rotateZ(Math.PI/2)
  blue_path_mesh2.castShadow = true;
  blue_path_mesh2.receiveShadow = true;
  scene2.add(blue_path_mesh2);
  });




  const fontLoaderkkk2 = new FontLoader();
  fontLoaderkkk2.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("DIAMOND PATH", {
  font,
  size: 5,
  height: 1,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0xEEBC1D});
  soft_path_mesh2.geometry =  textGeometry;
  soft_path_mesh2.material = textMaterial;
  soft_path_mesh2.position.set(-30,-4,42);
  soft_path_mesh2.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
  soft_path_mesh2.castShadow = true;
  soft_path_mesh2.receiveShadow = true;
  scene2.add(soft_path_mesh2);
  });

  const fontLoaderss2 = new FontLoader();
  fontLoaderss2.load("./assets/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("RED PATH", {
  font,
  size: 8,
  height: .001,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0x8b0000});
  red_path_mesh2.geometry =  textGeometry;
  red_path_mesh2.material = textMaterial;
  red_path_mesh2.position.set(50,-5,-43);
  red_path_mesh2.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
  red_path_mesh2.castShadow = true;
  red_path_mesh2.receiveShadow = true;
  scene2.add(red_path_mesh2);
  });


var Hard_Num = 0;
var Soft_Num = 0;

var text_hard2 = new THREE.Mesh;
function LoadFont_Hard2(hards: number){
const fontLoader = new FontLoader();
fontLoader.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(hards.toString(), {
font,
size: 4,
height: 2,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
text_hard2.geometry =  textGeometry;
text_hard2.material = textMaterial;
text_hard2.position.set(12,25,-70);
});
}
scene2.add(text_hard2);
var hard_words2 = new THREE.Mesh;
const fontLoaderh2 = new FontLoader();
fontLoaderh2.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Blue Electrons', {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
hard_words2.geometry =  textGeometry;
hard_words2.material = textMaterial;
hard_words2.position.set(20,25,-70);
});
scene2.add(hard_words2);

var perc_hard2 = new THREE.Mesh;
function LoadFontPercHard2(percent: number){
const fontLoaderPercHard = new FontLoader();
fontLoaderPercHard.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: 2
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
perc_hard2.geometry =  textGeometry;
perc_hard2.material = textMaterial;
perc_hard2.position.set(52,25,-70);
});
}


var text_soft2 = new THREE.Mesh;

function LoadFont_Soft2(softs: number){
const fontLoader = new FontLoader();
fontLoader.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(softs.toString(), {
font,
size: 4,
height: 2
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
text_soft2.geometry =  textGeometry;
text_soft2.material = textMaterial;
text_soft2.position.set(12,30,-70);
});
}

const glftLoaderc2 = new GLTFLoader();
glftLoaderc2.load("./assets/cyberpunk_diner_sign_japanese (1)/scene.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(3.7,2,1.5);
gltfScene.scene.position.set(40,11,-73);
});

const glftLoadercs = new GLTFLoader();
glftLoadercs.load("./assets/low-poly_brick_wall/scene.gltf", (gltfScene) => {
scene2.add(gltfScene.scene)
gltfScene.scene.scale.set(5,10,20);
gltfScene.scene.rotateY((Math.PI)/2);
gltfScene.scene.position.set(0,-5,-35);
});



const geomety2 = new THREE.PlaneGeometry( 57, 10 );
const materil2 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geomety2, materil2 );
plane2.position.set(35,29,-72)
scene2.add( plane2 );




var soft_words2 = new THREE.Mesh;
const fontLoaders2 = new FontLoader();
fontLoaders2.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Red Electrons', {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
soft_words2.geometry =  textGeometry;
soft_words2.material = textMaterial;
soft_words2.position.set(20,30,-70);
});
scene2.add(soft_words2);

var perc_soft2 = new THREE.Mesh;
function LoadFontPercSoft2(percent: number){
const fontLoaderPercSoft = new FontLoader();
fontLoaderPercSoft.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: 2
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
perc_soft2.geometry =  textGeometry;
perc_soft2.material = textMaterial;
perc_soft2.position.set(52,30,-70);
});
}



const light2p = new THREE.DirectionalLight(0xff0000, 1);
light2p.position.set(25, 5, 125);
scene2.add(light2p);
const light3p = new THREE.DirectionalLight(0xFFFF00, 1);
light3p.position.set(-25, 5, -125);
scene2.add(light3p);
const light4p = new THREE.DirectionalLight(0x0000FF, 1);
light2p.position.set(-25, 5, 125);
scene2.add(light4p);
const light5p = new THREE.DirectionalLight(0x0000FF, 1);
light3p.position.set(25, 5, -125);
scene2.add(light5p);

const raycaster2 = new THREE.Raycaster(); // create once
const clickMouse2 = new THREE.Vector2();  // create once
const moveMouse2 = new THREE.Vector2();   // create once
var draggable2: THREE.Object3D;

function intersect2(pos: THREE.Vector2) {
 raycaster2.setFromCamera(pos, camera2);
 return raycaster2.intersectObjects(scene2.children,true);
}


const glftLoadera2 = new GLTFLoader();
glftLoadera2.load("./assets/mario_mystery_box/scene.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,25);
gltfScene.scene.position.set(-40.2,-15,40.2);
});





const glftLoaderb2 = new GLTFLoader();
glftLoaderb2.load("./assets/mario_mystery_box/scene.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,25);
gltfScene.scene.position.set(40.2,-15,-40.2);

});




const hardobjects2 : THREE.Mesh[] = []
const cubes2: THREE.Mesh[] = []
function createHardElectron2() {
  //let truthy = true;
   var x = Math.random();
 let sphere12 = new THREE.Mesh(new THREE.SphereGeometry(1),
 new THREE.MeshPhongMaterial({ color: 0xff0000}))
sphere12.position.set(-20, .2, 20)
sphere12.castShadow = true
sphere12.receiveShadow = true
hardobjects2.push(sphere12);
scene2.add(sphere12)


const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const cube2 = new THREE.Mesh( geometry, material );
cube2.position.set(4,10,0);
cube2.castShadow = true;
cube2.receiveShadow = true;
scene2.add(cube2);
cube2.visible = false;
cubes2.push(cube2);





 var start = {x: -60, y: .2, z: 42 };
 var target1 = { x: -42, y: .2, z: 42 };
 var target2 = { x: -42, y: .2, z: -42 };
 var target3 = { x: 42, y: .2, z: -42 };


 var tar_x = { x: 43, y: .2, z: -42 };
 var target4 = { x: 200, y: .2, z: -42 };

 var tar_z = { x: 42, y: .2, z: -43 };
 var target5  = { x: 42, y: .2, z: -200 };


 const updateFunc = function (object: {
   x: number;
   y: number;
   z: number;
 }, elapsed: number) {
   sphere12.position.x = object.x;
   sphere12.position.y = object.y;
   sphere12.position.z = object.z;

   cube2.position.x = object.x;
   cube2.position.y = object.y;
   cube2.position.z = object.z;

   if(sphere12.position.z == 42 && sphere12.position.x == -42){
    sphere12.material.color.setHex(0x0000ff);
    sphere12.visible = false;
    cube2.visible = true;
  }

   if(sphere12.position.z == -42 && sphere12.position.x == 42 ){

    sphere12.visible = false;
    cube2.visible = true;
 }
if(sphere12.position.x == 42 && sphere12.position.z == -43){
  ++hardsa2;
  var percent2 = hard_percent2(hardsa2,softsa2);
  scene2.remove(text_hard2);
  scene2.remove(perc_hard2);
  scene2.remove(perc_soft2);
  LoadFont_Hard2(hardsa2);
  LoadFontPercHard2(percent2);
  LoadFontPercSoft2(Math.round((1-(percent2/100))*100));
  scene2.add(text_hard2);
  scene2.add(perc_hard2);
  scene2.add(perc_soft2);
  sphere12.material.color.setHex(0xffffff);
  sphere12.visible = true;
  sphere12.material.color.setHex(0X00008B)
sphere12.scale.set(2.2,2.2,2.2)
  cube2.visible = false;
}
if(sphere12.position.z == -42 && sphere12.position.x == 43 ){
  ++softsa2;
  var percent2 = hard_percent2(hardsa2,softsa2);
  scene2.remove(text_soft2);
  scene2.remove(perc_soft2);
  scene2.remove(perc_hard2);
  LoadFont_Soft2(softsa2);
  LoadFontPercHard2(percent2);
  LoadFontPercSoft2(Math.round((1-(percent2/100))*100));
  scene2.add(text_soft2);
  scene2.add(perc_soft2);
  scene2.add(perc_hard2);
  sphere12.visible = true;
  sphere12.material.color.setHex(0Xff0000)
sphere12.scale.set(2.2,2.2,2.2)
   cube2.visible = false;
}
if(sphere12.position.x == 200){
  scene2.remove(sphere12);
  scene2.remove(cube2);
}
if(sphere12.position.z == -200){
  scene2.remove(sphere12);
  scene2.remove(cube2);
}

 }
 //path_start
 var decision1;
 var decision2;
 var tween1 = new TWEEN.Tween(start).to(target1, 2000)
 var tween2 = new TWEEN.Tween(start).to(target2, 2000)
 var tween3 = new TWEEN.Tween(start).to(target3, 2000)
 if(x <= 0.5){
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }
 else{
  decision1 = new TWEEN.Tween(start).to(tar_z, 100)
 decision2 = new TWEEN.Tween(start).to(target5, 4000)
 }


 tween1.chain(tween2).start()
 tween2.chain(tween3)
 tween3.chain(decision1)
 decision1.chain(decision2)

 tween1.onUpdate(updateFunc)
 tween2.onUpdate(updateFunc)
 tween3.onUpdate(updateFunc)
 decision1.onUpdate(updateFunc)
 decision2.onUpdate(updateFunc)
 //path_end
}






const softobjects2 : THREE.Mesh[] = []
const diamonds2: THREE.Mesh[] = []


function createSoftElectron2() {
  //let truthy = true;
  let x = Math.random()
  const front = Math.tan(Math.PI / 6)
  const back = Math.cos(Math.PI / 6)
  const vertices2 = [
    0, 1, 0, // 0: top
    1, 0, front, // 1: right
    -1, 0, front, // 2: left
    0, 0, -back, // 3: back middle
    0, -1, 0, // 4: bottom
  ]
  const faces2 = [
    2, 1, 0, // left, right, top
    1, 3, 0, // right, back, top
    3, 2, 0, // back, left, top
    2, 4, 1, // left, bottom, right
    1, 4, 3, // right, bottom, back
    3, 4, 2, // back, bottom, left
  ]
  const geometrykk2 = new THREE.PolyhedronGeometry(vertices2, faces2, 30, 0)
   const materialkk2 = new THREE.MeshBasicMaterial({color: 0xFFD700})
   const meshkk2 = new THREE.Mesh(geometrykk2, materialkk2)
  meshkk2.scale.set(0.06,0.08,0.06)
  scene2.add(meshkk2)
  meshkk2.castShadow = true;
  meshkk2.receiveShadow = true;
  meshkk2.visible = false;
  diamonds2.push(meshkk2);




  const sphere2 = new THREE.Mesh(
 new THREE.SphereGeometry(1),
 new THREE.MeshPhongMaterial({color: 0xff0000})
);
sphere2.position.set(10,.3,-10);
sphere2.castShadow = true;
sphere2.receiveShadow = true;
softobjects2.push(sphere2);
scene2.add(sphere2);

 var start = {x: -60, y: .2, z: 42 };
 var target1 = { x: -42, y: .2, z: 42 };
 var target2 = { x: 42, y: .2, z: 42 };
 var target3 = { x: 42, y: .2, z: -42 };

var tar_x =  { x: 43, y: .2, z: -42 };
 var target4 = { x: 200, y: .2, z: -42};

 var tar_z =  { x: 42, y: .2, z: -43 };
 var target5 = { x: 42, y: .2, z: -200 };


 const updateFunc = function (object: {
   x: number;
   y: number;
   z: number;
 }, elapsed: number) {

   sphere2.position.x = object.x;
   sphere2.position.y = object.y;
   sphere2.position.z = object.z;

   meshkk2.position.x = object.x;
   meshkk2.position.y = object.y;
   meshkk2.position.z = object.z;


    if(sphere2.position.z == 42 && sphere2.position.x == -42){
      // sphere2.material.color.setHex(0x0000ff);
      sphere2.visible = false;
      meshkk2.visible = true;
    }


   if(sphere2.position.z == -42 && sphere2.position.x == 42){
    sphere2.visible = false;
    meshkk2.visible = true;
  }

  if(sphere2.position.z == -42 && sphere2.position.x == 43 ){
    ++softsa2;
    var percent = hard_percent2(hardsa2,softsa2);
    scene2.remove(text_soft2);
    scene2.remove(perc_soft2);
    scene2.remove(perc_hard2);
    LoadFont_Soft2(softsa2);
    LoadFontPercHard2(percent);
    LoadFontPercSoft2(Math.round((1-(percent/100))*100));
    scene2.add(text_soft2);
    scene2.add(perc_soft2);
    scene2.add(perc_hard2);

    sphere2.material.color.setHex(0xff0000);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk2.visible = false;

  }

  if(sphere2.position.x == 42 && sphere2.position.z == -43){
    ++hardsa2;
    var percent = hard_percent2(hardsa2,softsa2);
    scene2.remove(text_hard2);
    scene2.remove(perc_hard2);
    scene2.remove(perc_soft2);
    LoadFont_Hard2(hardsa2);
    LoadFontPercHard2(percent);
    LoadFontPercSoft2(Math.round((1-(percent/100))*100));
    scene2.add(text_hard2);
    scene2.add(perc_hard2);
    scene2.add(perc_soft2);
    sphere2.material.color.setHex(0X00008B);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk2.visible = false;
  }

  if(sphere2.position.z == -200){
    scene2.remove(sphere2);
    scene2.remove(meshkk2);
  }
  if(sphere2.position.x == 200){
    scene2.remove(sphere2);
    scene2.remove(meshkk2);
  }

 }

 var decision1;
 var decision2;
 var tween1 = new TWEEN.Tween(start).to(target1, 2000)
 var tween2 = new TWEEN.Tween(start).to(target2, 2000)
 var tween3 = new TWEEN.Tween(start).to(target3, 2000)

 if(x <= 0.5){
  decision1 = new TWEEN.Tween(start).to(tar_x, 100)
 decision2 = new TWEEN.Tween(start).to(target4, 4000)
 }
 else{
  decision1 = new TWEEN.Tween(start).to(tar_z, 100)
 decision2 = new TWEEN.Tween(start).to(target5, 4000)
 }

 tween1.chain(tween2).start()
 tween2.chain(tween3)
 tween3.chain(decision1)
 decision1.chain(decision2)
 tween1.onUpdate(updateFunc)
 tween2.onUpdate(updateFunc)
 tween3.onUpdate(updateFunc)
 decision1.onUpdate(updateFunc)
 decision2.onUpdate(updateFunc)
}



 let scale2 = { x: 3, y: 3, z: 3 }
 let pos2 = { x: 5, y: 5, z: -15 }

 let button2 = new THREE.Mesh(new THREE.BoxBufferGeometry(),
     new THREE.MeshPhongMaterial({ color: 0xffffff },));
     button2.position.set(0, -5, 0);
     button2.scale.set(90, -3, 90);
     button2.castShadow = true;
     button2.receiveShadow = true;
 scene2.add(button2)
 var button_num = button2.id;
//////////////button end/////////////



const glftLoaderk2 = new GLTFLoader();
glftLoaderk2.load("./assets/emergency_stop_button/scene.gltf", (gltfScene) => {
scene2.add(gltfScene.scene);
gltfScene.scene.scale.set(.05,.07,.05);
gltfScene.scene.position.set(-40.5,8,40.5);
});

var button_elec12 = new THREE.Mesh;
const fontLoaderx22 = new FontLoader();
fontLoaderx22.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Fire', {
font,
size: 2,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
button_elec12.geometry =  textGeometry;
button_elec12.material = textMaterial;
button_elec12.position.set(-43,12.5,45.5);
});
scene2.add(button_elec12);
var button_elec22 = new THREE.Mesh;
const fontLoaderxx2 = new FontLoader();
fontLoaderx22.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Electrons', {
font,
size: 1.4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial();
button_elec22.geometry =  textGeometry;
button_elec22.material = textMaterial;
button_elec22.position.set(-45.2,9.5,45.5);
});
scene2.add(button_elec22);

function createPixels2(){
  for(let i = 0; i < 500; i++){
    var q1_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q2_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q3_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q4_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q5_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q6_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q7_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q8_color = '#'+(Math.random()*0xff0000<<0).toString(16)
  let quad1 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q1_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad1.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000)
  scene2.add(quad1)


  let quad2 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q2_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad2.position.set(Math.random()*1000, Math.random()*1000*-1, Math.random()*1000)
  scene2.add(quad2)


  let quad3 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q3_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad3.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000*-1)
  scene2.add(quad3)


  let quad4 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.PointsMaterial({ color: q4_color, size: 15, transparent: false}))
  quad4.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000)
  scene2.add(quad4)


  let quad5 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q5_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad5.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000*-1)
  scene2.add(quad5)


  let quad6 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q6_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad6.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000)
  scene2.add(quad6)



  let quad7 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q7_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad7.position.set(Math.random()*1000, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene2.add(quad7)


  let quad8 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q8_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad8.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene2.add(quad8)

  }

  }

createPixels2();










var clock2 = new THREE.Clock;

export function animate2(){
  TWEEN.update();
  var t = clock2.getElapsedTime();
  if (t >= 1)
  {
      clock2 = new THREE.Clock;
      button_elec12.scale.set(1,1,1);
      button_elec22.scale.set(1,1,1);
  }
  else
  {
      button_elec12.scale.x = 1-(t/14.0);
      button_elec12.scale.y = 1-(t/14.0);
      button_elec12.scale.z = 1-(t/14.0);
      button_elec22.scale.x = 1-(t/14.0);
      button_elec22.scale.y = 1-(t/14.0);
      button_elec22.scale.z = 1-(t/14.0);
  }

 for(var i = 0; i < hardobjects2.length ; ++i){
  cubes2[i].rotation.x += 0.1;
  cubes2[i].rotation.z += 0.1;
 }

 for(var i = 0; i < diamonds2.length ; ++i){
  diamonds2[i].rotation.y += 0.07;
 }
 requestAnimationFrame(animate2);
 renderer2.render(scene2,camera2);
}

const container2 = document.createElement('ex1');
container2.style.position = 'relative';
container2.style.left = '700px';
container2.style.top = '-3200px'
container2.style.width = "700px";
container2.style.height = "700px";
container2.style.display = "flex";
document.body.appendChild(container2)
container2.appendChild(renderer2.domElement)

container2.addEventListener('click', event => {

  let x = Math.random()
  let x2 = Math.random()
  clickMouse2.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse2.y = -(event.clientY / window.innerHeight) * 2 + 1;
  const found = intersect2(clickMouse2);
  if (found.length > 0) {
        createSoftElectron2();
  }
})

////////////////////////////////////////////////////////////////
///////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2  EX2 EX2 EX2   EX2 EX2 EX2         /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 ///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////// /////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2 EX2  EX2 EX2 EX2 //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////



const width3  = 3200;
const length3 = 2200;
var hardsa3 = 0;
var softsa3 = 0;


// const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30,width/ length, 1, 1500)
// camera.position.set(-50, 50, 150)
// camera.lookAt(0,0,0)




//camera
const camera3: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30,width3/ length3, 1, 1500)
camera3.position.set(-50, 0, 350)
camera3.lookAt(0,0,0)
// camera.position.set(-50, 50, 150)
// camera.lookAt(0,0,0)


//renderer
const renderer3 : THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true})
renderer3.setPixelRatio(window.devicePixelRatio)
renderer3.setSize(width3,length3)
renderer3.shadowMap.enabled = true;
//document.body.appendChild(renderer.domElement);

//scene
const scene3: THREE.Scene = new THREE.Scene();
scene3.background = new THREE.Color(0x4c3f91);

//orbital controls
const control3 = new OrbitControls(camera3, renderer3.domElement)

const light303 = new THREE.DirectionalLight(0xfff0dd, 1);
light303.position.set(0, 5, 10);
light303.castShadow = true;
scene3.add(light303);

const lightk303 = new THREE.DirectionalLight(0x6a0dad, 1);
lightk303.position.set(-40.5, 8, 40.5);
lightk303.castShadow = true;
scene3.add(lightk303);

// ambient light
let hemiLight303 = new THREE.AmbientLight(0xffffff, 0.20);
hemiLight303.castShadow = true;
scene3.add(hemiLight303);

//Add directional light
let dirLight303 = new THREE.DirectionalLight(0xffffff, .5);
dirLight303.position.set(-30, 50, -30);
scene3.add(dirLight303);
dirLight303.castShadow = true;
dirLight303.shadow.mapSize.width = 2048;
dirLight303.shadow.mapSize.height = 2048;
dirLight303.shadow.camera.left = -70;
dirLight303.shadow.camera.right = 70;
dirLight303.shadow.camera.top = 70;
dirLight303.shadow.camera.bottom = -70;


function hard_percent3(hards: number, softs: number){
  var sum = hards + softs;
    return Math.round(((hards/sum))*100)
  }



////src/assets/Quantum_Regular (1).json
const light_hard_path_mesh3 = new THREE.DirectionalLight(0x000000, 1);

var hard_path_mesh3 = new THREE.Mesh;
var soft_path_mesh3 = new THREE.Mesh;
var red_path_mesh3 = new THREE.Mesh;
var blue_path_mesh3 =new THREE.Mesh;












var Hard_Num = 0;
var Soft_Num = 0;

var text_hard3 = new THREE.Mesh;
function LoadFont_Hard3(hards: number){
const fontLoader = new FontLoader();
fontLoader.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry(hards.toString(), {
font,
size: 4,
height: 2,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
text_hard3.geometry =  textGeometry;
text_hard3.material = textMaterial;
text_hard3.position.set(12,25,-70);
});
}
scene3.add(text_hard3);

var perc_hard3 = new THREE.Mesh;
function LoadFontPercHard3(percent: number){
const fontLoaderPercHard = new FontLoader();
fontLoaderPercHard.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: 2
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
perc_hard3.geometry =  textGeometry;
perc_hard3.material = textMaterial;
perc_hard3.position.set(52,25,-70);
});
}


var text_soft3 = new THREE.Mesh;

function LoadFont_Soft3(softs: number){
const fontLoader3 = new FontLoader();
fontLoader3.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry(softs.toString(), {
font,
size: 4,
height: 2
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
text_soft3.geometry =  textGeometry;
text_soft3.material = textMaterial;
text_soft3.position.set(12,30,-70);
});
}






const light2303 = new THREE.DirectionalLight(0xff0000, 1);
light2303.position.set(25, 5, 125);
//scene.add(light2);
const light3303 = new THREE.DirectionalLight(0xFFFF00, 1);
light3303.position.set(-25, 5, -125);
//scene.add(light3);
const light4303 = new THREE.DirectionalLight(0x0000FF, 1);
light2303.position.set(-25, 5, 125);
scene3.add(light4303);
//const light5 = new THREE.DirectionalLight(0x0000FF, 1);
light3303.position.set(25, 5, -125);
//scene.add(light5);

const raycaster303 = new THREE.Raycaster(); // create once
const clickMouse303 = new THREE.Vector2();  // create once
const moveMouse3 = new THREE.Vector2();   // create once
var draggable3: THREE.Object3D;

function intersect3(pos: THREE.Vector2) {
 raycaster303.setFromCamera(pos, camera3);
 return raycaster303.intersectObjects(scene3.children,true);
}


// const glftLoadera = new GLTFLoader();
// glftLoadera.load("./assets/mario_mystery_box/scene.gltf", (gltfScene) => {
// scene.add(gltfScene.scene);
// gltfScene.scene.scale.set(25,25,25);
// gltfScene.scene.position.set(-40.2,-15,40.2);
// });
//src/assets/gart130_sci-fi_crate/scene.gltf
// const glftLoadera = new GLTFLoader();
// glftLoadera.load("./assets/sci-fi_crate_matthew_brett/scene.gltf", (gltfScene) => {
// scene.add(gltfScene.scene);
// gltfScene.scene.scale.set(6,6,6);
// gltfScene.scene.position.set(-40.2,3,40.2);
// });
////////////////box1//////////////
const gglftLoaderb3 = new GLTFLoader();
gglftLoaderb3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-79.2-20,-15+30,40.2);
});
const gglftLoaderr3 = new GLTFLoader();
gglftLoaderr3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-81.2-20,-15+30,40.2);
});
const gglftLoaderbkx3 = new GLTFLoader();
gglftLoaderbkx3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-80.2-20,-14.8+30,41.2);
});
const gglftLoaderrpx3 = new GLTFLoader();
gglftLoaderrpx3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-80.2-20,-14.8+30,39.2);
});

var pathzwords93x = new THREE.Mesh;
const pathxz91 = new FontLoader();
pathxz91.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P e r s i s t e n c e', {
font,
size: 5,
height: 2,
});
//45f248
const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
pathzwords93x.geometry =  textGeometry;
pathzwords93x.material = textMaterial;
pathzwords93x.position.set(-88.2-20,-15+30,39.2);
});
scene3.add(pathzwords93x);

var pthzwords93x = new THREE.Mesh;
const pthxz91 = new FontLoader();
pthxz91.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P r o p e r t y', {
font,
size: 5,
height: 2,
});
//45f248
const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
pthzwords93x.geometry =  textGeometry;
pthzwords93x.material = textMaterial;
pthzwords93x.position.set(-88.2-20,-22+30,39.2);
});
scene3.add(pthzwords93x);



var pa1thzwords93x = new THREE.Mesh;
const pathxz911 = new FontLoader();
pathxz911.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P e r s i s t e n c e', {
font,
size: 5.02,
height: 2.5,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
pa1thzwords93x.geometry =  textGeometry;
pa1thzwords93x.material = textMaterial;
pa1thzwords93x.position.set(-88.2-20,-15+30,39.2);
});
scene3.add(pa1thzwords93x);

var pa1thzwods93x = new THREE.Mesh;
const pathxz11 = new FontLoader();
pathxz11.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P r o p e r t y', {
font,
size: 5.02,
height: 2.5,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
pa1thzwods93x.geometry =  textGeometry;
pa1thzwods93x.material = textMaterial;
pa1thzwods93x.position.set(-88.2-20,-22+30,39.2);
});
scene3.add(pa1thzwods93x);

var pathzwods93x = new THREE.Mesh;
const pathxz091 = new FontLoader();
pathxz091.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('U n c e r t a i n t y   P r i n c i p l e', {
font,
size: 5,
height: 2,
});
//45f248
const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
pathzwods93x.geometry =  textGeometry;
pathzwods93x.material = textMaterial;
pathzwods93x.position.set(-8-20,-15+30,39.2);
});
pathzwods93x.rotateY(-.1)
scene3.add(pathzwods93x);
//plan3.rotateX((Math.PI)/2)
var pa1tzwords93x = new THREE.Mesh;
const patxz911 = new FontLoader();
patxz911.load("./assets/Get Schwifty_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('U n c e r t a i n t y   P r i n c i p l e', {
font,
size: 5.02,
height: 2.5,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
pa1tzwords93x.geometry =  textGeometry;
pa1tzwords93x.material = textMaterial;
pa1tzwords93x.position.set(-8-20,-15+30,39.2);
});
pa1tzwords93x.rotateY(-.1)
scene3.add(pa1tzwords93x);










var pathzwords93 = new THREE.Mesh;
const pathz91 = new FontLoader();
pathz91.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwords93.geometry =  textGeometry;
pathzwords93.material = textMaterial;
pathzwords93.position.set(-84.2-20,15+30,39.2);
});
scene3.add(pathzwords93);

var pathzwords833 = new THREE.Mesh;
const pathz138 = new FontLoader();
pathz138.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwords833.geometry =  textGeometry;
pathzwords833.material = textMaterial;
pathzwords833.position.set(-84.2-20,11+30,39.2);
});
scene3.add(pathzwords833);















var pathzwords3 = new THREE.Mesh;
const pathz1 = new FontLoader();
pathz1.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwords3.geometry =  textGeometry;
pathzwords3.material = textMaterial;
pathzwords3.position.set(-70-20,4+30,39.2);
});
scene3.add(pathzwords3);
var pathzwords33 = new THREE.Mesh;
const pathz13 = new FontLoader();
pathz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwords33.geometry =  textGeometry;
pathzwords33.material = textMaterial;
pathzwords33.position.set(-69-20,0+30,39.2);
});
scene3.add(pathzwords33);






////////////////box2 +50//////////////
const eotr3 = new THREE.BoxGeometry( 10, 10,.5);
const atia3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const pll3 = new THREE.Mesh( eotr3, atia3 );
pll3.position.set(-.2-20,38.2+30,40.2);
pll3.rotateX((Math.PI)/2)
scene3.add( pll3 );



const glftLoaderbj3 = new GLTFLoader();
glftLoaderbj3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-44.2-20,-15+30,40.2);
});
const glftLoaderrj3 = new GLTFLoader();
glftLoaderrj3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-46.2-20,-15+30,40.2);
});
const glftLoaderbkxj3 = new GLTFLoader();
glftLoaderbkxj3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-45.2-20,-14.8+30,41.2);
});
const glftLoaderrpxj3 = new GLTFLoader();
glftLoaderrpxj3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-45.2-20,-14.8+30,39.2);
});

var pathzwords793 = new THREE.Mesh;
const pathz791 = new FontLoader();
pathz791.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwords793.geometry =  textGeometry;
pathzwords793.material = textMaterial;
pathzwords793.position.set(-49.2-20,15+30,39.2);
});
scene3.add(pathzwords793);

var pahzwords833 = new THREE.Mesh;
const pwathz138 = new FontLoader();
pwathz138.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pahzwords833.geometry =  textGeometry;
pahzwords833.material = textMaterial;
pahzwords833.position.set(-49.2-20,11+30,39.2);
});
scene3.add(pahzwords833);






var pathzwordsh3 = new THREE.Mesh;
const pathz11 = new FontLoader();
pathz11.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwordsh3.geometry =  textGeometry;
pathzwordsh3.material = textMaterial;
pathzwordsh3.position.set(-35-20,4+30,39.2);
});
scene3.add(pathzwordsh3);

var pathzwoprds33 = new THREE.Mesh;
const pathzp13 = new FontLoader();
pathzp13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwoprds33.geometry =  textGeometry;
pathzwoprds33.material = textMaterial;
pathzwoprds33.position.set(-35-20,0+30,39.2);
});
scene3.add(pathzwoprds33);





////////////////box3 +150//////////////

// const otry3 = new THREE.BoxGeometry( 12, 12,1);
// const tial3 = new THREE.MeshBasicMaterial( {color: 0x8b0000, side: THREE.DoubleSide} );
// const l3 = new THREE.Mesh( otry3, tial3 );
// l3.position.set(0.8,8.2,40.2);
// l3.rotateX((Math.PI)/2)
// scene3.add( l3 );

const glftLoaderb3 = new GLTFLoader();
glftLoaderb3.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,-15+30,40.2);
});
const glftLoaderr3 = new GLTFLoader();
glftLoaderr3.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,-15+30,40.2);
});
const glftLoaderbkx3 = new GLTFLoader();
glftLoaderbkx3.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,41.2);
});
const glftLoaderrpx3 = new GLTFLoader();
glftLoaderrpx3.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,39.2);
});



////////////////box4 above +50//////////////
// const eotry3 = new THREE.BoxGeometry( 12, 12,1);
// const atial3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
// const pl3 = new THREE.Mesh( eotry3, atial3 );
// pl3.position.set(30.8,8.2,40.2);
// pl3.rotateX((Math.PI)/2)
// scene3.add( pl3 );


const glftLoaderbp3 = new GLTFLoader();
glftLoaderbp3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(30.8-20,-15+30,40.2);
});
const glftLoaderrp3 = new GLTFLoader();
glftLoaderrp3.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(28.8-20,-15+30,40.2);
});
const glftLoaderbkxp3 = new GLTFLoader();
glftLoaderbkxp3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,41.2);
});
const glftLoaderrpxp3 = new GLTFLoader();
glftLoaderrpxp3.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,39.2);
});

var apathzwords3 = new THREE.Mesh;
const paathz1 = new FontLoader();
paathz1.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
apathzwords3.geometry =  textGeometry;
apathzwords3.material = textMaterial;
apathzwords3.position.set(40-20,4+30,39.2);
});
scene3.add(apathzwords3);
var bpathzwords33 = new THREE.Mesh;
const pabthz13 = new FontLoader();
pabthz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
bpathzwords33.geometry =  textGeometry;
bpathzwords33.material = textMaterial;
bpathzwords33.position.set(40-20,0+30,39.2);
});
scene3.add(bpathzwords33);

var apathzwords13 = new THREE.Mesh;
const paathz11 = new FontLoader();
paathz11.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('R e d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
apathzwords13.geometry =  textGeometry;
apathzwords13.material = textMaterial;
apathzwords13.position.set(9-20,4+30,39.2);
});
scene3.add(apathzwords13);
var b1pathzwords33 = new THREE.Mesh;
const pa1bthz13 = new FontLoader();
pa1bthz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
b1pathzwords33.geometry =  textGeometry;
b1pathzwords33.material = textMaterial;
b1pathzwords33.position.set(7-20,0+30,39.2);
});
scene3.add(b1pathzwords33);


var apathzwods13 = new THREE.Mesh;
const paatz11 = new FontLoader();
paatz11.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('R e d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
apathzwods13.geometry =  textGeometry;
apathzwods13.material = textMaterial;
apathzwods13.position.set(84-20,4+30,39.2);
});
scene3.add(apathzwods13);
var b1pathzwods33 = new THREE.Mesh;
const pa1btz13 = new FontLoader();
pa1btz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
b1pathzwods33.geometry =  textGeometry;
b1pathzwods33.material = textMaterial;
b1pathzwods33.position.set(82-20,0+30,39.2);
});
scene3.add(b1pathzwods33);













//./assets/Get Schwifty_Regular (1).json
var pathzwods7893 = new THREE.Mesh;
const pathzz791 = new FontLoader();
pathzz791.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwods7893.geometry =  textGeometry;
pathzwods7893.material = textMaterial;
pathzwods7893.position.set(25.8-20,15+30,39.2);
});
scene3.add(pathzwods7893);

var pahzwrds0833 = new THREE.Mesh;
const pwgathz138 = new FontLoader();
pwgathz138.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pahzwrds0833.geometry =  textGeometry;
pahzwrds0833.material = textMaterial;
pahzwrds0833.position.set(25.8-20,11+30,39.2);
});
scene3.add(pahzwrds0833);

var pathzwods793 = new THREE.Mesh;
const pathzz7901 = new FontLoader();
pathzz7901.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('B l u e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwods793.geometry =  textGeometry;
pathzwods793.material = textMaterial;
pathzwods793.position.set(65.8-20,15+30,39.2);
});
scene3.add(pathzwods793);

var pahzwrds8330 = new THREE.Mesh;
const pwgathz1038 = new FontLoader();
pwgathz1038.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pahzwrds8330.geometry =  textGeometry;
pahzwrds8330.material = textMaterial;
pahzwrds8330.position.set(65.8-20,11+30,39.2);
});
scene3.add(pahzwrds8330);



















//////////////box5 right +50//////////////
const geotry3 = new THREE.BoxGeometry( 10.2, 10, 1);
const matial3 = new THREE.MeshBasicMaterial( {color: 0x8b0000, side: THREE.DoubleSide} );
const pla3 = new THREE.Mesh( geotry3, matial3 );
pla3.position.set(-.2-20,8+30,40.2);
pla3.rotateX((Math.PI)/2)
scene3.add( pla3 );

const geotr9y3 = new THREE.BoxGeometry( 10.2, 10, 1);
const matia9l3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const pl9a3 = new THREE.Mesh( geotr9y3, matia9l3 );
pl9a3.position.set(-45.2-20,8+30,40.2);
pl9a3.rotateX((Math.PI)/2)
scene3.add( pl9a3 );

const igeotr9y3 = new THREE.BoxGeometry( 10.2, 10, 1);
const imatia9l3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const ipl9a3 = new THREE.Mesh( igeotr9y3, imatia9l3 );
ipl9a3.position.set(-80.2-20,8+30,40.2);
ipl9a3.rotateX((Math.PI)/2)
scene3.add( ipl9a3 );

const pigeotr9y3 = new THREE.BoxGeometry( 10.2, 10, 1);
const pimatia9l3 = new THREE.MeshBasicMaterial( {color: 0x8b0000, side: THREE.DoubleSide} );
const pipl9a3 = new THREE.Mesh( pigeotr9y3, pimatia9l3 );
pipl9a3.position.set(69.8-20,8+30,40.2);
pipl9a3.rotateX((Math.PI)/2)
scene3.add( pipl9a3 );

const hpigeotr9y3 = new THREE.BoxGeometry( 10.2, 10, 1);
const hpimatia9l3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const hpipl9a3 = new THREE.Mesh( hpigeotr9y3, hpimatia9l3 );
hpipl9a3.position.set(29.8-20,8+30,40.2);
hpipl9a3.rotateX((Math.PI)/2)
scene3.add( hpipl9a3 );
//fhfhshhhs






const glftLoaderb3w = new GLTFLoader();
glftLoaderb3w.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,15+30,40.2);
});
const glftLoaderr3w = new GLTFLoader();
glftLoaderr3w.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,15+30,40.2);
});
const glftLoaderbkx3w = new GLTFLoader();
glftLoaderbkx3w.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,41.2);
});
const glftLoaderrpx3w = new GLTFLoader();
glftLoaderrpx3w.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,39.2);
});

////arrrows
var pathzword7931 = new THREE.Mesh;
const pathz711 = new FontLoader();
pathz711.load("./assets/PizzaDude Pointers_Regular.json", (font) => {
const textGeometry = new TextGeometry('O', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
pathzword7931.geometry =  textGeometry;
pathzword7931.material = textMaterial;
pathzword7931.position.set(-50.2-20,25.2+30,39.2);
});
scene3.add(pathzword7931);

var pathzord7931 = new THREE.Mesh;
const path711 = new FontLoader();
path711.load("./assets/PizzaDude Pointers_Regular.json", (font) => {
const textGeometry = new TextGeometry('I', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
pathzord7931.geometry =  textGeometry;
pathzord7931.material = textMaterial;
pathzord7931.position.set(30.2-20,38.2+30,39.2);
pathzord7931.scale.set(1.5,1,1);
});
scene3.add(pathzord7931);

var pa0thzord7931 = new THREE.Mesh;
const pa0th711 = new FontLoader();
pa0th711.load("./assets/PizzaDude Pointers_Regular.json", (font) => {
const textGeometry = new TextGeometry('O', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
pa0thzord7931.geometry =  textGeometry;
pa0thzord7931.material = textMaterial;
pa0thzord7931.position.set(63.2-20,24.2+30,39.2);
pa0thzord7931.scale.set(1,1.2,1);
});
scene3.add(pa0thzord7931);

var pa0thz1ord7931 = new THREE.Mesh;
const pa0th7111 = new FontLoader();
pa0th7111.load("./assets/Arrow 7_Regular.json", (font) => {
const textGeometry = new TextGeometry('p', {
font,
size: 20,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pa0thz1ord7931.geometry =  textGeometry;
pa0thz1ord7931.material = textMaterial;
pa0thz1ord7931.position.set(63.2-40+40,0.8-10,39.2-35);
pa0thz1ord7931.rotateZ(Math.PI)
pa0thz1ord7931.scale.set(4,4,1);
});
scene3.add(pa0thz1ord7931);








var p8athzword793 = new THREE.Mesh;
const pathz871 = new FontLoader();
pathz871.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry('0%', {
font,
size: 5,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p8athzword793.geometry =  textGeometry;
p8athzword793.material = textMaterial;
p8athzword793.position.set(-47.2-20,37.2+30,39.2);
});
scene3.add(p8athzword793);

var p8atzword793 = new THREE.Mesh;
const path871 = new FontLoader();
path871.load("./assets/Digital-7_Regular.json", (font) => {
const textGeometry = new TextGeometry('50% 50%', {
font,
size: 5,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p8atzword793.geometry =  textGeometry;
p8atzword793.material = textMaterial;
p8atzword793.position.set(50.2-20,38.2+30,39.2);
});
scene3.add(p8atzword793);
////arrows end









var pathzword793 = new THREE.Mesh;
const pathz71 = new FontLoader();
pathz71.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzword793.geometry =  textGeometry;
pathzword793.material = textMaterial;
pathzword793.position.set(-4.2-20,44.2+30,39.2);
});
scene3.add(pathzword793);

var pahzwods833 = new THREE.Mesh;
const pwatz138 = new FontLoader();
pwatz138.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pahzwods833.geometry =  textGeometry;
pahzwods833.material = textMaterial;
pahzwods833.position.set(-4.2-20,40.2+30,39.2);
});
scene3.add(pahzwods833);


var pathzwor793 = new THREE.Mesh;
const patz71 = new FontLoader();
patz71.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('B l u e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzwor793.geometry =  textGeometry;
pathzwor793.material = textMaterial;
pathzwor793.position.set(-4.2-20,15.2+30,39.2);
});
scene3.add(pathzwor793);

var pahzwos833 = new THREE.Mesh;
const paatz138 = new FontLoader();
paatz138.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pahzwos833.geometry =  textGeometry;
pahzwos833.material = textMaterial;
pahzwos833.position.set(-4.2-20,11.2+30,39.2);
});
scene3.add(pahzwos833);










var pathzw0ords3 = new THREE.Mesh;
const path0z1 = new FontLoader();
path0z1.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzw0ords3.geometry =  textGeometry;
pathzw0ords3.material = textMaterial;
pathzw0ords3.position.set(10-20,34+30,39.2);
});
scene3.add(pathzw0ords3);

var pathzw1ords33 = new THREE.Mesh;
const pathzz13 = new FontLoader();
pathzz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
pathzw1ords33.geometry =  textGeometry;
pathzw1ords33.material = textMaterial;
pathzw1ords33.position.set(10-20,30+30,39.2);
});
scene3.add(pathzw1ords33);





////////////////box6 +150//////////////

// const geomtry3 = new THREE.BoxGeometry( 12, 12,1);
// const matrial3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
// const plan3 = new THREE.Mesh( geomtry3, matrial3 );
// plan3.position.set(70.8,8.2,40.2);
// plan3.rotateX((Math.PI)/2)
// scene3.add( plan3 );

const glftoaderb3w = new GLTFLoader();
glftoaderb3w.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(70.8-20,-15+30,40.2);
});
const glftoaderr3w = new GLTFLoader();
glftoaderr3w.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(68.8-20,-15+30,40.2);
});
const glftoaderbkx3w = new GLTFLoader();
glftoaderbkx3w.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(69.8-20,-14.8+30,41.2);
});
const glftoaderrpx3w = new GLTFLoader();
glftoaderrpx3w.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(69.8-20,-14.8+30,39.2);
});


//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
const spotLight = new THREE.SpotLight( 0x000000,1 );
spotLight.target.position.set(-70.8-52,-60+30,40.2);
spotLight.position.set(-70.8-12-20,0,40.2);
spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 100;
spotLight.shadow.mapSize.height = 100;

spotLight.shadow.camera.near = 5;
spotLight.shadow.camera.far = 4;
spotLight.shadow.camera.fov = 30;

scene3.add( spotLight );


var patzw0ords3 = new THREE.Mesh;
const path01 = new FontLoader();
path01.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('S Q U A R E + R E D', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
patzw0ords3.geometry =  textGeometry;
patzw0ords3.material = textMaterial;
patzw0ords3.position.set(-70.8-12-20,-60+30+20,40.2);
patzw0ords3.castShadow = true;
patzw0ords3.receiveShadow = true;

});
scene3.add(patzw0ords3);

var pthzw1ords33 = new THREE.Mesh;
const patzz13 = new FontLoader();
patzz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('E L E C T R O N S', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
pthzw1ords33.geometry =  textGeometry;
pthzw1ords33.material = textMaterial;
pthzw1ords33.position.set(-70.8-12-20,-60+25+20,40.2);
pthzw1ords33.castShadow = true;
pthzw1ords33.receiveShadow = true;
});
scene3.add(pthzw1ords33);

//////////////////////////////////////
var p0atzw0ord3 = new THREE.Mesh;
const papth001 = new FontLoader();
papth001.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('S Q U A R E + B L U E', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p0atzw0ord3.geometry =  textGeometry;
p0atzw0ord3.material = textMaterial;
p0atzw0ord3.position.set(-70.8+25-20,-60+30+20,40.2);
p0atzw0ord3.castShadow = true;
p0atzw0ord3.receiveShadow = true;
});
scene3.add(p0atzw0ord3);

var p0thz1ords33 = new THREE.Mesh;
const p0atzwz13 = new FontLoader();
p0atzwz13.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('E L E C T R O N S', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p0thz1ords33.geometry =  textGeometry;
p0thz1ords33.material = textMaterial;
p0thz1ords33.position.set(-70.8+25-20,-60+25+20,40.2);
p0thz1ords33.castShadow = true;
p0thz1ords33.receiveShadow = true;
});
scene3.add(p0thz1ords33);
///////////////
var p0atzw0or3 = new THREE.Mesh;
const paph001 = new FontLoader();
paph001.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D I A M O N D + R E D', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p0atzw0or3.geometry =  textGeometry;
p0atzw0or3.material = textMaterial;
p0atzw0or3.position.set(-70.8+55-20,-60+20+20,40.2);
p0atzw0or3.castShadow = true;
p0atzw0or3.receiveShadow = true;
});
scene3.add(p0atzw0or3);

var p0thz12ords33 = new THREE.Mesh;
const p0atzwz213 = new FontLoader();
p0atzwz213.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('E L E C T R O N S', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p0thz12ords33.geometry =  textGeometry;
p0thz12ords33.material = textMaterial;
p0thz12ords33.position.set(-70.8+55-20,-60+15+20,40.2);
p0thz12ords33.castShadow = true;
p0thz12ords33.receiveShadow = true;
});
scene3.add(p0thz12ords33);
////////////////////
var p0atzw00or3 = new THREE.Mesh;
const paph0001 = new FontLoader();
paph0001.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('D I A M O N D + B L U E', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p0atzw00or3.geometry =  textGeometry;
p0atzw00or3.material = textMaterial;
p0atzw00or3.position.set(-70.8+55-20,-60+20-30+20,40.2);
p0atzw00or3.castShadow = true;
p0atzw00or3.receiveShadow = true;
});
scene3.add(p0atzw00or3);

var p00thz12ords33 = new THREE.Mesh;
const p00atzwz213 = new FontLoader();
p00atzwz213.load("./assets/Lacona Demo_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('E L E C T R O N S', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
p00thz12ords33.geometry =  textGeometry;
p00thz12ords33.material = textMaterial;
p00thz12ords33.position.set(-70.8+55-20,-60+15-30+20,40.2);
p00thz12ords33.castShadow = true;
p00thz12ords33.receiveShadow = true;
});
scene3.add(p00thz12ords33);


const mirroBack1: Reflector = new Reflector(
  new THREE.PlaneGeometry(65,65,1000),
  {
      color: new THREE.Color(0x7f7f7f),
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio
  }
 )
 mirroBack1.position.x = -45 -20
 mirroBack1.position.y = -70 +20
 mirroBack1.position.z = 45-20-5-3-1
 //mirroBack1.rotateY((Math.PI)/4)
 //scene3.add(mirroBack1)

 const mirroBac1k1: Reflector = new Reflector(
  new THREE.PlaneGeometry(65,65,1000),
  {
      color: new THREE.Color(0x7f7f7f),
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio
  }
 )
 mirroBac1k1.position.x = -45-10-10
 mirroBac1k1.position.y = -70-10 +20
 mirroBac1k1.position.z = 45-5-3-1-2-1
 mirroBac1k1.rotateY(-(Math.PI)/2)
 mirroBac1k1.rotateX(-(Math.PI)/2)
 scene3.add(mirroBac1k1)

////////////////////

//we could not build this device///
/////even if we wanted to////
//////we have tried/////
////// and failed//////////

var p00thzz12ords33 = new THREE.Mesh;
const p00atzwzz213 = new FontLoader();
p00atzwzz213.load("./assets/ArcadeClassic_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('WE  COULD  NOT  BUILD  THIS', {
font,
size: 9,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2, opacity: .2});
p00thzz12ords33.geometry =  textGeometry;
p00thzz12ords33.material = textMaterial;
p00thzz12ords33.position.set(70.8-50-35,-40+4+20,10.2);
p00thzz12ords33.castShadow = true;
p00thzz12ords33.receiveShadow = true;
});
scene3.add(p00thzz12ords33);

var p00thzz192ords33 = new THREE.Mesh;
const p900atzwzz213 = new FontLoader();
p900atzwzz213.load("./assets/ArcadeClassic_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('             DEVICE     EVEN     IF     WE', {
font,
size: 8,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
p00thzz192ords33.geometry =  textGeometry;
p00thzz192ords33.material = textMaterial;
p00thzz192ords33.position.set(70.8-90,-45-10+2+20,20.2);
p00thzz192ords33.castShadow = true;
p00thzz192ords33.receiveShadow = true;
});
scene3.add(p00thzz192ords33);

var p00thzz192ords303 = new THREE.Mesh;
const p900atzwzz2103 = new FontLoader();
p900atzwzz2103.load("./assets/ArcadeClassic_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('WANTED  TO  WE  HAVE', {
font,
size: 6,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
p00thzz192ords303.geometry =  textGeometry;
p00thzz192ords303.material = textMaterial;
p00thzz192ords303.position.set(70.8-15-45,-50-15+20,30.2+10);
p00thzz192ords303.castShadow = true;
p00thzz192ords303.receiveShadow = true;
});
scene3.add(p00thzz192ords303);

var p00thzz192ords3003 = new THREE.Mesh;
const p900atzwzz21003 = new FontLoader();
p900atzwzz21003.load("./assets/ArcadeClassic_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('TRIED  AND  FAILED', {
font,
size: 4,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
p00thzz192ords3003.geometry =  textGeometry;
p00thzz192ords3003.material = textMaterial;
p00thzz192ords3003.position.set(70.8-50,-55-17+20,40.2+15);
p00thzz192ords3003.castShadow = true;
p00thzz192ords3003.receiveShadow = true;
});
scene3.add(p00thzz192ords3003);

var p00thzz192ords30003 = new THREE.Mesh;
const p900atzwzz210003 = new FontLoader();
p900atzwzz210003.load("./assets/ArcadeClassic_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('MISERABLY', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
p00thzz192ords30003.geometry =  textGeometry;
p00thzz192ords30003.material = textMaterial;
p00thzz192ords30003.position.set(70.8-43,-60-18+20,50.2+20);
p00thzz192ords30003.castShadow = true;
p00thzz192ords30003.receiveShadow = true;
});
scene3.add(p00thzz192ords30003);









///////////////top left///////////////////////////////////////////
const glftoaerb3w = new GLTFLoader();
glftoaerb3w.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-70.8-20,-60+20,40.2);
});
const glftoaerr3w = new GLTFLoader();
glftoaerr3w.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-68.8-20,-60+20,40.2);
});
const gltoaderbkx3w = new GLTFLoader();
gltoaderbkx3w.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8+20,41.2);
});
const glfoaderrpx3w = new GLTFLoader();
glfoaderrpx3w.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8+20,39.2);
});
const igetr9y3 = new THREE.BoxGeometry( 10.2, 10, 1);
const imaia9l3 = new THREE.MeshBasicMaterial( {color: 0x8B0000, side: THREE.DoubleSide} );
const ip9a3 = new THREE.Mesh( igetr9y3, imaia9l3 );
ip9a3.position.set(-70-20,-37+20,40);
ip9a3.rotateX((Math.PI)/2)
scene3.add( ip9a3 );



//pipe1
const gltoaderbkx3ww = new GLTFLoader();
gltoaderbkx3ww.load("./assets/sm_pipe_curved_large/scene.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(.1,.12,.1);
gltfScene.scene.rotateZ((Math.PI/2))
gltfScene.scene.rotateX((Math.PI))
gltfScene.scene.position.set(-69.8+6.5-20,-59.8+11.5+1+20,41.2+1+1+1+.5);
});
//pipe2
const gtoaderbkx3ww = new GLTFLoader();
gtoaderbkx3ww.load("./assets/sm_pipe_curved_large/scene.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(.1,.12,.1);
//gltfScene.scene.rotateZ((Math.PI/2))
//gltfScene.scene.rotateX((Math.PI))
gltfScene.scene.position.set(-69.8+6.5+30+2-20,-59.8+11.5+1-20+20,41.2+1+1+1+.5-10);
});




const gltoaerbkx3ww = new GLTFLoader();
gltoaerbkx3ww.load("./assets/3aca94e07662430ab9215aa3fbdf5475/scene.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(45,60,50);
gltfScene.scene.rotateZ((Math.PI/2))
gltfScene.scene.rotateX((Math.PI));
gltfScene.scene.castShadow = true;
gltfScene.scene.receiveShadow = true;
gltfScene.scene.position.set(-69.8+6.5-5,-37.3,41.2+1+1+1+.5-5);
});


///////////////bottom right///////////////////////////////////////////
const glftoaerb3w7 = new GLTFLoader();
glftoaerb3w7.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-70.8+40+2-20,-60-30+20,40.2);
});
const glftoaerr3w7 = new GLTFLoader();
glftoaerr3w7.load("./assets/mario_mystery_box/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-68.8+40+3-20,-60-30+20,40.2);
});
const gltoaderbkx3w7 = new GLTFLoader();
gltoaderbkx3w7.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8+40+3-20,-59.8-30+20,41.2);
});
const glfoaderrpx3w7 = new GLTFLoader();
glfoaderrpx3w7.load("./assets/mario_mystery_box/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8+40+3-20,-59.8-30+20,39.2);
});
const igetr9y37 = new THREE.BoxGeometry( 10.2, 10, 1);
const imaia9l37 = new THREE.MeshBasicMaterial( {color: 0x8B0000, side: THREE.DoubleSide} );
const ip9a37 = new THREE.Mesh( igetr9y37, imaia9l37 );
ip9a37.position.set(-70+40+3-.35-.2-20,-37-30+20,40);
ip9a37.rotateX((Math.PI)/2)
scene3.add( ip9a37 );

///////////////bottom left///////////////////////////////////////////
const g8lftoaerb3w7 = new GLTFLoader();
g8lftoaerb3w7.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-70.8-20,-60-30+20,40.2);
});
const g8lftoaerr3w7 = new GLTFLoader();
g8lftoaerr3w7.load("./assets/mario_mystery_box/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-68.8-20,-60-30+20,40.2);
});
const g8ltoaderbkx3w7 = new GLTFLoader();
g8ltoaderbkx3w7.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8-30+20,41.2);
});
const g8lfoaderrpx3w7 = new GLTFLoader();
g8lfoaderrpx3w7.load("./assets/mario_mystery_box/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8-30+20,39.2);
});
const igetr9y375 = new THREE.BoxGeometry( 10.2, 10, 1);
const imaia9l375 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const ip9a375 = new THREE.Mesh( igetr9y375, imaia9l375 );
ip9a375.position.set(-70-20,-37-30+20,40);
ip9a375.rotateX((Math.PI)/2)
scene3.add( ip9a375 );







//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////
//////////////the measurement device we cannot create///////////////



///////////////////
function createPixels3(){
  for(let i = 0; i < 1000; i++){
    var q1_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q2_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q3_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q4_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q5_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q6_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q7_color = '#'+(Math.random()*0xff0000<<0).toString(16)
    var q8_color = '#'+(Math.random()*0xff0000<<0).toString(16)
  let quad1 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q1_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad1.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000)
  scene3.add(quad1)


  let quad2 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q2_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad2.position.set(Math.random()*1000, Math.random()*1000*-1, Math.random()*1000)
  scene3.add(quad2)


  let quad3 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q3_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad3.position.set(Math.random()*1000, Math.random()*1000, Math.random()*1000*-1)
  scene3.add(quad3)


  let quad4 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.PointsMaterial({ color: q4_color, size: 15, transparent: false}))
  quad4.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000)
  scene3.add(quad4)


  let quad5 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q5_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad5.position.set(Math.random()*1000*-1, Math.random()*1000, Math.random()*1000*-1)
  scene3.add(quad5)


  let quad6 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q6_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad6.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000)
  scene3.add(quad6)



  let quad7 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q7_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad7.position.set(Math.random()*1000, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene3.add(quad7)


  let quad8 = new THREE.Mesh(new THREE.SphereBufferGeometry(.5, .5, .5),
  new THREE.MeshPhongMaterial({ color: q8_color, transparent: false, specular: 0x050505,
  shininess: 100 }))
  quad8.position.set(Math.random()*1000*-1, Math.random()*(1000*-1), Math.random()*1000*-1)
  scene3.add(quad8)

  }

  }

createPixels3();





const hardobjects3 : THREE.Mesh[] = []
const cubes3: THREE.Mesh[] = []
function createHardElectron3() {
  //let truthy = true;
   var x3 = Math.random();
   console.log(x3);
    var x4 = Math.random();
    console.log(x4);
     var x5 = Math.random();
     var x2 = Math.random();
 let sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1.5),
 new THREE.MeshPhongMaterial({ color: 0xffffff}))
sphere1.position.set(-20, .2, 20)
sphere1.castShadow = true
sphere1.receiveShadow = true
hardobjects3.push(sphere1);
scene3.add(sphere1)

///////cube///////cube///////cube///////cube///////cube///////cube///////cube
const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(4,10,0);
cube.castShadow = true;
cube.receiveShadow = true;
scene3.add(cube);
cube.visible = false;
cubes3.push(cube);
///////cube///////cube///////cube///////cube///////cube///////cube///////cube


///////diamond/////////diamond/////////diamond/////////diamond/////////diamond//
const front = Math.tan(Math.PI / 6)
  const back = Math.cos(Math.PI / 6)
  const vertices = [
    0, 1, 0, // 0: top
    1, 0, front, // 1: right
    -1, 0, front, // 2: left
    0, 0, -back, // 3: back middle
    0, -1, 0, // 4: bottom
  ]
  const faces = [
    2, 1, 0, // left, right, top
    1, 3, 0, // right, back, top
    3, 2, 0, // back, left, top
    2, 4, 1, // left, bottom, right
    1, 4, 3, // right, bottom, back
    3, 4, 2, // back, bottom, left
  ]
  const geometrykk = new THREE.PolyhedronGeometry(vertices, faces, 30, 0)
   const materialkk = new THREE.MeshBasicMaterial({color: 0xFFD700})
   const meshkk = new THREE.Mesh(geometrykk, materialkk)
  meshkk.scale.set(0.06,0.08,0.06)
  scene3.add(meshkk)
  meshkk.castShadow = true;
  meshkk.receiveShadow = true;
  meshkk.visible = false;
  diamonds3.push(meshkk);
///////diamond/////////diamond/////////diamond/////////diamond/////////diamond//



 var start = {x: -100-20, y: 0+30, z: 40.2 };


 var target2 = { x: -79.2-20, y: 0+30, z: 40.2 };
 var target2_min_right = {x: -77.2-20, y: 0+30, z: 40.2 };
 var target2_min_up = {x: -79.2-20, y: 2+30, z: 40.2 };
 var target2_up = {x: -79.2 -20, y: 100+30 , z: 40.2  }

 var target3 = { x: .8-20, y: 0+30, z: 40.2 };
 var target4_min = { x: .8-20, y: .2+30, z: 40.2 };
 var target5_min = { x: .10-20, y: 0+30, z: 40.2 };
  var target5min = { x: 2-20, y: 0+30, z: 40.2 };

 var target4 = { x: .8-20, y: 30+30, z: 40.2 };


var target4_up_min ={x:2-20, y:30+30,z:40.2}
 var target4_up = { x: .8-20, y: 160+30, z: 40.2 };
 var target4_right_min ={x:.8 -20, y: 32+30 , z:40.2 }
 var target4_right = { x: 100.8-20, y: 30+30, z: 40.2 };

var target5 = { x: 30.10-20, y: 0+30, z: 40.2 };
var target5_up = { x: 30.10-20, y: 160+30, z: 40.2 };
var target5_up_min =  { x: 30.10-20, y: 2+30, z: 40.2 };
var target5_right_min = { x: 32.10-20, y: 0+30, z: 40.2 };


var target6  = { x: 65.8-20, y: 0+30, z: 40.2 };
var target6_up_min = { x: 65.8-20, y: 2+30, z: 40.2 };
var target6_right_min= { x: 66.8-20, y: 0+30, z: 40.2 };
var target6_up = { x: 65.8-20, y: 165+30, z: 40.2 };
var target6_right = { x: 150.8-20, y: 0+30, z: 40.2 };


 const updateFunc = function (object: {
   x: number;
   y: number;
   z: number;
 }, elapsed: number) {
   sphere1.position.x = object.x;
   sphere1.position.y = object.y;
   sphere1.position.z = object.z;

   cube.position.x = object.x;
   cube.position.y = object.y;
   cube.position.z = object.z;

   meshkk.position.x = object.x;
   meshkk.position.y = object.y;
   meshkk.position.z = object.z;


  //  if(sphere1.position.z == 40.2 && sphere1.position.x == -79.2){
  //  //  sphere1.material.color.setHex(0x0000ff);
  //   sphere1.visible = false;
  //   meshkk.visible = true;
  // }
  //4minblue
  if(sphere1.position.x == 2-20 && sphere1.position.y == 0+30 && sphere1.position.z == 40.2){
    console.log("in min right")
    sphere1.material.color.setHex(0xff0000);
     sphere1.visible = true;
     meshkk.visible = false;
   }

   if(sphere1.position.x == .8-20 && sphere1.position.y == .2+30 && sphere1.position.z == 40.2){
    console.log("in min up")
    sphere1.material.color.setHex(0x0000ff);
     sphere1.visible = true;
     meshkk.visible = false;
   }

//////////////4upmin
if(sphere1.position.x == -79.2-20 && sphere1.position.y == 2+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  cube.visible = true;
  meshkk.visible = false;
}
if(sphere1.position.x == -77.2-20 && sphere1.position.y == 0+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  meshkk.visible = true;
}

if(sphere1.position.x == .8 -20 && sphere1.position.y == 32+30 && sphere1.position.z == 40.2){
   sphere1.visible = false;
   meshkk.visible = true;
 }
 if(sphere1.position.x == 2-20 && sphere1.position.y == 30+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  cube.visible = true;
}
//////////////5upmin
if(sphere1.position.x == 30.10-20 && sphere1.position.y == 2+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  cube.visible = true;
}
if(sphere1.position.x == 32.10 -20&& sphere1.position.y == 0+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  meshkk.visible = true;

}
if(sphere1.position.x == 66.8-20 && sphere1.position.y == 0 +30 && sphere1.position.z == 40.2){
  sphere1.visible = true;
  sphere1.material.color.setHex(0xff0000);
  meshkk.visible = false;
}
if(sphere1.position.x == 65.8-20 && sphere1.position.y == 2 +30 && sphere1.position.z == 40.2){
  sphere1.visible = true;
  sphere1.material.color.setHex(0x0000ff);
  meshkk.visible = false;
}

if(sphere1.position.x == -79.2-20 && sphere1.position.y == 100+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x == 100.8-20 && sphere1.position.y == 30+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x == 30.10-20 && sphere1.position.y == 160+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x == .8-20 && sphere1.position.y == 160+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x == 65.8-20 && sphere1.position.y == 165+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x == 150.8-20 && sphere1.position.y == 0+30 && sphere1.position.z == 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}






 }
 //path_start
 var start1
 var start2
 var dec1;
 var a;
 var dec2;
 var b;
 var c;
 var d;
 var tween2 = new TWEEN.Tween(start).to(target2, 4000)
 //var tween3 = new TWEEN.Tween(start).to(target3, 4000)


 //goes from 3 to 4 or 5





 if(x3 <= 0.5){
  console.log("min 4prob")
  a = new TWEEN.Tween(start).to(target4_min, 10)
  dec1 = new TWEEN.Tween(start).to(target4, 4000)

              if(x4 <= 0.5){
                dec2 = new TWEEN.Tween(start).to(target4_up, 2000)
                c= dec2;
                d=c;
                b = new TWEEN.Tween(start).to(target4_up_min, 10)
              }
              else{
                dec2 = new TWEEN.Tween(start).to(target4_right, 2000)
                c= dec2;
                d=c
                b = new TWEEN.Tween(start).to(target4_right_min, 10)
              }

 }
 else{
  a = new TWEEN.Tween(start).to(target5min, 100)
    dec1 = new TWEEN.Tween(start).to(target5, 1000)
    console.log("min 5prob")
              if(x4 <= 0.5){
                dec2 = new TWEEN.Tween(start).to(target5_up, 2000)
                c = dec2;
                d = c;
                b = new TWEEN.Tween(start).to(target5_up_min, 100)
              }
              else{
                dec2 = new TWEEN.Tween(start).to(target6, 2000)
                c = dec2;
                d =c;
                b = new TWEEN.Tween(start).to(target5_right_min, 10)
                if(x5 <= 0.5){
                  c = new TWEEN.Tween(start).to(target6_up_min, 10)
                  d = new TWEEN.Tween(start).to(target6_up, 2000)
                }
                else{
                  c = new TWEEN.Tween(start).to(target6_right_min, 10)
                  d = new TWEEN.Tween(start).to(target6_right, 2000)
                }

              }
 }



if(x2 <= 0.3){
  start1 = new TWEEN.Tween(start).to(target2_min_up, 10)
  start2 = new TWEEN.Tween(start).to(target2_up, 2000)
  tween2.chain(start1).start()
  start1.chain(start2)
  tween2.onUpdate(updateFunc)
  start1.onUpdate(updateFunc)
  start2.onUpdate(updateFunc)
}
else{
  start1 = new TWEEN.Tween(start).to(target2_min_right, 100)
  start2 = new TWEEN.Tween(start).to(target3, 2000)
  tween2.chain(start1).start()
  start1.chain(start2)
  start2.chain(a)
  a.chain(dec1)
  dec1.chain(b)
  b.chain(dec2)
  dec2.chain(c)
   c.chain(d)
   tween2.onUpdate(updateFunc)
 start1.onUpdate(updateFunc)
 start2.onUpdate(updateFunc)
 a.onUpdate(updateFunc)
 dec1.onUpdate(updateFunc)
 b.onUpdate(updateFunc)
 dec2.onUpdate(updateFunc)
 c.onUpdate(updateFunc)
 d.onUpdate(updateFunc)
}


 //path_end
}






const softobjects3 : THREE.Mesh[] = []
const diamonds3: THREE.Mesh[] = []






 let scale3 = { x: 3, y: 3, z: 3 }
 let pos3 = { x: 5, y: -17, z: 40.2 }

 let button3 = new THREE.Mesh(new THREE.BoxBufferGeometry(),
     new THREE.MeshPhongMaterial({ color: 0xfe7f93 },));
     button3.position.set(7-20, -5+30, 40.2);
     button3.scale.set(220, -3, 13);
     button3.castShadow = true;
     button3.receiveShadow = true;
 scene3.add(button3)
 var button_num3 = button3.id;
//////////////button end/////////////


const glftLoaderkd2 = new GLTFLoader();
glftLoaderkd2.load("./assets/emergency_stop_button/scene.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(.05,.07,.05);
gltfScene.scene.position.set(-40.5-55-20,8-15+5-1+30,40.5);
});

var button_elec13 = new THREE.Mesh;
const fontLoaderx3 = new FontLoader();
fontLoaderx3.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Fire', {
font,
size: 2,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
button_elec13.geometry =  textGeometry;
button_elec13.material = textMaterial;
button_elec13.position.set(-43-55-20,12.5-20+5+5-1+30,45.5);
});
scene3.add(button_elec13);
var button_elec23 = new THREE.Mesh;
const fontLoaderxx3 = new FontLoader();
fontLoaderxx3.load("./assets/Quantum_Regular (1).json", (font) => {
const textGeometry = new TextGeometry('Electrons', {
font,
size: 1.4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial();
button_elec23.geometry =  textGeometry;
button_elec23.material = textMaterial;
button_elec23.position.set(-45.2-55-20,9.5-20+5+5-1+30,45.5);
});
scene3.add(button_elec23);




var clock3 = new THREE.Clock;

export function animate3(){
  TWEEN.update();
  var t = clock3.getElapsedTime();
  if (t >= 1)
  {
      clock3 = new THREE.Clock;
      button_elec13.scale.set(1,1,1);
      button_elec23.scale.set(1,1,1);
  }
  else
  {
      button_elec13.scale.x = 1-(t/14.0);
      button_elec13.scale.y = 1-(t/14.0);
      button_elec13.scale.z = 1-(t/14.0);
      button_elec23.scale.x = 1-(t/14.0);
      button_elec23.scale.y = 1-(t/14.0);
      button_elec23.scale.z = 1-(t/14.0);
  }

 for(var i = 0; i < hardobjects3.length ; ++i){
  cubes3[i].rotation.x += 0.1;
  cubes3[i].rotation.z += 0.1;
 }

 for(var i = 0; i < diamonds3.length ; ++i){
  diamonds3[i].rotation.y += 0.07;
 }
 requestAnimationFrame(animate3);
 renderer3.render(scene3,camera3);
}

const container3 = document.createElement('ex3');
 container3.style.position = 'relative';
 container3.style.left = '1500px';
 container3.style.top = '-12280px'
container3.style.width = "700px";
container3.style.height = "700px";
container3.style.display = "flex";
document.body.appendChild(container3)
container3.appendChild(renderer3.domElement)

container3.addEventListener('click', event => {
  let x = Math.random()
  let x2 = Math.random()
  clickMouse303.x = ((event.clientX-container3.getBoundingClientRect().left) / window.innerWidth) * 2 - 1;
  clickMouse303.y = -((event.clientY-container3.getBoundingClientRect().top) / window.innerHeight) * 2 + 1;
  const found = intersect3(clickMouse303);
  if (found.length >= 0) {
    createHardElectron3();

}
})


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 title = 'ang12';
 ngOnInit(): void {
   animate()
   animate2()
   animate3()
 }
}




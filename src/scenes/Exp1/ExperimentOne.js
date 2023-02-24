import React, { Component, useEffect, useTheme, useState } from "react";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector';
import * as TWEEN from '@tweenjs/tween.js';


const scene3 = new THREE.Scene();
scene3.background =  new THREE.Color(0x4c3f91);

class ExperimentOne extends Component {
  
  
  componentDidMount() {
    // get container dimensions and use them for scene sizing
  const width3 = this.container.clientWidth;
  const height3 = this.container.clientHeight;

    // create a WebGL renderer, camera and a scene
  const renderer3 = new THREE.WebGLRenderer({antialias: true})
   
  const camera3 = new THREE.PerspectiveCamera(30,width3/height3, 1, 1500)
  camera3.position.set(-130, 40, 340)
  camera3.lookAt(0,50,70)

    

    // add the camera to the scene
    scene3.add(camera3);
    renderer3.setPixelRatio(window.devicePixelRatio);
    // set the background color
    renderer3.setClearColor("#000000");
    renderer3.shadowMap.enabled = true;
    // set the size
    renderer3.setSize(width3, height3);

    // add the output of the renderer to the html element
    this.container.appendChild(renderer3.domElement);
    
  

    // add some light
    const light = new THREE.PointLight(0x0000ff);
    light.position.set(0, 0, 5);
    scene3.add(light);

    const control3 = new OrbitControls(camera3, renderer3.domElement)

    //the code im copy pasting begin

    const light303 = new THREE.DirectionalLight(0xfff0dd, .2);
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
    
    
    function hard_percent3(hards, softs){
      var sum = hards + softs;
        return Math.round(((hards/sum))*100)
      }


      const light_hard_path_mesh3 = new THREE.DirectionalLight(0x000000, 1);

      var hard_path_mesh3 = new THREE.Mesh;
      var soft_path_mesh3 = new THREE.Mesh;
      var red_path_mesh3 = new THREE.Mesh;
      var blue_path_mesh3 =new THREE.Mesh;

      var Hard_Num = 0;
var Soft_Num = 0;

var text_hard3 = new THREE.Mesh();
function LoadFont_Hard3(hards){
const fontLoader = new FontLoader();
fontLoader.load("/digital.json", (font) => {
const textGeometry = new TextGeometry(hards.toString(), {
font,
size: 4,
height: .01,
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
text_hard3.geometry =  textGeometry;
text_hard3.material = textMaterial;
text_hard3.position.set(12,25,-70);
});
}
scene3.add(text_hard3);



var perc_hard3 = new THREE.Mesh;
function LoadFontPercHard3(percent){
const fontLoaderPercHard = new FontLoader();
fontLoaderPercHard.load("/digital.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 4,
height: .01
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
perc_hard3.geometry =  textGeometry;
perc_hard3.material = textMaterial;
perc_hard3.position.set(52,25,-70);
});
}


var text_soft3 = new THREE.Mesh;

function LoadFont_Soft3(softs){
  const fontLoader3 = new FontLoader();
  fontLoader3.load("/digital.json", (font) => {
  const textGeometry = new TextGeometry(softs.toString(), {
  font,
  size: 4,
  height: .01
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
  
  
  function intersect3(pos) {
   raycaster303.setFromCamera(pos, camera3);
   return raycaster303.intersectObjects(scene3.children,true);
  }

  const gglftLoaderb3 = new GLTFLoader();
  gglftLoaderb3.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-79.2-20,-15+30,40.2);
  });
  const gglftLoaderr3 = new GLTFLoader();
  gglftLoaderr3.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-81.2-20,-15+30,40.2);
  });
  const gglftLoaderbkx3 = new GLTFLoader();
  gglftLoaderbkx3.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-80.2-20,-14.8+30,41.2);
  });
  const gglftLoaderrpx3 = new GLTFLoader();
  gglftLoaderrpx3.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-80.2-20,-14.8+30,39.2);
  });
  
  var pathzwords93x = new THREE.Mesh();
  const pathxz91 = new FontLoader();
  pathxz91.load("/rickfont.json", (font) => {
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
  pthxz91.load("/rickfont.json", (font) => {
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


  var pa1thzwords93x = new THREE.Mesh();
  const pathxz911 = new FontLoader();
  pathxz911.load("/rickfont.json", (font) => {
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
  
  var pa1thzwods93x = new THREE.Mesh();
  const pathxz11 = new FontLoader();
  pathxz11.load("/rickfont.json", (font) => {
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

  var pathzwods93x = new THREE.Mesh();
  const pathxz091 = new FontLoader();
  pathxz091.load("/rickfont.json", (font) => {
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
  var pa1tzwords93x = new THREE.Mesh();
  const patxz911 = new FontLoader();
  patxz911.load("/rickfont.json", (font) => {
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
  


  var pathzwords93 = new THREE.Mesh();
  const pathz91 = new FontLoader();
  pathz91.load("/digital.json", (font) => {
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
  
  var pathzwords833 = new THREE.Mesh();
  const pathz138 = new FontLoader();
  pathz138.load("./digital.json", (font) => {
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



  var pathzwords3 = new THREE.Mesh();
  const pathz1 = new FontLoader();
  pathz1.load("/digital.json", (font) => {
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
  var pathzwords33 = new THREE.Mesh();
  const pathz13 = new FontLoader();
  pathz13.load("/digital.json", (font) => {
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

  const eotr3 = new THREE.BoxGeometry( 10, 10,.5);
  const atia3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
  const pll3 = new THREE.Mesh( eotr3, atia3 );
  pll3.position.set(-.2-20,38.2+30,40.2);
  pll3.rotateX((Math.PI)/2)
  scene3.add( pll3 );

  const glftLoaderbj3 = new GLTFLoader();
  glftLoaderbj3.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-44.2-20,-15+30,40.2);
  });
  const glftLoaderrj3 = new GLTFLoader();
  glftLoaderrj3.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-46.2-20,-15+30,40.2);
  });
  const glftLoaderbkxj3 = new GLTFLoader();
  glftLoaderbkxj3.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-45.2-20,-14.8+30,41.2);
  });
  const glftLoaderrpxj3 = new GLTFLoader();
  glftLoaderrpxj3.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-45.2-20,-14.8+30,39.2);
  });



var pathzwords793 = new THREE.Mesh();
const pathz791 = new FontLoader();
pathz791.load("/digital.json", (font) => {
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

var pahzwords833 = new THREE.Mesh();
const pwathz138 = new FontLoader();
pwathz138.load("/digital.json", (font) => {
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


var pathzwordsh3 = new THREE.Mesh();
const pathz11 = new FontLoader();
pathz11.load("/digital.json", (font) => {
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

var pathzwoprds33 = new THREE.Mesh();
const pathzp13 = new FontLoader();
pathzp13.load("/digital.json", (font) => {
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




const glftLoaderb3 = new GLTFLoader();
glftLoaderb3.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,-15+30,40.2);
});
const glftLoaderr3 = new GLTFLoader();
glftLoaderr3.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,-15+30,40.2);
});
const glftLoaderbkx3 = new GLTFLoader();
glftLoaderbkx3.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,41.2);
});
const glftLoaderrpx3 = new GLTFLoader();
glftLoaderrpx3.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,39.2);
});

const glftLoaderbp3 = new GLTFLoader();
glftLoaderbp3.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(30.8-20,-15+30,40.2);
});
const glftLoaderrp3 = new GLTFLoader();
glftLoaderrp3.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(28.8-20,-15+30,40.2);
});
const glftLoaderbkxp3 = new GLTFLoader();
glftLoaderbkxp3.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,41.2);
});
const glftLoaderrpxp3 = new GLTFLoader();
glftLoaderrpxp3.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,39.2);
});


var apathzwords3 = new THREE.Mesh();
const paathz1 = new FontLoader();
paathz1.load("/digital.json", (font) => {
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
var bpathzwords33 = new THREE.Mesh();
const pabthz13 = new FontLoader();
pabthz13.load("/digital.json", (font) => {
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


var apathzwords13 = new THREE.Mesh();
const paathz11 = new FontLoader();
paathz11.load("/digital.json", (font) => {
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
var b1pathzwords33 = new THREE.Mesh();
const pa1bthz13 = new FontLoader();
pa1bthz13.load("/digital.json", (font) => {
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





var apathzwods13 = new THREE.Mesh();
const paatz11 = new FontLoader();
paatz11.load("/digital.json", (font) => {
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
var b1pathzwods33 = new THREE.Mesh();
const pa1btz13 = new FontLoader();
pa1btz13.load("/digital.json", (font) => {
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



var pathzwods7893 = new THREE.Mesh();
const pathzz791 = new FontLoader();
pathzz791.load("/digital.json", (font) => {
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

var pahzwrds0833 = new THREE.Mesh();
const pwgathz138 = new FontLoader();
pwgathz138.load("/digital.json", (font) => {
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


var pathzwods793 = new THREE.Mesh();
const pathzz7901 = new FontLoader();
pathzz7901.load("/digital.json", (font) => {
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

var pahzwrds8330 = new THREE.Mesh();
const pwgathz1038 = new FontLoader();
pwgathz1038.load("/digital.json", (font) => {
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



const glftLoaderb3w = new GLTFLoader();
glftLoaderb3w.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,15+30,40.2);
});
const glftLoaderr3w = new GLTFLoader();
glftLoaderr3w.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,15+30,40.2);
});
const glftLoaderbkx3w = new GLTFLoader();
glftLoaderbkx3w.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,41.2);
});
const glftLoaderrpx3w = new GLTFLoader();
glftLoaderrpx3w.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,39.2);
});


var pathzword7931 = new THREE.Mesh();
const pathz711 = new FontLoader();
pathz711.load("/arrow.json", (font) => {
const textGeometry = new TextGeometry('J', {
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






var pathzord7931 = new THREE.Mesh();
const path711 = new FontLoader();
path711.load("/pointer.json", (font) => {
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

var pa0thzord7931 = new THREE.Mesh();
const pa0th711 = new FontLoader();
pa0th711.load("/pointer.json", (font) => {
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


var pa0thz1ord7931 = new THREE.Mesh();
const pa0th7111 = new FontLoader();
pa0th7111.load("/arrow.json", (font) => {
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




var p8athzword793 = new THREE.Mesh();
const pathz871 = new FontLoader();
pathz871.load("/digital.json", (font) => {
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

var p8atzword793 = new THREE.Mesh();
const path871 = new FontLoader();
path871.load("/digital.json", (font) => {
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

var pathzword793 = new THREE.Mesh();
const pathz71 = new FontLoader();
pathz71.load("/digital.json", (font) => {
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

var pahzwods833 = new THREE.Mesh();
const pwatz138 = new FontLoader();
pwatz138.load("/digital.json", (font) => {
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


var pathzwor793 = new THREE.Mesh();
const patz71 = new FontLoader();
patz71.load("/digital.json", (font) => {
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

var pahzwos833 = new THREE.Mesh();
const paatz138 = new FontLoader();
paatz138.load("/digital.json", (font) => {
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


var pathzw0ords3 = new THREE.Mesh();
const path0z1 = new FontLoader();
path0z1.load("/digital.json", (font) => {
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

var pathzw1ords33 = new THREE.Mesh();
const pathzz13 = new FontLoader();
pathzz13.load("/digital.json", (font) => {
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



const glftoaderb3w = new GLTFLoader();
glftoaderb3w.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(70.8-20,-15+30,40.2);
});
const glftoaderr3w = new GLTFLoader();
glftoaderr3w.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(68.8-20,-15+30,40.2);
});
const glftoaderbkx3w = new GLTFLoader();
glftoaderbkx3w.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(69.8-20,-14.8+30,41.2);
});
const glftoaderrpx3w = new GLTFLoader();
glftoaderrpx3w.load("/sceneblue.gltf", (gltfScene) => {
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


var patzw0ords3 = new THREE.Mesh();
const path01 = new FontLoader();
path01.load("/digital.json", (font) => {
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


var pthzw1ords33 = new THREE.Mesh();
const patzz13 = new FontLoader();
patzz13.load("/digital.json", (font) => {
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


var p0atzw0ord3 = new THREE.Mesh();
const papth001 = new FontLoader();
papth001.load("/digital.json", (font) => {
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

    //the code im copy pasting end
    var p0thz1ords33 = new THREE.Mesh();
    const p0atzwz13 = new FontLoader();
    p0atzwz13.load("/digital.json", (font) => {
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

    var p0atzw0or3 = new THREE.Mesh();
    const paph001 = new FontLoader();
    paph001.load("/digital.json", (font) => {
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
    
    var p0thz12ords33 = new THREE.Mesh();
    const p0atzwz213 = new FontLoader();
    p0atzwz213.load("/digital.json", (font) => {
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


    var p0atzw00or3 = new THREE.Mesh();
    const paph0001 = new FontLoader();
    paph0001.load("/digital.json", (font) => {
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
    
    var p00thz12ords33 = new THREE.Mesh();
    const p00atzwz213 = new FontLoader();
    p00atzwz213.load("/digital.json", (font) => {
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


    const mirroBack1 = new Reflector(
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
    
     const mirroBac1k1 = new Reflector(
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

     var p00thzz12ords33 = new THREE.Mesh();
     const p00atzwzz213 = new FontLoader();
     p00atzwzz213.load("/arcade.json", (font) => {
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


     var p00thzz192ords33 = new THREE.Mesh();
     const p900atzwzz213 = new FontLoader();
     p900atzwzz213.load("/arcade.json", (font) => {
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
     
     var p00thzz192ords303 = new THREE.Mesh();
     const p900atzwzz2103 = new FontLoader();
     p900atzwzz2103.load("/arcade.json", (font) => {
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
     
     var p00thzz192ords3003 = new THREE.Mesh();
     const p900atzwzz21003 = new FontLoader();
     p900atzwzz21003.load("/arcade.json", (font) => {
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
     
     var p00thzz192ords30003 = new THREE.Mesh();
     const p900atzwzz210003 = new FontLoader();
     p900atzwzz210003.load("/arcade.json", (font) => {
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


     const glftoaerb3w = new GLTFLoader();
     glftoaerb3w.load("/scenered.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-70.8-20,-60+20,40.2);
     });
     const glftoaerr3w = new GLTFLoader();
     glftoaerr3w.load("/scenered.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-68.8-20,-60+20,40.2);
     });
     const gltoaderbkx3w = new GLTFLoader();
     gltoaderbkx3w.load("/sceneblue.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-69.8-20,-59.8+20,41.2);
     });
     const glfoaderrpx3w = new GLTFLoader();
     glfoaderrpx3w.load("/sceneblue.gltf", (gltfScene) => {
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
gltoaderbkx3ww.load("/pipe.glb", (gltfScene) => {
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
gtoaderbkx3ww.load("/pipe.glb", (gltfScene) => {
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


const glftoaerb3w7 = new GLTFLoader();
glftoaerb3w7.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-70.8+40+2-20,-60-30+20,40.2);
});
const glftoaerr3w7 = new GLTFLoader();
glftoaerr3w7.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-68.8+40+3-20,-60-30+20,40.2);
});
const gltoaderbkx3w7 = new GLTFLoader();
gltoaderbkx3w7.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8+40+3-20,-59.8-30+20,41.2);
});
const glfoaderrpx3w7 = new GLTFLoader();
glfoaderrpx3w7.load("/sceneblue.gltf", (gltfScene) => {
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


const g8lftoaerb3w7 = new GLTFLoader();
g8lftoaerb3w7.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-70.8-20,-60-30+20,40.2);
});
const g8lftoaerr3w7 = new GLTFLoader();
g8lftoaerr3w7.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-68.8-20,-60-30+20,40.2);
});
const g8ltoaderbkx3w7 = new GLTFLoader();
g8ltoaderbkx3w7.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8-30+20,41.2);
});
const g8lfoaderrpx3w7 = new GLTFLoader();
g8lfoaderrpx3w7.load("/sceneblack.gltf", (gltfScene) => {
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


const hardobjects3 = []
const cubes3 = []
const softobjects3 = []
const diamonds3 = []
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


const updateFunc = function (object, elapsed) {
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
  if(sphere1.position.x === 2-20 && sphere1.position.y === 0+30 && sphere1.position.z === 40.2){
    console.log("in min right")
    sphere1.material.color.setHex(0xff0000);
     sphere1.visible = true;
     meshkk.visible = false;
   }

   if(sphere1.position.x === .8-20 && sphere1.position.y === .2+30 && sphere1.position.z === 40.2){
    console.log("in min up")
    sphere1.material.color.setHex(0x0000ff);
     sphere1.visible = true;
     meshkk.visible = false;
   }

//////////////4upmin
if(sphere1.position.x === -79.2-20 && sphere1.position.y === 2+30 && sphere1.position.z === 40.2){
  sphere1.visible = false;
  cube.visible = true;
  meshkk.visible = false;
}
if(sphere1.position.x === -77.2-20 && sphere1.position.y === 0+30 && sphere1.position.z === 40.2){
  sphere1.visible = false;
  meshkk.visible = true;
}

if(sphere1.position.x === .8 -20 && sphere1.position.y === 32+30 && sphere1.position.z === 40.2){
   sphere1.visible = false;
   meshkk.visible = true;
 }
 if(sphere1.position.x === 2-20 && sphere1.position.y === 30+30 && sphere1.position.z == 40.2){
  sphere1.visible = false;
  cube.visible = true;
}
//////////////5upmin
if(sphere1.position.x === 30.10-20 && sphere1.position.y === 2+30 && sphere1.position.z === 40.2){
  sphere1.visible = false;
  cube.visible = true;
}
if(sphere1.position.x === 32.10 -20&& sphere1.position.y === 0+30 && sphere1.position.z === 40.2){
  sphere1.visible = false;
  meshkk.visible = true;

}
if(sphere1.position.x === 66.8-20 && sphere1.position.y === 0 +30 && sphere1.position.z === 40.2){
  sphere1.visible = true;
  sphere1.material.color.setHex(0xff0000);
  meshkk.visible = false;
}
if(sphere1.position.x === 65.8-20 && sphere1.position.y === 2 +30 && sphere1.position.z === 40.2){
  sphere1.visible = true;
  sphere1.material.color.setHex(0x0000ff);
  meshkk.visible = false;
}

if(sphere1.position.x === -79.2-20 && sphere1.position.y === 100+30 && sphere1.position.z === 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x === 100.8-20 && sphere1.position.y === 30+30 && sphere1.position.z === 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x === 30.10-20 && sphere1.position.y === 160+30 && sphere1.position.z === 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x === .8-20 && sphere1.position.y === 160+30 && sphere1.position.z === 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x === 65.8-20 && sphere1.position.y === 165+30 && sphere1.position.z === 40.2){
  scene3.remove(sphere1);
  scene3.remove(meshkk);
  scene3.remove(cube);
}
if(sphere1.position.x === 150.8-20 && sphere1.position.y === 0+30 && sphere1.position.z === 40.2){
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
  a = new TWEEN.Tween(start).to(target4_min, 1)
  dec1 = new TWEEN.Tween(start).to(target4, 1000)

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


let button3 = new THREE.Mesh(new THREE.BoxBufferGeometry(),
new THREE.MeshPhongMaterial({ color: 0xfe7f93 },));
button3.position.set(7-20, -5+30, 40.2);
button3.scale.set(220, -3, 13);
button3.castShadow = true;
button3.receiveShadow = true;
scene3.add(button3)



this.container.addEventListener('click', event => {
  let x = Math.random()
  let x2 = Math.random()
  clickMouse303.x = ((event.clientX-this.container.getBoundingClientRect().left) / window.innerWidth) * 2 - 1;
  clickMouse303.y = -((event.clientY-this.container.getBoundingClientRect().top) / window.innerHeight) * 2 + 1;
  const found = intersect3(clickMouse303);
  if (found.length >= 0) {
    createHardElectron3();

}
})





    // update the scene
    const update = () => {
      TWEEN.update();
      for(var i = 0; i < hardobjects3.length ; ++i){
        cubes3[i].rotation.x += 0.1;
        cubes3[i].rotation.z += 0.1;
       }
      
       for(var i = 0; i < diamonds3.length ; ++i){
        diamonds3[i].rotation.y += 0.07;
       }
      renderer3.render(scene3, camera3);
      requestAnimationFrame(update);
    };
    update();
  }

  render() {
    const width = "100%";
    const height = "100%";
    return (
      
         
      <div
        ref={(container) => {
          this.container = container;
        }}
        style={{
          width: width,
          height: height,
          position: "absolute",
          overflow: "hidden",
        }}></div>
        
    );
  }
}

export default ExperimentOne;

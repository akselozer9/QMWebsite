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


const scene = new THREE.Scene();
const matrial = new THREE.MeshLambertMaterial( {color: 0x2596be, side: THREE.DoubleSide, opacity: 0.2} );


let softsa = 0;

let text_hard = new THREE.Mesh();
let text_soft = new THREE.Mesh();
let perc_hard = new THREE.Mesh();
let perc_soft = new THREE.Mesh();

class ExperimentTwo extends Component {
 
 
  

  componentDidMount() {
    
    
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
      //createPixels();

    
    // get container dimensions and use them for scene sizing
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(
      30, // fov = field of view
      width / height, // aspect ratio
      1, // near plane
      1500 // far plane
    );
   
    scene.add(camera);
    renderer.setClearColor("#000000");
    renderer.setSize(width, height);
    this.container.appendChild(renderer.domElement);

  
   
    const geomtry = new THREE.BoxGeometry( 100, 100, 2);
   
    const plane = new THREE.Mesh( geomtry, matrial );
    plane.position.set(0,0,0)
    plane.rotateX((Math.PI)/2)
    scene.add( plane );

    camera.position.set(-80, 80, 130)
    camera.lookAt(0,0,40)

    // add some light
const light = new THREE.PointLight(0xffffff);
light.position.set(0, 0, 5);
scene.add(light);

const light2 = new THREE.DirectionalLight(0x6a0dad, 1);
light2.position.set(-40.5, 8, 40.5);
scene.add(light2);


let hemiLight = new THREE.AmbientLight(0xffffff, 0.20);
scene.add(hemiLight);

let dirLight = new THREE.DirectionalLight(0xffffff, .3);
dirLight.position.set(-30, 50, -30);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.left = -70;
dirLight.shadow.camera.right = 70;
dirLight.shadow.camera.top = 70;
dirLight.shadow.camera.bottom = -70;

const control = new OrbitControls(camera, renderer.domElement);
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN


const loader = new GLTFLoader();

//MIRROS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS
const fontLoader = new FontLoader();

var soft_words = new THREE.Mesh();
var hard_words = new THREE.Mesh();




const mirror = new Reflector(
      new THREE.CircleGeometry(15, 1000),
      {
          color: new THREE.Color(0x7f7f7f),
          textureWidth: window.innerWidth * window.devicePixelRatio,
          textureHeight: window.innerHeight * window.devicePixelRatio
      }
     )
     mirror.position.x = -50
     mirror.position.y = 7
     mirror.position.z = -50
     mirror.rotateY((Math.PI)/4)
     scene.add(mirror); 



     const mirror2 = new Reflector(
      new THREE.CircleGeometry(15, 1000),
      {
          color: new THREE.Color(0x7f7f7f),
          textureWidth: window.innerWidth * window.devicePixelRatio,
          textureHeight: window.innerHeight * window.devicePixelRatio
      }
     )
     mirror2.position.x = 50
     mirror2.position.y = 7
     mirror2.position.z = 50
     mirror2.rotateY(((Math.PI)/4) + Math.PI)
     scene.add(mirror2)

//SCORE BOARD SIGN SCORE BOARD SIGN SCORE BOARD SIGN SCORE BOARD SIGN SCORE BOARD SIGN BOARD SIGN SCORE BOARD SIGN GN SCORE BOARD SIGN
loader.load("/cyberpunk_diner_sign_japanese.glb", (gltfScene) => {
      scene.add(gltfScene.scene);
      gltfScene.scene.scale.set(3.7,2,1.5);
      gltfScene.scene.position.set(0,-5,-70);
      });

const geoscreen = new THREE.BoxGeometry( 9, 10,1.2);
const materialscreen = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const screen = new THREE.Mesh( geoscreen, materialscreen );
screen.position.set(40,9,-40)
screen.rotateX((Math.PI)/2)
scene.add( screen );

const geoscreen2 = new THREE.BoxGeometry( 9, 10,1.2);
const materialscreen2 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const screen2 = new THREE.Mesh( geoscreen2, materialscreen2 );
screen2.position.set(-40,9,40)
screen2.rotateX((Math.PI)/2)
scene.add( screen2 );

const geoscreen3 = new THREE.BoxGeometry( 11, 58,1.2);
const materialscreen3 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const screen3 = new THREE.Mesh( geoscreen3, materialscreen3 );
screen3.position.set(-5,12.5,-69);
screen3.rotateZ((Math.PI)/2)
scene.add( screen3 );



fontLoader.load("/digital.json", (font) => {
  const textGeometry = new TextGeometry('R e d   E l e c t r o n s', {
  font,
  size: 3,
  height: .001,
  });
  const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
  soft_words.geometry =  textGeometry;
  soft_words.material = textMaterial;
  soft_words.position.set(-25,10.5,-63);
  });
  scene.add(soft_words);

  fontLoader.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('Blue   E l e c t r o n s', {
    font,
    size: 3,
    height: .01,
    });
    const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    hard_words.geometry =  textGeometry;
    hard_words.material = textMaterial;
    hard_words.position.set(-25,15.5,-63);
    });
    scene.add(hard_words);




    function LoadFont_Hard(hards){
  
      fontLoader.load("/digital.json", (font) => {
      const textGeometry = new TextGeometry(hards.toString(), {
      font,
      size: 4,
      height: .01,
      });
      const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
      text_hard.geometry =  textGeometry;
      text_hard.material = textMaterial;
      text_hard.position.set(-31,12.5,-63);
      });
      }
      scene.add(text_hard);
    
      function LoadFont_Soft(softs){
        
        fontLoader.load("/digital.json", (font) => {
        const textGeometry = new TextGeometry(softs.toString(), {
        font,
        size: 3,
        height: .01
        });
        const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
        text_soft.geometry =  textGeometry;
        text_soft.material = textMaterial;
        text_soft.position.set(-31,10.5,-63);
        });
        }

      //  scene.add(text_soft);
     
     
      
      
      function LoadFontPercHard(percent){
      
      fontLoader.load("/digital.json", (font) => {
      const textGeometry = new TextGeometry(percent.toString() + '%', {
      font,
      size: 3,
      height: .01
      });
      const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
      perc_hard.geometry =  textGeometry;
      perc_hard.material = textMaterial;
      perc_hard.position.set(15.5,15.5,-63);
      });
      }
      
      
     
    
    function LoadFontPercSoft(percent){
    fontLoader.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry(percent.toString() + '%', {
    font,
    size: 3,
    height: .01
    });
    const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
    perc_soft.geometry =  textGeometry;
    perc_soft.material = textMaterial;
    perc_soft.position.set(15.5,10.5,-63);
    });
    }





//MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES BOXES MYSTERY BOXES MYSTERY BOXES

//FRONT LEFT


    const GoldBox = new GLTFLoader();
GoldBox.load("/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-39.2,-9,40.2);
});
const GoldBox2 = new GLTFLoader();
GoldBox2.load("/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-41.2,-9,40.2);
});
const BlackBox = new GLTFLoader();
BlackBox.load("/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-40.2,-9,41.2);
});
const BlackBox2 = new GLTFLoader();
BlackBox2.load("/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-40.2,-9,39.2);
});


const RedBox = new GLTFLoader();
RedBox.load("/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(39.2,-9,-40.2);
});
const RedBox2 = new GLTFLoader();
RedBox2.load("/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(41.2,-9,-40.2);
});
const BlueBox = new GLTFLoader();
BlueBox.load("/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(40.2,-9,-41.2);
});
const BlueBox2 = new GLTFLoader();
BlueBox2.load("/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(40.2,-9,-39.2);
});



// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END




// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
 

    const hard_path_mesh = new THREE.Mesh();
    const soft_path_mesh = new THREE.Mesh();
    const red_path_mesh = new THREE.Mesh();
    const blue_path_mesh =new THREE.Mesh();


      fontLoader.load("/Quantum_Regular (1).json", (font) => {
      const textGeometry = new TextGeometry("C U B E   P A T H", {
      font,
      size: 5,
      height: 1,
      });
      const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
      hard_path_mesh.geometry =  textGeometry;
      hard_path_mesh.material = textMaterial;
      hard_path_mesh.position.set(-42,2,32);
      hard_path_mesh.rotateX(-(Math.PI)/2)
      hard_path_mesh.rotateZ(Math.PI/2)
      hard_path_mesh.castShadow = true;
      hard_path_mesh.receiveShadow = true;
      scene.add(hard_path_mesh);
      });

     
  fontLoader.load("/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("BLUE PATH", {
  font,
  size: 10,
  height: .001,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x00008B});
  blue_path_mesh.geometry =  textGeometry;
  blue_path_mesh.material = textMaterial;
  blue_path_mesh.position.set(50,2,-55);
  blue_path_mesh.rotateX(-(Math.PI)/2)
  blue_path_mesh.rotateZ(Math.PI/2)
  blue_path_mesh.castShadow = true;
  blue_path_mesh.receiveShadow = true;
  scene.add(blue_path_mesh);
  });


  fontLoader.load("/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("DIAMOND PATH", {
  font,
  size: 5,
  height: 1,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0xEEBC1D});
  soft_path_mesh.geometry =  textGeometry;
  soft_path_mesh.material = textMaterial;
  soft_path_mesh.position.set(-32,2,45);
  soft_path_mesh.rotateX(-(Math.PI)/2);
  soft_path_mesh.castShadow = true;
  soft_path_mesh.receiveShadow = true;
  scene.add(soft_path_mesh);
  });

  
  fontLoader.load("/Quantum_Regular (1).json", (font) => {
  const textGeometry = new TextGeometry("RED PATH", {
  font,
  size: 8,
  height: .001,
  });

  const textMaterial = new THREE.MeshPhongMaterial({color: 0x8b0000});
  red_path_mesh.geometry =  textGeometry;
  red_path_mesh.material = textMaterial;
  red_path_mesh.position.set(55,1,-50);
  red_path_mesh.rotateX(-(Math.PI)/2);
  red_path_mesh.castShadow = true;
  red_path_mesh.receiveShadow = true;
  scene.add(red_path_mesh);
  });


// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END


//FUNCTIONS THAT DETERMINE ELECTRONS PATH BEGIN///////////////////////////////////////

function hard_percent(hards, softs){
  var sum = hards + softs;
    return Math.round(((hards/sum))*100)
  }

const hardobjects = []; 
const cubes =  []; 

function createHardElectron() {
   var x = Math.random();
 let sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1),
 new THREE.MeshPhongMaterial({ color: 0xff0000}))
sphere1.position.set(-20, 5, 20)
sphere1.castShadow = true
sphere1.receiveShadow = true
hardobjects.push(sphere1);
scene.add(sphere1)


const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(-20,5,20);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);
cube.visible = false;
cubes.push(cube);

 var start = {x: -60, y: 5, z: 42 };
 var target1 = { x: -42, y: 5, z: 42 };
 var target2 = { x: -42, y: 5, z: -42 };
 var target3 = { x: 42, y: 5, z: -42 };
 var tar_x = { x: 43, y: 5, z: -42 };
 var target4 = { x: 200, y: 5, z: -42 };
 var tar_z = { x: 42, y: 5, z: -43 };
 var target5  = { x: 42, y: 5, z: -200 };

 const updateFunc = function (object, elapsed) {
   sphere1.position.x = object.x;
   sphere1.position.y = object.y;
   sphere1.position.z = object.z;

   cube.position.x = object.x;
   cube.position.y = object.y;
   cube.position.z = object.z;

   if(sphere1.position.z === 42 && sphere1.position.x === -42){
    sphere1.material.color.setHex(0x0000ff);
    sphere1.visible = false;
    cube.visible = true;
  }
   if(sphere1.position.z === -42 && sphere1.position.x === 42 ){
    sphere1.visible = false;
    cube.visible = true;
 }
if(sphere1.position.x === 42 && sphere1.position.z === -43){
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
sphere1.scale.set(4.2,4.2,4.2)
  cube.visible = false;
}
if(sphere1.position.z === -42 && sphere1.position.x === 43 ){
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
if(sphere1.position.x === 200){
  scene.remove(sphere1);
  scene.remove(cube);
}
if(sphere1.position.z === -200){
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
}

const softobjects = [];
const diamonds = [];

function createSoftElectron() {
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

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshPhongMaterial({color: 0xff0000}));
sphere2.position.set(10,5,-10);
sphere2.castShadow = true;
sphere2.receiveShadow = true;
softobjects.push(sphere2);
scene.add(sphere2);

var start = {x: -60, y: 5, z: 42 };
var target1 = { x: -42, y: 5, z: 42 };
var target2 = { x: 42, y: 5, z: 42 };
var target3 = { x: 42, y: 5, z: -42 };
var tar_x =  { x: 43, y: 5, z: -42 };
var target4 = { x: 200, y: 5, z: -42};
var tar_z =  { x: 42, y: 5, z: -43 };
var target5 = { x: 42, y: 5, z: -200 };

 const updateFunc = function (object, elapsed) {

   sphere2.position.x = object.x;
   sphere2.position.y = object.y;
   sphere2.position.z = object.z;

   meshkk.position.x = object.x;
   meshkk.position.y = object.y;
   meshkk.position.z = object.z;

    if(sphere2.position.z === 42 && sphere2.position.x === -42){
      sphere2.visible = false;
      meshkk.visible = true;
    }

   if(sphere2.position.z === -42 && sphere2.position.x === 42){
    sphere2.visible = false;
    meshkk.visible = true;
  }
  if(sphere2.position.z === -42 && sphere2.position.x === 43 ){
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

  if(sphere2.position.x === 42 && sphere2.position.z === -43){
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

  if(sphere2.position.z === -200){
    scene.remove(sphere2);
    scene.remove(meshkk);
  }
  if(sphere2.position.x === 200){
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


//FUNCTIONS THAT DETERMINE ELECTRONS PATH END///////////////////////////////////////////////
var raycaster = new THREE.Raycaster(); 
var clickMouse = new THREE.Vector2();  

function intersect(pos) {
 raycaster.setFromCamera(pos, camera);
 return raycaster.intersectObjects(scene.children,true);
}

//click event listener to fire electrons 
this.container.addEventListener('click', event => {

let canvasBounds  = this.container.getBoundingClientRect();
  let x = Math.random();
  let x2 = Math.random();

  clickMouse.x = ((event.clientX-this.container.getBoundingClientRect().left) / window.innerWidth) * 2 - 1;
  clickMouse.y = -((event.clientY-this.container.getBoundingClientRect().top) / window.innerHeight) * 2 + 1;
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







    // update the scene
    const update = () => {
      TWEEN.update();
      
   
    
   //check_state();
     for(var i = 0; i < hardobjects.length ; ++i){
      cubes[i].rotation.x += 0.1;
      cubes[i].rotation.z += 0.1;
     }
    
     for(var i = 0; i < softobjects.length ; ++i){
      diamonds[i].rotation.y += 0.07;
     }
      renderer.render(scene, camera);
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

export default ExperimentTwo;

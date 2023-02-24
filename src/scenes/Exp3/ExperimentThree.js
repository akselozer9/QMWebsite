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
const matrial = new THREE.MeshLambertMaterial( {color: 0xff0ab4, side: THREE.DoubleSide, opacity: 0.2} );



let hardsa2 = 0;
let softsa2 = 0;
let text_hard2 = new THREE.Mesh();

let perc_hard2 = new THREE.Mesh();

let perc_soft2 = new THREE.Mesh();

let text_soft2 = new THREE.Mesh();

class ExperimentThree extends Component {
 
  
  

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

    const renderer = new THREE.WebGLRenderer({antialias: true})
    const camera = new THREE.PerspectiveCamera(
      30, // fov = field of view
      width / height, // aspect ratio
      1, // near plane
      1500 // far plane
    );
   


    

    scene.add(camera);
    renderer.setClearColor("#000000");
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    this.container.appendChild(renderer.domElement);

    //lights along the plane

    //create the light
    
    



//lights along the plane
   

    const geomtry = new THREE.BoxGeometry( 100, 100, 2);
   
    const plan = new THREE.Mesh( geomtry, matrial );
    plan.position.set(0,0,0)
    plan.rotateX((Math.PI)/2)
    scene.add( plan );

    camera.position.set(-80, 80, 130)
    camera.lookAt(0,0,40)

    // add some light
const light = new THREE.PointLight(0xffffff);
light.position.set(0, 0, 5);
scene.add(light);

const lightk = new THREE.DirectionalLight(0x6a0dad, 1);
lightk.position.set(-40.5, 8, 40.5);
scene.add(lightk);

// ambient light
let hemiLight = new THREE.AmbientLight(0xffffff, 0.20);
scene.add(hemiLight);
//scene.background = new THREE.Color(0x000000);
//Add directional light
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
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
// BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN BLENDER OBJECTS BEGIN
const loader = new GLTFLoader();

//MIRROS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS MIRRORS
const fontLoader = new FontLoader();





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

var soft_words2 = new THREE.Mesh();

fontLoader.load("/digital.json", (font) => {
  const textGeometry = new TextGeometry('R e d   E l e c t r o n s', {
  font,
  size: 3,
  height: .001,
  });
  const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
  soft_words2.geometry =  textGeometry;
  soft_words2.material = textMaterial;
  soft_words2.position.set(-28,10.5,-63);
  });
  scene.add(soft_words2);

  var hard_words2 = new THREE.Mesh();
  fontLoader.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('Blue   E l e c t r o n s', {
    font,
    size: 3,
    height: .01,
    });
    const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    hard_words2.geometry =  textGeometry;
    hard_words2.material = textMaterial;
    hard_words2.position.set(-28,15.5,-63);
    });
    scene.add(hard_words2);

   
    function LoadFont_Hard2(hards){
    const fontLoader = new FontLoader();
    fontLoader.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry(hards.toString(), {
    font,
    size: 3,
    height: .01,
    });
    const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    text_hard2.geometry =  textGeometry;
    text_hard2.material = textMaterial;
    text_hard2.position.set(-34,16.4,-58);
    });
    }
    



    
      

      function LoadFont_Soft2(softs){
      const fontLoader = new FontLoader();
      fontLoader.load("/digital.json", (font) => {
      const textGeometry = new TextGeometry(softs.toString(), {
      font,
      size: 3,
      height: .01
      });
      const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
      text_soft2.geometry =  textGeometry;
      text_soft2.material = textMaterial;
      text_soft2.position.set(-34,11.4,-58);
      });
      }





      
     
     
    
    
    
      function LoadFontPercSoft2(percent){
      const fontLoaderPercSoft = new FontLoader();
      fontLoaderPercSoft.load("/digital.json", (font) => {
      const textGeometry = new TextGeometry(percent.toString() + '%', {
      font,
      size: 3,
      height: .01
      });
      const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
      perc_soft2.geometry =  textGeometry;
      perc_soft2.material = textMaterial;
      perc_soft2.position.set(10,11.4,-58);
      });
      }

     
function LoadFontPercHard2(percent){
const fontLoaderPercHard = new FontLoader();
fontLoaderPercHard.load("/digital.json", (font) => {
const textGeometry = new TextGeometry(percent.toString() + '%', {
font,
size: 3,
height: .01
});
const textMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
perc_hard2.geometry =  textGeometry;
perc_hard2.material = textMaterial;
perc_hard2.position.set(10,16.4,-58);
});
}




//MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES MYSTERY BOXES BOXES MYSTERY BOXES MYSTERY BOXES

//FRONT LEFT


    const gglftLoaderb = new GLTFLoader();
gglftLoaderb.load("/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-39.2,-9,40.2);
});
const gglftLoaderr = new GLTFLoader();
gglftLoaderr.load("/scenegold.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-41.2,-9,40.2);
});
const gglftLoaderbkx = new GLTFLoader();
gglftLoaderbkx.load("/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-40.2,-9,41.2);
});
const gglftLoaderrpx = new GLTFLoader();
gglftLoaderrpx.load("/sceneblack.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20)
gltfScene.scene.position.set(-40.2,-9,39.2);
});


const glftLoaderb = new GLTFLoader();
glftLoaderb.load("/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(39.2,-9,-40.2);
});
const glftLoaderr = new GLTFLoader();
glftLoaderr.load("/scenered.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(41.2,-9,-40.2);
});
const glftLoaderbkx = new GLTFLoader();
glftLoaderbkx.load("/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(40.2,-9,-41.2);
});
const glftLoaderrpx = new GLTFLoader();
glftLoaderrpx.load("/sceneblue.gltf", (gltfScene) => {
scene.add(gltfScene.scene);
gltfScene.scene.scale.set(20,20,20);
gltfScene.scene.position.set(40.2,-9,-39.2);
});



// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END
// BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END BLENDER OBJECTS END











// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
// ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS BEGIN ALL FONTS
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
  soft_path_mesh.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
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
  red_path_mesh.rotateX(-(Math.PI)/2)
  //soft_path_mesh.rotateZ(Math.PI/2)
  red_path_mesh.castShadow = true;
  red_path_mesh.receiveShadow = true;
  scene.add(red_path_mesh);
  });


  
  
  
  

// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END
// ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END ALL FONTS END



//FUNCTIONS THAT DETERMINE ELECTRONS PATH BEGIN///////////////////////////////////////

function hard_percent2(hards, softs){
  const sum = hards + softs;
    return Math.trunc(((hards/sum)*100))
  }



  const hardobjects2 = []
  const cubes2 = []
  function createHardElectron2() {
    //let truthy = true;
     var x = Math.random();
   let sphere12 = new THREE.Mesh(new THREE.SphereGeometry(1),
   new THREE.MeshPhongMaterial({ color: 0xff0000}))
  sphere12.position.set(-20, .2, 20)
  sphere12.castShadow = true
  sphere12.receiveShadow = true
  hardobjects2.push(sphere12);
  scene.add(sphere12)
  
  
  const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
  const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
  const cube2 = new THREE.Mesh( geometry, material );
  cube2.position.set(4,10,0);
  cube2.castShadow = true;
  cube2.receiveShadow = true;
  scene.add(cube2);
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
  
  
   const updateFunc = function (object, elapsed) {
     sphere12.position.x = object.x;
     sphere12.position.y = object.y;
     sphere12.position.z = object.z;
  
     cube2.position.x = object.x;
     cube2.position.y = object.y;
     cube2.position.z = object.z;
  
     if(sphere12.position.z === 42 && sphere12.position.x === -42){
      sphere12.material.color.setHex(0x0000ff);
      sphere12.visible = false;
      cube2.visible = true;
    }
  
     if(sphere12.position.z === -42 && sphere12.position.x === 42 ){
  
      sphere12.visible = false;
      cube2.visible = true;
   }
  if(sphere12.position.x === 42 && sphere12.position.z === -43){
    ++hardsa2;
    let percent2 = hard_percent2(hardsa2,softsa2);
    scene.remove(text_hard2);
    scene.remove(perc_hard2);
    scene.remove(perc_soft2);
    LoadFont_Hard2(hardsa2);
    LoadFontPercHard2(percent2);
    LoadFontPercSoft2(Math.trunc((1-(percent2/100))*100));
    scene.add(text_hard2);
    scene.add(perc_hard2);
    scene.add(perc_soft2);
    sphere12.material.color.setHex(0xffffff);
    sphere12.visible = true;
    sphere12.material.color.setHex(0X00008B)
  sphere12.scale.set(2.2,2.2,2.2)
    cube2.visible = false;
  }
  if(sphere12.position.z === -42 && sphere12.position.x === 43 ){
    ++softsa2;
    let percent2 = hard_percent2(hardsa2,softsa2);
    scene.remove(text_soft2);
    scene.remove(perc_soft2);
    scene.remove(perc_hard2);
    LoadFont_Soft2(softsa2);
    LoadFontPercHard2(percent2);
    LoadFontPercSoft2(Math.trunc((1-(percent2/100))*100));
    scene.add(text_soft2);
    scene.add(perc_soft2);
    scene.add(perc_hard2);
    sphere12.visible = true;
    sphere12.material.color.setHex(0Xff0000)
  sphere12.scale.set(2.2,2.2,2.2)
     cube2.visible = false;
  }
  if(sphere12.position.x === 200){
    scene.remove(sphere12);
    scene.remove(cube2);
  }
  if(sphere12.position.z === -200){
    scene.remove(sphere12);
    scene.remove(cube2);
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



const softobjects2  = [];
const diamonds2 = [];


function createSoftElectron2() {

const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const cube2 = new THREE.Mesh( geometry, material );
cube2.position.set(4,10,0);
cube2.castShadow = true;
cube2.receiveShadow = true;
scene.add(cube2);
cube2.visible = false;
cubes2.push(cube2);
  //let truthy = true;
  let x = Math.random()
  let y = Math.random()
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
  scene.add(meshkk2)
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
scene.add(sphere2);

var start = {x: -60, y: 5, z: 42 };
var dead_end1 = { x: -44, y: 5, z: 42 };
var dead_endk = { x: -44, y: 5, z: 42 };
var dead_end2 = { x: -44, y: 5, z: -42 };
var dead_end3 = { x: 0, y: 5, z: -42 };
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

   meshkk2.position.x = object.x;
   meshkk2.position.y = object.y;
   meshkk2.position.z = object.z;

   cube2.position.x = object.x;
   cube2.position.y = object.y;
   cube2.position.z = object.z;

   if(sphere2.position.x === -44 && sphere2.position.z === 42){
    sphere2.visible = false;
    meshkk2.visible = false;
    cube2.visible = true;
  }


  if(sphere2.position.x === 0 && sphere2.position.z === -42){
    scene.remove(sphere2);
    scene.remove(meshkk2);
    scene.remove(cube2);
  }

    if(sphere2.position.z === 42 && sphere2.position.x === -42){
      sphere2.visible = false;
      cube2.visible = false;
      meshkk2.visible = true;
    }



   if(sphere2.position.z === -42 && sphere2.position.x === 42){
    sphere2.visible = false;
    meshkk2.visible = true;
  }
  if(sphere2.position.z === -42 && sphere2.position.x === 43 ){
    softsa2 = softsa2 + 1;
  }

  if(sphere2.position.z === -42 && sphere2.position.x === 43 ){
   //softsa2 = softsa2 + 1;
   console.log(`softs: ${softsa2}`);
   
   scene.remove(text_soft2);
    scene.remove(perc_soft2);
    scene.remove(perc_hard2);
    LoadFont_Soft2(softsa2);
    LoadFontPercHard2(hard_percent2(hardsa2,softsa2));
    LoadFontPercSoft2(Math.trunc((1-(hard_percent2(hardsa2,softsa2)/100))*100));
    scene.add(text_soft2);
    scene.add(perc_soft2);
    scene.add(perc_hard2);

    sphere2.material.color.setHex(0xff0000);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk2.visible = false;

  }
  if(sphere2.position.x === 42 && sphere2.position.z === -43){
    hardsa2 = hardsa2 + 1;
  }

  if(sphere2.position.x === 42 && sphere2.position.z === -43){
    // hardsa2 = hardsa2 + 1;
   
   console.log(`hards: ${hardsa2}`);
    scene.remove(text_hard2);
    scene.remove(perc_hard2);
    scene.remove(perc_soft2);
    LoadFont_Hard2(hardsa2);
    LoadFontPercHard2(hard_percent2(hardsa2,softsa2));
    LoadFontPercSoft2(Math.trunc((1-(hard_percent2(hardsa2,softsa2)/100))*100));
    scene.add(text_hard2);
    scene.add(perc_hard2);
    scene.add(perc_soft2);
    sphere2.material.color.setHex(0X00008B);
    sphere2.visible = true;
    sphere2.scale.set(2.2,2.2,2.2);
    meshkk2.visible = false;
  }

  if(sphere2.position.z === -200){
    scene.remove(sphere2);
    scene.remove(meshkk2);
    scene.remove(cube2);
  }
  if(sphere2.position.x === 200){
    scene.remove(sphere2);
    scene.remove(meshkk2);
    scene.remove(cube2);
  }

 }
if(y <= 0.5){
  var tween1 = new TWEEN.Tween(start).to(dead_end1, 2000)
  var tween2 = new TWEEN.Tween(start).to(dead_end2, 2000)
  var tween3 = new TWEEN.Tween(start).to(dead_end3, 2000)

  tween1.chain(tween2).start()
  tween2.chain(tween3)

  tween1.onUpdate(updateFunc)
  tween2.onUpdate(updateFunc)
  tween3.onUpdate(updateFunc)
}
else{
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
}









  //bring wall 
const glftLoadercs = new GLTFLoader();
glftLoadercs.load("/brick_wall.glb", (gltfScene) => {
scene.add(gltfScene.scene)
gltfScene.scene.scale.set(5,10,20);
gltfScene.scene.rotateY((Math.PI)/2);
gltfScene.scene.position.set(0,-2,-35);
});








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
  
        createSoftElectron2();
       
  }
})







    // update the scene
    const update = () => {
      TWEEN.update();
      
   
    
   //check_state();
     for(var i = 0; i < hardobjects2.length ; ++i){
      cubes2[i].rotation.x += 0.1;
      cubes2[i].rotation.z += 0.1;
     }
    
     for(var i = 0; i < softobjects2.length ; ++i){
      diamonds2[i].rotation.y += 0.07;
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

export default ExperimentThree;

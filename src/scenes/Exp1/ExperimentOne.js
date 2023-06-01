
 

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

    const Light1 = new THREE.DirectionalLight(0xfff0dd, .2);
    Light1.position.set(0, 5, 10);
    Light1.castShadow = true;
    scene3.add(Light1);
    
    const Light2 = new THREE.DirectionalLight(0x6a0dad, 1);
    Light2.position.set(-40.5, 8, 40.5);
    Light2.castShadow = true;
    scene3.add(Light2);
    
    // ambient light
    let HemLight1 = new THREE.AmbientLight(0xffffff, 0.20);
    HemLight1.castShadow = true;
    scene3.add(HemLight1);
    
    //Add directional light
    let DirLight1 = new THREE.DirectionalLight(0xffffff, .5);
    DirLight1.position.set(-30, 50, -30);
    scene3.add(DirLight1);
    DirLight1.castShadow = true;
    DirLight1.shadow.mapSize.width = 2048;
    DirLight1.shadow.mapSize.height = 2048;
    DirLight1.shadow.camera.left = -70;
    DirLight1.shadow.camera.right = 70;
    DirLight1.shadow.camera.top = 70;
    DirLight1.shadow.camera.bottom = -70;
    
    
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



  
  const raycaster303 = new THREE.Raycaster(); // create once
  const clickMouse303 = new THREE.Vector2();  // create once
  const moveMouse3 = new THREE.Vector2();   // create once
  
  
  function intersect3(pos) {
   raycaster303.setFromCamera(pos, camera3);
   return raycaster303.intersectObjects(scene3.children,true);
  }

  const loaderGold1 = new GLTFLoader();
  loaderGold1.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-79.2-20,-15+30,40.2);
  });
  const loaderGold2 = new GLTFLoader();
  loaderGold2.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-81.2-20,-15+30,40.2);
  });
  const loaderBlack1 = new GLTFLoader();
  loaderBlack1.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-80.2-20,-14.8+30,41.2);
  });
  const loaderBlack2 = new GLTFLoader();
  loaderBlack2.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-80.2-20,-14.8+30,39.2);
  });
  
  var PersisMesh = new THREE.Mesh();
  const PersisLoader = new FontLoader();
  PersisLoader.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('P e r s i s t e n c e', {
  font,
  size: 5,
  height: 2,
  });
  //45f248
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
  PersisMesh.geometry =  textGeometry;
  PersisMesh.material = textMaterial;
  PersisMesh.position.set(-88.2-20,-15+30,39.2);
  });
  scene3.add(PersisMesh);

  var PropMesh = new THREE.Mesh;
  const PropLoader = new FontLoader();
  PropLoader.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('P r o p e r t y', {
  font,
  size: 5,
  height: 2,
  });
  
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
  PropMesh.geometry =  textGeometry;
  PropMesh.material = textMaterial;
  PropMesh.position.set(-88.2-20,-22+30,39.2);
  });
  scene3.add(PropMesh);


  var PersisMesh2 = new THREE.Mesh();
  const PersisFont2 = new FontLoader();
  PersisFont2.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('P e r s i s t e n c e', {
  font,
  size: 5.02,
  height: 2.5,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
  PersisMesh2.geometry =  textGeometry;
  PersisMesh2.material = textMaterial;
  PersisMesh2.position.set(-88.2-20,-15+30,39.2);
  });
  scene3.add(PersisMesh2);
  
  var PropMesh2 = new THREE.Mesh();
  const PropFont2 = new FontLoader();
  PropFont2.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('P r o p e r t y', {
  font,
  size: 5.02,
  height: 2.5,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
  PropMesh2.geometry =  textGeometry;
  PropMesh2.material = textMaterial;
  PropMesh2.position.set(-88.2-20,-22+30,39.2);
  });
  scene3.add(PropMesh2);

  var UncerMesh = new THREE.Mesh();
  const UncerFont = new FontLoader();
  UncerFont.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('U n c e r t a i n t y   P r i n c i p l e', {
  font,
  size: 5,
  height: 2,
  });
  
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x45f248});
  UncerMesh.geometry =  textGeometry;
  UncerMesh.material = textMaterial;
  UncerMesh.position.set(-8-20,-15+30,39.2);
  });
  UncerMesh.rotateY(-.1)
  scene3.add(UncerMesh);
  
  var UncerMesh2 = new THREE.Mesh();
  const UncerFont2 = new FontLoader();
  UncerFont2.load("/rickfont.json", (font) => {
  const textGeometry = new TextGeometry('U n c e r t a i n t y   P r i n c i p l e', {
  font,
  size: 5.02,
  height: 2.5,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x0492c2});
  UncerMesh2.geometry =  textGeometry;
  UncerMesh2.material = textMaterial;
  UncerMesh2.position.set(-8-20,-15+30,39.2);
  });
  UncerMesh2.rotateY(-.1)
  scene3.add(UncerMesh2);
  


  var CubeMesh = new THREE.Mesh();
  const CubeFont = new FontLoader();
  CubeFont.load("/digital.json", (font) => {
  const textGeometry = new TextGeometry('C u b e', {
  font,
  size: 3,
  height: .3,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  CubeMesh.geometry =  textGeometry;
  CubeMesh.material = textMaterial;
  CubeMesh.position.set(-84.2-20,15+30,39.2);
  });
  scene3.add(CubeMesh);
  
  var PathMesh1 = new THREE.Mesh();
  const PathFont1 = new FontLoader();
  PathFont1.load("./digital.json", (font) => {
  const textGeometry = new TextGeometry('P a t h', {
  font,
  size: 3,
  height: .3,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  PathMesh1.geometry =  textGeometry;
  PathMesh1.material = textMaterial;
  PathMesh1.position.set(-84.2-20,11+30,39.2);
  });
  scene3.add(PathMesh1);



  var DiamMesh1 = new THREE.Mesh();
  const DiamFont1 = new FontLoader();
  DiamFont1.load("/digital.json", (font) => {
  const textGeometry = new TextGeometry('D i a m o n d', {
  font,
  size: 3,
  height: .3,
  });
  const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  DiamMesh1.geometry =  textGeometry;
  DiamMesh1.material = textMaterial;
  DiamMesh1.position.set(-70-20,4+30,39.2);
  });
  scene3.add(DiamMesh1);
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

  const plainGeo = new THREE.BoxGeometry( 10, 10,.5);
  const plainMesh = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
  const plain = new THREE.Mesh( plainGeo, plainMesh );
  plain.position.set(-.2-20,38.2+30,40.2);
  plain.rotateX((Math.PI)/2)
  scene3.add( plain );

  const GoldBox1 = new GLTFLoader();
  GoldBox1.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-44.2-20,-15+30,40.2);
  });
  const GoldBox2 = new GLTFLoader();
  GoldBox2.load("/scenegold.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-46.2-20,-15+30,40.2);
  });
  const BlackBox1 = new GLTFLoader();
  BlackBox1.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-45.2-20,-14.8+30,41.2);
  });
  const BlackBox2 = new GLTFLoader();
  BlackBox2.load("/sceneblack.gltf", (gltfScene) => {
  scene3.add(gltfScene.scene);
  gltfScene.scene.scale.set(25,25,26);
  gltfScene.scene.position.set(-45.2-20,-14.8+30,39.2);
  });



var CubeMesh = new THREE.Mesh();
const CubeFont2 = new FontLoader();
CubeFont2.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
CubeMesh.geometry =  textGeometry;
CubeMesh.material = textMaterial;
CubeMesh.position.set(-49.2-20,15+30,39.2);
});
scene3.add(CubeMesh);

var PathMesh11 = new THREE.Mesh();
const PathFont = new FontLoader();
PathFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh11.geometry =  textGeometry;
PathMesh11.material = textMaterial;
PathMesh11.position.set(-49.2-20,11+30,39.2);
});
scene3.add(PathMesh11);


var DiamMesh4 = new THREE.Mesh();
const DiamFont = new FontLoader();
DiamFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
DiamMesh4.geometry =  textGeometry;
DiamMesh4.material = textMaterial;
DiamMesh4.position.set(-35-20,4+30,39.2);
});
scene3.add(DiamMesh4);

var PathMesh11 = new THREE.Mesh();
const PathFont2 = new FontLoader();
PathFont2.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh11.geometry =  textGeometry;
PathMesh11.material = textMaterial;
PathMesh11.position.set(-35-20,0+30,39.2);
});
scene3.add(PathMesh11);




const RedBox = new GLTFLoader();
RedBox.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,-15+30,40.2);
});
const RedBox2 = new GLTFLoader();
RedBox2.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,-15+30,40.2);
});
const BlueBox = new GLTFLoader();
BlueBox.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,41.2);
});
const BlueBox2 = new GLTFLoader();
BlueBox2.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,-14.8+30,39.2);
});

const GoldBox3 = new GLTFLoader();
GoldBox3.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(30.8-20,-15+30,40.2);
});
const GoldBox4 = new GLTFLoader();
GoldBox4.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(28.8-20,-15+30,40.2);
});
const BlackBox3 = new GLTFLoader();
BlackBox3.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,41.2);
});
const BlackBox4 = new GLTFLoader();
BlackBox4.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(29.8-20,-14.8+30,39.2);
});


var DiamMesh2 = new THREE.Mesh();
const DiamFont2 = new FontLoader();
DiamFont2.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
DiamMesh2.geometry =  textGeometry;
DiamMesh2.material = textMaterial;
DiamMesh2.position.set(40-20,4+30,39.2);
});
scene3.add(DiamMesh2);
var PathMesh9 = new THREE.Mesh();
const PathFont3 = new FontLoader();
PathFont3.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh9.geometry =  textGeometry;
PathMesh9.material = textMaterial;
PathMesh9.position.set(40-20,0+30,39.2);
});
scene3.add(PathMesh9);


var RedMesh = new THREE.Mesh();
const RedFont = new FontLoader();
RedFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('R e d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
RedMesh.geometry =  textGeometry;
RedMesh.material = textMaterial;
RedMesh.position.set(9-20,4+30,39.2);
});
scene3.add(RedMesh);
var PathMesh4 = new THREE.Mesh();
const PathFont4 = new FontLoader();
PathFont4.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh4.geometry =  textGeometry;
PathMesh4.material = textMaterial;
PathMesh4.position.set(7-20,0+30,39.2);
});
scene3.add(PathMesh4);





var RedMesh2 = new THREE.Mesh();
const RedFont2 = new FontLoader();
RedFont2.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('R e d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
RedMesh2.geometry =  textGeometry;
RedMesh2.material = textMaterial;
RedMesh2.position.set(84-20,4+30,39.2);
});
scene3.add(RedMesh2);
var PathMesh5 = new THREE.Mesh();
const PathFont5 = new FontLoader();
PathFont5.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh5.geometry =  textGeometry;
PathMesh5.material = textMaterial;
PathMesh5.position.set(82-20,0+30,39.2);
});
scene3.add(PathMesh5);



var CubeMesh = new THREE.Mesh();
const CubeFront = new FontLoader();
CubeFront.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
CubeMesh.geometry =  textGeometry;
CubeMesh.material = textMaterial;
CubeMesh.position.set(25.8-20,15+30,39.2);
});
scene3.add(CubeMesh);

var PathMesh7 = new THREE.Mesh();
const PathFont6 = new FontLoader();
PathFont6.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh7.geometry =  textGeometry;
PathMesh7.material = textMaterial;
PathMesh7.position.set(25.8-20,11+30,39.2);
});
scene3.add(PathMesh7);


var BlueMesh = new THREE.Mesh();
const BlueFont = new FontLoader();
BlueFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('B l u e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
BlueMesh.geometry =  textGeometry;
BlueMesh.material = textMaterial;
BlueMesh.position.set(65.8-20,15+30,39.2);
});
scene3.add(BlueMesh);

var PathMesh7 = new THREE.Mesh();
const PathFont7 = new FontLoader();
PathFont7.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh7.geometry =  textGeometry;
PathMesh7.material = textMaterial;
PathMesh7.position.set(65.8-20,11+30,39.2);
});
scene3.add(PathMesh7);


const CoverGeo = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial = new THREE.MeshBasicMaterial( {color: 0x8b0000, side: THREE.DoubleSide} );
const Cover = new THREE.Mesh( CoverGeo, CoverMaterial );
Cover.position.set(-.2-20,8+30,40.2);
Cover.rotateX((Math.PI)/2)
scene3.add( Cover );

const CoverGeo1 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial1 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const Cover1 = new THREE.Mesh( CoverGeo1, CoverMaterial1 );
Cover1.position.set(-45.2-20,8+30,40.2);
Cover1.rotateX((Math.PI)/2)
scene3.add( Cover1 );

const CoverGeo2 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial2 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const Cover2 = new THREE.Mesh( CoverGeo2, CoverMaterial2 );
Cover2.position.set(-80.2-20,8+30,40.2);
Cover2.rotateX((Math.PI)/2)
scene3.add( Cover2 );

const CoverGeo3 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial3 = new THREE.MeshBasicMaterial( {color: 0x8b0000, side: THREE.DoubleSide} );
const Cover3 = new THREE.Mesh( CoverGeo3, CoverMaterial3 );
Cover3.position.set(69.8-20,8+30,40.2);
Cover3.rotateX((Math.PI)/2)
scene3.add( Cover3 );

const CoverGeo4 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial4 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const Cover4 = new THREE.Mesh( CoverGeo4, CoverMaterial4 );
Cover4.position.set(29.8-20,8+30,40.2);
Cover4.rotateX((Math.PI)/2)
scene3.add( Cover4 );



const GoldBox = new GLTFLoader();
GoldBox.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(0.8-20,15+30,40.2);
});
const GoldBox5 = new GLTFLoader();
GoldBox5.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-1.2-20,15+30,40.2);
});
const BlackBox5 = new GLTFLoader();
BlackBox5.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,41.2);
});
const BlackBox6 = new GLTFLoader();
BlackBox6.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-0.2-20,15.2+30,39.2);
});


var arrowMesh = new THREE.Mesh();
const arrowFont = new FontLoader();
arrowFont.load("/arrow.json", (font) => {
const textGeometry = new TextGeometry('J', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
arrowMesh.geometry =  textGeometry;
arrowMesh.material = textMaterial;
arrowMesh.position.set(-50.2-20,25.2+30,39.2);
});
scene3.add(arrowMesh);






var arrowMesh2 = new THREE.Mesh();
const arrowFont2 = new FontLoader();
arrowFont2.load("/pointer.json", (font) => {
const textGeometry = new TextGeometry('I', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
arrowMesh2.geometry =  textGeometry;
arrowMesh2.material = textMaterial;
arrowMesh2.position.set(30.2-20,38.2+30,39.2);
arrowMesh2.scale.set(1.5,1,1);
});
scene3.add(arrowMesh2);

var arrowMesh3 = new THREE.Mesh();
const arrowFont3 = new FontLoader();
arrowFont3.load("/pointer.json", (font) => {
const textGeometry = new TextGeometry('O', {
font,
size: 6,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xfffffFF});
arrowMesh3.geometry =  textGeometry;
arrowMesh3.material = textMaterial;
arrowMesh3.position.set(63.2-20,24.2+30,39.2);
arrowMesh3.scale.set(1,1.2,1);
});
scene3.add(arrowMesh3);


var arrowMesh4 = new THREE.Mesh();
const arrowFont4 = new FontLoader();
arrowFont4.load("/arrow.json", (font) => {
const textGeometry = new TextGeometry('p', {
font,
size: 20,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
arrowMesh4.geometry =  textGeometry;
arrowMesh4.material = textMaterial;
arrowMesh4.position.set(63.2-40+40,0.8-10,39.2-35);
arrowMesh4.rotateZ(Math.PI)
arrowMesh4.scale.set(4,4,1);
});
scene3.add(arrowMesh4);




var ZeroPercMesh = new THREE.Mesh();
const ZeroPercFont = new FontLoader();
ZeroPercFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('0%', {
font,
size: 5,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
ZeroPercMesh.geometry =  textGeometry;
ZeroPercMesh.material = textMaterial;
ZeroPercMesh.position.set(-47.2-20,37.2+30,39.2);
});
scene3.add(ZeroPercMesh);

var SplitPercMesh = new THREE.Mesh();
const SplitPercFont = new FontLoader();
SplitPercFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('50% 50%', {
font,
size: 5,
height: 3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
SplitPercMesh.geometry =  textGeometry;
SplitPercMesh.material = textMaterial;
SplitPercMesh.position.set(50.2-20,38.2+30,39.2);
});
scene3.add(SplitPercMesh);

var CubeMesh = new THREE.Mesh();
const CubeFont3 = new FontLoader();
CubeFont3.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('C u b e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
CubeMesh.geometry =  textGeometry;
CubeMesh.material = textMaterial;
CubeMesh.position.set(-4.2-20,44.2+30,39.2);
});
scene3.add(CubeMesh);

var PathMesh11 = new THREE.Mesh();
const PathFont11 = new FontLoader();
PathFont11.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh11.geometry =  textGeometry;
PathMesh11.material = textMaterial;
PathMesh11.position.set(-4.2-20,40.2+30,39.2);
});
scene3.add(PathMesh11);


var BlueMesh2 = new THREE.Mesh();
const BlueFont2 = new FontLoader();
BlueFont2.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('B l u e', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
BlueMesh2.geometry =  textGeometry;
BlueMesh2.material = textMaterial;
BlueMesh2.position.set(-4.2-20,15.2+30,39.2);
});
scene3.add(BlueMesh2);

var PathMesh9 = new THREE.Mesh();
const PathFont9 = new FontLoader();
PathFont9.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh9.geometry =  textGeometry;
PathMesh9.material = textMaterial;
PathMesh9.position.set(-4.2-20,11.2+30,39.2);
});
scene3.add(PathMesh9);


var DiamMesh4 = new THREE.Mesh();
const DiamFont4 = new FontLoader();
DiamFont4.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('D i a m o n d', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
DiamMesh4.geometry =  textGeometry;
DiamMesh4.material = textMaterial;
DiamMesh4.position.set(10-20,34+30,39.2);
});
scene3.add(DiamMesh4);

var PathMesh11 = new THREE.Mesh();
const PathFont10 = new FontLoader();
PathFont10.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('  P a t h', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
PathMesh11.geometry =  textGeometry;
PathMesh11.material = textMaterial;
PathMesh11.position.set(10-20,30+30,39.2);
});
scene3.add(PathMesh11);



const RedBox4 = new GLTFLoader();
RedBox4.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(70.8-20,-15+30,40.2);
});
const RedBox5 = new GLTFLoader();
RedBox5.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(68.8-20,-15+30,40.2);
});
const BlueBox4 = new GLTFLoader();
BlueBox4.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(69.8-20,-14.8+30,41.2);
});
const BlueBox5 = new GLTFLoader();
BlueBox5.load("/sceneblue.gltf", (gltfScene) => {
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


var SqRedMesh = new THREE.Mesh();
const SqRedFont = new FontLoader();
SqRedFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('S Q U A R E + R E D', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
SqRedMesh.geometry =  textGeometry;
SqRedMesh.material = textMaterial;
SqRedMesh.position.set(-70.8-12-20,-60+30+20,40.2);
SqRedMesh.castShadow = true;
SqRedMesh.receiveShadow = true;

});
scene3.add(SqRedMesh);


var ElecMesh = new THREE.Mesh();
const ElecFont = new FontLoader();
ElecFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('E L E C T R O N S', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
ElecMesh.geometry =  textGeometry;
ElecMesh.material = textMaterial;
ElecMesh.position.set(-70.8-12-20,-60+25+20,40.2);
ElecMesh.castShadow = true;
ElecMesh.receiveShadow = true;
});
scene3.add(ElecMesh);


var SqBlueMesh = new THREE.Mesh();
const SqBlueFont = new FontLoader();
SqBlueFont.load("/digital.json", (font) => {
const textGeometry = new TextGeometry('S Q U A R E + B L U E', {
font,
size: 3,
height: .3,
});
const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
SqBlueMesh.geometry =  textGeometry;
SqBlueMesh.material = textMaterial;
SqBlueMesh.position.set(-70.8+25-20,-60+30+20,40.2);
SqBlueMesh.castShadow = true;
SqBlueMesh.receiveShadow = true;
});
scene3.add(SqBlueMesh);

    
    var ElecMesh2 = new THREE.Mesh();
    const ElecFont2 = new FontLoader();
    ElecFont2.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('E L E C T R O N S', {
    font,
    size: 3,
    height: .3,
    });
    const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    ElecMesh2.geometry =  textGeometry;
    ElecMesh2.material = textMaterial;
    ElecMesh2.position.set(-70.8+25-20,-60+25+20,40.2);
    ElecMesh2.castShadow = true;
    ElecMesh2.receiveShadow = true;
    });
    scene3.add(ElecMesh2);

    var DiaRedMesh = new THREE.Mesh();
    const DiaRedFont = new FontLoader();
    DiaRedFont.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('D I A M O N D + R E D', {
    font,
    size: 3,
    height: .3,
    });
    const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    DiaRedMesh.geometry =  textGeometry;
    DiaRedMesh.material = textMaterial;
    DiaRedMesh.position.set(-70.8+55-20,-60+20+20,40.2);
    DiaRedMesh.castShadow = true;
    DiaRedMesh.receiveShadow = true;
    });
    scene3.add(DiaRedMesh);
    
    var ElecMesh4 = new THREE.Mesh();
    const ElecFont3 = new FontLoader();
    ElecFont3.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('E L E C T R O N S', {
    font,
    size: 3,
    height: .3,
    });
    const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    ElecMesh4.geometry =  textGeometry;
    ElecMesh4.material = textMaterial;
    ElecMesh4.position.set(-70.8+55-20,-60+15+20,40.2);
    ElecMesh4.castShadow = true;
    ElecMesh4.receiveShadow = true;
    });
    scene3.add(ElecMesh4);


    var DiaBlueMesh = new THREE.Mesh();
    const DiaBlueFont = new FontLoader();
    DiaBlueFont.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('D I A M O N D + B L U E', {
    font,
    size: 3,
    height: .3,
    });
    const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    DiaBlueMesh.geometry =  textGeometry;
    DiaBlueMesh.material = textMaterial;
    DiaBlueMesh.position.set(-70.8+55-20,-60+20-30+20,40.2);
    DiaBlueMesh.castShadow = true;
    DiaBlueMesh.receiveShadow = true;
    });
    scene3.add(DiaBlueMesh);
    
    var ElecMesh4 = new THREE.Mesh();
    const ElecFont4 = new FontLoader();
    ElecFont4.load("/digital.json", (font) => {
    const textGeometry = new TextGeometry('E L E C T R O N S', {
    font,
    size: 3,
    height: .3,
    });
    const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
    ElecMesh4.geometry =  textGeometry;
    ElecMesh4.material = textMaterial;
    ElecMesh4.position.set(-70.8+55-20,-60+15-30+20,40.2);
    ElecMesh4.castShadow = true;
    ElecMesh4.receiveShadow = true;
    });
    scene3.add(ElecMesh4);


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
     
    
     const mirroBack2 = new Reflector(
      new THREE.PlaneGeometry(65,65,1000),
      {
          color: new THREE.Color(0x7f7f7f),
          textureWidth: window.innerWidth * window.devicePixelRatio,
          textureHeight: window.innerHeight * window.devicePixelRatio
      }
     )
     mirroBack2.position.x = -45-10-10
     mirroBack2.position.y = -70-10 +20
     mirroBack2.position.z = 45-5-3-1-2-1
     mirroBack2.rotateY(-(Math.PI)/2)
     mirroBack2.rotateX(-(Math.PI)/2)
     scene3.add(mirroBack2)

     var WarnMesh1 = new THREE.Mesh();
     const WarnFont1 = new FontLoader();
     WarnFont1.load("/arcade.json", (font) => {
     const textGeometry = new TextGeometry('WE  COULD  NOT  BUILD  THIS', {
     font,
     size: 9,
     height: .3,
     });
     const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2, opacity: .2});
     WarnMesh1.geometry =  textGeometry;
     WarnMesh1.material = textMaterial;
     WarnMesh1.position.set(70.8-50-35,-40+4+20,10.2);
     WarnMesh1.castShadow = true;
     WarnMesh1.receiveShadow = true;
     });
     scene3.add(WarnMesh1);


     var WarnMesh2 = new THREE.Mesh();
     const WarnFont2 = new FontLoader();
     WarnFont2.load("/arcade.json", (font) => {
     const textGeometry = new TextGeometry('             DEVICE     EVEN     IF     WE', {
     font,
     size: 8,
     height: .3,
     });
     const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
     WarnMesh2.geometry =  textGeometry;
     WarnMesh2.material = textMaterial;
     WarnMesh2.position.set(70.8-90,-45-10+2+20,20.2);
     WarnMesh2.castShadow = true;
     WarnMesh2.receiveShadow = true;
     });
     scene3.add(WarnMesh2);
     
     var WarnMesh3 = new THREE.Mesh();
     const WarnFont3 = new FontLoader();
     WarnFont3.load("/arcade.json", (font) => {
     const textGeometry = new TextGeometry('WANTED  TO  WE  HAVE', {
     font,
     size: 6,
     height: .3,
     });
     const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
     WarnMesh3.geometry =  textGeometry;
     WarnMesh3.material = textMaterial;
     WarnMesh3.position.set(70.8-15-45,-50-15+20,30.2+10);
     WarnMesh3.castShadow = true;
     WarnMesh3.receiveShadow = true;
     });
     scene3.add(WarnMesh3);
     
     var WarnMesh4 = new THREE.Mesh();
     const WarnFont4 = new FontLoader();
     WarnFont4.load("/arcade.json", (font) => {
     const textGeometry = new TextGeometry('TRIED  AND  FAILED', {
     font,
     size: 4,
     height: .3,
     });
     const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
     WarnMesh4.geometry =  textGeometry;
     WarnMesh4.material = textMaterial;
     WarnMesh4.position.set(70.8-50,-55-17+20,40.2+15);
     WarnMesh4.castShadow = true;
     WarnMesh4.receiveShadow = true;
     });
     scene3.add(WarnMesh4);
     
     var WarnMesh5 = new THREE.Mesh();
     const WarnFont5 = new FontLoader();
     WarnFont5.load("/arcade.json", (font) => {
     const textGeometry = new TextGeometry('MISERABLY', {
     font,
     size: 3,
     height: .3,
     });
     const textMaterial = new THREE.MeshPhongMaterial({color: 0x324ab2});
     WarnMesh5.geometry =  textGeometry;
     WarnMesh5.material = textMaterial;
     WarnMesh5.position.set(70.8-43,-60-18+20,50.2+20);
     WarnMesh5.castShadow = true;
     WarnMesh5.receiveShadow = true;
     });
     scene3.add(WarnMesh5);


     const RedBox6 = new GLTFLoader();
     RedBox6.load("/scenered.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-70.8-20,-60+20,40.2);
     });
     const RedBox7 = new GLTFLoader();
     RedBox7.load("/scenered.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-68.8-20,-60+20,40.2);
     });
     
     const BlueBox7 = new GLTFLoader();
     BlueBox7.load("/sceneblue.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-69.8-20,-59.8+20,41.2);
     });
     const BlueBox8 = new GLTFLoader();
     BlueBox8.load("/sceneblue.gltf", (gltfScene) => {
     scene3.add(gltfScene.scene);
     gltfScene.scene.scale.set(25,25,26);
     gltfScene.scene.castShadow = true
     gltfScene.scene.receiveShadow = true
     gltfScene.scene.position.set(-69.8-20,-59.8+20,39.2);
     });
     
     const CoverGeo5 = new THREE.BoxGeometry( 10.2, 10, 1);
     const CoverMaterial5 = new THREE.MeshBasicMaterial( {color: 0x8B0000, side: THREE.DoubleSide} );
     const Cover5 = new THREE.Mesh( CoverGeo5, CoverMaterial5 );
     Cover5.position.set(-70-20,-37+20,40);
     Cover5.rotateX((Math.PI)/2)
     scene3.add( Cover5 );

//pipe1
const PipeLoader = new GLTFLoader();
PipeLoader.load("/pipe.glb", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(.1,.12,.1);
gltfScene.scene.rotateZ((Math.PI/2))
gltfScene.scene.rotateX((Math.PI))
gltfScene.scene.position.set(-69.8+6.5-20,-59.8+11.5+1+20,41.2+1+1+1+.5);
});
//pipe2
const PipeLoader2 = new GLTFLoader();
PipeLoader2.load("/pipe.glb", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(.1,.12,.1);
gltfScene.scene.position.set(-69.8+6.5+30+2-20,-59.8+11.5+1-20+20,41.2+1+1+1+.5-10);
});

const ShapeLoader = new GLTFLoader();
ShapeLoader.load("./assets/3aca94e07662430ab9215aa3fbdf5475/scene.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(45,60,50);
gltfScene.scene.rotateZ((Math.PI/2))
gltfScene.scene.rotateX((Math.PI));
gltfScene.scene.castShadow = true;
gltfScene.scene.receiveShadow = true;
gltfScene.scene.position.set(-69.8+6.5-5,-37.3,41.2+1+1+1+.5-5);
});


const RedBox8 = new GLTFLoader();
RedBox8.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-70.8+40+2-20,-60-30+20,40.2);
});
const RedBox9 = new GLTFLoader();
RedBox9.load("/scenered.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.position.set(-68.8+40+3-20,-60-30+20,40.2);
});
const BlueBox9 = new GLTFLoader();
BlueBox9.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8+40+3-20,-59.8-30+20,41.2);
});
const BlueBox10 = new GLTFLoader();
BlueBox10.load("/sceneblue.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8+40+3-20,-59.8-30+20,39.2);
});

const CoverGeo8 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial8 = new THREE.MeshBasicMaterial( {color: 0x8B0000, side: THREE.DoubleSide} );
const Cover8 = new THREE.Mesh( CoverGeo8, CoverMaterial8 );
Cover8.position.set(-70+40+3-.35-.2-20,-37-30+20,40);
Cover8.rotateX((Math.PI)/2)
scene3.add(Cover8);


const GoldBox6 = new GLTFLoader();
GoldBox6.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-70.8-20,-60-30+20,40.2);
});
const GoldBox7 = new GLTFLoader();
GoldBox7.load("/scenegold.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-68.8-20,-60-30+20,40.2);
});
const BlackBox7 = new GLTFLoader();
BlackBox7.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8-30+20,41.2);
});
const BlackBox8 = new GLTFLoader();
BlackBox8.load("/sceneblack.gltf", (gltfScene) => {
scene3.add(gltfScene.scene);
gltfScene.scene.scale.set(25,25,26);
gltfScene.scene.castShadow = true
gltfScene.scene.receiveShadow = true
gltfScene.scene.position.set(-69.8-20,-59.8-30+20,39.2);
});

const CoverGeo9 = new THREE.BoxGeometry( 10.2, 10, 1);
const CoverMaterial9 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const Cover9 = new THREE.Mesh( CoverGeo9, CoverMaterial9 );
Cover9.position.set(-70-20,-37-30+20,40);
Cover9.rotateX((Math.PI)/2)
scene3.add(Cover9);


const hardobjects3 = []
const cubes3 = []
const softobjects3 = []
const diamonds3 = []
function createHardElectron3() {
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

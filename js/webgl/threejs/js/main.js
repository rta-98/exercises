import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); 
const scene = new THREE.Scene();

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line ( lineGeometry, lineMaterial );

scene.add( line );

renderer.render( scene, camera );


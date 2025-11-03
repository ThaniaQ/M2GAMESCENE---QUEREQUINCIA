const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('textures/Ceiling.jpg');
const wText = new THREE.TextureLoader().load('textures/WoodenPlanks.jpg');
const w2Text = new THREE.TextureLoader().load('textures/Lighterwood.jpg');
const cText = new THREE.TextureLoader().load('textures/yellowandblacklines.jpg');
const bText = new THREE.TextureLoader().load('textures/Buttons.jpg');
const fText = new THREE.TextureLoader().load('textures/fabric.jpg');
const tText = new THREE.TextureLoader().load('textures/Trapdoors.jpg');
const sText = new THREE.TextureLoader().load('textures/stonewall.jpg');


// light
const light = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// elevator floor
const floorGeo = new THREE.BoxGeometry(3.9, 0.1, 4);
const floorMat = new THREE.MeshStandardMaterial({ map: texture, metalness: 0.2, roughness: 0.7 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.position.set(0, -0.05, 0);
scene.add(floor);

// ceiling
const clGeo = new THREE.BoxGeometry(4.1, 0.1, 4.2);
const clMat = new THREE.MeshStandardMaterial({ map: sText, metalness: 0.2, roughness: 0.7 });
const ceilingtop = new THREE.Mesh(clGeo, clMat);
ceilingtop.position.set(0, 2.4, 0);
scene.add(ceilingtop);

// Light1
const l1Geo = new THREE.BoxGeometry(0.2, 0.8, 0.5);
const l1Mat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.6 });
const leftLight = new THREE.Mesh(l1Geo, l1Mat);
leftLight.position.set(-1.93, 1.15, -0.7);
scene.add(leftLight);

// Light2
const l2Geo = new THREE.BoxGeometry(0.2, 0.8, 0.5);
const l2Mat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.6 });
const rightLight = new THREE.Mesh(l2Geo, l2Mat);
rightLight.position.set(1.93, 1.15, -0.7);
scene.add(rightLight);

const light1 = new THREE.PointLight(0xffffff, 12, 10);
light1.position.copy(leftLight.position);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 12, 10);
light2.position.copy(rightLight.position);
scene.add(light2);

// elevator door
const drGeo = new THREE.BoxGeometry(4, 0.5, 0.2);
const drMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7 });
const elevatorDoor = new THREE.Mesh(drGeo, drMat);
elevatorDoor.position.set(0, 2.05, 1.90);
scene.add(elevatorDoor);

// shop floor
const fGeo = new THREE.BoxGeometry(2.1, 0.1, 1.6);
const fMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7 });
const Dandyshopfloor = new THREE.Mesh(fGeo, fMat);
Dandyshopfloor.position.set(0, 0.0100, -1.1);
scene.add(Dandyshopfloor);

// shop
const shGeo = new THREE.BoxGeometry(1.8, 0.45, 0.4);
const shMat = new THREE.MeshStandardMaterial({ map: w2Text, metalness: 0.2, roughness: 0.7 });
const Dandyshop = new THREE.Mesh(shGeo, shMat);
Dandyshop.position.set(0, 0.16, -0.6);
scene.add(Dandyshop);

// shop - tabletop
const tbGeo = new THREE.BoxGeometry(1.8, 0.1, 0.55);
const tbMat = new THREE.MeshStandardMaterial({ map: wText, metalness: 0.2, roughness: 0.7 });
const tabletop = new THREE.Mesh(tbGeo, tbMat);
tabletop.position.set(0, 0.34, -0.6);
scene.add(tabletop);

// shop - item plate
const ipGeo = new THREE.BoxGeometry(0.3, 0.1, 0.35);
const ipMat = new THREE.MeshStandardMaterial({ map: fText, metalness: 0.2, roughness: 0.7 });
const itemplate = new THREE.Mesh(ipGeo, ipMat);
itemplate.position.set(0, 0.36, -0.6);
scene.add(itemplate);

// shop - item plate2
const ipGeo2 = new THREE.BoxGeometry(0.3, 0.1, 0.35);
const ipMat2 = new THREE.MeshStandardMaterial({ map: fText, metalness: 0.2, roughness: 0.7 });
const itemplate2 = new THREE.Mesh(ipGeo2, ipMat2);
itemplate2.position.set(0.5, 0.36, -0.6);
scene.add(itemplate2);

// shop - item plate3
const ipGeo3 = new THREE.BoxGeometry(0.3, 0.1, 0.35);
const ipMat3 = new THREE.MeshStandardMaterial({ map: fText, metalness: 0.2, roughness: 0.7 });
const itemplate3 = new THREE.Mesh(ipGeo3, ipMat3);
itemplate3.position.set(-0.5, 0.36, -0.6);
scene.add(itemplate3);

// shop wall (left)
const swlGeo = new THREE.BoxGeometry(0.1, 0.8, 1.5);
const swlMat = new THREE.MeshStandardMaterial({ map: tText, metalness: 0.2, roughness: 0.7 });
const leftShop = new THREE.Mesh(swlGeo, swlMat);
leftShop.position.set(-0.95, 0.35, -1.1);
scene.add(leftShop);

// shop wall (right)
const swrGeo = new THREE.BoxGeometry(0.1, 0.6, 1.5);
const swrMat = new THREE.MeshStandardMaterial({ map: tText, metalness: 0.2, roughness: 0.7 });
const rightShop = new THREE.Mesh(swrGeo, swrMat);
rightShop.position.set(0.95, 0.35, -1.1);
scene.add(rightShop);

// elevator ceiling
const cGeo = new THREE.BoxGeometry(3.9, 0.1, 4);
const cMat = new THREE.MeshStandardMaterial({ map: texture, metalness: 0.2, roughness: 0.7 });
const ceiling = new THREE.Mesh(cGeo, cMat);
ceiling.position.set(0, 2.35, 0);
scene.add(ceiling);

// Particle of the elevator (Dust)
const dCount = 200;
const dGeo = new THREE.BufferGeometry();
const dPos = [];
const dVelo = [];

// Spawn the dust below the elevator ceilin part
for (let i = 0; i < dCount; i++) {
  const x = (Math.random() - 0.5) * 3.8; 
  const y = 2.2 + Math.random() * 0.3;
  const z = (Math.random() - 0.5) * 3.8;
  
  dPos.push(x, y, z);

  dVelo.push(-0.001 - Math.random() * 0.002); 
}

dGeo.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(dPos, 3)
);

const dMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.02,
  transparent: true,
  opacity: 0.6
});

const dParts = new THREE.Points(dGeo, dMaterial);
scene.add(dParts);

const wallMat = new THREE.MeshStandardMaterial({ map: sText, metalness: 0.2, roughness: 0.7 });

// back wall
const backWallGeo = new THREE.BoxGeometry(4, 2.5, 0.1);
const backWall = new THREE.Mesh(backWallGeo, wallMat);
backWall.position.set(0, 1.15, -2.055);
scene.add(backWall);

// elevator wall
const eGeo = new THREE.BoxGeometry(4, 0.7, 0.1);
const eMat = new THREE.MeshStandardMaterial({ map: wText, metalness: 0.2, roughness: 0.7 });
const eWall = new THREE.Mesh(eGeo, eMat);
eWall.position.set(0, 0.3, -1.9);
scene.add(eWall);

// elevator wall alt
const eGeo2 = new THREE.BoxGeometry(4, 2, 0.015);
const eMata = new THREE.MeshStandardMaterial({ map: w2Text, metalness: 0.2, roughness: 0.7 });
const altEWall = new THREE.Mesh(eGeo2, eMata);
altEWall.position.set(0, 1.3, -1.95);
scene.add(altEWall);

// elevator wall alt2
const altGeo2 = new THREE.BoxGeometry(0.025, 2, 3.98);
const altMat2 = new THREE.MeshStandardMaterial({ map: w2Text, metalness: 0.2, roughness: 0.7 });
const altEWall2 = new THREE.Mesh(altGeo2, altMat2);
altEWall2.position.set(-1.95, 1.3, -0.099);
scene.add(altEWall2);

// elevator wall alt3
const altGeo3 = new THREE.BoxGeometry(0.025, 2, 3.98);
const altMat3 = new THREE.MeshStandardMaterial({ map: w2Text, metalness: 0.2, roughness: 0.7 });
const altEWall3 = new THREE.Mesh(altGeo3, altMat3);
altEWall3.position.set(1.95, 1.3, -0.099);
scene.add(altEWall3);

// elevator wall2
const eM2Geo = new THREE.BoxGeometry(0.1, 0.7, 3.8);
const eMat2 = new THREE.MeshStandardMaterial({ map: wText, metalness: 0.2, roughness: 0.7 });
const elWall = new THREE.Mesh(eM2Geo, eMat2);
elWall.position.set(-1.9, 0.3, 0);
scene.add(elWall);

// elevator wall3
const eM3Geo = new THREE.BoxGeometry(0.1, 0.7, 3.8);
const eMat3 = new THREE.MeshStandardMaterial({ map: wText, metalness: 0.2, roughness: 0.7 });
const erWall = new THREE.Mesh(eM3Geo, eMat3);
erWall.position.set(1.9, 0.3, 0);
scene.add(erWall);

// elevator button
const BGeo = new THREE.BoxGeometry(0.1, 0.7, 0.75);
const BMat = new THREE.MeshStandardMaterial({ map: bText, metalness: 0.2, roughness: 0.7 });
const Button = new THREE.Mesh(BGeo, BMat);
Button.position.set(-1.95, 1.15, 1.4);
scene.add(Button);

// side wall (left)
const leftWallGeo = new THREE.BoxGeometry(0.1, 2.5, 4.2);
const leftWall = new THREE.Mesh(leftWallGeo, wallMat);
leftWall.position.set(-2.0, 1.15, 0);
scene.add(leftWall);

// side wall (Right)
const rightWall = new THREE.Mesh(leftWallGeo, wallMat);
rightWall.position.set(2, 1.15, 0);
scene.add(rightWall);

// Animate the dust falling
function animateDust() {
  const positions = dGeo.attributes.position.array;

  for (let i = 0; i < dCount; i++) {
    positions[i * 3 + 1] += dVelo[i];

    if (positions[i * 3 + 1] < 0) {
      positions[i * 3 + 1] = 2.2 + Math.random() * 0.3;
    }
  }

  dGeo.attributes.position.needsUpdate = true;
}

// Allow the camera to rotate from the pressed keys
let yaw = 0;   // l / r
let pitch = 0; // u / d
let isMouseDown = false;
const sensitivity = 0.002;

// Mouse option to view up and down
document.addEventListener('mousedown', () => { isMouseDown = true; });
document.addEventListener('mouseup', () => { isMouseDown = false; });

document.addEventListener('mousemove', (e) => {
    if(!isMouseDown) return;

    yaw   -= e.movementX * sensitivity;
    pitch -= e.movementY * sensitivity;

    const maxPitch = Math.PI/2 - 0.01;
    const minPitch = -Math.PI/2 + 0.01;
    pitch = Math.max(minPitch, Math.min(maxPitch, pitch));
});

// keyboard movements (W A S D)
const keys = { w:false, a:false, s:false, d:false };
const speed = 0.1;

document.addEventListener('keydown', e => { if(keys.hasOwnProperty(e.key.toLowerCase())) keys[e.key.toLowerCase()] = true; });
document.addEventListener('keyup', e => { if(keys.hasOwnProperty(e.key.toLowerCase())) keys[e.key.toLowerCase()] = false; });

function moveCamera() {
    const forward = new THREE.Vector3(0,0,-1).applyEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'));
    const right = new THREE.Vector3(1,0,0).applyEuler(new THREE.Euler(0, yaw, 0, 'YXZ'));

    if(keys.w) camera.position.add(forward.clone().multiplyScalar(speed));
    if(keys.s) camera.position.add(forward.clone().multiplyScalar(-speed));
    if(keys.a) camera.position.add(right.clone().multiplyScalar(-speed));
    if(keys.d) camera.position.add(right.clone().multiplyScalar(speed));
}

// Update that camera rotates
function updateCameraRotation() {
    camera.rotation.set(pitch, yaw, 0, 'YXZ');
}

// Loop the animations
function animate() {
    requestAnimationFrame(animate);
    moveCamera();
    updateCameraRotation();
    animateDust();
    renderer.render(scene, camera);
}
animate();
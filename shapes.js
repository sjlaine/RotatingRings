  const pink = new THREE.Color( 0xFF33F3 );
  const gray = new THREE.Color( 0x150303 );
  const blue = new THREE.Color( 0x3049FC );
  const purple = new THREE.Color( 0xA200FF );
  const indigo = new THREE.Color( 0x6600FF )

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  scene.background = purple;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const ambientLight = new THREE.AmbientLight( 0x000000 );
  const lights = [];
  lights[ 0 ] = new THREE.PointLight( 0x3049FC, 3, 0 );
  lights[ 1 ] = new THREE.PointLight( 0xFF6060, 3, 0 );
  lights[ 2 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );
  lights[ 3 ] = new THREE.PointLight( 0xA200FF, 2, 0 );
  lights[ 4 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );

  lights[ 0 ].position.set( 0, 200, 0 );
  lights[ 1 ].position.set( 100, 200, 150 );
  lights[ 2 ].position.set( -100, -200, -200 );
  lights[ 3 ].position.set( -300, -200, 200);
  lights[ 4 ].position.set( 300, -200, 300 );

  scene.add( lights[ 0 ] );
  scene.add( lights[ 1 ] );
  scene.add( lights[ 2 ] );
  scene.add( lights[ 3 ] );
  scene.add( lights[ 4 ] );


  const geometry = new THREE.TorusGeometry( 10, 1, 100, 400);
  const geometry2 = new THREE.TorusGeometry( 17, 2, 100, 400);
  const geometry3 = new THREE.TorusGeometry( 25, 3, 100, 400);
  const material = new THREE.MeshStandardMaterial({wireframe: false, flatShading: true, metalness: 0.7, roughness: 0.01});
  const material2 = new THREE.MeshStandardMaterial({wireframe: false, flatShading: true, metalness: 0.6, roughness: 0.4});
  const material3 = new THREE.MeshStandardMaterial({wireframe: false, flatShading: true, metalness: 0.3, roughness: 0.2});
  material.color = pink;
  material2.color = blue;
  material3.color = indigo;

  const ring1 = new THREE.Mesh( geometry, material );
  const ring2 = new THREE.Mesh( geometry2, material2 );
  const ring3 = new THREE.Mesh( geometry3, material3 );

  scene.add( ring1 );
  scene.add( ring2 );
  scene.add( ring3 );

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame( animate );

    ring1.rotation.x += 0.009

    ring1.rotation.y += 0.02;
    ring2.rotation.y -= 0.009;
    ring3.rotation.y += 0.01;

    renderer.render( scene, camera );
  }

  animate();

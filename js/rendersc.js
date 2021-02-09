
	
			const scene = new THREE.Scene();
			scene.background= new THREE.Color(0x0E6866);
			const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );


			const directionalLight=new THREE.DirectionalLight(0xFFFFFF, 0.8);
			directionalLight.position.set(0,0,1);
			scene.add(directionalLight);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry(1,0.8,0.1);
			const geometry1 = geometry.clone();
			const geometry2= geometry.clone();
			const geometry3 = geometry.clone();
			const geometry4 = new THREE.BoxGeometry(2,2,0.1);
			const geometry5 = new THREE.PlaneGeometry( 15, 5, 32 );

			const texture = new THREE.TextureLoader().load( "images/euro.jpg" );
			const texture1 = new THREE.TextureLoader().load( "images/pass.jpg" );
			const texture2 = new THREE.TextureLoader().load( "images/paint.jpg" );
			const texture3 = new THREE.TextureLoader().load( "images/numers.jpg" );
			const texture4 = new THREE.TextureLoader().load( "images/japan.jpg" );
			const texture5 = new THREE.TextureLoader().load( "images/piso.jpg" );

			const material = new THREE.MeshPhongMaterial( {map : texture, color: 0xF8F2F2, flatShading: true, vertexColors: true, shininess: 0} );
			const material1 = new THREE.MeshPhongMaterial( {map : texture1, color: 0xF8F2F2, flatShading: true, vertexColors: true, shininess: 0} );
			const material2 = new THREE.MeshPhongMaterial( {map : texture2, color: 0xF8F2F2, flatShading: true, vertexColors: true, shininess: 0} );
			const material3 = new THREE.MeshPhongMaterial( {map : texture3, color: 0xF8F2F2, flatShading: true, vertexColors: true, shininess: 0} );
			const material4 = new THREE.MeshPhongMaterial( {map : texture4, color: 0xF8F2F2, flatShading: true, vertexColors: true, shininess: 0} );
			const material5 = new THREE.MeshPhongMaterial( {map : texture5, color: 0xFFFFFF, side: THREE.DoubleSide} );
			
			
			const plane = new THREE.Mesh( geometry5, material5 );
			plane.position.y=-2.5;
			plane.rotation.x=-1;
			scene.add( plane );

			const cube = new THREE.Mesh( geometry, material );
			cube.position.x=-2;
			cube.rotation.x=0.3;
			cube.rotation.y=0.2;
			cube.rotation.z=0;
			scene.add( cube );

			const cube1 = new THREE.Mesh( geometry1, material1 );
			cube1.position.x=2;
			cube1.rotation.x=0.3;
			cube1.rotation.y=-0.2;
			cube1.rotation.z=0;
			scene.add( cube1 );
			
			const cube2 = new THREE.Mesh( geometry2, material2 );
			cube2.position.x=-2.7;
			cube2.position.z=1.3;
			cube2.rotation.x=0.2;
			cube2.rotation.y=0.3;
			cube2.rotation.z=0;
			scene.add( cube2 );

			const cube3 = new THREE.Mesh( geometry3, material3 );
			cube3.position.x=2.7;	
			cube3.position.z=1.3;
			cube3.rotation.x=0.2;
			cube3.rotation.y=-0.3;
			cube3.rotation.z=0;
			scene.add( cube3 );

			const cube4 = new THREE.Mesh( geometry4, material4 );
			cube4.position.x=0;
			cube4.position.y=0.4;	
			cube4.position.z=-1;
			cube4.rotation.x=0.3;
			cube4.rotation.y=0;
			cube4.rotation.z=0;
			scene.add( cube4 );

			camera.position.z = 5;


		function animate() {
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
		}
		animate();




















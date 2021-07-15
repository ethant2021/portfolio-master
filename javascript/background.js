var container;

var camera, scene, renderer;

var geometry, group;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init();
animate();

function init() {

    container = document.createElement( 'div' );
    container.id = "stage3d";
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 95, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.z = 500;

    scene = new THREE.Scene();


    var geometry = [new THREE.SphereGeometry( 20, 15, 15), 
        new THREE.SphereGeometry( 5, 15, 15),
        new THREE.SphereGeometry( 200, 15, 15),
        new THREE.SphereGeometry( 15, 15, 15),
        new THREE.SphereGeometry( 30, 15, 15),
        new THREE.SphereGeometry( 100, 15, 15),
        new THREE.SphereGeometry( 32, 15, 15),
        new THREE.SphereGeometry( 9, 15, 15),
        new THREE.SphereGeometry( 69, 15, 15),
        new THREE.SphereGeometry( 9, 15, 15),
    ]

    var materials = [
    new THREE.MeshPhongMaterial({
    specular: '#808080',
    color: '#808080',
    emissive: '#808080',
    // shininess: 50 ,
    // transparent: true,
    opacity: 0.9,
    overdraw: true
}),
    new THREE.MeshPhongMaterial({
    specular: '#403d39',
    color: '#403d39',
    emissive: '#403d39',
    // shininess: 50 ,
    // transparent: true,
    opacity: 0.9,
    overdraw: true
})];

    group = new THREE.Object3D();

    for ( var i = 0; i < 900; i ++ ) {

        var mesh = new THREE.Mesh( geometry[Math.floor(Math.random() * geometry.length)], materials[Math.floor(Math.random() * materials.length)] );
        mesh.position.x = Math.random() * 8000 - 4000;
        mesh.position.y = Math.random() * 8000 - 4000;
        mesh.position.z = Math.random() * 8000 - 4000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.opacity = 50;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        group.add( mesh );


    }
    scene.add( group );

    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    directionalLight.intensity = 0.2;
    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.sortObjects = false;
    container.appendChild( renderer.domElement );


            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 4;
            windowHalfY = window.innerHeight / 4;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        let box = document.querySelector('body');
            let height = box.offsetHeight;
            renderer.setSize( window.innerWidth, window.innerHeight );/* needs to be set to be taller*/
          
        }

        function onDocumentMouseMove(event) {

            mouseX = ( event.clientX - windowHalfX ) * 2;
            mouseY = ( event.clientY - windowHalfY ) * 2;

        }

        //

        function animate() {

            requestAnimationFrame( animate );
            render();

        }

        function render() {
            
           camera.position.x += ( mouseX - camera.position.x ) * .0080;
            camera.position.y += ( - mouseY - camera.position.y ) * .0080;

            camera.lookAt( scene.position );

            var currentSeconds = Date.now();
            group.rotation.x = Math.sin( currentSeconds * 0.00007 ) * 0.5;
            group.rotation.y = Math.sin( currentSeconds * 0.00003 ) * 0.5;
            group.rotation.z = Math.sin( currentSeconds * 0.00002 ) * 0.5;

            renderer.render( scene, camera );

        } 
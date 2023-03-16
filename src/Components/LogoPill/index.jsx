import React, { useLayoutEffect } from "react";
import * as THREE from "three";
import "./index.css";
import logo from "../../Assets/Component_media/Home/logo.png";

const LogoPill = () => {
    const init = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 10;
    
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById("logo-canvas").appendChild( renderer.domElement );
        
        const texture = new THREE.TextureLoader().load(logo);

        const planeGeo = new THREE.PlaneGeometry(2.5, 12, 10);
        const planeMat = new THREE.MeshBasicMaterial({map: texture, transparent: true, side: THREE.DoubleSide});
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.z = Math.PI / 2;
        plane.position.z = 2;
        scene.add(plane);

        window.addEventListener("resize", () => {
            let w = window.innerWidth;
            let h = window.innerHeight;

            renderer.setSize(w, h);

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        })

        const update = () => {
            plane.rotation.x += 0.002;
        }
    
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);

            update();
        }
    
        animate();
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            init();
        }, 1000);
    }, []);

    return (
        <>
            <div id="logo-canvas" />
        </>
    )
}

export default LogoPill;
// pages/index.js

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Navbar from '../components/NavBar';
import Cont from '../components/Cont';
import Services from '../components/Services';
export default function Home() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene and Camera setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;
        scene.add(camera);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0.0);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 3.5);
        pointLight.position.set(5, 3, 5);
        scene.add(pointLight);

        // Texture Loader with modifications
        const textureLoader = new THREE.TextureLoader();

        const earthTexture = textureLoader.load('/textures/earthmap1k.jpg');
        earthTexture.flipY = false;

        const bumpTexture = textureLoader.load('/textures/earthbump.jpg');
        bumpTexture.flipY = false;

        const cloudTexture = textureLoader.load('/textures/earthCloud.png');
        cloudTexture.flipY = false;
        cloudTexture.premultiplyAlpha = true;

        const starTexture = textureLoader.load('/textures/galaxy.png');
        starTexture.flipY = false;

        // Earth mesh
        const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
        const earthMaterial = new THREE.MeshStandardMaterial({
            roughness: 0.5,
            metalness: 0.2,
            map: earthTexture,
            bumpMap: bumpTexture,
            bumpScale: 0.3,
        });
        const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earthMesh);

        // Cloud mesh
        const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
        const cloudMaterial = new THREE.MeshPhongMaterial({
            map: cloudTexture,
            transparent: true,
        });
        const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        scene.add(cloudMesh);

        // Star field mesh
        const starGeometry = new THREE.SphereGeometry(80, 64, 64);
        const starMaterial = new THREE.MeshBasicMaterial({
            map: starTexture,
            side: THREE.BackSide,
        });
        const starMesh = new THREE.Mesh(starGeometry, starMaterial);
        scene.add(starMesh);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            earthMesh.rotation.y -= 0.0015;
            cloudMesh.rotation.y += 0.0015;
            starMesh.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();

        // Resize handling
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div>
            <div style={{ position: 'relative', height: '100vh' }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                    }}
                />

                <Navbar />

                {/* Introduction Section */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        color: 'white',
                        padding: '2rem',
                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    <p className="mb-16 text-xl italic">
                        "Welcome to TxTrace – your trusted partner in crypto transparency. Our platform empowers you to
                        track, verify, and understand every crypto transaction with unmatched clarity and precision.
                        Dive into the world of blockchain with confidence, knowing that TxTrace is here to illuminate
                        your path to secure and reliable crypto insights."
                    </p>
                </div>
<Services/>
                <Cont />
            </div>
        </div>
    );
}

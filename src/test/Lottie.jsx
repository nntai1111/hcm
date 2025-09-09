// Scene3D.jsx
import React, { useMemo } from "react";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// ✅ bắt buộc đăng ký
extend({ TextGeometry });

function Text3D({ text = "Hello 3D!" }) {
    const font = useLoader(
        FontLoader,
        "/fonts/helvetiker_regular.typeface.json"
    );

    const options = useMemo(
        () => ({
            font,
            size: 0.5,          // kích thước chữ
            height: 0.05,       // độ dày chữ (giảm nhỏ để không bị dài ra)
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.008,
            bevelSegments: 3,
        }),
        [font]
    );

    return (
        <mesh position={[-2, 0, 0]}>
            <textGeometry args={[text, options]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

export default function Scene3D() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Text3D text="Xin chào 3D!" />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

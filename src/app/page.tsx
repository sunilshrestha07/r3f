"use client";

import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Suneel from "../components/Suneel";
import Mask from "../components/Mask";
import Earth from "../components/Earth";
import { DirectionalLightHelper } from "three";

export default function page() {
   const Model = () => {
      const imgref = useRef<any>();

      useFrame(({ clock }) => {
         const t = clock.getElapsedTime();
         // imgref.current.position.x = Math.cos(t)
         // imgref.current.position.z = Math.cos(t)
         imgref.current.rotation.y += 0.005;
      });
      return (
         <mesh ref={imgref} position={[0, -2, 0]}>
            <Mask />
         </mesh>
      );
   };

   const Car = ({size}:any) => {
      const imgref = useRef<any>();
      useFrame((state, delta) => {
         imgref.current.rotation.y += delta * 0.1;
      });
      return (
         <>
            <directionalLight position={[0, 0, 2]} />
            <mesh ref={imgref}>
               <Earth />
            </mesh>
         </>
      );
   };

   //creating scene
   const Scene = () => {
      return (
         <>
            <directionalLight position={[0, 0, 2]} />
            <Suspense fallback={"loading"} />
            <OrbitControls enableZoom={false} />
            <Model />
            <Car />
            <Environment preset="sunset" />
         </>
      );
   };
   return (
      <div className="w-screen h-screen bg-red-50">
         <Canvas camera={{ position: [0, 5, 10] }}>
            <Scene />
         </Canvas>
      </div>
   );
}

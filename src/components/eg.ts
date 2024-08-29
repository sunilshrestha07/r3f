// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import React, { useRef, useState } from "react";
// import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
// import { DirectionalLightHelper } from "three";
// import {Earth} from '../components/earth'

// export default function Page() {
//   // Creating a Cube component
//   const Cube = ({ position, size, color }: any) => {
//     const ref = useRef<any>();

//     useFrame((state, delta) => {
//       ref.current.rotation.x += delta; // Rotate the cube on the x-axis
//       ref.current.rotation.y += delta; // Rotate the cube on the y-axis
//     });

//     return (
//       <mesh ref={ref} position={position}>
//         <boxGeometry args={size} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     );
//   };

//   // Creating a Sphere component
//   const Sphere = ({ position, size, color }: any) => {
//     const sref = useRef<any>();
//     const [isHovered, setIsHovered] = useState(false);

//     useFrame((state, delta) => {
//       // Optionally add rotation or other animation logic here
//     });

//     return (
//       <mesh
//         ref={sref}
//         position={position}
//         onPointerEnter={() => setIsHovered(true)}
//         onPointerLeave={() => setIsHovered(false)}
//       >
//         <sphereGeometry args={size} />
//         <meshStandardMaterial color={isHovered ? "blue" : color} wireframe />
//       </mesh>
//     );
//   };

//   // Creating the Scene component
//   const Scene = () => {
//     const lightRef = useRef<any>();
//     useHelper(lightRef, DirectionalLightHelper, 1, "red");

//     return (
//       <>
//         <directionalLight position={[0, 0, 2]} ref={lightRef} />
//         {/* Uncomment to use Cube and Sphere components */}
//         {/* <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"red"} />
//         <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"yellow"} />
//         <Sphere position={[1, 0, 0]} size={[1, 32, 32]} color={"red"} /> */}
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
//           minPolarAngle={Math.PI / 2} // Lock rotation on the x-axis only
//           enableRotate={true}         // Enable rotation
//           rotateSpeed={1.0}
//         />
//       </>
//     );
//   };

//   // Model Component to load GLB
//   const Model = () => {
//     const { scene } = useGLTF("./assets/earth.glb"); // Adjust the path to your file
//     return <primitive object={scene} />;
//   };

//   return (
//     <div className="bg-blue-200 h-screen flex justify-center items-center">
//       <Canvas>
//         {/* Uncomment Scene to use Cube, Sphere, and Lighting */}
//         {/* <Scene /> */}
//         {/* <mesh position={[0, 0, 0]}>

//         <Model  />
//         </mesh> */}
//         <Earth/>
//       </Canvas>
//     </div>
//   );
// }

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mask(props) {
  const { nodes, materials } = useGLTF('/mask.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/mask.glb')
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Earth(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/earth__terra_-_downloadable_model.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="EARTH">
              <mesh
                name="EARTH_0"
                castShadow
                receiveShadow
                geometry={nodes.EARTH_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <skinnedMesh
                name="ATM_0"
                geometry={nodes.ATM_0.geometry}
                material={materials['Material.002']}
                skeleton={nodes.ATM_0.skeleton}
              />
              <group name="ATM" scale={1.007} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth__terra_-_downloadable_model.glb')

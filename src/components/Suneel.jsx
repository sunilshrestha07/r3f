import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Suneel(props) {
  const { nodes, materials } = useGLTF('/2006__ford_gt_lm_spec_ll_test_car.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['infernusdffbullet_colColMesh_Default_-_Default_0'].geometry}
            material={materials['Default_-_Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['infernusdffbullet_colColMesh_Glass_-_Glass_0'].geometry}
            material={materials['Glass_-_Glass']}
          />
        </group>
        <group position={[0, 42.186, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[-0.845, -1.541, -0.012]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_wheel0_0.geometry}
              material={materials['wheel.0']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel004_chassi13_0.geometry}
              material={materials['chassi.13']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel005_chassi5_0.geometry}
              material={materials['chassi.5']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel006_chassi9_0.geometry}
              material={materials['chassi.9']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel007_glass_0.geometry}
              material={materials.glass}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel008_wheel6_0.geometry}
              material={materials['wheel.6']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel009_wheel2_0.geometry}
              material={materials['wheel.2']}
              position={[0, -0.001, -0.028]}
              rotation={[0, 0, 3.135]}
            />
          </group>
          <group position={[0.846, -1.541, -0.012]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel001_wheel0_0.geometry}
              material={materials['wheel.0']}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel010_chassi13_0.geometry}
              material={materials['chassi.13']}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel011_chassi5_0.geometry}
              material={materials['chassi.5']}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel012_chassi9_0.geometry}
              material={materials['chassi.9']}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel013_glass_0.geometry}
              material={materials.glass}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel014_wheel6_0.geometry}
              material={materials['wheel.6']}
              position={[0.001, -0.001, -0.028]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel015_wheel2_0.geometry}
              material={materials['wheel.2']}
              position={[0.001, -0.001, -0.028]}
            />
          </group>
          <group position={[-0.817, 1.281, -0.055]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel002_wheel0_0.geometry}
              material={materials['wheel.0']}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel016_chassi13_0.geometry}
              material={materials['chassi.13']}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel017_chassi5_0.geometry}
              material={materials['chassi.5']}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel018_chassi9_0.geometry}
              material={materials['chassi.9']}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel019_glass_0.geometry}
              material={materials.glass}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel020_wheel6_0.geometry}
              material={materials['wheel.6']}
              rotation={[0, 0, -3.141]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel021_wheel2_0.geometry}
              material={materials['wheel.2']}
              rotation={[0, 0, -3.141]}
            />
          </group>
          <group position={[0.825, 1.281, -0.055]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel003_wheel0_0.geometry}
              material={materials['wheel.0']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel022_chassi13_0.geometry}
              material={materials['chassi.13']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel023_chassi5_0.geometry}
              material={materials['chassi.5']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel024_chassi9_0.geometry}
              material={materials['chassi.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel025_glass_0.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel026_wheel6_0.geometry}
              material={materials['wheel.6']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel027_wheel2_0.geometry}
              material={materials['wheel.2']}
            />
          </group>
          <group position={[0.962, 0.711, 0.164]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok_door_rf_ok13_0.geometry}
              material={materials['door_rf_ok.13']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok001_chassi5_0.geometry}
              material={materials['chassi.5']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok002_chassi8_0.geometry}
              material={materials['chassi.8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok003_chassi3_0.geometry}
              material={materials['chassi.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok004_chassi4_0.geometry}
              material={materials['chassi.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok005_chassi9_0.geometry}
              material={materials['chassi.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok006_chassi15_0.geometry}
              material={materials['chassi.15']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok007_FordGT_interior4_0.geometry}
              material={materials['FordGT_interior.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok008_FordGT_interior6_0.geometry}
              material={materials['FordGT_interior.6']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok009_FordGT_interior9_0.geometry}
              material={materials['FordGT_interior.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok010_FordGT_interior11_0.geometry}
              material={materials['FordGT_interior.11']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok011_glass001_0.geometry}
              material={materials['glass.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok012_chassis_vlo3_0.geometry}
              material={materials['chassis_vlo.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_rf_ok013_chassi10_0.geometry}
              material={materials['chassi.10']}
            />
          </group>
          <group position={[-0.972, 0.712, 0.165]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok_door_rf_ok13_0.geometry}
              material={materials['door_rf_ok.13']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok001_chassi5_0.geometry}
              material={materials['chassi.5']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok002_chassi8_0.geometry}
              material={materials['chassi.8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok003_chassi3_0.geometry}
              material={materials['chassi.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok004_chassi4_0.geometry}
              material={materials['chassi.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok005_chassi9_0.geometry}
              material={materials['chassi.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok006_chassi15_0.geometry}
              material={materials['chassi.15']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok007_FordGT_interior4_0.geometry}
              material={materials['FordGT_interior.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok008_FordGT_interior6_0.geometry}
              material={materials['FordGT_interior.6']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok009_FordGT_interior9_0.geometry}
              material={materials['FordGT_interior.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok010_FordGT_interior11_0.geometry}
              material={materials['FordGT_interior.11']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok011_glass001_0.geometry}
              material={materials['glass.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok012_chassis_vlo3_0.geometry}
              material={materials['chassis_vlo.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok013_chassi10_0.geometry}
              material={materials['chassi.10']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door_lf_ok014_chassis_vlo3_0.geometry}
              material={materials['chassis_vlo.3']}
            />
          </group>
          <group position={[0, 1.971, 0.261]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bonnet_ok_chassi10_0.geometry}
              material={materials['chassi.10']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bonnet_ok001_chassi13_0.geometry}
              material={materials['chassi.13']}
            />
          </group>
          <group position={[0, -2.21, 0.414]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok_boot_ok8_0.geometry}
              material={materials['boot_ok.8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok001_chassi13_0.geometry}
              material={materials['chassi.13']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok002_chassi5_0.geometry}
              material={materials['chassi.5']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok003_chassi8_0.geometry}
              material={materials['chassi.8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok004_chassi3_0.geometry}
              material={materials['chassi.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok005_chassi4_0.geometry}
              material={materials['chassi.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok006_chassi9_0.geometry}
              material={materials['chassi.9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok007_chassi19_0.geometry}
              material={materials['chassi.19']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok008_glass001_0.geometry}
              material={materials['glass.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_ok009_chassi10_0.geometry}
              material={materials['chassi.10']}
            />
          </group>
          <group position={[0, 0.559, 0.58]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.windscreen_ok_windscreen_ok1_0.geometry}
              material={materials['windscreen_ok.1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.winds2n_ok_glass001_0.geometry}
              material={materials['glass.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.windscreen_ok001_glass001_0.geometry}
              material={materials['glass.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.winds2n_ok001_chassi2_0.geometry}
              material={materials['chassi.2']}
            />
          </group>
          <group position={[-0.479, 0.861, 0.433]} rotation={[1.104, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dvorright_chassi3_0.geometry}
              material={materials['chassi.3']}
              position={[0.479, 0.026, -0.087]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dvorleft_chassi3_0.geometry}
              material={materials['chassi.3']}
              position={[-0.267, -0.055, 0.031]}
            />
          </group>
          <group position={[-0.381, 0.567, 0.366]} rotation={[-0.131, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tahook_chassi4_0.geometry}
              material={materials['chassi.4']}
              position={[-0.039, -0.002, -0.001]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.petrolok_chassi4_0.geometry}
              material={materials['chassi.4']}
              position={[0.287, 0, 0.024]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tahook001_chassi13_0.geometry}
              material={materials['chassi.13']}
              position={[-0.039, -0.002, -0.001]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.petrolok001_chassi13_0.geometry}
              material={materials['chassi.13']}
              position={[0.287, 0, 0.024]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi_chassi12_0.geometry}
            material={materials['chassi.12']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior_chassi19_0.geometry}
            material={materials['chassi.19']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on_FordGT_interior11_0.geometry}
            material={materials['FordGT_interior.11']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_off_FordGT_interior14_0.geometry}
            material={materials['FordGT_interior.14']}
            position={[0, -0.001, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on001_chassi13_0.geometry}
            material={materials['chassi.13']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on002_chassi8_0.geometry}
            material={materials['chassi.8']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on003_chassi4_0.geometry}
            material={materials['chassi.4']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on004_FordGT_interior6_0.geometry}
            material={materials['FordGT_interior.6']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on005_FordGT_interior8_0.geometry}
            material={materials['FordGT_interior.8']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_on006_FordGT_interior10_0.geometry}
            material={materials['FordGT_interior.10']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_off001_chassi13_0.geometry}
            material={materials['chassi.13']}
            position={[0, -0.001, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_off002_chassi4_0.geometry}
            material={materials['chassi.4']}
            position={[0, -0.001, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_off003_FordGT_interior6_0.geometry}
            material={materials['FordGT_interior.6']}
            position={[0, -0.001, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_gauges_off004_FordGT_interior8_0.geometry}
            material={materials['FordGT_interior.8']}
            position={[0, -0.001, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_glass_glass001_0.geometry}
            material={materials['glass.001']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior001_chassi13_0.geometry}
            material={materials['chassi.13']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior002_chassi5_0.geometry}
            material={materials['chassi.5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior003_chassi4_0.geometry}
            material={materials['chassi.4']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior004_chassi15_0.geometry}
            material={materials['chassi.15']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior005_FordGT_interior3_0.geometry}
            material={materials['FordGT_interior.3']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior006_FordGT_interior4_0.geometry}
            material={materials['FordGT_interior.4']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior007_FordGT_interior5_0.geometry}
            material={materials['FordGT_interior.5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior008_FordGT_interior6_0.geometry}
            material={materials['FordGT_interior.6']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior009_FordGT_interior7_0.geometry}
            material={materials['FordGT_interior.7']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior010_FordGT_interior8_0.geometry}
            material={materials['FordGT_interior.8']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior011_FordGT_interior9_0.geometry}
            material={materials['FordGT_interior.9']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior012_FordGT_interior10_0.geometry}
            material={materials['FordGT_interior.10']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior013_FordGT_interior11_0.geometry}
            material={materials['FordGT_interior.11']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_interior014_FordGT_interior14_0.geometry}
            material={materials['FordGT_interior.14']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FordGT_glass001_chassi5_0.geometry}
            material={materials['chassi.5']}
            position={[0, 0, -0.262]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi001_chassi13_0.geometry}
            material={materials['chassi.13']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi002_chassi0_0.geometry}
            material={materials['chassi.0']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi003_chassi5_0.geometry}
            material={materials['chassi.5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi004_chassi8_0.geometry}
            material={materials['chassi.8']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi005_chassi1_0.geometry}
            material={materials['chassi.1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi006_chassi3_0.geometry}
            material={materials['chassi.3']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi007_chassi4_0.geometry}
            material={materials['chassi.4']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi008_chassi7_0.geometry}
            material={materials['chassi.7']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi009_chassi2_0.geometry}
            material={materials['chassi.2']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi010_chassi6_0.geometry}
            material={materials['chassi.6']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi011_chassi9_0.geometry}
            material={materials['chassi.9']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi012_left_front_light_0.geometry}
            material={materials.left_front_light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi013_right_front_light_0.geometry}
            material={materials.right_front_light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi014_glass_0.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi015_chassi15_0.geometry}
            material={materials['chassi.15']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi016_chassi19_0.geometry}
            material={materials['chassi.19']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi017_right_rear_light_0.geometry}
            material={materials.right_rear_light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi018_chassi10_0.geometry}
            material={materials['chassi.10']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chassi019_chassi11_0.geometry}
            material={materials['chassi.11']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_spoon_0.geometry}
          material={materials.spoon}
          position={[-81.319, 36.955, -110.668]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_spoon_0.geometry}
          material={materials.spoon}
          position={[-81.319, 36.955, 135.221]}
          rotation={[-1.574, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_spoon_0.geometry}
          material={materials.spoon}
          position={[81.613, 37.737, 135.221]}
          rotation={[3.131, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_spoon_0.geometry}
          material={materials.spoon}
          position={[81.613, 36.147, -110.799]}
          rotation={[-0.016, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_bluepad_0.geometry}
          material={materials.bluepad}
          position={[-81.319, 36.955, -110.668]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_black_metallic_0.geometry}
          material={materials.black_metallic}
          position={[-81.319, 36.955, -110.668]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_semi_chrome_0.geometry}
          material={materials.semi_chrome}
          position={[-81.319, 36.955, -110.668]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_bluepad_0.geometry}
          material={materials.bluepad}
          position={[-81.319, 36.955, 135.221]}
          rotation={[-1.574, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_black_metallic_0.geometry}
          material={materials.black_metallic}
          position={[-81.319, 36.955, 135.221]}
          rotation={[-1.574, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_semi_chrome_0.geometry}
          material={materials.semi_chrome}
          position={[-81.319, 36.955, 135.221]}
          rotation={[-1.574, -Math.PI / 2, 0]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_bluepad_0.geometry}
          material={materials.bluepad}
          position={[81.613, 37.737, 135.221]}
          rotation={[3.131, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_black_metallic_0.geometry}
          material={materials.black_metallic}
          position={[81.613, 37.737, 135.221]}
          rotation={[3.131, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_semi_chrome_0.geometry}
          material={materials.semi_chrome}
          position={[81.613, 37.737, 135.221]}
          rotation={[3.131, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_bluepad_0.geometry}
          material={materials.bluepad}
          position={[81.613, 36.147, -110.799]}
          rotation={[-0.016, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_black_metallic_0.geometry}
          material={materials.black_metallic}
          position={[81.613, 36.147, -110.799]}
          rotation={[-0.016, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_semi_chrome_0.geometry}
          material={materials.semi_chrome}
          position={[81.613, 36.147, -110.799]}
          rotation={[-0.016, 1.563, 1.574]}
          scale={[9.662, 3.331, 3.331]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.infernusdffbullet_colShadowMesh_Misc_0.geometry}
          material={materials.Misc}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_dam_right_rear_light_0.geometry}
          material={materials.right_rear_light}
          position={[0, 41.34, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/2006__ford_gt_lm_spec_ll_test_car.glb')

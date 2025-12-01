import React from "react";
import { useGLTF } from "@react-three/drei";

export function Cathedral(props) {
  const { nodes, materials } = useGLTF("models/CathedralGodRay.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.godray001.geometry}
        material={materials.god}
        position={[28.554, 37.037, -43.414]}
        rotation={[0, 0, -0.576]}
        scale={1.335}
      />
      <mesh
        geometry={nodes.godray002.geometry}
        material={materials.god}
        position={[28.554, 37.037, -4.525]}
        rotation={[0, 0, -0.576]}
        scale={1.335}
      />
      <mesh
        geometry={nodes.godray003.geometry}
        material={materials.god}
        position={[28.554, 37.037, 36.073]}
        rotation={[0, 0, -0.576]}
        scale={1.335}
      />
      <mesh
        geometry={nodes.vaulted_ceiling.geometry}
        material={materials["Limestone concerete gray.001"]}
        position={[4.616, 64.247, -44.006]}
      />
      <mesh
        geometry={nodes.vaulted_ceiling001.geometry}
        material={materials["Limestone concerete gray.001"]}
        position={[4.616, 72.894, -44.006]}
      />
      <group position={[4.616, 3.79, -3.955]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Antique Cement Tiles checker"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["Limestone concerete gray.001"]}
        />
      </group>
      <mesh
        geometry={nodes.pillar.geometry}
        material={materials["Limestone concerete gray.001"]}
        position={[-29.1, 32.125, 55.444]}
      />
      <mesh
        geometry={nodes.pillar_caps.geometry}
        material={materials["Worn white marble"]}
        position={[-28.806, 58.975, 55.619]}
      />
      <group position={[-31.473, 8.564, 35.786]}>
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials["Worn white marble.001"]}
        />
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials["Worn white marble"]}
        />
      </group>
      <group position={[4.616, 10.29, 56.567]}>
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials["Worn white marble"]}
        />
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={materials["Worn white marble.001"]}
        />
      </group>
      <mesh
        geometry={nodes.front_door002.geometry}
        material={materials["Worn white marble.001"]}
        position={[4.616, 10.29, 56.288]}
      />
      <group
        position={[-34.904, 47.619, 35.842]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials["Limestone concerete gray.001"]}
        />
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials["baked stained glass"]}
        />
      </group>
      <mesh
        geometry={nodes.hinge.geometry}
        material={materials.hinge}
        position={[4.616, 10.29, 56.157]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.139, 2.104, 1.139]}
      />
      <mesh
        geometry={nodes.pedestal.geometry}
        material={materials["Worn white marble"]}
        position={[4.616, 12.364, -70.502]}
        scale={0.589}
      />
      <group position={[-29.1, 6.38, 55.444]}>
        <mesh
          geometry={nodes.Cylinder009.geometry}
          material={materials["Worn white marble"]}
        />
        <mesh
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Worn white marble.001"]}
        />
      </group>
      <group position={[-11.19, 10.372, -35.426]}>
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={materials.Limestone}
        />
        <mesh
          geometry={nodes.Cylinder012_1.geometry}
          material={materials["Worn white marble"]}
        />
      </group>
      <group
        position={[4.616, 65.759, 56.035]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.53}
      >
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials["Limestone concerete gray.001"]}
        />
        <mesh
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["baked stained glass"]}
        />
      </group>
      <mesh
        geometry={nodes.stairs.geometry}
        material={materials["Limestone concerete gray"]}
        position={[4.616, 5.812, -49.796]}
      />
      <mesh
        geometry={nodes.statue.geometry}
        material={materials["Worn white marble"]}
        position={[-16.526, 26.221, -64.733]}
        scale={9.613}
      />
      <mesh
        geometry={nodes.statue_cavities.geometry}
        material={materials["Limestone concerete gray.001"]}
        position={[-16.54, 27.813, -64.952]}
      />
      <mesh
        geometry={nodes.sun.geometry}
        material={materials["Worn white marble"]}
        position={[4.616, 47.723, -75.778]}
        scale={1.459}
      />
      <mesh
        geometry={nodes.sun001.geometry}
        material={materials["Worn white marble"]}
        position={[4.616, 20.826, 55.445]}
      />
      <mesh
        geometry={nodes.sword_lol.geometry}
        material={materials["sword texture"]}
        position={[4.616, 13.063, -70.492]}
      />
      <mesh
        geometry={nodes.wall_sun_deco.geometry}
        material={materials["Worn white marble"]}
        position={[4.616, 76.984, -63.364]}
        scale={1.08}
      />
      <group position={[-4.926, 32.687, -80.864]}>
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials["Worn white marble"]}
        />
        <mesh
          geometry={nodes.Cube013_1.geometry}
          material={materials["Worn white marble.001"]}
        />
        <mesh
          geometry={nodes.Cube013_2.geometry}
          material={materials["Limestone concerete gray.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/CathedralGodRay.glb");

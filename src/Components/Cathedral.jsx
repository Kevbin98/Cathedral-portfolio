import { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Cathedral(props) {
  const { nodes, materials } = useGLTF("/models/cathedralTransforms.glb");

  //materials
  const stainedGlassMaterial = materials["baked stained glass"];
  const ornateMaterial = materials["Worn white marble.001"];
  const tiles = materials["Antique Cement Tiles checker"];
  const concrete = materials["Limestone concerete gray"];
  const marble = materials["Worn white marble"];

  //ambient occlusion texture for ornate materials
  const aoTexture = useTexture("/textures/ornateAO.png");

  useEffect(() => {
    materials.god.emissiveIntensity = 3;
    materials.god.emissive = new THREE.Color("#FFFFFF");
    materials.Limestone.emissiveIntensity = 5;
    materials.god.opacity = 0.5;
    concrete.emissiveIntensity = 5;
    tiles.emissiveIntensity = 5;
    stainedGlassMaterial.emissiveIntensity = 2;
    ornateMaterial.roughness = 1;
    ornateMaterial.normalScale = new THREE.Vector2(1, 1);
    ornateMaterial.emissiveIntensity = 0.1;
    ornateMaterial.emissive = new THREE.Color("#FFFFFF");
    marble.emissive = new THREE.Color("#FFFFFF");
    marble.emissiveIntensity = 0.1;
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.godray001.geometry} material={materials.god} />
      <mesh geometry={nodes.godray002.geometry} material={materials.god} />
      <mesh geometry={nodes.godray003.geometry} material={materials.god} />
      <mesh
        geometry={nodes.vaulted_ceiling.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.vaulted_ceiling001.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.pillar.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.pillar_caps.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.front_door002.geometry}
        material={materials["Worn white marble.001"]}
      />
      <mesh geometry={nodes.hinge.geometry} material={materials.hinge} />
      <mesh
        geometry={nodes.pedestal.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.stairs.geometry}
        material={materials["Limestone concerete gray"]}
      />
      <mesh
        geometry={nodes.statue.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.statue_cavities.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.sun.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.sun001.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.sword_lol.geometry}
        material={materials["sword texture"]}
      />
      <mesh
        geometry={nodes.wall_sun_deco.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Antique Cement Tiles checker"]}
      />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials["Worn white marble.001"]}
      />
      <mesh
        geometry={nodes.Cube012_1.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.Cube021_1.geometry}
        material={materials["Worn white marble.001"]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.Cube009_1.geometry}
        material={materials["baked stained glass"]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.Cylinder009_1.geometry}
        material={materials["Worn white marble.001"]}
      />
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={materials.Limestone}
      />
      <mesh
        geometry={nodes.Cylinder012_1.geometry}
        material={materials["Worn white marble"]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials["Limestone concerete gray.001"]}
      />
      <mesh
        geometry={nodes.Cylinder006_1.geometry}
        material={materials["baked stained glass"]}
      />
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
  );
}

useGLTF.preload("/models/cathedralTransforms.glb");

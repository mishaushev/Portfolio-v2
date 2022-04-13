const Floor = props => {
    return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[10,2,10]}/>
        <meshPhysicalMaterial />
      </mesh>
    )
  }

  export default Floor;
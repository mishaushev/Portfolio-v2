import { useLoader } from "react-three-fiber";
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';

const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )
    console.log(model)
    
    const handelePointerDown = e => {
        console.log(e)
    }

    return (
        <primitive 
        onPointerDown={handelePointerDown}
            receiveShadow
            castShadow
            object={model.scene}
            {...props}
        />
    )
}

export default Model;
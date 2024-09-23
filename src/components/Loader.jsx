import { Html } from "@react-three/drei";
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-scale-ripple-multiple.scss'; 

const CustomLoader = ({ loading }) => {
  return (
    <Html center>
      <div className='flex items-center justify-center w-full h-full'>
        {loading ? (
          <Loader type="ball-scale-ripple-multiple" />
        ) : (
          <div className='w-20 h-20 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
        )}
      </div>
    </Html>
  );
};

export default CustomLoader;

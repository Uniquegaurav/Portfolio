import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='loader'></div>
      </div>
      <style jsx>{`
        .loader {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: relative;
          animation: spin 1.2s linear infinite;
        }

        .loader:before, .loader:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: scale 1.2s infinite;
        }

        .loader:before {
          background: linear-gradient(270deg, #3b82f6, #9333ea);
          animation-delay: 0s;
        }

        .loader:after {
          background: linear-gradient(270deg, #f59e0b, #f43f5e);
          animation-delay: -0.6s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;

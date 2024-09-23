import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='loader'>
          <div className='inner-loader'></div>
        </div>
      </div>
      <style jsx>{`
        .loader {
          width: 60px;
          height: 60px;
          position: relative;
          border: 4px solid transparent; /* Transparent border */
          border-radius: 50%;
          border-top-color: #3b82f6; /* Blue color for the spinner */
          background-color: #1e3a8a; /* Dark blue for visibility */
          animation: spin 1s linear infinite;
        }

        .inner-loader {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(59, 130, 246, 0.8); /* Semi-transparent blue */
          position: absolute;
          top: 0;
          left: 0;
          animation: pulse 1.5s infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;

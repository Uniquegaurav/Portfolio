import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="loader-container">
        <div className="loader">
          <div className="circle"></div>
          <div className="bar"></div>
          <div className="circle"></div>
        </div>
      </div>
      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .loader {
          display: flex;
          align-items: center;
          position: relative;
          height: 60px;
        }

        .circle {
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, #4caf50 30%, rgba(76, 175, 80, 0) 70%);
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }

        .bar {
          width: 10px;
          height: 60px;
          background-color: #4caf50;
          position: relative;
          margin: 0 10px;
          animation: grow 1s infinite alternate;
          transform-origin: bottom;
        }

        .bar:before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: #4caf50;
          border-radius: 50%;
          transform: translateX(-50%);
          animation: fadeInOut 1s infinite alternate;
        }

        .bar:after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: #4caf50;
          border-radius: 50%;
          transform: translateX(-50%) scale(0);
          animation: pop 1s infinite alternate;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes grow {
          0% {
            height: 60px;
          }
          100% {
            height: 40px;
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes pop {
          0% {
            transform: translateX(-50%) scale(0);
          }
          100% {
            transform: translateX(-50%) scale(1);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;

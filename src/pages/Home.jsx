import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, Popup } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, BlackIsland, Dragon, Winter, Earth } from "../models";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  
  const [currentStage, setCurrentStage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  


  useEffect(() => {
    const shouldShowPopup = !localStorage.getItem("popupAlreadyShown");
    if (shouldShowPopup) {
      setShowPopup(true);
    }
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);



  const handleSeeHome = () => {
    setCurrentStage(1);
    localStorage.setItem("popupAlreadyShown", "true");
    setShowPopup(false);

  };

  const handleJumpToAbout = () => {
    localStorage.setItem("popupAlreadyShown", "true");
    setShowPopup(false);
    navigate("/about");
  
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      // screenScale = [0.3, 0.3, 0.3];
      // screenPosition = [0, -2.5, 0];
      screenScale = [0.02, 0.03, 0.02];
      screenPosition = [0, 0.35, 2.65];
    } else {
      screenScale = [0.02, 0.03, 0.02];
      screenPosition = [0, 0.35, 2.65];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      // screenScale = [0.9, 0.9, 0.9];
      // screenPosition = [0, -6.5, -43.4];
      screenScale = [1, 1, 1];
      screenPosition = [0.12, 0.32, -0.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0.12, 0.32, -0.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Suspense
        fallback={
          <Canvas>
            <Loader />{" "}
          </Canvas>
        }
      >
        {showPopup && (
          <Popup
            onClose={() => setShowPopup(false)}
            onSeeHome={handleSeeHome}
            onJumpToAbout={handleJumpToAbout}
          />
        )}
        <div className="absolute bottom-24 left-10 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={4} />
          <ambientLight intensity={2.1} />
          <pointLight position={[9, 6, 10]} intensity={4} />
          <spotLight
            position={[10, 12, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={2}
          />

          {/* <Bird /> */}
          <Winter isRotating={isRotating} />
          <BlackIsland
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.4, 4.2, 0]}
            scale={islandScale}
          />
          <Dragon
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 1.7, 0]}
            scale={biplaneScale}
          />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, Popup } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { BlackIsland, Dragon, Winter} from "../models";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const shouldShowPopup = !localStorage.getItem("popupAlreadyShown");
    if (shouldShowPopup) {
      setShowPopup(true);
    }
  }, []);
  
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = '';
    };
  }, [location.pathname]);
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

    if (window.innerWidth < 768) {
      screenScale = [0.02, 0.03, 0.02];
      screenPosition = [0, 0.33, 2.25];
    } else {
      screenScale = [0.02, 0.03, 0.02];
      screenPosition = [0, 0.45, 2.65];
        //keep dragon directly on top of rocks
      // screenPosition = [0, -0.05, 4.85];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 0.31, -0.6];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0.12, 0.32, -0.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section style={{overflow:"hidden"}} className="w-full h-screen relative">
      <Suspense
        fallback={
          <Canvas className="w-full h-full flex items-center justify-center">
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
        <div className="absolute bottom-24 left-10 md:bottom-24 md:left-10 z-10 flex items-center justify-center">
          {currentStage>0 && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
         style={{overflow:"hidden"}}
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1.8, 1.2, 1.7]} intensity={4} />
          <ambientLight intensity={1.7} />
          <pointLight position={[0.8, 0.7, 0.5]} intesity={3} />
          <spotLight
            position={[4, 2, 2]}
            angle={0.25}
            penumbra={2}
            intensity={4}
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
            rotation={[0.6, 1.7, 0]}
            scale={biplaneScale}
          />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 bg h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;

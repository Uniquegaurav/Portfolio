import React from "react";

const Popup = ({ onClose, onSeeHome, onJumpToAbout }) => {
  const handleSeeHome = () => {
    onClose();
    onSeeHome();
  };

  const handleJumpToAbout = () => {
    onClose();
    onJumpToAbout();
  };
  const commonStyle = {
    backgroundColor: "rgba(173, 216, 230, 0.3)",
    backdropFilter: "blur(3px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: "90%",
    height: "auto",
    maxWidth : "420px",
    minHeight : "210px",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={commonStyle}>
        <h1 className="sm:text-base sm:leading-snug text-center py-4 px-8 text-white font-bold mx-5">
          WELCOME TO HOUSE OF THE DRAGON
        </h1>
        <div
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <h3 className="text-center text-sm text-gray-300">
            Drag Left and Right to Explore the World. You can always click on
            the log to skip
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <button
            onClick={handleSeeHome}
            type="button"
            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore World
          </button>

          <button
            onClick={handleJumpToAbout}
            type="button"
            class="text-teal-400 hover:text-white border border-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal-500 dark:text-white dark:hover:text-white dark:hover:bg-teal-600 dark:focus:ring-teal-800"
          >
            Skip to About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

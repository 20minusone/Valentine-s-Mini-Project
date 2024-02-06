import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 7 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Think again!",
      "You might regret this!",
      "Give it another thought!",
      "This could be a mistake!",
      "Have a heart!",
      "Pleaseeeeeeeeeeeee!🥺",
      "Don't be so cold!!",
      "Change of heart?",
      "Is that your final answer?",
      "You're breaking my heart 🥲",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              src="https://media1.tenor.com/m/38UrQVwmSdMAAAAC/bubbline-obsidian.gif"
              style={{ width: "400x", height: "240px" }}
              onClick={() => window.location.reload(false)}
            />
            <div className="text-container">Ok yay!!!</div>
            <div className="text-container">
              <button className="text-container" style={{ display: `none` }}>
                retry
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className=""
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/pZjd9MY-_7oAAAAC/bubbline-adventure-time.gif"
            />
            <h4 className="text-container">Hey, will you be my Valentine?</h4>
            <div className="text-container">
              <button
                className={"yes-button"}
                style={{
                  fontSize: yesButtonSize,
                  marginRight: `5px`,
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

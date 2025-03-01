import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1); //updating step based on current value
  };

  const handleNext = () => {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1); //updating step based on current value
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous {/* Child of Button element*/}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span> {/* Child of Button element*/}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
};

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

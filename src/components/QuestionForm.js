import { useState } from "react";

function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  // const isInputError = inputValue.includes("f");
  // function checkValue(value) {
  //   if (!value.includes("f")) {
  //     setInputValue(value);
  //   }

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // {isInputError && (
        //   <div>Vous avez tord avec 'f'</div>
        // )}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
}

export default QuestionForm;

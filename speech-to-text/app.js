const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const showStatus = document.querySelector("#show-status");
const result = document.querySelector("#result");
const speak = document.querySelector("#speak");

const startRecognition = () => {
  if (speechRecognition !== undefined) {
    let recognition = new speechRecognition();

    recognition.onstart = () => {
      showStatus.innerHTML = `Starting listening, speak in the microphone please.`;
      result.classList.add("hide");
    };

    recognition.onspeechend = () => {
      showStatus.innerHTML = `I stopped listening.`;
      recognition.stop();
    };

    recognition.onresult = (result) => {
      result.classList.remove("hide");
      result.innerHTML = `I'm ${Math.floor(
        result.results[0][0].confidence * 100
      )}% certain you just said: <b>${result.results[0][0].transcript}</b>`;
    };

    recognition.start();
  } else {
    showStatus.innerHTML = "sorry not supported 😭";
  }
};

speak.addEventListener("click", startRecognition);

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const status = document.querySelector("#status");

const result = document.querySelector("#result");

startRecognition = () => {
  if (speechRecognition !== undefined) {
    let recognition = new speechRecognition();

    recognition.onstart = () => {
      status.innerHTML = `Starting listening, speak in the microphone please.`;
      result.classList.add("hide");
    };

    recognition.onspeechend = () => {
      status.innerHTML = `I stopped listening.`;
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
    status.innerHTML = "sorry not supported 😭";
  }
};

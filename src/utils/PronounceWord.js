// Pronunciation (Japanese)
const pronounceWord = (word) => {
  // Cancel any ongoing speech before starting new
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.75;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export default pronounceWord;
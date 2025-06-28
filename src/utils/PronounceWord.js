// Vocabulary Pronunciation (Japanese)
const pronounceWord = (word)=> {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN';
  utterance.rate = 0.75;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export default pronounceWord;
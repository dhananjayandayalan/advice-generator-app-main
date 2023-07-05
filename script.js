const generate = document.getElementById('generate');
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');

window.onload = generateAdvice();

generate.addEventListener('click', () => {
  generateAdvice();
});

async function generateAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache'
    });
    const data = await response.json();
    const { id, advice: text } = data.slip;
    adviceId.innerText = id;
    advice.innerText = '"' + text + '”';
  } catch (error) {
    console.error(error);
  }
}

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  const text = input.value;
  const wordCount = text.trim().split(/\s+/).length;
  output.innerHTML = `Word count: ${wordCount}`;
});

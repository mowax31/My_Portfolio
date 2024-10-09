const matrix = document.getElementById('matrix');
const context = matrix.getContext('2d');

matrix.width = window.innerWidth;
matrix.height = window.innerHeight;

const texts = "1234567890-=!@#$%^&*()_+qwertyuiop[]\QWERTYUIOP{}asdfghjkl;\'ASDFGHJKL:\|zxcvbnm,./ZXCVBNM<>?";

const fontSize = 16;
const columns = matrix.width / fontSize;

const f = [];

for(let x = 0; x < columns; x++) {
  f[x] = 0;
}

const draw =() => {
  context.fillStyle = 'rgba(0,0,0,0.05)';
  context.fillRect(0,0,matrix.width, matrix.height);
  
  context.fillStyle = "#0f0";
  context.font = fontSize + "px monospace";

  for(let x = 0; x< columns; x++) {
    const randomText = texts.charAt(Math.floor(Math.random() * texts.length));
    context.fillText(randomText, x * fontSize, f[x]* fontSize);

    if (f[x] * fontSize > matrix.height && Math.random() > 0.975) {
      f[x] = 0;
    }
    f[x] ++;
  }
}

setInterval(draw, 35);

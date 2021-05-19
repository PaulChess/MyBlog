const dragonContainer = document.getElementById('container');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const dragonScale = 2;

const img = new Image();
img.src = 'dragon.jpg';
img.onload = () => {
  const imgWidth = img.width;
  const imgHeight = img.height;

  canvas.width = imgWidth;
  canvas.height = imgHeight;
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
  console.log(imgData);

  ctx.clearRect(0, 0, imgWidth, imgHeight);

  // 绘制点阵
  const gap = 10;
  for (let h = 0; h < imgHeight; h+=gap) {
    for (let w = 0; w < imgWidth; w+=gap) {
      const pos = (imgWidth * h + w) * 4;
      const r = imgData[pos];
      const g = imgData[pos + 1];
      const b = imgData[pos + 2];
      // 代表可绘制的像素
      if (r + g + b === 0) {
        const bubble = document.createElement('img');
        bubble.src = 'bubble.png';
        bubble.setAttribute('class', 'bubble');

        const bubbleSize = Math.random() * 10 + 20;
        bubble.style.left = (w * dragonScale - bubbleSize / 2) + 'px';
        bubble.style.top = (h * dragonScale - bubbleSize / 2) + 'px';
        bubble.style.width = bubble.style.height = bubbleSize + 'px';
        bubble.style.animationDuration = Math.random() * 6 + 4 + "s";

        dragonContainer.appendChild(bubble);
      }
    }
  }
}
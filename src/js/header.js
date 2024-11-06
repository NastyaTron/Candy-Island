// const header = document.querySelector('.header');
// const targetY = 80; 


// function getBodyGradientColorAt(yPosition) {
  
//   const canvas = document.createElement('canvas');
//   canvas.width = 1;
//   canvas.height = document.body.scrollHeight;
//   const ctx = canvas.getContext('2d');

  
//   const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//   gradient.addColorStop(0, '#fef3be'); 
//   gradient.addColorStop(0.5, '#fbde92');
//   gradient.addColorStop(1, '#f7c359'); 
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, 1, canvas.height);

  
//   const pixelData = ctx.getImageData(0, yPosition, 1, 1).data;
//   return `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
// }


// window.addEventListener('scroll', () => {
//   const colorAtPoint = getBodyGradientColorAt(window.scrollY + targetY);
//   header.style.backgroundColor = colorAtPoint;
// });

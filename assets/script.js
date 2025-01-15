const boxContainer = document.querySelector(".box-container");
const box = document.querySelector(".box");
const inputFile = document.querySelector('input[type="file"]');
const boxWidth = 20;
const boxCounter = 26;

boxContainer.style = `--num-div:${boxCounter};--box-width:${boxWidth}px;--transformPos:80px;`;
// Create boxes
function creatBoxes(imageUrl) {
  for (let i = 0; i < boxCounter; i++) {
    const newBox = document.createElement("div");
    const newDiv = document.createElement("div");

    newDiv.style = `background-image: url(${
      imageUrl || "./assets/img1.jpg"
    });background-position-x:${-i * boxWidth}px`;
    newBox.classList.add("box");
    newBox.appendChild(newDiv);
    boxContainer.appendChild(newBox);
    newBox.style = "--number: " + i;
  }
}
creatBoxes();

// Change image
inputFile.addEventListener("change", function () {
  const file = inputFile.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      boxContainer.innerHTML = ""; // Clear existing boxes
      creatBoxes(imageUrl);
    };
    reader.readAsDataURL(file);
  }
});

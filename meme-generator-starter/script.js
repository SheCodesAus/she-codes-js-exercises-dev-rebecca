function getImage() {
  let imageURL = document.getElementById("image-url").value;
  console.log(imageURL)

  let imageBox = document.createElement("img");
  imageBox.id = "meme-image";
  imageBox.src = imageURL;

  let wrapper = document.getElementById("meme-image-wrapper");
  wrapper.appendChild(imageBox);

  document.getElementById("meme-builder").style.display = "block";
}
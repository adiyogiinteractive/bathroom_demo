
//Get Model Viewer
const modelViewer = document.querySelector("model-viewer");
console.log("modelViewer : " + modelViewer);

document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
      const error = document.querySelector("#error");
      error.classList.remove('hide');
      error.addEventListener('transitionend',(event) => {
        error.classList.add('hide');
      });
    }
});

modelViewer.addEventListener("load", async () => {
  //Selecting the particular material, In this case material name is "Material #45"
  const material = modelViewer.model.getMaterialByName('Walls');
  
  // Create a new texture from an image
  //const texture = await modelViewer.createTexture('textures/woman.png');
  
  // Apply the new texture
  //material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);

  //Before the material color was parrot green so we have to change it to white
  //material.pbrMetallicRoughness.setBaseColorFactor([1.0, 1.0, 1.0, 1.0]);
  material.setDoubleSided(false);

});

// Get a reference to the file input element
const fileInput = document.getElementById('textureSelector');

// Add a change event listener
fileInput.addEventListener('change', async (event) => {
  // The selected files are in the event.target.files FileList object
  const files = event.target.files;
  
  // To get the first (and often only) selected file
  const firstFile = files[0];

  console.log(firstFile); 
  // You can access file properties like name, size, and type
  console.log('File Name:', firstFile.name);
  console.log('File Size:', firstFile.size, 'bytes');
  console.log('File Type:', firstFile.type);

  
  // Create a new texture from an image
  const texture = await modelViewer.createTexture(URL.createObjectURL(firstFile));
  
  //Selecting the particular material, In this case material name is "Material #45"
  const material = modelViewer.model.getMaterialByName('PosterMaterial');
  // Apply the new texture
  material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
  //material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI(texture);
});

document.getElementById("uploadButton").addEventListener('click', uploadFileClicked);

function uploadFileClicked(){
  document.getElementById('textureSelector').click();
}

document.getElementById("arButton").addEventListener('click', arButtonClicked);

function arButtonClicked(){
  document.getElementById("ar-button").click();
}
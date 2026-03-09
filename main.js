
//Get Model Viewer
const modelViewer = document.querySelector("model-viewer");
console.log("modelViewer : " + modelViewer);

var frontBackWallMaterial;
var leftRightWallMaterial;
var floorMaterial;

var frontBackWallTexture;
var leftRightWallTexture;
var floorTexture;

const frontBackWallTexturePath = "textures/FrontBackWallTextures/";
const leftRightWallTexturePath = "textures/LeftRightWallTextures/";
const floorTexturePath = "textures/FloorTextures/";

const wallMaterials = ["72033-copy-2.jpg", "11564188_95732-copy-2.jpg", "2151964651_copy_3.jpg", "patina-1000-mm-architextures-copy-5.jpg", "WhatsApp-Image-2026-03-09-at-10.38.45-AM-copy-3.jpg", "Poliigon_SlateFloorTile_7657.jpg"];
const floorMaterials = ["Poliigon_SlateFloorTile_76571K.jpg", "72033-copy-2.jpg", "11564188_95732-copy-2.jpg", "WhatsApp-Image-2026-03-09-at-10.38.45-AM-copy-3.jpg"];

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
  frontBackWallMaterial = modelViewer.model.getMaterialByName('FrontWall');
  leftRightWallMaterial = modelViewer.model.getMaterialByName('LeftWall');
  floorMaterial = modelViewer.model.getMaterialByName('Floor');
  
  // Create a new texture from an image
  frontBackWallTexture = await modelViewer.createTexture(frontBackWallTexturePath + wallMaterials[5]);
  leftRightWallTexture = await modelViewer.createTexture(leftRightWallTexturePath + wallMaterials[5]);
  floorTexture = await modelViewer.createTexture(floorTexturePath + floorMaterials[3]);
  
  // Apply the new texture
  frontBackWallMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(frontBackWallTexture);
  leftRightWallMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(leftRightWallTexture);
  floorMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(floorTexture);

  //Before the material color was parrot green so we have to change it to white
  //material.pbrMetallicRoughness.setBaseColorFactor([1.0, 1.0, 1.0, 1.0]);

});

async function changeWallMaterial (materialIndex = 0)
{
  // Create a new texture from an image
  frontBackWallTexture = await modelViewer.createTexture(frontBackWallTexturePath + wallMaterials[materialIndex]);
  leftRightWallTexture = await modelViewer.createTexture(leftRightWallTexturePath + wallMaterials[materialIndex]);

  // Apply the new texture
  frontBackWallMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(frontBackWallTexture);
  leftRightWallMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(leftRightWallTexture);
}

async function changeFloorMaterial (materialIndex = 0)
{
  // Create a new texture from an image
  floorTexture = await modelViewer.createTexture(floorTexturePath + floorMaterials[materialIndex]);
  
  // Apply the new texture
  floorMaterial.pbrMetallicRoughness.baseColorTexture.setTexture(floorTexture);
}


//Get Model Viewer
const modelViewer = document.querySelector("model-viewer");

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
  const material = modelViewer.model.getMaterialByName('Walls');
});

document.getElementById("arButton").addEventListener('click', arButtonClicked);

function arButtonClicked(){
  document.getElementById("ar-button").click();
}

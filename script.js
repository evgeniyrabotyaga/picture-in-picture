const videoElement = document.getElementById('video');
const btn = document.querySelector('.button');

const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    alert(`Something went wrong check the console.`);
    console.log(`${err} 🔴💥🔴💥🔴💥`);
  }
};

btn.addEventListener('click', async () => {
  btn.disabled = true;
  await videoElement.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();

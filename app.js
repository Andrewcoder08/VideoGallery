const videos = document.querySelectorAll(".video-container video");
videos.forEach((videoSelected) => {
  videoSelected.addEventListener("click", function () {
    // adding class that is responsible for making the video focused in center
    videoSelected.classList.toggle("active");
    // paused is in built property of video
    if (videoSelected.paused) {
      videoSelected.play();
    } else {
      videoSelected.pause();
      // start video from beginning
      videoSelected.currentTime = 0;
    }
  });
});

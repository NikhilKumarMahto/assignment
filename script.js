const API_KEY = "AIzaSyBD9srtIl0QgdTN7eULu8u7Blg2fbem-uc";
const videoId = "9ESQWAtPpSs";

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      fs: 1,
      modestbranding: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  
  switch (event.data) {
    case YT.PlayerState.ENDED:
    
      displayCustomMessage("The video has ended. Thanks for watching!"); // after ending of video, this message will be displayed
      break;

    default:
      break;
  }
}

function displayCustomMessage(message) {
  alert(message);
}

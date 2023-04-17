import Hls from "hls.js";

const hls = new Hls();

hls.on(Hls.Events.MEDIA_ATTACHED, function () {
  hls.loadSource(
    "http://grwmu.klmvhn20.com/get.php?username=Nvdepart05_550123&password=gK3FOURJ&type=m3u_plus&output=mpegts&token=tUbYbG8JDGgfS3L2NlBPuRdB"
  );
  hls.attachMedia(video);
});

hls.on(Hls.Events.MANIFEST_PARSED, function () {
  video.play();
});

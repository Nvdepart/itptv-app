<template>
  <div class="iptv-player">
    <video id="iptv-video" autoplay></video>
    <v-row>
      <v-col v-for="channel in channels" :key="channel.id">
        <div class="channel-item" @click="playChannel(channel)">
          <img :src="channel.logo" :alt="channel.name" />
          <span>{{ channel.name }}</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Hls from "hls.js";

export default {
  data() {
    return {
      channels: [
        {
          id: 1,
          name: "Channel 1",
          logo: "http://example.com/channels/channel1.png",
          url: "http://example.com/channels/channel1.m3u8",
        },
        {
          id: 2,
          name: "Channel 2",
          logo: "http://example.com/channels/channel2.png",
          url: "http://example.com/channels/channel2.m3u8",
        },
      ],
    };
  },
  methods: {
    playChannel(channel) {
      const video = document.querySelector("#iptv-video");

      const hls = new Hls();
      hls.loadSource(channel.url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    },
  },
};
</script>

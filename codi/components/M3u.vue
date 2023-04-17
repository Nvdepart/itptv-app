<template>
  <div>
    <ul>
      <li v-for="(channel, index) in channels" :key="index">
        {{ channel.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import M3U8Parser from "m3u8-parser";
import axios from "axios";

export default {
  data() {
    return {
      channels: [],
    };
  },
  mounted() {
    const options = {
      url: "http://grwmu.klmvhn20.com/get.php?username=Nvdepart05_550123&password=gK3FOURJ&type=m3u_plus&output=mpegts&token=tUbYbG8JDGgfS3L2NlBPuRdB",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        Referer: "http://grwmu.klmvhn20.com/",
      },
    };

    axios(options)
      .then((response) => {
        const parser = new M3U8Parser();
        parser.push(response.data);
        parser.end();
        const parsedData = parser.manifest;

        this.channels = parsedData.segments.map((segment) => {
          return {
            name: segment.name,
            url: segment.uri,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div class="musicBox">
    <div class="musicBox__mask" :style="{ 'filter': backgroundImg ? '' : 'blur(100px)' }"></div>
    <div ref="flash" id="imgbox" class="musicBox__imgbox">
      <a :href="music.picurl" target="_blank">
        <img :src="music.picurl" alt="专辑图片" />
      </a>
    </div>
    <h1 class="musicBox__title">{{ music.name }}</h1>
    <p class="musicBox__artist">{{ music.artistsname }}</p>
    <audio ref="audio" id="music" :src="music.url" :autoplay="autoplay" controls="controls" @ended="update(false, true)"
      @pause="update(true)" @play="update(false)" @error="update(false, true)"></audio>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      music: {
        url: '',
        name: '',
        picurl: '',
        artistname: ''
      },
      // music: {
      //   url: "http://music.163.com/song/media/outer/url?id=1910911958",
      //   name: "神女劈观·唤情 Devastation and Redemption",
      //   picurl: "http://p3.music.126.net/8gMfTTbDifrypmWQ2fM0Ig==/109951166919194723.jpg",
      //   artistsname: "HOYO-MiX"
      // },
      backgroundImg: 'https://api.dujin.org/bing/1920.php'
    }
  },
  computed: {
  },
  mounted() {
    this.getMusic();
    this.getBase64(this.backgroundImg, (e) => {
      this.backgroundImg = `url(${e})`
    })
  },
  methods: {
    getBase64(url, callback) {
      return callback ? callback(url) : null;
      var Img = new Image(),
        dataURL = '';
      Img.setAttribute('crossOrigin', 'Anonymous');
      // Img.crossOrigin = 'anonymous';
      Img.src = /^data:image/.test(url) ? url : url + '?' + new Date().getTime();
      // Img.src = url;
      Img.onload = function () {
        var canvas = document.createElement('canvas'),
          width = Img.width,
          height = Img.height;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
        dataURL = canvas.toDataURL('image/jpeg');
        return callback ? callback(dataURL) : null;
      };
    },
    ajax({ method = "get", url, header, data, dataType, success, error }) {
      var xhr = null;
      try {
        xhr = new XMLHttpRequest();
      } catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      if (typeof data == "object") {
        data = JSON.stringify(data);
      }
      if (method == "get" && data) {
        url += `?${data}`;
        data = "";
      }
      xhr.open(method, `${url}`, true);
      if (header) {
        for (const item in header) {
          xhr.setRequestHeader(item, header[item]);
        }
      } else {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      xhr.send(`${data}`);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200 && success) {
            switch (dataType) {
              case "json":
                success(JSON.parse(xhr.responseText));
                break;

              default:
                success(xhr.response)
                break;
            }
          } else if (error) {
            error("Error" + xhr.status);
          }
        }
      };
    },
    getMusic() {
      let _this = this
      this.ajax({
        url: "https://api.uomg.com/api/rand.music?sort=热歌榜&format=json",
        dataType: 'json',
        success: (res) => {
          const { data } = res;
          data.url = data.url.replace("http:", "");
          data.picurl = data.picurl.replace("http:", "");
          _this.music = data;
        }
      });
    },
    update(paused, ended = false) {
      // var audio = this.$refs.audio;
      var flash = this.$refs.flash;
      // console.log(audio, flash);
      if (ended == true) {
        return this.getMusic();
      }
      if (paused) {
        flash?.style.setProperty("animation-play-state", "paused", "");
      } else {
        flash.style.setProperty("animation-play-state", "running", "");
      }
    }
  },
}
</script>

<style scoped>
* {
  color: #0d1117;
}

input:focus,
button:focus,
audio:focus {
  outline: 0;
}

.musicBox {
  display: block;
  position: relative;
  margin: 7vh auto;
  padding: 40px 40px;
  min-height: 150px;
  max-height: 500px;
  max-width: 700px;
  background-color: #e9ecef;
  background-image: v-bind("backgroundImg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s;
}

.musicBox__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0009;
}

.musicBox__title {
  font-size: 2.5em;
  padding-right: 3.5em;
  margin-bottom: 20px;
  max-height: 55px;
  overflow: hidden;
  pointer-events: none;
}

.musicBox__artist {
  font-size: 1.25em;
  transform: translate(5%, 0);
  min-height: 20px;
  pointer-events: none;
}

.musicBox>audio {
  position: relative;
  width: 60%;
  bottom: 5%;
}

.musicBox__title,
.musicBox__artist,
.musicBox>audio {
  font-weight: 500;
  text-align: center;
  word-break: keep-all;
  mix-blend-mode: screen;
  filter: invert(1) hue-rotate(180deg);
}

.musicBox__imgbox {
  display: block;
  position: absolute;
  top: 20%;
  right: 5%;
  height: 150px;
  width: 150px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  mix-blend-mode: normal;
  filter: invert(0);
  /* transform: rotateZ(360deg);
    transition: transform 7s; */
  animation: go;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-play-state: paused;
}

@keyframes go {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

@media screen and (max-width: 760px) {
  .musicBox {
    margin-top: 3vh;
    padding: 50px 0;
    width: 85vw;
  }

  .musicBox>h1 {
    padding-right: 0;
  }

  .musicBox>audio {
    padding: 0 20px;
    width: 100%;
  }

  .musicBox__imgbox {
    position: unset;
    margin: auto;
    top: 15.5%;
  }
}
</style>

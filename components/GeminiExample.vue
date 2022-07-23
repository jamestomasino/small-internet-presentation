<template>
  <div class="center">
    <client-only>
      <VideoPlayer
        v-if="$hostname === 'localhost'"
        src="/video/gemini-explore.mp4"
        autoplay="true"
        loop="true"
        muted="true"
      />
      <vimeo-player
        v-if="$hostname !== 'localhost'"
        :options="{ loop: true }"
        video-url="732171575"
        muted="true"
        player-width="1920"
        player-height="1050"
        autoplay
      />
    </client-only>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer
  }
}
</script>

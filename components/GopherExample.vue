<template>
  <div class="center">
    <client-only>
      <VideoPlayer
        v-if="$hostname() === 'localhost'"
        src="/video/gopher-explore.mp4"
        autoplay="true"
        loop="true"
        muted="true"
        control-bar="{ false }"
        tabindex="-1"
      />
      <vimeo-player
        v-if="$hostname() !== 'localhost'"
        :options="{ loop: true }"
        video-url="732203097"
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

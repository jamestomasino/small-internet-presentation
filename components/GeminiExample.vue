<template>
  <div class="center">
    <client-only>
      <vimeo-player
        :options="{ loop: true }"
        video-url="732171575"
        muted="true"
        player-width="1280"
        player-height="970"
        autoplay
      />
    </client-only>
  </div>
</template>

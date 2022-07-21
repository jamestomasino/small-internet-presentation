<template>
  <div class="center">
    <client-only>
      <vimeo-player
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

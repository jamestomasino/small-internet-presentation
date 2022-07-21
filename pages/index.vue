<template>
  <div>
    <h1>
      Hello World!
    </h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Small Internet Presentation',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Small Internet Presentation' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Small Internet Presentation' },
        { hid: 'googlename', itemprop: 'name', content: 'Small Internet Presentation' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'ogdescription', property: 'og:description', content: '' },
        { hid: 'twdescription', name: 'twitter:description', content: '' },
        { hid: 'googledescription', itemprop: 'description', content: '' },
        { hid: 'ogurl', property: 'og:url', content: 'https://small-internet-presentation.netlify.app' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://small-internet-presentation.netlify.app' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://small-internet-presentation.netlify.app' + this.$route.path }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

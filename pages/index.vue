<template>
  <div>
    <section
      ref="slidesWrapper"
      tabindex="0"
      class="slides"
      @keyup.right="next"
      @keyup.space="next"
      @keyup.left="prev"
      @keyup.enter="toggle"
    >
      <fullscreen v-model="fullscreen">
        <div
          v-for="slideName in slides"
          :key="slideName"
        >
          <component :is="slideName" v-if="page === slideName" class="page" />
        </div>
      </fullscreen>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      fullscreen: false,
      slides: [
        'Introduction',
        'MCH2022',
        'Overview',
        'StateOfTheWeb',
        'StateOfTheWebExamples',
        'StateOfTheWebExamples2',
        'StateOfTheWebExamples3',
        'AdBlockerUsage',
        'SurveyWebtech',
        'WordcloudMotivations',
        'SurveyMotivations',
        'WhatIsTheSmallInternet',
        'WordcloudPlaces',
        'DefinedByContent',
        'SurveyParticipation',
        'WordcloudParts',
        'SurveyTime',
        'HowDoesItWork',
        'TheProtocols',
        'Gopher',
        'Gopher1992A',
        'Gopher1992B',
        'Gopher1992C',
        'Gopher1992D',
        'GopherExample',
        'GopherProblems',
        'Gophermaps',
        'GopherItemTypes',
        'GophermapExample1',
        'GophermapExample3',
        'GophermapExample4',
        'GophermapExample5',
        'Gemini',
        'GeminiExample',
        'TheCommunities',
        'WordcloudProblems',
        'ThankYou'
      ],
      page: 'Introduction'
    }
  },
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
  },
  mounted () {
    this.focusInput()
  },
  methods: {
    toggle () {
      this.fullscreen = !this.fullscreen
    },
    toggleApi () {
      this.$fullscreen.toggle()
    },
    focusInput () {
      setTimeout(() => {
        this.$refs.slidesWrapper.focus()
      }, 200)
    },
    next () {
      const index = this.slides.indexOf(this.page)
      if (index < this.slides.length - 1) {
        this.page = this.slides[index + 1]
      }
    },
    prev () {
      const index = this.slides.indexOf(this.page)
      if (index > 0) {
        this.page = this.slides[index - 1]
      }
    }
  }
}
</script>

<style lang="scss">
.slides {
  outline: 0px solid transparent;

  &:active,
  &:focus {
    outline: 0px solid transparent;
  }
}
</style>

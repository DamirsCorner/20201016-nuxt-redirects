<template>
  <div>
    <div>URL: {{ path }}</div>
    <nuxt-link to="/valid/not">nuxt link</nuxt-link>
    <a href="/valid/not">HTML link</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Route, NavigationGuardNext } from 'vue-router'
import { getRedirectUrl } from '~/services/redirects'

@Component({
  middleware: 'redirect',
  mounted(this: RedirectPage) {
    this.path = this.$route.path
  },
})
export default class RedirectPage extends Vue {
  path: string = ''
}
</script>

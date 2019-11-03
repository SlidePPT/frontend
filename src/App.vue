<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="install()"
      >
        <span class="mr-2">모바일 버전 다운</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data(){
    return{
      deferredPrompt: null,
    }
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.deferredPrompt = e;
      e.prompt();
    });
  },
  methods:{
    install() {
      this.deferredPrompt.prompt();
    },
  }
};
</script>

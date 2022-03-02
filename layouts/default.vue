<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon>mdi-{{ `chevron-${drawer ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      title: 'Vuetify.js',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-language-javascript',
          title: 'JS Exercices',
          to: '/exercices-part1'
        },
        {
          icon: 'mdi-vote',
          title: 'Voting form',
          to: '/vote-form'
        },
        {
          icon: 'mdi-coffee',
          title: 'Cafe with vue',
          to: '/cafe-with-a-vue'
        }
      ],
    }
  }
}
</script>

<style>
{
  /*primary: #673ab7;*/
  /*secondary: #ffc107;*/
  /*accent: #9c27b0;*/
  /*error: #f44336;*/
  /*warning: #ff5722;*/
  /*info: #cddc39;*/
  /*success: #4caf50;*/
}


</style>

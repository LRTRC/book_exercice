<template>
  <v-container>
    <v-row class="mb-10">
    </v-row>

    <v-row justify="center" class="mb-3">
      <v-col cols="4">
        <v-card height="250" color="blue">
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="red" height="250">
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="purple" height="250" >
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card color="yellow" height="100">
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="yellow" height="100">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'colored-bricks',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>

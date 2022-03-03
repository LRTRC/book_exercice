<template>
  <div>
    <v-row >
      <v-col cols="4" md="12">
        <v-card color="red" height="65" v-show="!hidden" />
      </v-col>
      <v-col cols="4" md="12">
        <v-card color="green" height="65" v-show="!hiddengreen"/>
      </v-col><v-col cols="4" md="12">
      <v-card color="red" height="65" v-show="!hidden"/>
    </v-col>
    </v-row>
    <v-row justify="center" class="mt-12">
      <v-btn color="red" class="white--text" @click="hidden = !hidden"
      >
        {{ hidden ? 'Show RED BRICKS' : 'Hide RED BRICKS' }}

      </v-btn>
    </v-row>
    <v-row justify="center" class="mt-12">
      <v-btn color="green" class="white--text" @click="hiddengreen = !hiddengreen">
        {{ hiddengreen ? 'Show GREEN BRICKS' : 'Hide GREEN BRICKS' }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'hidden-button',

  data: () => ({
    hidden: false,
    hiddengreen: false,
  }),
}
</script>

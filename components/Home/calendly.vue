<template>
  <v-container class="fill-height">
    <v-row  class="justify-center" >
      <v-col cols="4">
        <v-date-picker
          v-model="picker"
          class="justify-center"
          header-color="green"
          color="green"
          locale="pt"

        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'calendly',
  data () {
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
}
</script>

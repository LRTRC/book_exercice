<template>
  <div>
        <v-date-picker
          v-model="picker"
          header-color="green"
          color="green"
          locale="fr"
          class="flex-wrap"
          width="100%"

        />
  </div>
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

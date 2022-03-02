<template>
  <div>
        <v-date-picker
          v-model="picker"
          class="justify-center"
          header-color="green"
          color="green"
          locale="pt"

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

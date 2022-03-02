<template >
  <v-container fluid class="fill-height justify-center" >
    <v-row justify="center" class="text-h3 justify-center my-10">
      Taux de rebuts hebdomadaire semaine 32
    </v-row>
    <v-row justify="center" class="my-10" >
      <v-col cols="3" >
        <v-card>
          <v-card-text class="font-weight-black ">
            <v-row justify="center">
              LA512/R-21/4513 : 2648u
            </v-row>
            <v-row justify="center">
              Nb de rebuts : 873u
            </v-row>
            <v-row justify="center">
              Taux de référence : 37%
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text class="font-weight-black">
            <v-row justify="center">
              LLA512/R-18/3465 : 328u
            </v-row>
            <v-row justify="center">
              Nb de rebuts : 183u
            </v-row>
            <v-row justify="center">
              Taux de référence : 61%
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-10">
      <v-col cols="10">
        <v-slider
          color="blue"
          track-color="grey"
          thumb-label="always"
          max="100"
          min="0"
          value="50"
          @click="launch()"
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "slider-pro",

  data: () => ({
    count: 0,
  }),

  methods:{
    clearCount(){
      if (this.count >= 7) {
        this.count = 0
        this.$emit('changeComponent', 'BarGaming')
      }
    },
    launch: function () {
      if (this.count === 1) {
        setTimeout(this.clearCount, 3000)
      }
      // console.log(this.count)
      this.count++
    },
  },
}

</script>

<style scoped>

</style>

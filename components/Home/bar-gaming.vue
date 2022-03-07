<template>
  <v-container fluid class="fill-height justify-center" >
    <v-row justify="center" class="text-h3 justify-center my-16">
      Let's get ready to rumble
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="3">
        <v-card>
          <v-card-text class="font-weight-black">
            <v-row justify="center">
              Score Joueur 1 : {{ slider.val }}
            </v-row>
            <v-row justify="center">
              Nb de frappes : {{ countkeya }}
            </v-row>
            <v-row justify="center">
              Bonus : {{ bonusa }}%
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text class="font-weight-black">
            <template>
              <v-row justify="center">
                Score Joueur 2 : {{ 100 - slider.val }}
              </v-row>
            </template>
            <v-row justify="center">
              Nb de frappes : {{ countkeyp }}
            </v-row>
            <v-row justify="center">
              Bonus : {{ bonusp }}%
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="10">
        <v-slider
          v-model="slider.val"
          :color="slider.color"
          :track-color="slider.trackcolor"
          :thumb-color="positive"
          thumb-label="always"
          prepend-icon="mdi-robot-angry-outline"
          append-icon="mdi-robot-angry"
          max="100"
          min="0"
          :disabled="slider.disabled"

        ></v-slider>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="3">
        <v-card color="purple darken-2">
          <v-card-text align="center" class=" text-h5 font-weight-bold yellow--text  ">
            Player 1
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6"/>
      <v-col cols="3">
        <v-card color="yellow darken-2">
          <v-card-text align="center" class=" text-h5 font-weight-bold deep-purple--text">
            Player 2
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-10">
      <v-btn v-if="dialog" width="auto" class="justify-center" color="green" dark @click="dialog = false , reboot()">
        RESTART
      </v-btn>
    </v-row>
    <v-row justify="center" class="my-10">
      <v-btn @click="changeComponent() , reboot()" dark color="red">
        QUIT
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'bar-gaming',
  data: () => ({
    slider: {
      val: 50, color: 'purple darken-2', trackcolor: 'yellow darken-2', disabled: false
    },
    countkeya: 0,
    countkeyp: 0,
    bonusa: 0,
    bonusp: 0,
    dialog: false,

  }),

  mounted() {

    window.addEventListener('keyup', (e) => {
      console.log('keyup', e)
      // let key = e.which || e.keyCode;
      if (this.slider.val < 100 && this.slider.val > 0) {
        if (e.key === 'a') {
          console.log('click a')

          this.countkeya++
          this.incrementslider()
          const restart_bool = this.restart(this.slider.val)
          this.dialog = restart_bool
          this.slider.disabled = restart_bool
        }
        if (e.key === 'p') {
          console.log('click p')
          this.countkeyp++
          this.decrementslider()
          const restart_bool = this.restart(this.slider.val)
          this.dialog = restart_bool
          this.slider.disabled = restart_bool
        }
        if (e.key === 'Escape') {
          console.log('PAUSE')
          this.changeComponent()
        }
      }
    });
  },
  methods: {
    changeComponent () {
      this.$emit('changeComponent', 'SliderPro')
    },
    incrementslider () {
      if (this.countkeya >= 100) {
        this.slider.val += 40
        this.bonusa = this.displaybonus(this.countkeya)
      } else if (this.countkeya > 74 && this.countkeya < 100) {
        this.slider.val += 15
        this.bonusa = this.displaybonus(this.countkeya)
      } else if (this.countkeya > 49 && this.countkeya < 75) {
        this.slider.val += 10
        this.bonusa = this.displaybonus(this.countkeya)
      } else {
        this.slider.val += 5
        this.bonusa = this.displaybonus(this.countkeya)
      }
    },
    decrementslider () {
      console.log('errer')
      if (this.countkeyp >= 100) {
        this.slider.val -= 40
        this.bonusp = this.displaybonus(this.countkeyp)
      } else if (this.countkeyp > 74 && this.countkeyp < 100) {
        this.slider.val -= 15
        this.bonusp = this.displaybonus(this.countkeyp)
      } else if (this.countkeyp > 49 && this.countkeyp < 75) {
        this.slider.val -= 10
        this.bonusp = this.displaybonus(this.countkeyp)
      } else
        this.slider.val -= 5
      this.bonusp = this.displaybonus(this.countkeyp)
    },
    displaybonus (countkey) {
      if (countkey >= 100)
        return 35
      if (countkey > 74 && countkey < 100)
        return 10
      if (countkey > 49 && countkey < 75)
        return 5
      return 0;
    },
    restart (val) {

      return (val >= 100) || (val <= 0);
    },

    reboot () {
      this.countkeyp = 0
      this.countkeya = 0
      this.bonusa = 0
      this.bonusp = 0
      this.slider.val = 50
      this.slider.disabled = false
    },
  },
  computed: {
    positive: vm => (vm.slider.val > 50) ? vm.slider.color : (vm.slider.val < 50) ? vm.slider.trackcolor : 'red'
  },
}
</script>

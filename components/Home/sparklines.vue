<template>
  <div>
      <div class="my-2">
        <v-card
        elevation="10"
        >
          <v-sparkline
            :value="value"
            :labels="labels"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </v-card>
        <v-card-text
          class="text-h5 font-italic grey white--text"
          elevation="10"
        >

          Sparkline 1
        </v-card-text>
      </div>
      <div class="my-2">
        <v-card
          elevation="10"
        >
          <v-sparkline
            :value="value2"
            :gradient="gradients2"
            :smooth="radius2 || false"
            :padding="padding2"
            :line-width="width2"
            :stroke-linecap="lineCap2"
            :gradient-direction="gradientDirection2"
            :fill="fill2"
            :type="type2"
            :auto-line-width2="autoLineWidth2"
            auto-draw
          ></v-sparkline>
        </v-card>
        <v-card-text
          elevation="10"
          class="text-h5 font-italic font-weight-medium blue white--text">
          Sparkline 2
        </v-card-text>
      </div>
      <div class="my-2">
        <v-card
          elevation="10"
        >
          <v-sparkline
            :value="value3"
            :gradient="gradient3"
            :smooth="radius3 || false"
            :padding="padding3"
            :line-width="width3"
            :stroke-linecap="lineCap3"
            :gradient-direction="gradientDirection3"
            :fill="fill3"
            :type="type3"
            :auto-line-width="autoLineWidth3"
            auto-draw
          ></v-sparkline>
        </v-card>
        <v-card-text
          elevation="10"
          class="text-h5 font-italic font-weight-bold red white--text">
          Sparkline 3
        </v-card-text>
      </div>
  </div>
</template>

<script>

const gradients = [
  ['#e0e0e0'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#ffff00'],
  ['#f72047', '#ffd200', '#1feaea'],
]
const gradients2 = [
  ['#4b6928'],
  ['#5ffc53'],
  ['#fcbc2e'],
]

const gradients3 = [
  ['#f1ec0a'],
  ['#e74f04'],
  ['#ff0000'],
]
export default {
  name: 'sparklines',

  data: () => ({
    width: 4,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    labels: ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '13pm', '14pm', '15pm'],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,

    width2: 4,
    radius2: 10,
    padding2: 8,
    lineCap2: 'round',
    gradient2: gradients2,
    value2: [4, 7, 6, 3, 5, 1, 3, 8, 4, 6, 7, 9, 5, 4, 1],
    gradientDirection2: 'top',
    gradients2,
    fill2: false,
    type2: 'trend',
    autoLineWidth2: true,

    width3: 4,
    radius3: 10,
    padding3: 8,
    lineCap3: 'round',
    gradient3: gradients3,
    value3: [4, 7, 6, 3, 5, 1, 3, 8, 4, 6, 7, 9, 5, 4, 1],
    gradientDirection3: 'top',
    gradients3,
    fill3: true,
    type3: 'trend',
    autoLineWidth3: true,

  }),
}
</script>

<template>
  <div>
    <v-row class="justify-center my-4 my-sm-4 my-md-4 my-ml-4  " >
      <v-col cols="12" sm="12" md="3" lg="3" >
        <v-card  dark color="light-blue" class="pb-2" >
          <v-row >
            <v-card-title >
              REVENU
            </v-card-title>
          </v-row>
          <v-row>
            <v-card-text align="center" class="text-h4">
              120 000
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3" >
        <v-card  dark color="red" class="pb-2" >
          <v-row >
            <v-card-title >
              REVENU
            </v-card-title>
          </v-row>
          <v-row>
            <v-card-text align="center" class="text-h4">
              120 000
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3" >
        <v-card  dark color="orange" class="pb-2" >
          <v-row >
            <v-card-title >
              REVENU
            </v-card-title>
          </v-row>
          <v-row>
            <v-card-text align="center" class="text-h4">
              120 000
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3" >
        <v-card  dark color="purple" class="pb-2" >
          <v-row >
            <v-card-title >
              REVENU
            </v-card-title>
          </v-row>
          <v-row>
            <v-card-text align="center" class="text-h4">
              120 000
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" md="12" lg="12">
        <v-card>
          <v-sparkline
            :value="gradient.value"
            :gradient="gradient.gradient"
            :smooth="gradient.radius || false"
            :padding="gradient.padding"
            :line-width="gradient.width"
            :stroke-linecap="gradient.lineCap"
            :gradient-direction="gradient.gradientDirection"
            :fill="gradient.fill"
            :type="gradient.type"
            :auto-line-width="gradient.autoLineWidth"
            auto-draw
          ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
let RBgradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: 'responsive-bricks',

  data: () => ({
    gradient: {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: ['#f72047', '#ffd200', '#1feaea'],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      RBgradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    },


  }),
}
</script>

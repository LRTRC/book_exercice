<template>
  <div>
    <keep-alive>
      <component v-bind:is="component" v-on:changeComponent="updateComponent($event)"></component>
    </keep-alive>

    <div
      v-if="component === 'SliderPro'"
    >
      <v-card
        class="pa-5 ma-3"
        color="#2A3942"
        shaped
      >
        <responsive-bricks/>
      </v-card>
      <v-row justify="space-between" align="center">

        <v-col cols="12" md="4">
          <v-card
            class="pa-5 ma-3"
            color="#2A3942"
            shaped
          >
            <hidden-button class="pa-5"/>
            <dial-brick class="pa-5"/>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <v-card
            class="pa-5 ma-3"
            color="#2A3942"
            shaped
          >
            <colored-bricks/>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between" align="center">
        <v-col cols="12" md="8">
          <v-card
            class="pa-5 ma-3"
            color="#2A3942"
            shaped
          >
            <sparklines/>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="fil">
          <v-card
            class="pa-5 ma-3 flex-wrap"
            color="#2A3942"
            shaped
            height="100%"
          >
            <right-list class="ma-5"/>
            <Button class="ma-5 "/>
            <div
              class="text-center"
            >
              <calendly class="my-5 "/>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Sparklines from "../components/Home/sparklines";
import RightList from "../components/Home/right-list";
import ResponsiveBricks from "../components/Home/responsive-bricks";
import Button from "../components/Home/button";
import HiddenButton from "../components/Home/hidden-button";
import DialBrick from "../components/Home/dial-brick";
import ColoredBricks from "../components/Home/colored-bricks";
import Calendly from "../components/Home/calendly";
import BarGaming from "../components/Home/bar-gaming";
import SliderPro from "../components/Home/slider-pro";


export default {
  name: 'IndexPage',
  components: {
    SliderPro,
    Calendly,
    ColoredBricks,
    DialBrick,
    HiddenButton,
    Button,
    ResponsiveBricks,
    RightList,
    Sparklines,
    BarGaming
  },
  data: () => ({
    component: 'SliderPro',
  }),
  methods: {
    updateComponent (updatedComponent) {
      return this.component = updatedComponent
    }
  }
}
</script>
<style>

</style>

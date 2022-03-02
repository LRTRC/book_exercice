<template>
  <div>
    <responsive-bricks/>

    <dial-brick/>

    <v-row>
      <v-col cols="9">
        <colored-bricks/>
      </v-col>
      <v-col cols="3">
        <right-list/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <sparklines/>
      </v-col>
      <v-col cols="6">
        <calendly/>
        <Button/>
      </v-col>
    </v-row>

    <hidden-button/>

    <keep-alive>
      <component v-bind:is="component" v-on:changeComponent="updateComponent($event)"></component>
    </keep-alive>

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
import SliderPro from "../components/Home/slider-pro";
import BarGaming from "../components/Home/bar-gaming";



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
    updateComponent: function (updatedComponent) {
      return this.component = updatedComponent
    }
  }
}
</script>

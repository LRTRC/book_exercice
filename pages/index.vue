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
      <v-col cols="9">
        <sparklines/>
      </v-col>
      <v-col cols="3">
        <calendly/>
      </v-col>
    </v-row>

    <hidden-button/>

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


export default {
  name: 'IndexPage',
  components: {
    Calendly,
    ColoredBricks,
    DialBrick,
    HiddenButton,
    Button,
    ResponsiveBricks,
    RightList,
    Sparklines,
  }
}
</script>

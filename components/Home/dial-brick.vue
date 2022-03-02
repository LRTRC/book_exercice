<template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="800"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Opening colored cards
            </v-card-title>
            <v-row justify="center">
              <v-col  class="mt-3 mb-3" cols="3">
                <v-card height="100" color="green"/>
              </v-col>
              <v-col  class="mt-3 mb-3" cols="3">
                <v-card height="100" color="yellow"/>
              </v-col>
              <v-col  class="mt-3 mb-3" cols="3">
                <v-card height="100" color="blue"/>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col  class="mt-3 mb-3" cols="3">
                <v-card height="100" color="purple">
                </v-card>
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                DONE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
</template>

<script>
export default {
  name: 'dial-brick',

  data () {
    return {
      dialog: false,
    }
  },
}
</script>

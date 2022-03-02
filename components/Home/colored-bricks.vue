<template>
  <div>
    <v-row class="mb-10">
    </v-row>

    <v-row justify="center" class="mb-3">
      <v-col cols="4">
        <v-card height="250" color="blue">
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="red" height="250">
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="purple" height="250" >
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card color="yellow" height="100">
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="yellow" height="100">
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'colored-bricks',

  data: () => ({
  }),
}
</script>

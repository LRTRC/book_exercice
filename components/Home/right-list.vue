<template>
  <div>
        <v-card class="mx-auto" max-width="200">
          <v-subheader class="blue text-h5 white--text">LIST</v-subheader>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Option numéro 1</v-list-item-title>
              <v-list-item-subtitle>Sous-texte 1</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Option numéro 2</v-list-item-title>
              <v-list-item-subtitle>Sous-texte 2</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Option numéro 3</v-list-item-title>
              <v-list-item-subtitle>Sous-texte 3</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
  </div>
</template>

<script>
export default {
  name: 'right-list',

  data: () => ({

  }),
}
</script>

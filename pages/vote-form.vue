<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-text align="center" class=" text-h3">
          Élections municipales 2024
        </v-card-text>
      </v-col>
    </v-row>
    <template>
      <v-row justify="center">
        <v-col cols="12">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-text-field
                  v-model="lastname"
                  :rules="lastnameRules"
                  label="Nom"
                  color="info"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Prénom"
                  color="info"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Vous devez accepter les termes pour continuer!']"
                label="Accepter les termes?"
                required
                color="white"
              ></v-checkbox>
            </v-row>
            <v-row justify="center mb-4">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Valider
              </v-btn>
              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
              >
                Effacer
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </template>

    <v-row justify="center" class="my-4">
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="red darken-2 white--text">Parti Rouge</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="Rouge"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="pink darken-1 white--text">Parti Rose</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="Rose"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="green darken-1 white--text">Parti Vert</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="Vert"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-4">
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="orange darken-2 white--text">Parti Jaune</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="Jaune"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="light-blue white--text">Parti Bleu</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="Bleu"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card>
          <v-card-title class="blue darken-3 white--text">Parti Bleu foncé</v-card-title>
          <v-card-text class="pt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <template>
            <v-radio-group v-model="radios">
              <v-radio color="white" class="mx-2 my-0" label="Sélectionner ce bulletin de vote" value="BF"></v-radio>
            </v-radio-group>
          </template>
        </v-card>
      </v-col>

    </v-row>

    <v-row justify="center">
      <v-col cols="2">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="customButton"
              elevation="6"
              large
              v-bind="attrs"
              v-on="on"
              color="green"
              :disabled="valid === false"


            >
              Valider mon vote
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="accent"
                dark
              >À voté !
              </v-toolbar>
              <v-card-text>
                <div class="text-h5 pa-12 justify-center">Merci {{ lastname }} {{ name }}, votre vote à bien été
                  enregistré.
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'vote-form',

  data() {
    return {
      radios: 'Rouge',
      valid: false,
      lastname: '',
      lastnameRules: [
        v => !!v || 'Nom requis',

      ],
      name: '',
      nameRules: [
        v => !!v || 'Prénom requis',

      ],
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style>

</style>

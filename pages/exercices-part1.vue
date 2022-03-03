<template>
  <div id="top">
    <template>
      <v-expansion-panels>
        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 1
          </v-expansion-panel-header>
          <v-expansion-panel-content>
<pre>
    <template v-if="codes_text != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 2
          </v-expansion-panel-header>
          <v-expansion-panel-content>
 <pre>
    <template v-if="codes_text2 != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text2 }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 3
          </v-expansion-panel-header>
          <v-expansion-panel-content>
 <pre>
    <template v-if="codes_text3 != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text3 }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 4
          </v-expansion-panel-header>
          <v-expansion-panel-content>
    <pre>
    <template v-if="codes_text4 != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text4 }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 5
          </v-expansion-panel-header>
          <v-expansion-panel-content>
   <pre>
    <template v-if="codes_text5 != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text5 }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
        >
          <v-expansion-panel-header>
            Partie 6
          </v-expansion-panel-header>
          <v-expansion-panel-content>
    <pre>
    <template v-if="codes_text6 != ''">
      <code class="javascript"
            v-highlight>
        {{ codes_text6 }}
      </code>
    </template>
  </pre>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>


    <v-btn

      @click="$vuetify.goTo('#top')"
      class="customButton"
    >
      haut
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "exercices-part1",
  data() {
    return {
      codes_text: '',
      codes_text2: '',
      codes_text3: '',
      codes_text4: '',
      codes_text5: '',
      codes_text6: '',
    }
  },
  mounted() {
    this.importExcercice('FibonacciTest.spec.js');
    this.importExcercice2('OrdreAlphabetique.spec.js');
    this.importExcercice3('nombrepremier.spec.js');
    this.importExcercice4('Matchers.spec.js');
    this.importExcercice5('Companies.spec.js');
    this.importExcercice6('Functions.spec.js');
  },

  watch: {

    codes_text: function (newValue, oldValue) {
      return newValue;
    },
    codes_text2: function (newValue, oldValue) {
      return newValue;
    },
    codes_text3: function (newValue, oldValue) {
      return newValue;
    },
    codes_text4: function (newValue, oldValue) {
      return newValue;
    },
    codes_text5: function (newValue, oldValue) {
      return newValue;
    },
    codes_text6: function (newValue, oldValue) {
      return newValue;
    },

  },
  methods: {
    importExcercice(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text = res
      })
    },
    importExcercice2(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text2 = res
      })
    },
    importExcercice3(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text3 = res
      })
    },
    importExcercice4(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text4 = res
      })
    },
    importExcercice5(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text5 = res
      })
    },
    importExcercice6(path) {
      const response = this.testimport(path)
      response.then(res => {
        this.codes_text6 = res
      })
    },

    async testimport(path) {
      const response = await fetch(path)
      if (response.ok) {
        return response.text()
      }
    }
  }
}
</script>

<style scoped>
.customButton {
  position: fixed;
  right: 20px;
  bottom: 80px;
  color: white;
  background-color: #E9CC77;
  padding-inline: 10px;
  display: inline-block;
  padding: .60rem 1.25rem;
  border-radius: 10rem;
  transition: all .3s;
  font-family: 'Space Grotesk';
  font-weight: bold;
  font-size: 1.2em;
  z-index: 1000;

}
</style>

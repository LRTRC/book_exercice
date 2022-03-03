<template>
  <div class="menu-item">
    <v-row>
      <v-col cols="12" md="6">
    <v-img class="menu-item-image" :src="image.source" :alt="image.alt" />
      </v-col>
      <v-col cols="12" md="6">
    <div>
      <div>{{ name }}</div>
      <div>
        Prix : {{ generatedPrice }}
        <span v-if="onSale">(10% de réduction !)</span>
      </div>
      <div v-if="inStock" >En stock</div>
      <div v-else>En rupture de stock</div>
      <div>

        <v-text-field
          v-model.number="quantity"
          id="add-item-quantity"
          type="number"
         :label="`Quantité: ${quantity}`"
          color="info"


        />
        <BaseButton @click="updateShoppingCart(quantity)">
          Ajouter au panier
        </BaseButton>
      </div>
    </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseButton from "./BaseButton";

export default {
  name: "MenuItem",
  components: {
    BaseButton
  },
  props: {
    image: {
      type: Object,
      required: true
    },
    inStock: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      defaut: 1
    }
  },
  emits:['add-items-to-cart'],
  data() {
    return {
      onSale: false
    }
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
  },
  methods: {
    updateShoppingCart(quantity) {
      this.$emit("add-items-to-cart", quantity)
    }
  },
  beforeMount() {
    const today = new Date().getDate()

    if (today % 2 === 0) {
      this.onSale = true
    }
  }
}
</script>

<style>
.menu-item {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;

}
.menu-item-image {
    max-width: 175px;
    margin-inline: 1.5em;
  border-radius: 1.5em;
  }

</style>

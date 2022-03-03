<template>
  <div class="menu-item">
    <v-img class="menu-item-image" :src="image.source" :alt="image.alt" />
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
          color="warning"

        />
        <BaseButton @click="updateShoppingCart(quantity)">
          Ajouter au panier
        </BaseButton>
      </div>
    </div>
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
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-inline: auto;

}
.menu-item-image {
    max-width: 175px;
    margin-inline: auto;
  border-radius: 1.5em;
  }

</style>

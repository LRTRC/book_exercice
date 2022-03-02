<template>
  <div>
    <div>{{ restaurantName }}</div>
    <div class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </div>

    <div class="menu">
      <div>Menu</div>
      <MenuItem
        v-for="item in simpleMenu"
        @add-items-to-cart="addToShoppingCart"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.id"
      />
    </div>

    <div class="shopping-cart">
      <div>Panier : {{ shoppingCart }} articles</div>
    </div>

    <div class="menu">
      <div>Contactez nous</div>
      <div>Adresse : {{ address }}</div>
      <div>Téléphone : {{ phone }}</div>
      <div>Email : {{ email }}</div>
      <div>Horaires :</div>
      <ul>
        <li>L-V: 06:00 à 16:00</li>
        <li>Samedi: 07:00 à 14:00</li>
        <li>Dimanche: 07:00 à 12:00</li>
      </ul>
    </div>

    <footer class="footer">
      <div>{{ copyright }}</div>
    </footer>
  </div>
</template>

<script>
import MenuItem from "../components/cafe-with-a-vue/MenuItem";

export default {
  name: "Home",
  components: {
    MenuItem
  },

  data() {
    return {
      restaurantName: "Restaurant 'La belle vue'",
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
      shoppingCart: 0,
      simpleMenu: [
        {
          id: 1,
          name: "Croissant",
          image: {
            source: "~/assets/images/crossiant.jpg",
            alt: "Un croissant"
          },
          inStock: true,
          quantity: 1,
          price: 2.99
        },
        {
          id: 2,
          name: "Baguette de pain",
          image: {
            source: "~/assets/images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain"
          },
          inStock: true,
          quantity: 1,
          price: 3.99
        },
        {
          id: 3,
          name: "Éclair",
          image: {
            source: "~/assets/images/crossiant.jpg",
            alt: "Éclair au chocolat"
          },
          inStock: false,
          quantity: 1,
          price: 4.99
        }
      ]
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear()

      return `Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount
    }
  }
}
</script>

<style >
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>

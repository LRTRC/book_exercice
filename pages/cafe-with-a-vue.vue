<template>
  <div >
    <div class="d-flex flex-column mt-10">
      <v-card-text
        class="titre d-flex justify-center mb-6"

      >
        {{ restaurantName }}
      </v-card-text>

      <v-card-text
        class="description"

      >
        Bienvenue dans notre café {{ restaurantName }} ! Nous sommes réputés pour
        notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
        matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
        est difficile de s'arrêter.
      </v-card-text>
    </div>
    <v-row justify="center">
      <v-col cols="6">
        <v-card
          class="menu d-flex flex-column ma-10"
          rounded="xl"

        >
          <div class="text-h4 my-6 body">Menu</div>
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
        </v-card>
      </v-col>
    </v-row>
    <div class="shopping-cart">
      <div>Panier : {{ shoppingCart }} articles</div>
    </div>


    <v-row justify="center">
      <div class="listeContact">
        <div class="contact">Contactez nous</div>
        <div>Adresse : {{ address }}</div>
        <div>Téléphone : {{ phone }}</div>
        <div>Email : {{ email }}</div>
      </div>
    </v-row>

    <v-row justify="center">
      <div>
        <div class="contact">Horaires :</div>
        <ul>
          <li>Lundi au Vendredi: 06:00 à 16:00</li>
          <li>Samedi: 07:00 à 14:00</li>
          <li>Dimanche: 07:00 à 12:00</li>
        </ul>
      </div>

    </v-row>
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
      restaurantName: "La Belle vue",
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
      shoppingCart: 0,
      simpleMenu: [
        {
          id: 1,
          name: "Croissant",
          image: {
            source: "crossiant.jpg",
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
            source: "french-baguette.jpeg",
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
            source: "eclair.jpg",
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

      return `© Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount
    }
  }
}
</script>

<style>


.description {
  width: auto;
  max-width: 690px;
  text-align: center;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: left;
  margin-top: 50px;
  font-family: 'Italiana';
  font-size: 1.2em;

}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em;
  font-size: 0.9em;
}
.listeContact {
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: fixed;
  right: 20px;
  top: 80px;
  color: black;
  background-color: #E9CC77;
  padding-inline: 10px;
  display: inline-block;
  padding: .60rem 1.25rem;
  border-radius: 10rem;
  transition: all .3s;
  font-family: 'Italiana';
  font-weight: bold;
  font-size: 1.2em;

}

.shopping-cart:hover {
  color: #fff;
  background-color: #B37E1D;
  cursor: pointer;
  font-family: 'Italiana';
  font-weight: bold;
  font-size: 1.2em;
}
.titre {
  font-size: 5em;
  font-family: 'Italiana';
}
.body {
  font-family: 'Italiana';
  font-size: 1.2em;

}
</style>

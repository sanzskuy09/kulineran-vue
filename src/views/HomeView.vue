<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <!-- Best Food -->
      <div class="row mt-5">
        <div class="col">
          <h3>Best Food</h3>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye /> Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-3"
          v-for="product in products"
          :key="product.id"
        >
          <Food :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Food from "@/components/FoodProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    Food,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/best-products");
      this.setProducts(response.data);
    } catch (error) {
      console.error("gagal : ", error);
    }
  },
};
</script>

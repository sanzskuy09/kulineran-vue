<template>
  <div class="food">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>Daftar Makanan</h1>
        </div>
      </div>

      <!-- Search -->
      <div class="row mt-4">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaanmu"
              aria-label="Cari Makanan Kesukaanmu"
              aria-describedby="basic-addon2"
              @keyup="searchFood"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2"
                ><b-icon-search
              /></span>
            </div>
          </div>
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
import Navbar from "@/components/Navbar.vue";
import Food from "@/components/FoodProduct.vue";
import axios from "axios";

export default {
  name: "FoodView",
  components: {
    Navbar,
    Food,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    async searchFood() {
      try {
        const response = await axios.get(
          "http://localhost:3000/products?q=" + this.search
        );
        this.setProducts(response.data);
      } catch (error) {
        console.error("gagal : ", error);
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/products");
      this.setProducts(response.data);
    } catch (error) {
      console.error("gagal : ", error);
    }
  },
};
</script>

<style scoped></style>

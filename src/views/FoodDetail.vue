<template>
  <div class="food-detail">
    <Navbar />

    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/foods" class="text-dark">Food</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- food detail -->
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            :src="'../Images/' + product.gambar"
            class="img-fluid shadow"
            alt="food-image"
          />
        </div>
        <div class="col-md-6">
          <h1>{{ product.nama }}</h1>
          <hr />
          <h5>
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </h5>

          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah">Jumlah</label>
              <input
                type="number"
                min="1"
                oninput="validity.valid || (value='1')"
                class="form-control"
                v-model="pesanan.jumlah"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesanan.keterangan"
                class="form-control"
                placeholder="Keterangan seperti : Pedes, Manis"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pesanMakanan">
              <b-icon-cart /> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesanan: {},
    };
  },
  methods: {
    setProducts(data) {
      this.product = data;
    },
    async pesanMakanan() {
      try {
        this.pesanan.product = this.product;
        if (this.pesanan.jumlah) {
          await axios.post("http://localhost:3000/keranjangs", this.pesanan);

          this.$router.push({ path: "/keranjang" });

          this.$toast.success("Berhasil Masuk Keranjang", {
            position: "top",
            duration: 2000,
          });
        } else {
          this.$toast.error("Mohon Masukan Jumlah Pesanan", {
            position: "top",
            duration: 2000,
          });
        }
      } catch (error) {
        console.error("gagal : ", error);
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        "http://localhost:3000/products/" + this.$route.params.id
      );
      this.setProducts(response.data);
    } catch (error) {
      console.error("gagal : ", error);
    }
  },
};
</script>
<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <router-link class="navbar-brand" to="/"><b>Kulineran</b></router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang"
                >Keranjang <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">{{
                  jumlahKeranjang
                    ? jumlahKeranjang.length
                    : jumlahPesanan.length
                }}</span>
              </router-link>
            </li>
          </ul>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  props: ["jumlahKeranjang"],
  data() {
    return {
      jumlahPesanan: [],
    };
  },
  methods: {
    setJumlahPesanan(data) {
      this.jumlahPesanan = data;
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/keranjangs");
      this.setJumlahPesanan(response.data);
    } catch (error) {
      console.log("gagal : " + error);
    }
  },
};
</script>

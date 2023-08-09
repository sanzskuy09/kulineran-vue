<template>
  <div class="keranjang">
    <Navbar :jumlahKeranjang="keranjangs" />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4 mb-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/foods" class="text-dark">Food</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- keranjang -->
      <h3>Keranjang <strong>Saya</strong></h3>

      <div class="table-responsive mt-4">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nama</th>
              <th>Keterangan</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
              <th>{{ index + 1 }}</th>
              <td>
                <img
                  :src="'../Images/' + keranjang.product.gambar"
                  class="shadow"
                  width="100"
                  alt="food-image"
                />
              </td>
              <td>{{ keranjang.product.nama }}</td>
              <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
              <td>{{ keranjang.jumlah }}</td>
              <td>Rp. {{ keranjang.product.harga }}</td>
              <td>Rp. {{ keranjang.jumlah * keranjang.product.harga }}</td>
              <td>
                <b-icon-trash
                  class="btn text-danger"
                  @click="deleteKeranjang(keranjang.id)"
                ></b-icon-trash>
              </td>
            </tr>
            <tr>
              <td colspan="6" align="right" class="text-bold">
                <strong>Jumlah Harga :</strong>
              </td>
              <td>
                <strong>Rp. {{ totalHarga }}</strong>
              </td>
            </tr>
            <td></td>
          </tbody>
        </table>
      </div>

      <!-- Form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama</label>
              <input type="text" v-model="pesanan.nama" class="form-control" />
            </div>
            <div class="form-group">
              <label for="noMeja">No Meja</label>
              <input
                type="text"
                v-model="pesanan.noMeja"
                class="form-control"
              />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
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
  name: "KeranjangView",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesanan: {},
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("http://localhost:3000/keranjangs");
        this.setKeranjangs(response.data);
      } catch (error) {
        console.log("gagal : " + error);
      }
    },
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    async deleteKeranjang(id) {
      try {
        await axios.delete("http://localhost:3000/keranjangs/" + id);

        this.$toast.success("Berhasil Hapus Keranjang", {
          position: "top",
          duration: 2000,
        });

        this.getData();
      } catch (error) {
        console.log("gagal : " + error);
      }
    },
    async checkout() {
      try {
        if (this.pesanan.nama && this.pesanan.noMeja) {
          if (this.keranjangs != "") {
            this.pesanan.keranjang = this.keranjangs;
            await axios.post("http://localhost:3000/pesanans", this.pesanan);

            this.$router.push({ path: "/checkout" });

            this.$toast.success("Checkout Pesanan Berhasil", {
              position: "top",
              duration: 2000,
            });

            this.keranjangs.map(function (item) {
              axios.delete("http://localhost:3000/keranjangs/" + item.id);
              console.log("deteled");
            });

            this.getData();
          } else {
            this.$toast.error("Mohon Pesan Makanan Dahulu", {
              position: "top",
              duration: 2000,
            });
          }
        } else {
          this.$toast.error("Nama dan No Meja Harus Diisi", {
            position: "top",
            duration: 2000,
          });
        }
      } catch (error) {
        console.log("gagal : ", error);
      }
    },
  },
  async mounted() {
    this.getData();
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (item, data) {
        return item + data.jumlah * data.product.harga;
      }, 0);
    },
  },
};
</script>

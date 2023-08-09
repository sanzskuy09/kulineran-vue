<template>
  <div class="checkout">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col text-center">
          <img
            src="../assets/Images/checkout.png"
            alt="checkout-success"
            width="600"
          />
          <h3><strong>Berhasil Checkout Pesanan</strong></h3>
          <p>Pesanan Anda Segera Di Proses <br />Silahkan Menunggu</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "CheckoutSuccess",
  components: {
    Navbar,
  },
};
</script>

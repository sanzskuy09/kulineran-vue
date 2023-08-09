<template>
  <div class="card shadow" style="width: 18rem">
    <img
      :src="'Images/' + product.gambar"
      class="card-img-top"
      alt="food-image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Rp.{{ product.harga }}</p>
      <router-link :to="'/food/' + product.id" class="btn btn-success"
        ><b-icon-cart /> Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodProduct",
  props: ["product"],
};
</script>
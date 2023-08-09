<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="align-self-center justify-content-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Home
              </h2>
              <p>Ayo segera pesan dan nikmati makanan favoritmu</p>
              <router-link to="/foods" class="btn btn-md btn-success"
                >Pesan</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/Images/Hero.svg" alt="Hero" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-md-6 mb-3">
          <img src="../assets/Images/Hero.svg" alt="Hero" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="align-self-center justify-content-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Home
              </h2>
              <p>Ayo segera pesan dan nikmati makanan favoritmu</p>
              <button class="btn btn-md btn-success">Pesan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

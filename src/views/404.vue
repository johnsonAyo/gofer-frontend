<template>
  <main id="error-page">
    <div class="error-page__container">
      <h1>Page Not Found</h1>
      <p>Sorry, We couldn't find the page you are looking for. but guess what, we want you back, there's no place like <span> home</span></p>
      <button class="btn btn-sm" @click.prevent="goToHome">Go Home</button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    goToHome() {
      return this.$router.push('/')
    }
  }
  
}
</script>

<style scoped>

#error-page {
  background-image: url('../assets/img/404.png');
  width: 100%;
  height: 100vh;
  object-fit: contain;
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

#error-page .error-page__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 150px;
}

#error-page .error-page__container h1 {
  letter-spacing: 0.9px;
  color: #FFFFFFD8;
}

#error-page .error-page__container h1 {
  letter-spacing: 0.9px;
  color: #FFFFFFD8;
}

#error-page .error-page__container p {
  letter-spacing: 0.9px;
  width: 45%;
  text-align: center;
  line-height: 32px;

}

#error-page .error-page__container span{
  color: #0086B9;
  font-weight: 700;
}

#error-page .error-page__container button{
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  background: #0086B9;
  letter-spacing: 0.36px;
  color: #FFFFFFD8;
  margin-top: 30px;
  padding: 13px 31px;
  font-weight: 700;
}

</style>
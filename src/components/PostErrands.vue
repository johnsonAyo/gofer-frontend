<template>
  <main id="post-errands">
    <section class="post-container">
      <div
        v-for="x in data"
        :key="x.id"
        class="post-card"
        >
        <img :src="x.imgURL" alt="">
        <p>{{x.text}}</p>
      </div>
    </section>
    <div class="d-flex justify-content-center align-content-center py-4">
      <button class="btn btn-sm continue">Continue</button>
    </div>
  </main>
</template>

<script>
const data = require('../../data')

export default {
  data(){
    return {
      data: data.default
    }
  }
}
</script>

<style scoped>

#post-errands .post-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

#post-errands .post-card {
  height: 42px;
  box-shadow: 3px 0px 10px #0000004A;
  border-radius: 15px;
  background: #EEF6F9;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  width: auto !important;
}

#post-errands .post-card:hover {
  background: #0087BB;
  cursor: pointer;
  color: #ffffff !important;
}

#post-errands .continue {
  width: 127px;
  height: 44px;
  background: #0087BB;
  letter-spacing: 0.36px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 500;
  margin-top: 10px;
}

#post-errands .post-card img {
  width: 20px;
  height: 20px;
  margin-right: 16px;
  object-fit: contain;
}

#post-errands .post-card p{
  color: #292929;
  font-size: 12px;
  padding-top: 15px;
}
</style>
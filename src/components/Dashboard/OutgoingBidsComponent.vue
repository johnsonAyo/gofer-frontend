<template>
  <main id="outgoing-bids">
    <aside class="outgoing-card__container">
      <div class="outgoing">
        <h3>Ongoing Bids</h3>
        <div class="card-deets__container">
          <div class="card-deets">
          <div class="d-flex">
            <img src="@/assets/img/outgoing.png" alt="outgoing-card">
            <h6>David O</h6>
          </div>
          <p class="time">2 hrs ago</p>
          </div>
          <p class="errand-deets">My dog needs a bath, I haven't washed it in months, my dog is super friendly and doesn't bite.</p>
          </div>

          <div class="card-deets__container">
          <div class="card-deets">
          <div class="d-flex">
            <img src="@/assets/img/outgoing.png" alt="outgoing-card">
            <h6>David O</h6>
          </div>
          <p class="time">2 hrs ago</p>
          </div>
          <p class="errand-deets">My dog needs a bath, I haven't washed it in months, my dog is super friendly and doesn't bite.</p>
          </div>

          <div class="card-deets__container">
          <div class="card-deets">
          <div class="d-flex">
            <img src="@/assets/img/outgoing.png" alt="outgoing-card">
            <h6>David O</h6>
          </div>
          <p class="time">2 hrs ago</p>
          </div>
          <p class="errand-deets">My dog needs a bath, I haven't washed it in months, my dog is super friendly and doesn't bite.</p>
          </div>
        </div>
    </aside>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#outgoing-bids .outgoing-card__container .outgoing {
  background: #FFFFFF;
  box-shadow: 4px 4px 20px #0000000F;
  width: 17rem;
  height: 18.5rem;
  overflow-y: scroll;
}

#outgoing-bids .outgoing-card__container .outgoing h3 {
  color: #7A9BA8D9;
  font-weight: 700;
  font-size: 14px;
  padding-top: 14px;
  padding-left: 10px;
}

#outgoing-bids .outgoing-card__container .outgoing .card-deets {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px;
}

#outgoing-bids .outgoing-card__container .outgoing .card-deets img {
  width: 30px;
  height: 30px;
  margin-top: -7px;
  object-fit: contain;
}

#outgoing-bids .outgoing-card__container .outgoing .card-deets h6 {
  color: #292929;
  font-weight: 700;
  font-size: 12px;
  margin-left: 4px;
}

#outgoing-bids .outgoing-card__container .outgoing .card-deets .posted {
  height: 16px;
  font-size: 10px;
  background: #F8E1E1;
  border: 1px solid #B9000038;
  border-radius: 5px;
  color: #B90000;
  font-weight: 400;
  padding: 2px 10px;
}

#outgoing-bids .outgoing-card__container .outgoing .card-deets .time {
  color: #7A9BA8D9;
  font-size: 10px;
}

#outgoing-bids .outgoing-card__container .outgoing .errand-deets {
  letter-spacing: 0.24px;
  color: #292929;
  font-size: 12px;
  padding-left: 42px;
  padding-right: 10px;
  margin-top: -19px;
}

#outgoing-bids .outgoing-card__container .card-deets__container {
  border-bottom: 1px solid rgba(221, 236, 241, 0.851);
}

</style>
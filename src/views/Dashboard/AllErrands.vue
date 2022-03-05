<template>
  <main id="all-errands">
    <div class="search-container">
       <div class="form-group">
        <input type="text" class="form-control" placeholder="Search errands">
      </div>
      <div class="filter-container">
        <i class="fas fa-filter icon"></i>
        <span>Filter</span>
      </div>
    </div>
    <section class="main-container">
      <div class="errand-card" v-for="i in 20" :key="i">
        <div class="errand-card__header">
          <div class="d-flex">
            <i class="far fa-clock time-icon"></i>
            <span>2 hrs to go</span>
          </div>
        </div>
        <div class="profile-section">
          <img src="@/assets/img/card-img.png" alt="">
          <div class="profile-name">
            <h4>Mary Stark</h4>
            <p>Ajah, Lagos</p>
          </div>
        </div>
        <p class="main-deets">I am in Ajah, I need someone to help me pick up my clothes from my friend in Ikeja Along before 6:00pm today.</p>
        <div class="errand-card__footer">
          <div class="amount">
            &#8358; 2000
          </div>
          <div class="category">
            <img src="@/assets/img/shopping.png" alt="">
            <p>Shopping</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

/* #all-errands {
  overflow-y: scroll;
} */

#all-errands .search-container {
  display: flex;
}

#all-errands .search-container input {
  width: 19rem;
  border: 1px solid #0086B954;
  border-radius: 15px;
  box-shadow: none !important;
  outline: none !important;
}

#all-errands .search-container input::placeholder {
  padding-left: 10px;
  font-size: 14px;
}

#all-errands .search-container .icon {
  padding-left: 10px;
  font-size: 24px;
  padding-top: 7px;
  color: #292929;
}

#all-errands .search-container span {
  color: #292929;
  padding-left: 2px;
  font-size: 14px;
}

#all-errands .search-container .filter-container {
  cursor: pointer;
}

#all-errands .main-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
}

#all-errands .main-container .errand-card {
  width: 18rem;
  height: 12rem;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  padding: 10px;
}

#all-errands .main-container .errand-card .errand-card__header {
  display: flex;
  justify-content: flex-end;
}

#all-errands .main-container .errand-card .errand-card__header .time-icon {
  color: #EF4747;
  font-size: 12px;
  margin-top: 2px;
}

#all-errands .main-container .errand-card .errand-card__header span {
  color: #7A9BA8D8;
  font-size: 10px;
  padding-left: 4px;
}

#all-errands .main-container .profile-section {
  display: flex;
  margin-top: 7px;
}

#all-errands .main-container .profile-section img{
  width: 30px;
  height: 30px;
  object-fit: contain;
}

#all-errands .main-container .profile-section .profile-name {
  display: flex;
  flex-direction: column;
}

#all-errands .main-container .profile-section .profile-name h4 {
  color: #292929;
  font-size: 13px;
  padding: 2px 6px 0px 6px;
  margin: 0;
}

#all-errands .main-container .profile-section .profile-name p {
  color: #7A9BA8D8;
  font-size: 10px;
  padding-left: 7px;
}

#all-errands .main-container .main-deets {
  color: #292929;
  font-size: 13.5px;
}

#all-errands .main-container .errand-card__footer {
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
}

#all-errands .main-container .errand-card__footer .amount {
  color: #0086B9;
  font-size: 14px;
  font-weight: 700;
}

#all-errands .main-container .errand-card__footer .category {
  display: flex;
  margin-top: 2px;
}

#all-errands .main-container .errand-card__footer .category img{
  width: 12px;
  height: 12px;
}

#all-errands .main-container .errand-card__footer .category p {
  color: #7A9BA8D8;
  font-size: 11px;
  padding-left: 5px;
}

</style>
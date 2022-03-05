<template>
  <main id="run-errands">
    <section class="form-container">
      <form>
        <div class="form-group">
          <label>Pick a Location where you would like to run errand</label>
          <input type="text" class="form-control input-field">
          <i class="fas fa-location-arrow location"></i>
        </div>
      </form>
      <div class="d-flex location-deets">
        <img src="@/assets/img/location-red.png" alt="location-details">
        <p>Choose a location on the map</p>
      </div>
      <div class="d-flex justify-content-center align-content-center py-4">
        <button class="btn btn-sm search">Search</button>
    </div>
    </section>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#run-errands {
  text-align: start;
  width: 78%;
  margin: 0 auto;
  margin-top: 85px;
}

#run-errands .form-group {
  position: relative;
}

#run-errands .form-group label {
  color: #292929;
  font-size: 14px;
  font-weight: 700
}

#run-errands .form-group .input-field {
  border: 1px solid #707070;
  height: 45px;
  background: transparent;
  margin-top: 10px;
}

#run-errands .form-group .location {
  position: absolute;
  color: #C61818;
  top: 55px;
  right: 44px;
}

#run-errands .location-deets{
  flex-direction: row;
}

#run-errands .location-deets img{
  width: 14px;
  height: 14px;
  margin-top: 4px;
  margin-right: 10px;
  object-fit: contain;
}

#run-errands .location-deets p{
  font-size: 14px;
  color: #484747;
  font-weight: 700;
}

#run-errands .search {
  width: 127px;
  height: 44px;
  background: #0087BB;
  letter-spacing: 0.36px;
  color: #FFFFFF;
  border-radius: 10px;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 500;
  margin-top: 85px;
}

</style>
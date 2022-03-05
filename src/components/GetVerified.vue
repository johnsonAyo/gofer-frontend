<template>
  <main id="get-verified">
    <section class="verify-container">
      <form>
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" class="form-control input-field">
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="text" class="form-control input-field">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="text" class="form-control input-field">
        </div>
      </form>
      <div class="d-flex justify-content-center align-content-center py-4">
        <button class="btn btn-sm search">Continue</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#get-verified {
  text-align: start;
  width: 78%;
  margin: 0 auto;
  margin-top: 55px;
}

#get-verified .form-group label {
  color: #292929;
  font-size: 14px;
  font-weight: 700
}

#get-verified .form-group .input-field {
  border: 1px solid #707070;
  height: 45px;
  background: transparent;
  margin-top: 10px;
  border-radius: 10px;
}

#get-verified .form-group .input-field:focus {
  box-shadow: none !important;
  outline: none !important;
}

#get-verified .search {
  width: 127px;
  height: 44px;
  background: #0087BB;
  letter-spacing: 0.36px;
  color: #FFFFFF;
  border-radius: 10px;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 500;
  margin-top: 55px;
  box-shadow: 6px -6px 20px #FFFFFF8F;
}


</style>
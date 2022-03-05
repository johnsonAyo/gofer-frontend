<template>
  <main id="verify">
    <section class="verify__container">
      <div class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12 auth-image">
        <img src="@/assets/img/auth-img.png" alt="auth-img">
        <h3>Get Stuffs Done for you.</h3>
        <p>A large network of people are available to run errands and execute tasks for you</p>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12 auth-container">
        <h2>Verify your Phone Number</h2>
        <p class="sub">We sent a 4-digit code sent to your phone number: <span class="blue">0810 100 1000</span> To complete your registration,</p>
        <form class="form-container">
          <div class="form-group">
            <label>Enter the 4-digit code</label>
              <input type="text" class="form-control">
          </div>
           <button class="btn btn-sm register-btn">Verify Phone Number</button>
        </form>
        <router-link to="#" class="resend">Resend code?</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>


#verify .verify__container {
  display: flex;
  justify-content: space-between;
}

#verify .verify__container .auth-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/img/login-img.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#verify .verify__container .auth-image img {
  width: 20%;
}

#verify .verify__container .auth-image h3 {
  letter-spacing: 0.72px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}

#verify .verify__container .auth-image p {
  width: 85%;
  text-align: center;
}

#verify .verify__container .auth-container {
  padding: 100px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

#verify .verify__container .auth-container h2 {
  color: #0086B9;
  margin: 30px 0px 20px 0px;
  font-weight: 700;
}

#verify .verify__container .auth-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 85%;
}

#verify .verify__container .auth-container .form-container {
  margin-top: 40px;
}

#verify .verify__container .blue {
  color: #0086B9;
}

#verify .verify__container .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#verify .verify__container .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
  width: 76%;
}

#verify .verify__container .register-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 65%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 30px;
  font-weight: 700;
  box-shadow: none !important;
  outline: none !important;
}

#verify .verify__container .resend {
  color: #0086B9;
  margin-top: 16px;
  text-align: center;
  width: 76%;
}
</style>
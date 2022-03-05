<template>
  <main id="forgot-password">
    <section class="forgot-password__container">
      <div class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12 auth-image">
        <img src="@/assets/img/auth-img.png" alt="auth-img">
        <h3>Get Stuffs Done for you.</h3>
        <p>A large network of people are available to run errands and execute tasks for you</p>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12 auth-container">
        <h2>Forgot Password?</h2>
        <p class="sub">A code will be sent to your phone number, input the code to reset your password.</p>
        <form class="form-container">
          <div class="form-group">
            <label>Enter your Phone Number</label>
              <input type="text" class="form-control">
          </div>
           <button class="btn btn-sm register-btn">Submit</button>
        </form>
         <p class="text-center register-text">You don't have an account?<a href="/register" class="register-link"> Register</a></p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#forgot-password .forgot-password__container {
  display: flex;
  justify-content: space-between;
}

#forgot-password .forgot-password__container .auth-image {
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

#forgot-password .forgot-password__container .auth-image img {
  width: 20%;
}

#forgot-password .forgot-password__container .auth-image h3 {
  letter-spacing: 0.72px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}

#forgot-password .forgot-password__container .auth-image p {
  width: 87%;
  text-align: center;
}

#forgot-password .forgot-password__container .auth-container {
  padding: 40px 100px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

#forgot-password .forgot-password__container .auth-container h2 {
  color: #0086B9;
  margin: 30px 0px 20px 0px;
  font-weight: 700;
}

#forgot-password .forgot-password__container .auth-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 81%;
}

#forgot-password .forgot-password__container .auth-container .form-container {
  margin-top: 40px;
}

#forgot-password .forgot-password__container .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#forgot-password .forgot-password__container .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
  width: 76%;
}

#forgot-password .forgot-password__container .register-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 65%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 50px;
  font-weight: 700;
  box-shadow: none !important;
  outline: none !important;
}

#forgot-password .forgot-password__container .register-link {
  color: #0086B9;
  text-decoration: none;
}

#forgot-password .forgot-password__container .register-text {
  color: #292929;
  text-align: center;
  width: 74%;
  position: absolute;
  bottom: 10px;
  left: 4%;
  margin: auto;
}

</style>
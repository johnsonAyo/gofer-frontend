<template>
  <main id="login">
    <section class="auth-container">
      <div class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12 auth-image">
        <img src="@/assets/img/auth-img.png" alt="auth-img">
        <h3>Get Stuffs Done for you.</h3>
        <p>A large network of people are available to run errands and execute tasks for you</p>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12 auth-main">
        <div class="tab-section">
          <div class="tab-header">
            <ul class="nav nav-tabs nav-justified auth-nav">
              <li class="nav-item">
                <a class="nav-link" @click.prevent="setActive('register')" :class="{ active: isActive('register') }" href="#register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click.prevent="setActive('login')" :class="{ active: isActive('login') }" href="#login">Login</a>
              </li>
            </ul>
          </div>
        </div>
         <div class="tab-content py-3" id="myTabContent">
           <div class="tab-pane fade" :class="{'active show': isActive('login')}" id="login">
            <div class="login-container">
              <h2>Login</h2>
              <p class="sub">Enter your details and make sure you protect your details from hackers</p>
              <form class="form-container">
                <div class="form-group">
                  <label>Phone Number</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>Password</label>
                    <input type="password" class="form-control">
                </div>
                <router-link to="/forgot-password" class="forgot-password">forgot password?</router-link>
                <div class="form-group form-check mt-4">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
              </form>
              <button class="btn btn-sm login-btn" @click.prevent="moveToDashboard">Login</button>
              <p class="text-center register-text">You don't have an account?<router-link to="/register" class="register-link"> Register</router-link></p>
            </div>
           </div>
            <div class="tab-pane fade" :class="{'active show': isActive('register')}" id="register">
            <div class="register-container">
              <h2>Create an account</h2>
              <p class="sub">Fill in your details to register and start gofering</p>
              <form class="form-container">
                 <div class="row mb-3 row__container">
                    <div class="col">
                      <label for="">First Name</label>
                      <input type="text" class="form-control">
                    </div>
                    <div class="col">
                      <label for="">Last Name</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                <div class="form-group">
                  <label>Phone Number</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>Password</label>
                    <input type="password" class="form-control">
                    <div class="password-strength">
                      <div class="step1"></div>
                      <div class="step2"></div>
                      <div class="step3"></div>
                      <div class="step4"></div>
                      <div class="step5"></div>
                    </div>
                    <p class="password-text">Very Weak</p>
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                    <input type="password" class="form-control">
                </div>
                <button class="btn btn-sm register-btn">Register</button>
              </form>
              <p class="text-center register-text">Already registered?<a href="/login" class="register-link"> Login</a></p>
            </div>
           </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      activeItem: 'login'
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    moveToDashboard(){
      return this.$router.push('/all-errands')
    }
  }
}
</script>

<style scoped>

#login .auth-container {
  display: flex;
  justify-content: space-between;
}

#login .auth-container .auth-image {
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

#login .auth-container .auth-image img {
  width: 20%;
}

#login .auth-container .auth-image h3 {
  letter-spacing: 0.72px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}

#login .auth-container .auth-image p {
  width: 87%;
  text-align: center;
}

#login .auth-container .auth-main {
  padding: 40px 100px;
}

#login .auth-container .login-container {
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  padding-left: 16px;
  flex-direction: column;
}

#login .auth-container .login-container h2 {
  color: #0086B9;
  margin: 30px 0px 20px 0px;
}

#login .auth-container .login-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 81%;
}

#login .auth-container .form-container {
  margin-top: 30px;
}

#login .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#login .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
}

#login .forgot-password {
  display: flex;
  justify-content: flex-end;
  text-transform: capitalize;
  letter-spacing: 0.36px;
  color: #0086B9;
  margin-top: -12px;
  text-decoration: none;
  font-size: 13px;
}

#login .login-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 70%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 50px;
  font-weight: 700;
  box-shadow: none;
  outline: none;
}

#login .register-link {
  color: #0086B9;
  text-decoration: none;
}

#login .register-text {
  color: #292929;
  text-align: center;
  width: 81%;
  position: absolute;
  bottom: 29px;
  left: 4%;
  margin: auto;
}

#login .auth-container .register-container {
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  padding-left: 16px;
  flex-direction: column;
}

#login .auth-container .register-container h2 {
  color: #0086B9;
  margin: 10px 0px 10px 0px;
}

#login .auth-container .register-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 81%;
}

#login .auth-container .form-container {
  margin-top: 10px;
  padding: 0px 100px 0px 0px;
}

#login .auth-container .form-container .row__container {
  width: 94%;
}

#login .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#login .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
}

#login .forgot-password {
  display: flex;
  justify-content: flex-end;
  text-transform: capitalize;
  letter-spacing: 0.36px;
  color: #0086B9;
  margin-top: -12px;
  text-decoration: none;
  font-size: 13px;
}

#login .register-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 82%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 30px;
  font-weight: 700;
}

#login .register-link {
  color: #0086B9;
  text-decoration: none;
}

#login .register-text {
  color: #292929;
  text-align: center;
  width: 81%;
  position: absolute;
  bottom: 10px;
  left: 4%;
  margin: auto;
}

#login .password-strength {
  padding: 10px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#login .password-strength .step1 {
  width: 65px;
  height: 2px;
  border-radius: 10px;
  background: #B90000;
}

#login .password-strength .step2,
#login .password-strength .step3,
#login .password-strength .step4,
#login .password-strength .step5
{
  width: 65px;
  height: 2px;
  background: #7A9BA8D8;
  border-radius: 10px;
}

#login .password-text {
  color: #B90000;
  text-align: end;
  font-size: 12px;
  margin-right: 5px;
}
</style>

<style>

.auth-nav {
  width: 34%;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  color: #0086B9;
  font-weight: bold;
  background-color: transparent;
  border: none;
}

.nav-tabs .nav-link {
  border: none;
  color: #7A9BA8D9;
}

.nav-tabs {
  border-bottom: none;
}
</style>
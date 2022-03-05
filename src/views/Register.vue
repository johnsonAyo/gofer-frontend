<template>
  <main id="register">
    <section class="auth-container">
      <div class="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12 auth-image">
        <img src="@/assets/img/auth-img.png" alt="auth-img">
        <h3>Get Stuffs Done for you.</h3>
        <p>A large network of people are available to run errands and execute tasks for you</p>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12 auth-main">
        <div class="tab-section">
          <div class="tab-header">
            <ul class="nav nav-tabs nav-justified">
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
                <button class="btn btn-sm login-btn">Login</button>
              </form>
              <p class="text-center register-text">You don't have an account?<a href="/register" class="register-link"> Register</a></p>
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
      activeItem: 'register'
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
}
</script>

<style scoped>

#register .auth-container {
  display: flex;
  justify-content: space-between;
}

#register .auth-container .auth-image {
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

#register .auth-container .auth-image img {
  width: 20%;
}

#register .auth-container .auth-image h3 {
  letter-spacing: 0.72px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}

#register .auth-container .auth-image p {
  width: 87%;
  text-align: center;
}

#register .auth-container .auth-main {
  padding: 40px 100px;
}

#register .auth-container .register-container {
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  padding-left: 16px;
  flex-direction: column;
}

#register .auth-container .register-container h2 {
  color: #0086B9;
  margin: 4px 0px 10px 0px;
}

#register .auth-container .register-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 81%;
  padding: 0;
  margin: 0;
}

#register .auth-container .form-container {
  margin-top: 10px;
}

#register .auth-container .form-container .row__container {
  width: 94%;
}

#register .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#register .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
  width: 81%;
}

#register .forgot-password {
  display: flex;
  justify-content: flex-end;
  text-transform: capitalize;
  width: 81%;
  letter-spacing: 0.36px;
  color: #0086B9;
  margin-top: -12px;
  text-decoration: none;
  font-size: 13px;
}

#register .register-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 70%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 30px;
  font-weight: 700;
}

#register .register-link {
  color: #0086B9;
  text-decoration: none;
}

#register .register-text {
  color: #292929;
  text-align: center;
  width: 81%;
  position: absolute;
  bottom: 10px;
  left: 4%;
  margin: auto;
}

#register .password-strength {
  padding: 10px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
}

#register .password-strength .step1 {
  width: 65px;
  height: 2px;
  border-radius: 10px;
  background: #B90000;
}

#register .password-strength .step2,
#register .password-strength .step3,
#register .password-strength .step4,
#register .password-strength .step5
{
  width: 65px;
  height: 2px;
  background: #7A9BA8D8;
  border-radius: 10px;
}

#register .password-text {
  color: #B90000;
  text-align: end;
  font-size: 12px;
  width: 80%;
}

#register .auth-container .login-container {
  padding-left: 16px;
}

#register .auth-container .login-container h2 {
  color: #0086B9;
  margin: 30px 0px 20px 0px;
}

#register .auth-container .login-container .sub {
  color: #7A9BA8D8;
  font-size: 15px;
  width: 81%;
}

#register .auth-container .form-container {
  margin-top: 30px;
}

#register .auth-container .form-container label {
  color: #7A9BA8D8;
  font-weight: 600;
}

#register .auth-container .form-container input {
  border: 1px solid #7A9BA8D8;
  border-radius: 10px;
  box-shadow: none !important;
  outline: none !important;
}

#register .forgot-password {
  display: flex;
  justify-content: flex-end;
  text-transform: capitalize;
  width: 81%;
  letter-spacing: 0.36px;
  color: #0086B9;
  margin-top: -12px;
  text-decoration: none;
  font-size: 13px;
}

#register .login-btn {
  background: #0086B9;
  border-radius: 10px;
  width: 70%;
  padding: 12px 0px;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 50px;
  font-weight: 700;
}

#register .register-link {
  color: #0086B9;
  text-decoration: none;
}

#register .register-text {
  color: #292929;
  text-align: center;
  width: 81%;
  position: absolute;
  bottom: 10px;
  left: 4%;
  margin: auto;
}
</style>

<style>

.nav {
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
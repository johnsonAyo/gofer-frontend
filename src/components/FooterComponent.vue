<template>
  <main id="footer">
    <div class="footer-container">
      <div class="col-lg-5 col-md-8 col-sm-12">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="logo" class="logo-img">
        </router-link>
        <p class="ml-2 sub-header">Stay Connected</p>
        <div class="d-flex justify-content-between align-items-center social-icon__container">
          <i class="fab fa-facebook-square social"></i>
          <i class="fab fa-linkedin social"></i>
          <i class="fab fa-instagram social"></i>
          <i class="fab fa-twitter social"></i>
        </div>
        <p class="small-text">@gofercompany</p>
        <p class="small-text2">For More Enquires or information contact</p>
        <p class="blue-text">info@gofercompany.com</p>
      </div>
    <div class="col-lg-4 col-md-8 col-sm-12 pt-4">
      <h5 class="link-header">Useful Links</h5>
      <ul class="list-unstyled">
        <li class="py-1">
          <router-link to="#">Become verified</router-link>
        </li>
        <li class="py-1">
          <router-link to="#">What is Gofer?</router-link>
        </li>
         <li class="py-1">
          <router-link to="#">Send Errands</router-link>
        </li>
         <li class="py-1">
          <router-link to="#">Post Errands</router-link>
        </li>
        <li class="py-1">
          <router-link to="#">How to use</router-link>
        </li>
      </ul>
    </div>
    <div class="col-lg-3 col-md-8 col-sm-12 pt-4">
      <h5 class="link-header">Resources</h5>
      <ul class="list-unstyled">
        <li class="py-1">
          <router-link to="#">Terms &amp; Conditions</router-link>
        </li>
        <li class="py-1">
          <router-link to="#">Help</router-link>
        </li>
         <li class="py-1">
          <router-link to="#">FAQ's</router-link>
        </li>
         <li class="py-1">
          <router-link to="#">Wallet Pin</router-link>
        </li>
        <li class="py-1">
          <router-link to="#">Escrow Account</router-link>
        </li>
      </ul>
    </div>
    </div>
    <div class="year">
      <p>@ copyright gofer app {{ date }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      date: new Date().getFullYear()
    }
  }
  
}
</script>

<style scoped>

#footer .footer-container {
  background: #292929;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer .logo-img {
  width: 45%;
  height: 45%;
  object-fit: contain;
}

#footer .sub-header {
  color: #13F7FF;
  letter-spacing: 0.12px;
  font-size: 14px;
}

#footer .social-icon__container {
  width: 40%;
  margin-left: 10px;
  margin-bottom: 15px;
}

#footer .social-icon__container .social {
  color: #ffffff;
  font-size: 13px;
}

#footer .small-text {
  color: #FFFFFF;
  font-size: 13px;
  padding-left: 8px;
}
#footer .small-text2 {
  color: #FFFFFF;
  font-size: 13px;
  padding-left: 8px;
  margin-top: -10px;
}

#footer .blue-text {
  letter-spacing: 0.09px;
  color: #13F7FF;
  font-size: 13px;
  padding-left: 8px;
  margin-top: -10px;
}

#footer .link-header {
  letter-spacing: 0.36px;
  color: #13F7FF;
  font-weight: 600;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 4px;
  width: 40%;
}

#footer a {
  letter-spacing: 0.36px;
  color: #FFFFFF;
  font-size: 14px;
  text-decoration: none;
}

#footer .year {
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #363636;
}

#footer .year p {
  color: #FFFFFF;
  font-size: 13px;
  margin: 6px 0px;
}

</style>
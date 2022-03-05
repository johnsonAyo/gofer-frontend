<template>
  <main id="nav-bar">
    <nav class="navbar shadow-none navbar-expand-sm bg-transparent navbar-dark">
      <!-- Logo -->
      <router-link class="navbar-brand float-left ml-5" to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="logo-img">
      </router-link>
      <!-- Links -->
      <ul class="navbar-nav ml-auto nav-links">
          <li class="nav-item">
            <router-link class="nav-link" to="#">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">FAQ's</router-link>
          </li>
          <li class="nav-item text-white">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link register" to="/register">Register</router-link>
          </li>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#nav-bar .nav-item {
  padding: 10px 0px;
}

#nav-bar .logo-img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}

#nav-bar .nav-links a {
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 0px 30px;
}

#nav-bar .nav-links .active {
  background: #ffffff;
  border-radius: 7px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  padding: 14px 0px;
}

#nav-bar .nav-links .active a {
  color: #292929;
}

</style>
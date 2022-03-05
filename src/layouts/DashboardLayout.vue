<template>
  <main id="dashboard-layout">
    <auth-nav></auth-nav>
    <div class="d-flex main-container">
      <div>
        <outgoing-card></outgoing-card>
        <outgoing-bid class="mt-2"></outgoing-bid>
      </div>
      <div class="content">
        <router-view ></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import AuthNav from '../components/Dashboard/AuthNav'
import OutgoingCard from '../components/Dashboard/OutgoingErrandsCard'
import OutgoingBid from '../components/Dashboard/OutgoingBidsComponent'

export default {
  components: {
    AuthNav,
    OutgoingCard,
    OutgoingBid
  }
}
</script>

<style scoped>

#dashboard-layout {
  background: #EEF6F9;
  height: 100vh;
  overflow-y: scroll;
}

#dashboard-layout .main-container {
  padding: 20px 30px 0px 30px;
}

#dashboard-layout .content {
  margin-left: 2rem;
}

</style>
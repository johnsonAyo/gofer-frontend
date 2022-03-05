<template>
  <main id="home">
    <section class="hero-section">
      <nav-bar></nav-bar>
      <div class="banner">
        <div class="jumbotron bg-transparent text-white text-center">
          <h1 class="display-4">Get someone to do your tasks for you</h1>
          <p class="lead">
            Get connected to someone who can run your errands for you while you do your thing. You can run just any type of errand.
            <span
              class="start-now"
            >Start Now</span>
          </p>
          <div class="images">
            <img class="mobile-img1" src="@/assets/img/appstore.png" alt="appstore" />
            <img class="mobile-img" src="@/assets/img/playstore.png" alt="appstore" />
          </div>
        </div>
      </div>
    </section>
    <section class="tab-section">
      <div class="tab-container">
        <div class="tab-list">
          <ul class="nav nav-tabs nav-justified">
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="setActive('post')"
                :class="{ active: isActive('post') }"
                href="#post"
              >Post Errands</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="setActive('run')"
                :class="{ active: isActive('run') }"
                href="#run"
              >Run Errands</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="setActive('get')"
                :class="{ active: isActive('get') }"
                href="#get"
              >Get Verified</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click.prevent="setActive('join')"
                :class="{ active: isActive('join') }"
                href="#join"
              >Join us</a>
            </li>
          </ul>
          <div class="tab-content py-3" id="myTabContent">
            <div class="tab-pane fade" :class="{'active show': isActive('post')}" id="post">
              <div class="d-flex justify-content-center post">
                <div>
                  <h4>What Kind of Errand do you want done?</h4>
                  <p>The type of errand you can post is absolutely limitless, if you can think it you can post. you can get started and start posting, select a category below to start posting</p>
                  <post-errands></post-errands>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{'active show': isActive('run')}" id="run">
              <div class="d-flex justify-content-center run">
                <div>
                  <h4>You can Run Errands for People</h4>
                  <p>Everybody can run errands, make money by running errands for people. bid for errands around you and earn money on the go, no special skill required to run errands for people. You can pick up just any type of errand</p>
                  <run-errands></run-errands>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{'active show': isActive('get')}" id="get">
              <div class="d-flex justify-content-center get">
                <div>
                  <h4>Get your Account Verified</h4>
                  <p>Everybody can run errands, make money by running errands for people. bid for errands around you and earn money on the go, no special skill required to run errands for people. You can pick up just any type of errand</p>
                  <get-verified></get-verified>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{'active show': isActive('join')}" id="join">
              <div class="d-flex justify-content-center join">
                <div>
                  <h4>Apply to Become a Merchant</h4>
                  <p>You want to run our errands for us, come on board and help us help other people run errands while you make money.</p>
                  <join-us></join-us>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex justify-content-between post-errand-section">
      <div class="col-lg-6 col-md-8 col-sm-12">
       <div class="image-background">
         <img src="@/assets/img/Path6.svg" alt="" class="blue-background">
         <img src="@/assets/img/home.png" alt="" class="phone-img">
       </div>
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12 list-post">
        <div>
          <h2><span class="post">Post Your Errand</span> and let someone do it for you</h2>
          <p class="post-1">You don't have to do all the work by yourself, let someone ease you off the stress. 
            <span class="post-2">Download the Gofer App</span> now and start sending errands.</p>
        </div>
        <div class="list-gofer">
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Describe the errand and the reward for the errand</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Wait for someone to bid or negotiate</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Wait for someone to bid or negotiate</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Accept or reject bids</p>
          </div>
           <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Track errand and end errand after errand is successful.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="run-errands">
      <div class="col-lg-6 col-md-8 col-sm-12">
         <div>
          <h2><span class="post">Run Errands </span>for people and earn money</h2>
          <p class="post-1">Search and bid for errands that you would like to run. Run errands and earn money after successful completion of the errand.</p>
        </div>
        <div class="list-run-errands__container">
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Search and bid for errands</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Wait to be accepted by the sender</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Run errand and end errand after completion</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Earn Money</p>
          </div>
           <div class="d-flex align-items-center">
            <div class="bullet-point"></div>
            <p class="pl-4">Track errand and end errand after errand is successful.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12">
        <div>
          <img src="@/assets/img/home.png" alt="" class="phone-img">
        </div>
      </div>
    </section>
    <section class="join-us__section">
      <div class="col-lg-6 col-md-8 col-sm-12 pl-0">
        <div class="card-container">
          <div class="big-card"></div>
          <div class="small-card__black"></div>
          <div class="small-card__white"></div>
        </div>
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12 join__content">
        <div>
          <h2><span class="post">Join us</span>, be part of the team that run errands for us</h2>
          <p class="post-1">Running errands for us comes with special privileges. To join our team of errand runners you have to apply to be a special errand runner and all errands directed to Gofer will be assigned to our different errand runners in different regions.</p>
        </div>
        <button class="btn bt-sm apply-now">
          apply now
        </button>
      </div>
    </section>
    <section class="wallet-section">
      <div class="wallet-top">
        <div class="straight-line"></div>
        <h2>wallet</h2>
      </div>
      <div class="d-flex justify-content-between align-items-center round-card__container">
        <div class="col-lg-4 col-md-8 col-sm-12 d-flex justify-content-center align-items-center rc__deets">
        <div class="round-card">
          <img src="@/assets/img/wallet.png" alt="">
        </div>
        <h6>my wallet</h6>
        <p>Fund your wallet and withdraw from your wallet. Funds in your wallet is needed to post any errand</p>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-12 d-flex justify-content-center align-items-center rc__deets">
        <div class="round-card">
          <img src="@/assets/img/password.png" alt="">
        </div>
        <h6>wallet pin</h6>
        <p>Your wallet pin is needed when you want to withdraw from your wallet. Just a little bit of extra security.</p>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-12 d-flex justify-content-center align-items-center rc__deets">
        <div class="round-card">
          <img src="@/assets/img/refund.png" alt="">
        </div>
        <h6>escrow account</h6>
        <p>When you post an errand, the money to be paid to the runner is deducted from your wallet and saved here.</p>
      </div>
      </div>
      <section class="account-reviews">
        <div class="col-lg-6 col-md-8 col-sm-12">
          <img src="@/assets/img/home.png" alt="" class="phone-img">
        </div>
        <div class="col-lg-6 col-md-8 col-sm-12">
          <h3>Account Reviews and account verification.</h3>
          <p>Post an errand with all the details needed to run the errand and the amount you are willing to pay errand runner. wait for runners to bid and then accept a runner based on review.</p>
          <img src="@/assets/img/Path-7.svg" alt="" class="side-img">
        </div>
      </section>
    </section>
    <section class="get-started">
      <h3>Start Posting Errands and Running Errands</h3>
      <button class="btn bt-sm">get started</button>
    </section>
    <section>
      <footer-component></footer-component>
    </section>
  </main>
</template>

<script>
import NavBar from '../components/Navbar'
import PostErrands from '../components/PostErrands'
import RunErrands from '../components/RunErrands'
import GetVerified from '../components/GetVerified'
import JoinUs from '../components/JoinUs'
import FooterComponent from '../components/FooterComponent'

export default {
  components: {
    NavBar,
    PostErrands,
    RunErrands,
    GetVerified,
    JoinUs,
    FooterComponent
  },
  data() {
    return {
      activeItem: "post"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<style scoped>


#home {
  overflow: hidden;
}

#home .hero-section {
  position: relative;
  height: 800px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/img/mask.png");
  object-fit: contain;
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

#home .hero-section img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}

#home .hero-section .banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
}

#home .hero-section .jumbotron .lead {
  max-width: 60%;
  margin: 0 auto;
  text-shadow: 1px 3px 6px black;
  font-size: 1.5rem;
}

#home .hero-section .display-4 {
  font-weight: 700;
}

#home .hero-section .start-now {
  color: #13f7ff;
  word-wrap: normal;
  font-weight: bold;
  text-align: start;
  cursor: pointer;
}

#home .hero-section .start-now:hover {
  color: #10d0d6;
}

#home .hero-section .images {
  margin-top: 2rem;
  padding-bottom: 3rem;
}

#home .hero-section .images .mobile-img1 {
  width: 182px;
  height: 43px;
  object-fit: contain;
}

#home .hero-section .images .mobile-img {
  width: 182px;
  height: 63px;
  object-fit: contain;
}

#home .tab-section {
  position: relative;
  display: flex;
  justify-content: center;
}

#home .tab-container {
  width: 65%;
  height: auto;
  margin: 0 auto;
  box-shadow: 3px 0px 20px #0000004A;
  background: #EEF6F9;
  border-radius: 15px;
  border: none;
  margin-top: -228px;
}

#home .nav-tabs {
  border: none;
  padding: 23px;
}

#home .nav-tabs .nav-link {
  border: none;
  color: #292929;
  font-weight: 700;
}

#home .nav-tabs .nav-link.active {
  border-bottom: 1px solid #0086b9;
  background: transparent;
  color: #0086b9;
  padding-bottom: 16px;
}

#home .post,
#home .run,
#home .get,
#home .join
{
  text-align: center;
}

#home .post h4,
#home .run h4,
#home .get h4,
#home .join h4
{
  color: #292929;
  font-weight: 900;
}

#home .post p,
#home .run p,
#home .get p,
#home .join p
{
  width: 77%;
  margin: 0 auto;
  font-size: 15px;
  color: #292929;
}

#home .post-errand-section {
  padding: 60px 120px;
}

#home .post-errand-section .image-background {
  position: relative;
}

#home .post-errand-section {
  padding: 100px;
}

#home .post-errand-section .image-background {
  position: relative;
}

#home .post-errand-section .image-background .blue-background {
  width: 35rem;
}

#home .post-errand-section .image-background .phone-img {
  width: 81%;
  object-fit: contain;
  position: absolute;
  left: 46px;
  top: -32px;
}

#home .post-errand-section .list-post {
  padding-left: 7rem !important;
}

#home .post-errand-section .list-post h2 {
  color: #515151;
  font-size: 39px;
  font-weight: bold;
  color: #07719A;
  width: 80%;
}

#home .post-errand-section .list-post .post {
  color: #515151;
  font-size: 39px;
  font-weight: bold;
  letter-spacing: 1.02px;
}

#home .post-errand-section .list-post .post-1 {
  color: #515151;
  font-size: 20px;
  width: 76%;
  font-weight: 400;
}

#home .post-errand-section .list-post .post-2 {
  color: #07719A;
  font-weight: 400;
}

#home .post-errand-section .list-gofer .bullet-point {
  width: 8px;
  height: 8px;
  background: #0086B9;
  border-radius: 100%;
  margin-top: 0px;
}

#home .post-errand-section .list-gofer p {
  color: #515151;
  font-weight: 500;
  padding-top: 10px;
  font-size: 14px;
  padding: 0;
  margin: 7px;
}

#home .run-errands {
  padding: 60px 100px;
  box-shadow: 3px 0px 20px #0000004A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #E8F4F9;
}

#home .run-errands h2 {
  color: #515151;
  font-size: 39px;
  font-weight: bold;
  width: 80%;
}

#home .run-errands .post {
  font-size: 39px;
  font-weight: bold;
  color: #07719A;
}

#home .run-errands .post-1 {
  color: #515151;
  font-size: 20px;
  width: 76%;
  font-weight: 400;
}

#home .run-errands .post-2 {
  color: #07719A;
  font-weight: 400;
}

#home .run-errands .list-run-errands__container .bullet-point {
  width: 8px;
  height: 8px;
  background: #0086B9;
  border-radius: 100%;
  margin-top: 0px;
}

#home .run-errands .list-run-errands__container p {
  color: #515151;
  font-weight: 500;
  padding-top: 10px;
  font-size: 14px;
  padding: 0;
  margin: 7px;
}

#home .run-errands .phone-img {
  width: 81%;
}

#home .join-us__section {
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#home .join-us__section .card-container {
  width: 30rem;
  height: 27rem;
  position: relative;
}

#home .join-us__section .big-card {
  width: 24rem;
  height: 25rem;
  background: #13F7FF;
}

#home .join-us__section .small-card__black {
  width: 17rem;
  height: 14rem;
  background: #000000;
  border: 1px solid #707070;
  border-radius: 10px;
  position: absolute;
  top: 15%;
  right: 0
}

#home .join-us__section .small-card__white {
  width: 17rem;
  height: 14rem;
  background: #ffffff;
  box-shadow: 0px 3px 22px #68686854;
  border-radius: 10px;
  position: absolute;
  top: 18.5%;
  right: -7%;
}

#home .join-us__section .join__content h2{
  color: #515151;
  font-size: 39px;
  font-weight: bold;
  width: 80%;
}

#home .join-us__section .join__content .post{
  font-size: 39px;
  font-weight: bold;
  color: #07719A;
}

#home .join-us__section .join__content .post-1 {
  color: #515151;
  font-size: 20px;
  width: 76%;
  font-weight: 400;
  margin-top: 20px;
}

#home .join-us__section .apply-now {
  margin-top: 30px;
  background: #0087BB;
  color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  text-transform: capitalize;
  padding: 10px 20px;
  font-size: 14px;
}

#home .wallet-section {
  justify-content: center;
  align-items: center;
  align-content: center;
}

#home .wallet-section .wallet-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32%;
  padding: 40px;
}

#home .wallet-section .wallet-top .straight-line {
  height: 3px;
  width: 160px;
  background: #515151;
}

#home .wallet-section .wallet-top h2 {
  color: #0086B9;
  letter-spacing: 1.02px;
  font-size: 36px;
  text-transform: capitalize;
}

#home .wallet-section .round-card__container {
  width: 87%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}

#home .wallet-section .round-card__container .round-card {
  width: 8rem;
  height: 8rem;
  background: #E6F3F8;
  border-radius: 100%;
  box-shadow: -6px -6px 20px #FFFFFF, 0px 3px 8px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home .wallet-section .rc__deets {
  flex-direction: column;
}

#home .wallet-section .round-card__container .round-card img {
  width: 40%;
  object-fit: contain;
}

#home .wallet-section .round-card__container h6 {
  font-weight: bold;
  letter-spacing: 0.36px;
  color: #515151;
  font-size: 20px;
  text-transform: capitalize;
  padding: 24px 0px;
}

#home .wallet-section .round-card__container p {
  color: #515151;
  font-size: 16px;
  text-align: center;
}

#home .account-reviews {
  position: relative;
  padding: 60px 0px 60px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

#home .account-reviews .phone-img {
  width: 81%;
  object-fit: contain;
}

#home .account-reviews h3 {
  color: #515151;
  font-size: 39px;
  font-weight: bold;
  width: 80%;
}

#home .account-reviews p {
  color: #515151;
  font-size: 20px;
  width: 76%;
  font-weight: 400;
  margin-top: 20px;
  letter-spacing: 0.36px;
}

#home .account-reviews .side-img {
  position: absolute;
  width: 80%;
  top: -250px;
  right: -37%;
}

#home .get-started {
  padding: 70px 108px;
  background: #0086B919;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#home .get-started h3 {
  color: #707070;
  font-size: 30px;
  font-weight: 700;
}

#home .get-started button {
  border-radius: 15px;
  background: #0086B9;
  padding: 17px 30px;
  color: #ffffff;
  font-weight: 700;
  text-transform: capitalize;
}

</style>
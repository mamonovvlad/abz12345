<template>
  <section class="header" id="header">
    <div :class="{fonFixsed: fonFixsed}" @click="menuActive = false, fonFixsed  = false"></div>
    <div class="container">
      <div class="header_nav">
        <div class="header_logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </div>
        <nav class="nav_menu">
          <a href="#" v-scroll-to="'#footer'">About me</a>
          <a href="#" v-scroll-to="'#footer'">Relationships</a>
          <a href="#" v-scroll-to="'#footer'">Requirements</a>
          <a href="#" v-scroll-to="'#footer'">Users</a>
          <a href="#" v-scroll-to="'#footer'">Sign Up</a>
        </nav>
        <div class="burger" @click="menuActive = true, fonFixsed  = true">
          <img src="@/assets/img/menu-icon.svg" alt />
        </div>
        <nav class="mobile_menu" :class="{menuActive: menuActive}">
          <perfect-scrollbar class="scrollOne">
            <div class="mobile_logo">
              <img src="@/assets/img/logo.svg" alt="logo" />
            </div>

            <div class="box_menu">
              <div class="menu_items">
                <a href="#" v-scroll-to="'#footer'">About me</a>
                <a href="#" v-scroll-to="'#footer'">Relationships</a>
                <a href="#" v-scroll-to="'#footer'">Users</a>
                <a href="#" v-scroll-to="'#footer'">Sign Up</a>
                <a href="#" v-scroll-to="'#footer'">Terms and Conditions</a>
              </div>
              <div class="menu_items">
                <a href="#" v-scroll-to="'#footer'">How it works</a>
                <a href="#" v-scroll-to="'#footer'">Partnership</a>
                <a href="#" v-scroll-to="'#footer'">Help</a>
                <a href="#" v-scroll-to="'#footer'">Leave testimonial</a>
                <a href="#" v-scroll-to="'#footer'">Contact us</a>
              </div>
              <div class="menu_items">
                <a href="#" v-scroll-to="'#footer'">Articles</a>
                <a href="#" v-scroll-to="'#footer'">Our news</a>
                <a href="#" v-scroll-to="'#footer'">Testimonials</a>
                <a href="#" v-scroll-to="'#footer'">Licenses</a>
                <a href="#" v-scroll-to="'#footer'">Privacy Policy</a>
              </div>
            </div>
          </perfect-scrollbar>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      fonFixsed: false
    };
  }
};
</script>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 1
  background-color: #fff
.header_nav
  display: flex
  justify-content: space-between
  padding: 20px 30px 16px
.nav_menu
  & a
    color: #212529
    margin-left: 28px
    transition: 200ms ease
    font-size: 1.4rem
    &:hover
      transition: 200ms ease
      color: #EF5B4C
      &:active
        transition: 200ms ease
        color: #007bff
.mobile_menu
  position: fixed
  background: #fff
  top: 0
  left: -1000px
  bottom: 0
  max-width: 290px
  width: 100%
  flex-direction: column
  transition: 500ms ease
  z-index: 99
  & .mobile_logo
    padding: 20px 30px 16px
    border-bottom: 1px solid #E1E1E1
  & .box_menu
  & .menu_items
    display: flex
    flex-direction: column
    padding: 25px 15px 5px 15px
    border-bottom: 1px solid #E1E1E1
    &:last-child
      border-bottom: 0
    & a
      margin-bottom: 19px
      font-size: 1.6rem
      line-height: 24px
      transition: 200ms ease
      color: #000000
      &:hover
        transition: 200ms ease
        color: #EF5B4C
      &:active
        transition: 200ms ease
        color: #007bff
.burger,
.mobile_menu
  display: none
.menuActive
  left: 0
  transition: 500ms ease
@media screen and (max-width: 768px)
  .nav_menu
    display: none
  .burger
    display: block
    cursor: pointer
  .mobile_menu
    display: flex
@media screen and (max-width: 540px)
  .nav_menu
    display: none
  .mobile_menu .mobile_logo,
  .header_nav
    padding: 10px 16px 5px
</style>
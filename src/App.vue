<template>
  <div id="app">
        <Header />
        <Baner />
        <About />
        <Users />
        <Registration />
        <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Baner from "@/components/Baner";
import About from "@/components/About";
import Users from "@/components/Users";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Baner,
    About,
    Users,
    Registration,
    Footer
  }
};
</script>

<style lang="sass">
@import 'assets/sass/main'
</style>
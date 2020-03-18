<template>
  <section class="users" id="users">
    <div class="container">
      <h2>Our cheerful users</h2>
      <p>Attention! Sorting users by registration date</p>
      <div class="users_box">
        <div class="users_block" v-for="user in users" :key="user.id">
          <figure>
            <img :src="user.photo" alt="photo" />
          </figure>
          <div class="users_title">{{ user.name }}</div>
          <div class="users_descr">{{ user.position }}</div>
          <a class="mail" href="#">{{ user.email }}</a>
          <a class="tel" href="#">{{ user.phone }}</a>
        </div>
      </div>
      <Button @click="addUsers()" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Button from "@/components/Button";
export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    Button
  },
  mounted() {
    let self = this;
    axios
      .get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
      )
      .then(function(res) {
        self.users = res.data.users;
      });
  },
  methods: {
    addUsers() {}
  }
};
</script>


<style lang="sass">
.users
    background: #F9F9F3
    padding: 155px 30px
    & .btn
        display: block
        margin: 0 auto
        margin: 8px auto 0
    & h2
        font-size: 5rem
        color: #212529
        text-align: center
        margin-bottom: 7px
    & p
        font-size: 1.6rem
        text-align: center
        color: #4C4B4B
        margin-bottom: 77px
.users_box
    flex-wrap: wrap
    display: flex
    justify-content: space-between
.users_block
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 33%
    margin-bottom: 50px
    & figure
        width: 70px
        height: 70px
        border-radius: 50%
        margin-bottom: 15px
        overflow: hidden
        & img
            width: 100%
            height: 100%
    & .users_title
        font-size: 2.4rem
        line-height: 28px
        margin-bottom: 13px
    & .users_descr ,
    & a
        text-align: center
        font-size: 1.6rem
        line-height: 24px
        color: #4C4B4B
@media screen and (max-width: 768px)
    .users
        padding: 112px 30px
        & h2
            font-size: 4rem
            margin-bottom: 15px
@media screen and (max-width: 540px)
    .users
        padding: 68px 15px
        & h2
            font-size: 3rem
            margin-bottom: 7px
        & .users p
            margin-bottom: 38px
    .users_box
        flex-direction: column
        align-items: center
</style>
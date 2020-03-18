<template>
  <section class="baner" id="baner">
    <div class="container">
      <div class="baner_text">
        <h1 class="baner_title">
          TEST ASSIGNMENT
          FOR FRONTEND DEVELOPER POSITION
        </h1>
        <p
          class="baner_descr"
        >We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</p>
        <Button />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button";
export default {
  components: {
    Button
  }
};
</script>

<style lang="sass">
.baner
    background: url(../assets/img/banner-photo.jpg) center no-repeat
    background-size: cover
    padding: 105px 0px 112px
    margin-top: 60px
.baner_text
    max-width: 600px
    padding: 0 30px
.baner_title
    font-size: 5rem
    color: #ffffff
    font-weight: 400
    line-height: 54px
    margin-bottom: 25px
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
.baner_descr
    color: #ffffff
    line-height: 24px
    font-size: 1.6rem
    margin: 0 0 35px
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 5
    -webkit-box-orient: vertical
@media screen and (max-width: 768px)
    .baner
        padding: 55px 0px 68px
    .baner_text
        max-width: 495px
    .baner_title
        font-size: 4rem
        line-height: 45px
        margin-bottom: 29px
    .baner_descr
        -webkit-line-clamp: 6
@media screen and (max-width: 540px)
    .baner
        margin-top: 40px
        padding: 65px 0px 68px
        & .btn
            margin: 0 auto
            display: block
    .baner_text
        max-width: 100%
        padding: 0 18px
    .baner_title
        font-size: 3rem
        text-align: center
        -webkit-line-clamp: 4
        line-height: 35px
        margin-bottom: 20px
    .baner_descr
        text-align: center
        -webkit-line-clamp: 3
        margin: 0 0 25px
</style>
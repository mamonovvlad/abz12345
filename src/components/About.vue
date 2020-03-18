<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="about_title">Let's get acquainted</h2>
      <div class="about_box ">
        <div class="about_block">
          <figure>
            <img src="@/assets/img/man-laptop-v1.svg" alt />
          </figure>
        </div>
        <div class="about_block">
          <p class="block_title">I am cool frontend developer</p>
          <div class="text_descr">
            <p
              class="block_descr"
            >We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
            <p
              class="block_last"
            >If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
          </div>

          <Button />
        </div>
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
.about
    margin: 147px 0
.about_title
    font-size: 5rem
    text-align: center
    color: #212529
.about_box
    display: flex
    padding: 0 30px
    margin-top: 60px
.about_block
    & figure
        margin: 0 50px 0 25px
        width: 340px
        & img
            width: 100%
    & .block_title
        font-size: 2.4rem
        line-height: 30px
        margin-bottom: 19px
    & .btn
        padding: 0
        background-color: transparent
        color: #EF5B4C
        transition: 500ms ease
        &:hover
            transition: 500ms ease
            color: #D24335
.text_descr
    & p
        font-size: 1.6rem
        line-height: 24px
        margin-bottom: 24px
        letter-spacing: 0.3px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        &:last-child
            margin-bottom: 34px
            -webkit-line-clamp: 4
@media screen and (max-width: 768px)
    .about
        margin: 103px 0
    .about_title
        font-size: 4rem
    .about_box
        margin-top: 63px
    .about_block figure
        margin: 0 25px 0 0px
        max-width: 250px
    .text_descr p:last-child
        -webkit-line-clamp: 5
@media screen and (max-width: 540px)
    .about
        margin: 78px 0
    .about_box
        flex-direction: column
        margin-top: 30px
        padding: 0 15px
    .about_title
        font-size: 3rem
    .about_block figure
        margin: 0 auto
        max-width: 290px
    .block_title
        text-align: center
        margin: 30px 0 18px
    .text_descr p
        -webkit-line-clamp: 4
        &:last-child
            -webkit-line-clamp: 6
            margin-bottom: 30px
    .about_block .btn
        margin: 0 auto
        display: block
</style>
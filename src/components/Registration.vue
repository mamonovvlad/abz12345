<template>
  <div class="registration" id="registration">
    <div class="container">
      <h2>Register to get a work</h2>
      <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
      <div class="registration_box">
        <form action class="form" @submit.prevent="submitHandler">
          <label class="label_inp" for="name">
            Name
            <input
              class="inp"
              type="name"
              placeholder="Your name"
              v-model.trim="name"
              :class="{invalid: $v.name.$dirty && !$v.name.required}"
            />
            <p class="small_error" v-if="$v.name.$dirty && !$v.name.required">Введите Имя</p>
          </label>
          <label class="label_inp" for="mail">
            Email
            <input
              id="mail"
              class="inp"
              type="mail"
              placeholder="Your email"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            />
            <p
              class="small_error"
              v-if="$v.email.$dirty && !$v.email.email"
            >Введите корректный Email</p>
            <p
              class="small_error"
              v-else-if="$v.email.$dirty && !$v.email.required"
            >Поле Email не должно быть пустым</p>
          </label>
          <label class="label_inp" for="phone">
            Phone
            <input class="inp" id="phone" type="text" placeholder="+380 XX XXX XX XX" />
            <span>Еnter phone number in open format</span>
          </label>
          <p>Select your position</p>
          <div class="radio_box">
            <label class="radio_container">
              Frontend developer
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="radio_container">
              Backend developer
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="radio_container">
              Designer
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="radio_container">
              QA
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>

          <label class="label_inp label_file" for="photo">
            Photo
            <div class="inp_block">
              <input class="inp" id="photo" type="text" placeholder="Upload your photo" />
              <button class="form_btn">Browse</button>
            </div>
          </label>
          <Button />
        </form>
      </div>
    </div>
  </div>
</template>




<script>
import Button from "@/components/Button";
import { email, required } from "vuelidate/lib/validators";

export default {
  name: "register",
  data: () => ({
    email: "",
    name: ""
  }),
  validations: {
    email: { email, required },
    name: { required }
  },
  components: {
    Button
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    }
  }
};
</script>

<style lang="sass">
.registration
    padding: 144px 30px 162px
    & .btn
        width: max-content
        margin: 37px auto 0
    & h2
        font-size: 5rem
        color: #212529
        text-align: center
        margin-bottom: 7px
    & p
        font-size: 1.6rem
        text-align: center
        color: #4C4B4B
        max-width: 460px
        margin: 0 auto 8px
        line-height: 24px
.form
    display: flex
    flex-direction: column
    max-width: 470px
    margin: 0 auto
    font-family: 'PT Sans', sans-serif
    & .label_inp
        margin-top: 23px
        & span
            font-size: 1.2rem
            font-family: 'Open Sans', sans-serif
    & p
        text-align: left
        margin: 23px 0 21px 0
        line-height: 14px
    & .inp
        display: flex
        flex-direction: column
        height: 38px
        border: 1px solid #CED4DA
        border-radius: 4px
        width: 100%
        font-size: 1.6rem
        padding: 0 0 0 13px
        margin: 11px 0px 0 0
        outline: none
        &::placeholder
            color: #B2B9C0
    & .small_error
        margin: 8px 0 0 0
        color: red
.inp_block
    display: flex
    align-items: center
    & .inp
        border-radius: 4px 0 0 4px
.form_btn
    font-family: 'PT Sans', sans-serif
    line-height: 28px
    color: #212529
    font-size: 1.6rem
    max-width: 83px
    width: 100%
    height: 38px
    background: #F8F7F5
    margin: 11px 0 0 0
    border: 1px solid #CED4DA
    border-radius: 0 4px 4px 0
    border-left: none
    outline: none
    cursor: pointer
//radio btn
.radio_box
    display: flex
    flex-direction: column
    & .radio_container:last-child
        margin-bottom: 0px
.radio_container
    position: relative
    padding-left: 26px
    cursor: pointer
    font-size: 1.6rem
    margin-bottom: 10px
.radio_container input
    position: absolute
    opacity: 0
    cursor: pointer

.checkmark
    position: absolute
    top: 2px
    left: 0
    height: 16px
    width: 16px
    background-color: #eee
    border-radius: 50%

.radio_container input:checked ~ .checkmark
    background-color: #2196F3
.checkmark:after
    content: ""
    position: absolute
    display: none

.radio_container input:checked ~ .checkmark:after
    display: block

.radio_container .checkmark:after
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 6px
    height: 6px
    border-radius: 50%
    background: white
@media screen and (max-width: 768px)
    .registration
        padding: 107px 30px 120px
        & h2
            font-size: 4rem
            margin-bottom: 14px
@media screen and (max-width: 540px)
    .registration
        padding: 84px 15px 80px
        & h2
            font-size: 3rem
            margin-bottom: 14px
        & p
            margin: 0 auto 0px
        & .form p
            margin: 0px 0 20px 0
        & .label_inp span
            margin-bottom: 25px
            display: block
</style>
<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('closeModal')">
      <div class="modal-content" @click.stop="">
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <span class="button-close" @click="$emit('closeModal')">×</span>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.$emit('closeModal')
    })
  }
}
</script>

<style lang="sass">
  .modal-enter
    opacity: 0
  .modal-leave-active
    opacity: 0
  .modal-enter .modal-content,
  .modal-leave-active .modal-content
    transform: scale(1.2)
  .modal
    &__wrapper
      display: flex
      justify-content: center
      align-items: center
      position: fixed
      top: 0
      bottom: 0
      left: 0
      right: 0
      transition: opacity .2s ease
      z-index: 9
      background-color: rgba(00,00,00,.48)
    &-content
      position: relative
      max-width: 600px
      padding: 20px 18px
      background-color: #fff
      border: 1px solid #dcdfe6
      transition: all .2s ease
      border-radius: 8px
      z-index: 10
      overflow: hidden
      @media screen and (min-width: 900px)
        min-width: 500px
    &-header
      display: flex
      align-self: center
      justify-content: space-between
      padding: 10px 0
      span
        font-size: 24px
    &-body
      text-align: center
  .button-close
    cursor: pointer
</style>

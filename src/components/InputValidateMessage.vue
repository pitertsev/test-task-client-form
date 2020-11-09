<template>
  <div class="message">
    <span class="message__text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "InputValidateMessage",
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  .message
    &__text
      color: red
</style>

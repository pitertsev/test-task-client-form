<template>
  <div id="app">
    <div class="container">
      <h1 class="h-1 mt-2 text-center">Добавить нового клиента</h1>
      <ClientForm @submitForm="submitForm"/>
      <Modal
        v-show="showModal"
        @closeModal="closeModal"
        title="Клиент успешно добавлен"/>
    </div>
  </div>
</template>

<script>

import ClientForm from '@/components/ClientForm'
import Modal from '@/components/Modal'
export default {
  name: 'App',
  title: 'Some Title',
  components: {
    Modal,
    ClientForm,
  },
  data: () => ({
    showModal: false
  }),
  methods: {
    submitForm() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style lang="sass">
  .container
    max-width: 1200px
    margin: 0 auto
</style>

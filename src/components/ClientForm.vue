<template>
  <form
    ref="clientForm"
    @submit.prevent="onSubmit"
    class="form"
  >
    <fieldset class="fieldset">
      <legend class="form__legend">Общая информация</legend>
      <div>
        <div class="form__row">
          <div
            class="form__item"
            :class="{ 'form__item-error': $v.userInfo.userData.name.$error }"
          >
            <label for="name" class="item-label">Имя<span>*</span></label>
            <input
              id="name"
              name="name"
              class="form-input w-100"
              :class="{ 'form-input_error': $v.userInfo.userData.name.$error }"
              v-model="userInfo.userData.name"
            >
            <InputValidateMessage
              v-if="$v.userInfo.userData.name.$dirty && !$v.userInfo.userData.name.required"
              message="Обязательное поле"
            />

          </div>
          <div
            class="form__item"
            :class="{ 'form__item-error': $v.userInfo.userData.family.$error }"
          >
            <label for="family" class="item-label">Фамилия<span>*</span></label>
            <input
              id="family"
              name="family"
              class="w-100"
              :class="{ 'form-input_error': $v.userInfo.userData.family.$error }"
              v-model="userInfo.userData.family"
            >
            <InputValidateMessage
              v-if="$v.userInfo.userData.family.$dirty && !$v.userInfo.userData.family.required"
              message="Обязательное поле"
            />
          </div>
          <div class="form__item">
            <label for="surname" class="item-label">Отчество</label>
            <input type="text" id="surname" name="surname" class="w-100" v-model="userInfo.userData.surName">
          </div>
        </div>
        <div class="form__row">
          <div
            class="form__item"
            :class="{ 'form__item-error': $v.userInfo.userData.birthDay.$error }"
          >
            <label for="birthDay" class="item-label">Дата рождения<span>*</span></label>
            <input
              type="date"
              id="birthDay"
              name="birthDay"
              class="w-100"
              :class="{ 'form-input_error': $v.userInfo.userData.birthDay.$error }"
              v-model="userInfo.userData.birthDay"
            >
            <InputValidateMessage
              v-if="$v.userInfo.userData.birthDay.$dirty && !$v.userInfo.userData.birthDay.required"
              message="Обязательное поле"
            />
          </div>
          <div
            class="form__item"
            :class="{ 'form__item-error': $v.userInfo.userData.phone.$error }"
          >
            <label for="phone" class="item-label">Номер телефона<span>*</span></label>
            <input
              type="text"
              id="phone"
              name="phone"
              class="w-100"
              maxlength="11"
              placeholder="79111111111"
              :class="{ 'form-input_error': $v.userInfo.userData.phone.$error }"
              v-model="userInfo.userData.phone"
            >
            <InputValidateMessage
              v-if="$v.userInfo.userData.phone.$dirty && !$v.userInfo.userData.phone.required"
              message="Обязательное поле"
            />
            <InputValidateMessage
              v-else-if="$v.userInfo.userData.phone.$dirty && !$v.userInfo.userData.phone.numeric"
              message="Некорректный формат телефона"
            />
            <InputValidateMessage
              v-else-if="$v.userInfo.userData.phone.$dirty && !$v.userInfo.userData.phone.minLength"
              message="Должно быть 11 цифр"
            />
            <InputValidateMessage
              v-else-if="$v.userInfo.userData.phone.$dirty && !$v.userInfo.userData.phone.checkFirstNumber"
              message="Номер телефона должен начинаться с 7"
            />

          </div>
          <div class="form__item">
            <label for="gender" class="item-label">Пол</label>
            <select id="gender" v-model="userInfo.userData.gender" class="w-100">
              <option value="" disabled selected hidden>Выбрать</option>
              <option name="female" value="Женский">Женский</option>
              <option name="male" value="Мужской">Мужской</option>
            </select>
          </div>
        </div>
        <div class="form__row">
          <div
            class="form__item"
            :class="{ 'form__item-error': $v.userInfo.userData.clientGroup.$error }"
          >
            <label for="clientGroup" class="item-label">Группа клиентов<span>*</span></label>
            <select
              multiple
              id="clientGroup"
              class="w-100"
              :class="{ 'form-input_error': $v.userInfo.userData.clientGroup.$error }"
              v-model="userInfo.userData.clientGroup"
            >
              <option value="" disabled hidden selected>Выбрать</option>
              <option v-for="(group, index) in clientGroup" :key="index" :value="group">{{ group }}</option>
            </select>
            <InputValidateMessage
              v-if="$v.userInfo.userData.clientGroup.$dirty && !$v.userInfo.userData.clientGroup.required"
              message="Обязательное поле"
            />
          </div>
          <div class="form__item">
            <label for="doctor" class="item-label">Лечащий врач</label>
            <select id="doctor" class="w-100" v-model="userInfo.userData.doctor">
              <option value="" disabled hidden selected>Выбрать</option>
              <option v-for="(doctor, index) in doctors" :key="index" :value="doctor">{{ doctor }}</option>
            </select>
          </div>
          <div class="form__item">
            <label for="sms" class="item-label">СМС</label>
            <input type="checkbox" id="sms" name="sms" v-model="userInfo.userData.sendSms">
            <label for="sms" class="ml-1">Не отправлять СМС</label>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="form__legend">Адрес</legend>
      <div class="form__row">
        <div class="form__item">
          <label for="zipCode" class="item-label">Индекс</label>
          <input type="text" id="zipCode" name="zipCode" class="w-100" v-model="userInfo.addressData.zipCode">
        </div>
        <div class="form__item">
          <label for="country" class="item-label">Страна</label>
          <input type="text" id="country" name="country" class="w-100" v-model="userInfo.addressData.country">
        </div>
        <div class="form__item">
          <label for="province" class="item-label">Область</label>
          <input type="text" id="province" name="province" class="w-100" v-model="userInfo.addressData.province">
        </div>
      </div>
      <div class="form__row">
        <div
          class="form__item"
          :class="{ 'form__item-error': $v.userInfo.addressData.city.$error }"
        >
          <label for="city" class="item-label">Город<span>*</span></label>
          <input
            type="text"
            id="city"
            name="city"
            class="w-100"
            :class="{ 'form-input_error': $v.userInfo.addressData.city.$error }"
            v-model="userInfo.addressData.city"
          >
          <InputValidateMessage
            v-if="$v.userInfo.addressData.city.$dirty && !$v.userInfo.addressData.city.required"
            message="Обязательное поле"
          />
        </div>
        <div class="form__item">
          <label for="street" class="item-label">Улица</label>
          <input type="text" id="street" name="street" class="w-100" v-model="userInfo.addressData.street">
        </div>
        <div class="form__item">
          <label for="houseNumber" class="item-label">Дом</label>
          <input type="text" id="houseNumber" name="houseNumber" class="w-100" v-model="userInfo.addressData.houseNumber">
        </div>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="form__legend">Документ</legend>
      <div class="form__row">
        <div
          class="form__item"
          :class="{ 'form__item-error': $v.userInfo.documentData.type.$error }"
        >
          <label for="documentType" class="item-label">Тип документа<span>*</span></label>
          <select
            id="documentType"
            class="w-100"
            :class="{ 'form-input_error': $v.userInfo.documentData.type.$error }"
            v-model="userInfo.documentData.type"
          >
            <option value="" disabled hidden selected>Выбрать</option>
            <option v-for="(document, index) in documents" :key="index" :value="document">{{ document }} </option>
          </select>
          <InputValidateMessage
            v-if="$v.userInfo.documentData.type.$dirty && !$v.userInfo.documentData.type.required"
            message="Обязательное поле"
          />
        </div>
        <div class="form__item">
          <label for="series" class="item-label">Серия</label>
          <input type="text" id="series" name="series" class="w-100" v-model="userInfo.documentData.series">
        </div>
        <div class="form__item">
          <label for="number" class="item-label">Номер</label>
          <input type="text" id="number" name="number" class="w-100" v-model="userInfo.documentData.number">
        </div>
      </div>
      <div class="form__row">
        <div class="form__item whoIssued">
          <label for="whoIssued" class="item-label">Кем выдан</label>
          <input type="text" id="whoIssued" name="whoIssued" class="w-100" v-model="userInfo.documentData.whoIssued">
        </div>
        <div
          class="form__item"
          :class="{ 'form__item-error': $v.userInfo.documentData.date.$error }"
        >
          <label for="dateIssue" class="item-label">Дата выдачи<span>*</span></label>
          <input
            type="date"
            id="dateIssue"
            name="dateIssue"
            class="w-100"
            :class="{ 'form-input_error': $v.userInfo.documentData.date.$error }"
            v-model="userInfo.documentData.date"
          >
          <InputValidateMessage
            v-if="$v.userInfo.documentData.date.$dirty && !$v.userInfo.documentData.date.required"
            message="Обязательное поле"
          />
        </div>
      </div>
    </fieldset>
    <div class="form__footer">
      <button class="btn m-2">Добавить клиента</button>
    </div>
  </form>
</template>

<script>
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import InputValidateMessage from '@/components/InputValidateMessage'

export default {
  name: 'ClientForm',
  components: {InputValidateMessage},
  data: () => ({
    userInfo: {
      userData: {
        name: '',
        family: '',
        surName: '',
        birthDay: '',
        phone: '',
        gender: '',
        clientGroup: [],
        doctor: '',
        sendSms: ''
      },
      addressData: {
        zipCode: '',
        country: '',
        province: '',
        city: '',
        street: '',
        houseNumber: ''
      },
      documentData: {
        type: '',
        series: '',
        number: '',
        whoIssued: '',
        date: ''
      },
    },
    doctors: ['Иванов', 'Захаров', 'Чернышева'],
    documents: ['Паспорт', 'Водительское удостоверение', 'Свидетельство о рождении'],
    clientGroup: ['VIP', 'ОМС', 'Проблемные клиенты']
  }),
  methods: {
    onSubmit() {
      this.$v.userInfo.$touch()
      if (!this.$v.userInfo.$error) {
        this.$refs.clientForm.reset()
        this.$emit('submitForm')
      }
    }
  },
  validations: {
    userInfo: {
      userData: {
        name: { required },
        family: { required },
        birthDay: { required },
        phone: {
          required,
          numeric,
          minLength: minLength(11),
          checkFirstNumber(phone) {
            return ( /^7/.test(phone) )
          }
        },
        clientGroup: { required }
      },
      addressData: {
        city: { required }
      },
      documentData: {
        type: { required },
        date: { required }
      }
    }
  }
}
</script>

<style lang="sass">
  .form
    &__legend
      text-transform: uppercase
      font-weight: bold
      padding-top: 30px
      color: $light-blue
    &__row
      margin-top: 15px
      display: flex
      justify-content: space-between
      flex-wrap: wrap
    &__item
      padding: 5px
      width: 33%
      font-size: 16px
      @media screen and (max-width: 576px)
        width: 100%
      @media screen and (min-width: 577px) and (max-width: 768px)
        width: 33.3%
      &-error
        color: red
      &.whoIssued
        @media screen and (min-width: 577px)
          width: 66.6%
    &__footer
      display: flex
      justify-content: flex-end
      @media screen and (max-width: 576px)
        justify-content: center
    &-input
      &_error
        border: 1px solid red

  .item-label
    display: block
    font-weight: 700

  .fieldset
    border: none
    box-shadow: 2px 2px 5px $lightest-blue
    padding: 0 20px 20px

</style>

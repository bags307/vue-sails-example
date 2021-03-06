<template>
  <b-modal size="lg" id="patch-product" :hide-header-close="true">
    <template slot="modal-title">{{ $t('template.first.title') }}</template>
    <div class="row">
      <div class="col-8">
        <b-form-fieldset
          :description="$t('description.first')"
          :label="$t('label.first')"
          :label-size="1">
          <b-form-input v-model="title" :state="isTitleValid"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.title" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>

      <div class="col-4">
        <b-form-fieldset
          :description="$t('description.second')"
          :label="$t('label.second')"
          :label-size="1">
          <b-form-input v-model="price" :state="isPriceValid"></b-form-input>
          <b-form-feedback v-for="(name, index) in errors.price" :key="index">
            {{ name }}
          </b-form-feedback>
        </b-form-fieldset>
      </div>
    </div>

    <b-form-fieldset
      :description="$t('description.third')"
      :label="$t('label.third')"
      :label-size="1">
      <b-form-input textarea v-model="description" :state="isDescriptionValid"></b-form-input>
      <b-form-feedback v-for="(name, index) in errors.description" :key="index">
        {{ name }}
      </b-form-feedback>
    </b-form-fieldset>

    <template slot="modal-footer">
      <b-button size="sm" variant="outline-primary" @click="cancel">{{ $t('button.first') }}</b-button>
      <b-button size="sm" variant="outline-success" @click="patchProduct">{{ $t('button.second') }}</b-button>
    </template>
  </b-modal>
</template>

<script>
  import ProductPatchMixin from './ProductPatch.mixin'
  import ProductValidation from './ProductValidation.mixin'

  export default {
    mixins: [ProductPatchMixin, ProductValidation],

    created () {
      this.$store.dispatch('getProduct', this.id)
        .then(product => {
          this.$root.$emit('bv::show::modal', 'patch-product')

          this.$store.commit('SET_PRODUCT_TITLE', product.title)
          this.$store.commit('SET_PRODUCT_DESCRIPTION', product.description)
          this.$store.commit('SET_PRODUCT_PRICE', product.price)
        }, () => {
          // Error message
        })
    },

    methods: {
      patchProduct () {
        this.$store.dispatch('patchProduct', {
          id: this.id,
          title: this.title,
          price: this.price,
          description: this.description
        })
          .then(() => {
            // Success message

            this.$store.dispatch('getProductsByUser', this.user)
            this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', false)
            this.$store.commit('RESET_PRODUCT')
          }, () => {
            // Error message
          })
      },

      cancel () {
        this.$store.commit('SET_IS_EDIT_PRODUCT_VISIBLE', false)
        this.$root.$emit('bv::hide::modal', 'patch-product')
      }
    },

    destroyed () {
      this.$root.$emit('bv::hide::modal', 'patch-product')
      this.$store.commit('RESET_PRODUCT')
    }
  }
</script>

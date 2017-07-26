import { mapMutations } from 'vuex'

const ShopIndexMixin = {
  async created () {
    await this.$store.dispatch('getUser')
    await this.$store.dispatch('getShopProducts', this.currentPage)
  },

  data () {
    return {
      currentPage: 1
    }
  },

  i18n: {
    messages: {
      en: {
        'alert.first': 'Please notice that you cannot buy your own products.',
        'span.first': 'by',
        'button.first': 'Buy'
      },
      de: {
        'alert.first': 'Bitte nehme zur Kenntnis, dass deine eigenen Produkte nicht kaufbar sind.',
        'span.first': 'von',
        'button.first': 'Einkaufen'
      }
    }
  },

  watch: {
    currentPage () {
      this.$store.dispatch('getShopProducts', this.currentPage)
    }
  },

  computed: {
    products: {
      get () {
        return this.$store.state.Products.products.products
      }
    },

    amountOfProducts: {
      get () {
        return this.$store.state.Products.products.amountOfProducts
      }
    },

    user: {
      get () {
        return this.$store.state.User.user
      }
    }
  },

  methods: {
    ...mapMutations({
      pushToBasket: 'PUSH_TO_BASKET'
    })
  }
}

export default ShopIndexMixin

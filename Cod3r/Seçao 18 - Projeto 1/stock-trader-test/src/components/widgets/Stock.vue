<template>
  <b-card
    :header="company"
    :title="price"
    :bg-variant="cardStyle"
    class="mt-2 ml-2 mb-2"
    text-variant="white"
  >
    <template v-if="actions ='comprar'">
      <label>Valor total: {{amount * stock.price | toReal}}</label>
    </template>
    <slot name="quantity"></slot>
    <b-form-input v-model.number="amount" type="number" :state="stateInput"></b-form-input>
    <b-button
      @click="buyOrSell()"
      class="mt-2"
      :variant="buttonStyle"
      :disabled="!stateInput"
    >{{action}}</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    stock: {
      required: true,
      type: Object,
    },
    quantity: Number,
  },
  data() {
    return {
      amount: 1,
    };
  },
  computed: {
    userBalance() {
      return this.$store.state.user.balance;
    },
    cardStyle() {
      return this.action === "vender" ? "secondary" : "info";
    },
    buttonStyle() {
      return this.action === "vender" ? "dark" : "success";
    },
    company() {
      return this.stock.company.toUpperCase();
    },
    price() {
      return `R$ ${Number(this.stock.price).toFixed(2)}`;
    },
    stateInput() {
      if (this.amount <= 0) {
        return false;
      } else if (this.action == "comprar") {
        let purchasePrice = this.amount * this.stock.price;
        return this.userBalance >= purchasePrice ? true : false;
      } else {
        return this.stock.quantity >= this.amount ? true : false;
      }
    },
  },
  methods: {
    buyOrSell() {
      if (this.amount > 0) {
        this.stock.quantity = this.amount;
        this.action == "comprar" ? this.buy() : this.sell();
      }
    },
    buy() {
      if (this.userBalance >= this.stock.price * this.amount) {
        this.$store.dispatch("buyStock", this.stock);
      }
    },
    sell() {
      if (this.stock.quantity >= this.amount) {
        this.$store.dispatch("sellStock", this.stock);
      }
    },
  },
};
</script>

<style>
.stocks-group .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.container .card {
  flex: 1;
  width: 11rem;
  padding: 1px;
  min-width: 300px;
  max-width: 400px;
}
.container button {
  width: 100%;
  text-transform: uppercase;
}
.container label {
  font-size: 18px;
  display: flex;
  margin: 1px;
}
</style>
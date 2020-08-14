
<template>
  <v-flex class="pr-2 pb-2" xs12 md6 lg4>
    <!--xs=12 colunas, smartphones; md=6 colunas, tables. lg=4 colunas, desktops. -->
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>(Preço : {{stock.price | currency}})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          v-model.number="quantity"
          label="Quantidade: "
          :error="quantity < 0 || !Number.isInteger(quantity) || insufficientFunds"
          type="number"
        ></v-text-field>
        <v-btn
          @click="buyStock()"
          class="ml-3 green darken-3 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds"
        >{{insufficientFunds ? 'Insuficiente' : 'Comprar'}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
/* eslint-disable no-unused-vars*/
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    founds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.founds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>
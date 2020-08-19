
<template>
  <v-flex class="pr-2 pb-2" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>(Preço : {{stock.price | currency}} | Quantidade: {{stock.quantity}})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          v-model.number="quantity"
          label="Quantidade: "
          type="number"
          :error="quantity < 0 || !Number.isInteger(quantity) || insufficientQuantity"
        ></v-text-field>
        <v-btn
          @click="sellStock()"
          class="ml-3 green darken-3 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity"
        >{{insufficientQuantity ? 'Insuficiente' : 'Vender'}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
/* eslint-disable no-unused-vars*/
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.sellStockAction(order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>
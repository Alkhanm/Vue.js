<template>
  <div class="page-title">
    <h1>
      <i v-if="icon" :class="icon">{{main}}</i>
    </h1>
    <h2>{{sub}}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["icon", "main", "sub"],
};
</script>

<style>
.page-title {
  margin: 0px;
}
.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}
</style>
<template>
  <div id="top">
    <h1>{{ wallet }}</h1>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    wallet: String
  }
};
</script>

<style>
#top {
  display: grid;
  justify-content: center;
  align-content: center;
  grid-column: 2;
}
</style>
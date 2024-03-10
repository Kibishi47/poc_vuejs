<template>
  <div class="test">
    <button>TEST</button>
  </div>
</template>

<script>
export default {
  created() {
    const username = this.$route.query.username;
    if (username) {
      console.log(username);
    }
  }
}
</script>

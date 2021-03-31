<template>
    <hello-world :token="token"/>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {
  components: { HelloWorld },
  name: 'Oauth',
  props: {
      token: String
  },
  created() {
  },
  mounted() {
      console.log(this.token);
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

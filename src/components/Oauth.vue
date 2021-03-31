<template>
    <hello-world :accessToken="accessToken"/>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import axios from "axios";

const baseAdress = "https://localhost:44393/api";

export default {
  components: { HelloWorld },
  name: 'Oauth',
  props: {
      accessToken: String,
      userId: Number,
      code: String
  },
  created() {
  },
  mounted() {
      this.tradeCodeToToken(this.code);
  },
  methods: {
      tradeCodeToToken(code) {
        axios.get(`${baseAdress}/OAuth/AuthorizationCallback?code=${code}`).then(response => {
            const { userId, accessToken } = response.data;
            this.userId = userId;
            this.accessToken = accessToken;
            axios.get(`${baseAdress}/OAuth/GetAccessToken?short_lived_access_token=${this.accessToken}`).then(response => {
                const { accessToken } = response.data;
                this.accessToken = accessToken;
            })
        });
      }
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

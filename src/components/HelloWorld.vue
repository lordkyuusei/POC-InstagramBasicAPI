<template>
  <div class="hello">
    <button v-if="!accessToken" @click="openInstagram">Connect To Instagram</button>
    <h1>Medias</h1>
    <div v-if="accessToken">
      <h3>{{ username }}'s pictures</h3>
      <a v-for="image in medias" :key="image.id" :href="image.permalink">
        <img :src="image.media_Url" height="400px" width="400px">
      </a>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from "axios";

const baseAdress = "https://localhost:44393/api";

export default {
  name: 'HelloWorld',
  props: {
    username: String,
    accessToken: String,
    medias: {}
  },
  created() {
  },
  watch: {
    accessToken: function (_, value) {
      if (value !== undefined) {
        this.openMedias()          
      }
    }
  },
  methods: {
    openInstagram() {
      axios.get(`${baseAdress}/OAuth/GetAuthorizationLink`).then(response => {
        window.open(response.data.uri, "_self");
      })
    },
    openMedias() {
      axios.get(`${baseAdress}/Medias?accessToken=${this.accessToken}`).then(response => {
        this.medias = response.data;
        this.username = this.medias[0].username;
      })
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

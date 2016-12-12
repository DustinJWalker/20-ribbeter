<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="grid">
      <div class="grid__sidebar">
        <div class="card">
          <div class="button">
            <a href="/app" class="ribbit__btn">See All Ribbits</a>
          </div>
        </div>
      </div>
      <div class="grid__main">
        <div class="card">
          <h3 class="card__title">${{ $route.params.username }}</h3>
        </div>
        <div class="button">
          <a href="/app" class="ribbit__button" @click="getData">Load New Ribbits</a>
        </div>
        <div class="row" v-for="item in ribbits">
          <router-link :to="{ name: 'user', params: { username: item.user.username}}"><h3 class="username">${{ item.user.username }}</h3></router-link>
          <p class="body">{{ item.body }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ribbits: [],
      formValues: {},
    };
  },

  mounted(){
    this.getData();
  },

  methods: {
    getData(username) {
      fetch(`/api/ribbits?user=${this.$route.params.username}`,{
        credentials: 'same-origin',
      })
      .then((r) => r.json())
      .then((ribbits) => {
        this.ribbits = ribbits;
      });
    },
  },
};
</script>

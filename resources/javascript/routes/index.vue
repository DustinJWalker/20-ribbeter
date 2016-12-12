<template lang="html">
  <div class="">
    <h2 class="title">Recent Ribbits</h2>
    <div class="grid">
      <div class="grid__sidebar">
        <div class="card">
          <form @submit="submitRibbit">
              <h3 class="card__title">New Ribbit</h3>
              <div class="content">
                <label class="card__header" for="ribbit-post">What's Going On?</label>
                <textarea class="card__input" id="ribbit-post" v-model="formValues.body" rows="8"></textarea>
              </div>
              <div class="button">
                <a class="btn__register" @click="reset">Clear</a>
                <button class="btn__submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="grid__main">
        <div class="card">
          <h3 class="card__title">See What's Happening</h3>
          <div class="button">
            <a href="/app" class="ribbit__btn" @click="getData">Load New Ribbits</a>
          </div>
          <div class="row" v-for="item in ribbits">
            <router-link :to="{ name: 'user', params: { username: item.user.username }}"><h3 class="username">${{ item.user.username }}</h3></router-link>
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

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      fetch('/api/ribbits', {
        credentials: 'same-origin',
      })
      .then((r) => r.json())
      .then((ribbits) => {
        this.ribbits = ribbits;
      });
    },
    submitRibbit(formValues) {
      fetch('/api/ribbits', {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues),
      })
      .then((r) => r.json())
      .then((ribbit) => {
        this.ribbits = [ribbit, ...this.ribbits];
        this.reset();
      });
    },
    reset() {
      this.formValues = {};
    }
  },
};
</script>

<template lang="html">
  <div class="">
    <h3>Recent Ribbits</h3>
      <div class="ribbit__card--left">
        <div class="card">
        <form @submit.prevent="submitRibbit">
          <h3>New Ribbit</h3>
          <label class="card__header" for="ribbit__post">What's Going On</label>
          <textarea class="ribbit__input" rows="8" ></textarea>
          <div class="button">
            <a href="btn__register" @click="rest">Clear</a>
            <button clas="btn__submit">Save</button>
          </div>
        </form>
      </div>
      </div>

      <div class="ribbit__card--right">
          <div class="card">
            <h3>See What's Happening</h3>
            <button href="/app" class="btn__load" @click="getData">Load New Ribbits</button>
          </div>
            <div class="show__ribbits" v-for="item in ribbits">
                <router-link :to={ name: 'user', params: { username: item.user.name }}>
                  <p class="card__content">{{ item.body  }}
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
    getData() {
      fetch('/api/ribbits', {
        credentials: 'same-origin',
      })
      .then((r) => r.json())
      .then((ribbits) => {
        this.ribbits = ribbits;
      });
    },
    submitRibbit(formValues){
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

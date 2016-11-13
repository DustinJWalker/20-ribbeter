<template lang="html">
  <div class="">
    <h2>Home Page</h2>
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
  }

  methods: {
    getData() {
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
  },
};
</script>

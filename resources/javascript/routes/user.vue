<template lang="html">
  <div class="">

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

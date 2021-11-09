<template>
  <v-app>
    <v-card
    elevation="16"
    height="80vh"
    width="1080px"

    class="d-flex mx-auto my-auto rounded"
    dark

    >
      <v-card
        class="pt-1 text-center rounded"
        color="black lighten-3"
        min-width="60"
      >
        <v-icon small color="red">mdi-circle</v-icon>
        <v-icon small color="orange">mdi-circle</v-icon>
        <v-icon small color="green accent-2">mdi-circle</v-icon>


        <router-link :to="'/user-list'"><v-icon class="d-block pt-6" color="grey" large>mdi-account</v-icon></router-link>
        <router-link :to="'/message-list'"><v-icon class="d-block py-6" color="grey" large>mdi-chat-processing-outline</v-icon></router-link>
      </v-card>

      <v-main>
        <v-card
          width="100%"
        >
          <router-view/>
        </v-card>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created: function(){
    this.$store.dispatch('fetchUsers');
    },
};
</script>

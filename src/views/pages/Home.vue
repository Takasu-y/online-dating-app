<template>
    <div class="messageList">
        <v-card
          class="userList border text-center align-center"
          elevation="0"
          height="80vh"
        >
          <div class="pa-16">
            <h1 class="d-block">Online Dating App</h1>
            <router-link
                  :to="'/user-list'"
                  class="d-block text-decoration-none pa-16"
                  >
                  <v-btn
                      color="primary lighten-2"
                      dark
                  >
                    Search User
                  </v-btn>
              </router-link>
          </div>
        </v-card>
    </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

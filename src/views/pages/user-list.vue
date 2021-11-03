<template>
    <v-card class="userList">
        <v-app-bar><h1>User List</h1></v-app-bar>
        <v-list
            class="overflow-y-auto pa-6 d-flex flex-wrap"
            max-height="70vh"
        >
            <v-card
                    v-for="user in listupUser"
                    :key="user.name"
                    height="320"
                    width="240"
                    elevatrion="16"
                    class="px-2 py-6 ml-4 mb-4 text-center"
            >
                <v-avatar size="120">
                    <img
                        :src="user.picture.large"
                        :alt="user.name"
                    >
                </v-avatar>
                <v-card-title class="d-block text-center pb-1">{{ user.name }}</v-card-title>
                <v-card-text>{{ user.country }} / Age: {{ user.age }}</v-card-text>
            </v-card>
        </v-list>
    </v-card>
</template>

<script>
export default ({
    created: function(){
        this.$store.dispatch('fetchUsers');
    },
    computed: {
        // countMonitor() {
        //     return this.$store.getters.getUserById(3);
        // },
        listupUser(){
            return this.$store.state.users.users;
        }
    }
})
</script>

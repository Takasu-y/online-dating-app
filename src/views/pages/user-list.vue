<template>
    <v-card class="userList">
        <v-app-bar><h1>User List</h1></v-app-bar>
        <v-list
            class="overflow-y-auto py-6 d-flex flex-wrap"
            max-height="70vh"
            width="1020px"
        >
            <v-card
                    v-for="user in listupUser"
                    :key="user.name"
                    height="320"
                    width="220"
                    elevatrion="16"
                    class="py-6 ml-4 mb-4 text-center"
            >
                <v-avatar size="120">
                    <img
                        :src="user.picture.large"
                        :alt="user.name"
                    >
                </v-avatar>
                <v-card-title class="d-block text-center pb-1">{{ user.name }}</v-card-title>
                <v-card-text><v-icon small>mdi-map-marker</v-icon> {{ user.country }} / Age: {{ user.age }}</v-card-text>
                <div class="text-center">
                    <v-dialog

                        width="360"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary lighten-2"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                class="mr-4"

                            >
                            Profile
                            </v-btn>
                            <router-link
                                :to="'/user/' + user.id + '/chat'"
                                class="text-decoration-none"
                                >
                                <v-btn
                                    color="grey lighten-2"
                                    dark
                                    @click="createChatLog(user.id)"

                                >
                                    <v-icon color="grey darken-3">mdi-chat-processing-outline</v-icon>
                                </v-btn>
                            </router-link>
                        </template>

                        <!-- modal -->
                        <v-card>
                            <userDetail
                                :user="user"
                                @click="createChatLog"
                            ></userDetail>
                        </v-card>
                    </v-dialog>
                </div>
            </v-card>
        </v-list>
    </v-card>
</template>

<script>
import userDetail from './user-detail.vue'

export default ({
    components: {
        userDetail
    },
    computed: {
        listupUser(){
            return this.$store.state.users.users;
        }
    },
    methods: {
        createChatLog(userId){
            let idExist = this.$store.state.messages.messages.some(message => message.id === userId);
            if(!idExist){
                //user idが存在しなければ、そのidのchatLogのベースをpush
                this.$store.commit('setChatLog', userId);
            }
        }
    }
})
</script>

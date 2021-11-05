<template>
    <div class="messageList">
        <v-card class="userList">
            <h1>This is an message list page</h1>
            <v-list
                max-height="70vh"
                class="overflow-y-auto px-10"
            >
                <v-simple-table>
                    <template v-slot:default>
                        <tbody class="text-center">
                            <tr
                                v-for="user in listupUser"
                                :key="user.name"
                                class="py-10"
                                height="72px"
                                @click="transitionToChatPage(user.id)"

                            >
                                <td class="text-center" width="8%">
                                    <v-avatar>
                                        <img
                                            :src="user.picture.large"
                                            :alt="user.name"
                                        >
                                    </v-avatar>
                                </td>
                                <td width="8%">{{ user.name }}</td>
                                <td class="text-start" width="68%">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis aliquid maxime rem, culpa provident corporis dolor eos</td>
                                <td width="16%">2021.10.27<br>20:41:30</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    computed: {
        listupUser(){
            return this.$store.state.users.users;
        }
    },
    methods: {
        transitionToChatPage(userId){
            return this.$router.push('/user/' + userId + '/chat/');
        }
    }
}
</script>

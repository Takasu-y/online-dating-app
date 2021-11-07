<template>
    <div class="messageList">
        <v-card class="userList">
            <v-app-bar><h1>Message List</h1></v-app-bar>
            <v-list
                max-height="70vh"
                class="overflow-y-auto px-6"
            >
                <v-simple-table>
                    <template v-slot:default>
                        <tbody class="text-center w-100">
                            <tr
                                v-for="user in getChatedList"
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
                                <td width="16%" v-if="getLastMessageById(user.id)">{{ getLastMessageById(user.id).timeStamp }}</td>
                                <td width="16%" v-else></td>
                                <td class="text-start" width="68%" v-if="getLastMessageById(user.id)">{{ getLastMessageById(user.id).text }}</td>
                                <td width="68%" v-else></td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-list>
        </v-card>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getUserById',
            'getChatedUserId',
            'getLastMessageById',
        ]),
        getChatedList(){
            let users = [];
            let idList = this.getChatedUserId;

            for(let id of idList){
                let userObj = this.getUserById(id);
                users.push(userObj);
            }

            //usersを日付順に並べ替える
            // users.sort( (a, b) => {
            //     return new Date(b.time) - new Date()
            // })


            return users;
        }

    },
    methods: {
        transitionToChatPage(userId){
            return this.$router.push('/user/' + userId + '/chat/');
        }
    }
}
</script>

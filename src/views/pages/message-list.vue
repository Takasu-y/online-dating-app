<template>
    <div class="messageList">
        <v-card class="userList border" elevation="0">
            <v-app-bar><h1>Message List</h1></v-app-bar>
            <v-list
                max-height="70vh"
                height="70vh"
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
                                <td width="16%">{{ user.timeStamp }}</td>
                                <td class="text-start" width="68%">{{ user.text }}</td>
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
            let idList = this.getChatedUserId; //chat履歴のあるユーザーidを取得する

            for(let id of idList){
                let userObj = this.getUserById(id);
                let lastMsg = this.getLastMessageById(id);

                console.log(lastMsg);

                if(lastMsg !== undefined){
                    users.push({
                        id: id,
                        name: userObj.name,
                        picture: userObj.picture,
                        timeStamp: lastMsg.timeStamp,
                        text: lastMsg.text
                    });
                }
            }

            //usersを日付順に並べ替える
            users.sort( (a, b) => {
                return new Date(b.timeStamp) - new Date(a.timeStamp);
            })

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

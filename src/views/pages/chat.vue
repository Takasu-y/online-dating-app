<template>
    <v-card
        class="chat d-flex justify-space-between flex-column"
        height="78vh">
        <chat-display
            ref="chatDisplay"
            class="px-4"
            :user="getUserById($route.params.id)"
            :messages="getMessageById($route.params.id)"
        ></chat-display>
        <v-footer padless>
            <v-col
                class="text-center"
                cols="12"
            >
                <v-text-field
                    v-model="inputText"
                    autofocus
                    clearable
                    height="16"
                    placeholder="Send Message..."
                    @keydown.enter="inputMessage($event, $route.params.id)"
                ></v-text-field>
            </v-col>
        </v-footer>
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
import chatDisplay from '../../components/chatDisplay.vue'

export default {
    data() {
        return {
            inputText: "",
        }
    },
    components: {
        chatDisplay
    },
    computed: {
        ...mapGetters([
            'getUserById',
            'getMessageById',
            'getChatedUserId',
        ]),
    },
    methods: {
        inputMessage(event, userId){
            if(this.inputText.length > 0){
                if(event.keyCode === 13){
                    let today = new Date();
                    let years = today.getFullYear();
                    let month = ("0" + today.getMonth()).slice(-2);
                    let days = ("0" + today.getDay()).slice(-2);
                    let hours = ("0" + today.getHours()).slice(-2);
                    let minutes = ("0" + today.getMinutes()).slice(-2);
                    let seconds = ("0" + today.getSeconds()).slice(-2);
                    let timeStamp = years
                                    + "-" + month
                                    + "-" + days
                                    + " " + hours
                                    + ":" + minutes
                                    + ":" + seconds;

                    let msgObj = {
                        me: true,
                        text: this.inputText,
                        timeStamp: timeStamp
                    }

                    this.$store.commit(
                        'setMessages',
                        {
                            userId: userId,
                            msgObj: msgObj
                        }
                    )

                    //replyをmessageのstoreに追加
                    this.$store.dispatch('fetchReply', {userId, msgObj});

                    //input areaをクリアする
                    this.inputText = "";

                    //chatLogを一番下までスクロール
                    this.scrollToBottom();
                }
            }
        },
        // scrollToBottom(){
        //     // let target = this.$refs.chatDisplay._vnode.children[2];
        // }
    }
}
</script>

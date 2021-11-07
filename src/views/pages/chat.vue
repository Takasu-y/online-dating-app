<template>
    <v-card
        class="chat d-flex justify-space-between flex-column"
        height="78vh">
        <chat-display
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
                    let msgObj = {
                        me: true,
                        text: this.inputText,
                        timeStamp: "2040-12-01 17:35:22"
                    }

                    this.$store.commit(
                        'setMessages',
                        {
                            userId: userId,
                            msgObj: msgObj
                        }
                    )

                    //input areaをクリアする
                    this.inputText = "";
                }
            }
        }
    }
}
</script>

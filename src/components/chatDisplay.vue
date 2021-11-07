<template>
    <div>
        <h1>{{ user.name }}</h1>
        <v-divider class="py-4"></v-divider>
        <v-card
            flat
            max-height="55vh"
            class="overflow-y-auto"
            v-if="messages"
        >
            <v-col
                class="py-0"
                cols=12
                v-for="message in messages"
                :key="message.id"

            >
                <v-card
                    flat
                    class="d-flex align-center mb-2"
                    :class=" { 'justify-end': message.me }"

                >
                    <v-avatar v-if="!message.me" class="mr-4">
                        <img
                            :src="user.picture.large"
                            :alt="user.name"
                        >
                    </v-avatar>
                    <v-card
                        max-width="30vw"
                    >
                        <p class="my-0 pl-4 text-start grey--text">{{ message.timeStamp.split(" ")[1] }}</p>
                        <p
                            class="rounded-xl px-4 py-2 my-0"
                            :class="{ 'grey': !message.me, 'green': message.me, 'black--text': message.me }"
                        >{{ message.text }}</p>
                    </v-card>
                </v-card>
            </v-col>

        </v-card>

    </div>
</template>

<script>
export default{
    props: {
        user: {
            type: Object,
            required: true
        },
        messages: {
            type: Array,
        }
    },
}
</script>

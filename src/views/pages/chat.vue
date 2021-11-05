<template>
    <div class="chat">
        <h1>This is an chat page</h1>
        <p>{{ $route.params.id }}</p>
        <div
            v-for="message in getMessageById($route.params.id).chatLog"
            :key="message.id"
        >
            <v-card>ID: {{ message.id }} / {{ message.me }} / {{ message.text }}</v-card>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        // getUser(){},
        ...mapGetters([
            'getMessageById',
        ])
    }
}
</script>

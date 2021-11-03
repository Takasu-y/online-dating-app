<template>
            <v-card
                    :key="user.name"
                    height="540"
                    width="360"
                    elevatrion="16"
                    dark
                    class="px-2 py-6 text-center"
            >
                <v-avatar size="120">
                    <img
                        :src="user.picture.large"
                        :alt="user.name"
                    >
                </v-avatar>
                <v-card-title class="d-block text-center">{{ user.name }}</v-card-title>
                <v-card-subtitle class="d-block text-center pb-1">{{ user.email }}</v-card-subtitle>
                <v-card-actions class="py-4">
                    <router-link :to="'/user/' + user.id + '/chat'" class="text-decoration-none mx-auto">
                        <v-btn
                        color="grey"
                        @click="dialog = false"
                        >
                            message
                        </v-btn>
                    </router-link>
                </v-card-actions>
                <v-spacer></v-spacer>
                <v-simple-table dark>
                    <template v-slot:default>
                    <tbody class="px-10">
                        <tr>
                            <td>Gender</td>
                            <td>{{ user.gender }}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{{ user.age }}</td>
                        </tr>
                        <!-- <tr>
                            <td>Email</td>
                            <td>{{ user.email }}</td>
                        </tr> -->
                        <tr>
                            <td>Country</td>
                            <td>{{ user.country }}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{{ user.state }}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{{ user.city }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card>
</template>

<script>

export default ({
    name: 'userDetail',
    props: {
        user: {
            type: Object,
            required: true
        }
    }
})
</script>

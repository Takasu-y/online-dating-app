<template>
    <div class="messageList">
        <h1>This is an message list page</h1>
        <v-card class="userList">
            <v-app-bar><h1>User List</h1></v-app-bar>
            <v-list>
                <v-list-item
                    v-for="user in listupUser"
                    :key="user.name"
                    height="320"
                    width="240"
                    elevation="16"
                    dark>
                    <v-list-item-avatar>
                        <img
                            :src="user.picture.large"
                            :alt="user.name"
                        >
                    </v-list-item-avatar>
                    <v-list-item-content>
                        {{ user.name }}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>
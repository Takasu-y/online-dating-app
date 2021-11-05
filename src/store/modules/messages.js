export default {
    state: {
        messages: [
            {
                id: "8be73a7c-45e0-4d63-8a00-3180e6d44415",
                chatLog: [
                    {
                        id: 1,
                        me: true,
                        text: "hello",
                        timeStamp: "2018-01-01 17:35:22"
                    },
                    {
                        id: 2,
                        me: false,
                        text: "nice to meet you",
                        timeStamp: "2019-02-01 17:35:22"
                    },
                    {
                        id: 3,
                        me: false,
                        text: "nice to meet you too",
                        timeStamp: "2019-05-01 17:35:22"
                    },
                ]
            },
            {
                id: "6deae466-fc3a-4567-94de-33db6faeb877",
                chatLog: [
                    {
                        id: 1,
                        me: true,
                        text: "good morning",
                        timeStamp: "2020-01-01 17:35:22"
                    },
                    {
                        id: 2,
                        me: false,
                        text: "how are you ?",
                        timeStamp: "2021-03-01 17:35:22"
                    },
                    {
                        id: 3,
                        me: true,
                        text: "good",
                        timeStamp: "2021-04-01 17:35:22"
                    },
                    {
                        id: 4,
                        me: false,
                        text: "have a nice day!!",
                        timeStamp: "2021-06-01 17:35:22"
                    },
                ]
            },
            {
                id: "b31e3ea9-4c3d-471f-8c06-80e709f9827a",
                chatLog: [
                    {
                        id: 1,
                        me: false,
                        text: "lets play tennis ?",
                        timeStamp: "2018-01-01 17:35:22"
                    },
                    {
                        id: 2,
                        me: true,
                        text: "ok i just think invite you!!",
                        timeStamp: "2019-12-01 17:35:22"
                    },
                ]
            },
        ],
    },
    actions: {},
    mutations: {
        setChatedUser: (state, userID) => {
            //新規の人のchat画面を開いたら、messageに追加
            console.log(state.messages);
            console.log(userID);
        },
        setMessages: (state, payload) => {
            //user IDが存在していれば、chat logに追加

            // payload = {
            //     id: 1,
            //     me: true,
            //     text: "texttext",
            //     timeStamp: "",
            // }
            state.messages = payload //適当
        }
    },
    getters: {
        getMessageById: state => id => {
            return state.messages.find(user => user.id === id);
        },
        getUserName: state => state.users.id,
        // getLastMessage: state =>
    },
};
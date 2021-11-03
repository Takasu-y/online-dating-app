export default {
    state: {
        messages: [
            {
                id: "b4161965-baa5-4f04-8933-7fb1fe824223",
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
                        timeStamp: "2019-01-01 17:35:22"
                    },
                ]
            }
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
            return state.messages.find(user => user.id === id)
        },
        getUserName: state => state.users.id
    },
};
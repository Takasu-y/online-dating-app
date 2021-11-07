export default {
    state: {
        messages: [
            {
                id: "8be73a7c-45e0-4d63-8a00-3180e6d44415",
                chatLog: [
                    {
                        me: true,
                        text: "hello",
                        timeStamp: "2018-01-01 17:35:22"
                    },
                    {
                        me: false,
                        text: "nice to meet you",
                        timeStamp: "2019-02-01 17:35:22"
                    },
                    {
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
                        me: true,
                        text: "good morning",
                        timeStamp: "2020-01-01 17:35:22"
                    },
                    {
                        me: false,
                        text: "how are you ?",
                        timeStamp: "2021-03-01 17:35:22"
                    },
                    {
                        me: true,
                        text: "good",
                        timeStamp: "2021-04-01 17:35:22"
                    },
                    {
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
                        me: false,
                        text: "lets play tennis ?",
                        timeStamp: "2018-01-01 17:35:22"
                    },
                    {
                        me: true,
                        text: "ok i just think invite you!!",
                        timeStamp: "2019-12-01 17:35:22"
                    },
                ]
            },
        ],
    },
    mutations: {
        setMessages: (state, {userId, msgObj}) => {

            let idExist = state.messages.some(message => message.id === userId);
            console.log("chat logが存在するか？" + idExist);
            if(!idExist){
                //user idが存在しなければ、そのidのchatLogのベースをpush
                state.messages.push({
                    id: userId,
                    chatLog: []
                })
            }

            //chat内容をpush
            state.messages.find(msg => msg.id === userId).chatLog.push(msgObj);
            console.log(state.messages.find(msg => msg.id === userId).chatLog);

        }
    },
    getters: {
        getMessageById: state => id => {
            return state.messages.find(msg => msg.id === id).chatLog;
        },
        getLastMessageById: (state,getters) => id => {
            return getters.getMessageById(id).slice(-1)[0];
        },
        getChatedUserId: state => {
            return state.messages.map(message => message.id);
        }
    },
};
export default {
    state: {
        messages: [],
    },
    actions: {
        fetchReply(context, {userId, msgObj}){
            // talk apiへPOSTリクエストでmessageとapiキーを投げる

            let form = new FormData();
            form.append('apikey', 'DZZOfVkk6sXS1X3aHyBEJjP9ukRJucuj');
            form.append('query', msgObj.text);

            fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk', {
                method: "POST",
                body: form
                }).then(response => response.json()).then(data => {
                    let replyObj = {
                        me: false,
                        text: data.results[0].reply,
                        timeStamp: msgObj.timeStamp
                    };

                    context.commit('setMessages', {
                        userId: userId,
                        msgObj: replyObj
                    });
                })

        }
    },
    mutations: {
        setChatLog: (state, userId) => {
            state.messages.push({
                id: userId,
                chatLog: []
            })
        },
        setMessages: (state, {userId, msgObj}) => {
            //chat内容をpush
            state.messages.find(msg => msg.id === userId).chatLog.push(msgObj);
        }
    },
    getters: {
        getMessageById: state => id => {
            let chatLog = state.messages.find(msg => msg.id === id).chatLog;
            return chatLog;
        },
        getLastMessageById: (state,getters) => id => {
            return getters.getMessageById(id).slice(-1)[0];
        },
        getChatedUserId: state => {
            return state.messages.map(message => message.id);
        }
    },
};
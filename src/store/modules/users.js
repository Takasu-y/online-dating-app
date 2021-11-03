// stateは状態を一元管理する
// actionsはmutationを指定する.また非同期関数も処理できる
// mutationはstateの状態を変更する処理を記述する
// gettersはstateの状態を処理を加えて取得する


export default {
    state: {
        users: [],
    },
    actions: {
        fetchUsers: (context) => {
            fetch('https://randomuser.me/api/?results=100').then(response => response.json()).then(data => {
                //apiから取得したデータの処理
                //promiseオブジェクトの取得に成功したら、commitする
                console.log("取得データ");

                let users = [];
                for(let user of data.results){
                    users.push({
                        id: user.login.uuid,
                        name: user.name.first + user.name.last,
                        gender: user.gender,
                        age: user.dob.age,
                        country: user.location.country,
                        state: user.location.state,
                        city: user.location.city,
                        email: user.email,
                        picture: user.picture
                    })
                }
                console.log(users);

                context.commit('setUsers', users);
            })
        }
    },
    mutations: {
        setUsers: (state, payload) => {
            state.users = payload;
        }
    },
    getters: {
        getUserById: state => id => {
            return state.users.find(user => user.id === id)
        },
        getUserName: state => state.users.id
    },
};
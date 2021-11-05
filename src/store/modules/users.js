// stateは状態を一元管理する
// actionsはmutationを指定する.また非同期関数も処理できる
// mutationはstateの状態を変更する処理を記述する
// gettersはstateの状態を処理を加えて取得する


export default {
    state: {
        users: [
            {
                "id": "8be73a7c-45e0-4d63-8a00-3180e6d44415",
                "name": "LanceTichelaar",
                "gender": "male",
                "age": 73,
                "country": "Netherlands",
                "state": "Limburg",
                "city": "Oosterbierum",
                "email": "lance.tichelaar@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/4.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
                }
            },
            {
                "id": "6deae466-fc3a-4567-94de-33db6faeb877",
                "name": "DenizTunçeri",
                "gender": "male",
                "age": 45,
                "country": "Turkey",
                "state": "Bartın",
                "city": "Rize",
                "email": "deniz.tunceri@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/76.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
                }
            },
            {
                "id": "b31e3ea9-4c3d-471f-8c06-80e709f9827a",
                "name": "AshleyCraig",
                "gender": "female",
                "age": 69,
                "country": "Ireland",
                "state": "Dún Laoghaire–Rathdown",
                "city": "Blessington",
                "email": "ashley.craig@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/61.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
                }
            },
            {
                "id": "2b2a7239-9487-4988-88b9-42ba4591cf57",
                "name": "ChristianRobin",
                "gender": "male",
                "age": 61,
                "country": "Switzerland",
                "state": "Fribourg",
                "city": "Monteceneri",
                "email": "christian.robin@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/47.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
                }
            },
            {
                "id": "2dfefe10-f832-4352-a132-93a76ee266cb",
                "name": "AnnFlores",
                "gender": "female",
                "age": 69,
                "country": "Australia",
                "state": "South Australia",
                "city": "Sunshine Coast",
                "email": "ann.flores@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/89.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
                }
            },
            {
                "id": "7477761e-9ea9-4256-8be1-bbc4ad02dee8",
                "name": "SachaPhilippe",
                "gender": "male",
                "age": 63,
                "country": "France",
                "state": "La Réunion",
                "city": "Avignon",
                "email": "sacha.philippe@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/85.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
                }
            },
            {
                "id": "0470b6c9-659f-463d-9fc9-0a2ee3240913",
                "name": "AlexandraJohnson",
                "gender": "female",
                "age": 25,
                "country": "New Zealand",
                "state": "Marlborough",
                "city": "Auckland",
                "email": "alexandra.johnson@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/44.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
                }
            },
            {
                "id": "157a849f-d560-4e50-a598-0dce052825c1",
                "name": "RoopeTolonen",
                "gender": "male",
                "age": 35,
                "country": "Finland",
                "state": "Uusimaa",
                "city": "Nilsiä",
                "email": "roope.tolonen@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/65.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
                }
            },
            {
                "id": "e3dda904-4d8b-4029-baf1-71c75a6bffe6",
                "name": "JenJennings",
                "gender": "female",
                "age": 53,
                "country": "United Kingdom",
                "state": "Tayside",
                "city": "Salford",
                "email": "jen.jennings@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/28.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
                }
            },
            {
                "id": "69cadc05-7d98-4068-bacf-11f55fd5fe7b",
                "name": "HannahGeorge",
                "gender": "female",
                "age": 76,
                "country": "Australia",
                "state": "South Australia",
                "city": "Mackay",
                "email": "hannah.george@example.com",
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/56.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
                }
            }
        ],
    },
    actions: {
        fetchUsers: (context) => {
            fetch('https://randomuser.me/api/?results=10').then(response => response.json()).then(data => {
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
    },
};


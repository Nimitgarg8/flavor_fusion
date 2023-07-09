
export const Record = {
    id:1,
    name:"",
    email:"",
    phone:0,
    address:"",
    total:0,

    changeName:function (name){
        this.name = name
    },
    changeEmail:function (email){
        this.email = email
    },
    changePhone:function (phone){
        this.phone = phone
    },
    changeAddress:function (address){
        this.address = address
    },
    changeTotal:function (total){
        this.total = total
    }
}
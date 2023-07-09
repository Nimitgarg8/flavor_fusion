import React from 'react'

export const foodItems = [
    {id:0,
    name:"Cheese burger",
    type:"food",
    count:0,
    price:80,
    url:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    changeCount: function (cnt){
        this.count = cnt;
    }
},
    {id:1,
        name:"Peri Peri fries",
        type:"food",
        count:0,
        price:120,
        url:"https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }
    },
    {
        id:2,
    name:"Biryani",
    type:"food",
    count:0,
    price:200,
    url:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    changeCount: function (cnt){
        this.count = cnt;
    }
    },
    {
    id:3,
    name:"Samosa",
    type:"food",
    count:0,
    price:15,
    url:"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    changeCount: function (cnt){
        this.count = cnt;
    }},
    {
    id:4,
    name:"Pav Bhaji",
    type:"food",
    count:0,
    price:80,
    url:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80",
    changeCount: function (cnt){
        this.count = cnt;
    }},
    {
        id:5,
        name:"Gajar ka  Halwa",
        type:"dessert",
        count:0,
        price:170,
        url:"https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:6,
        name:"Cheeze Pizza",
        type:"food",
        count:0,
        price:150,
        url:"https://images.freeimages.com/images/large-previews/4f3/hot-summer-jalapeno-pepper-and-meat-pizza-1632243.jpg",
        changeCount: function (cnt){
            this.count = cnt;
        }
        },
    {
        id:7,
        name:"Noodles",
        type:"food",
        count:0,
        price:100,
        url:"https://images.unsplash.com/photo-1617622141675-d3005b9067c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:8,
        name:"Choco Cake",
        type:"dessert",
        count:0,
        price:240,
        url:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=803&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:9,
        name:"Chilli Potato",
        type:"food",
        count:0,
        price:120,
        url:"https://images.unsplash.com/photo-1623689046286-01d812cc8bad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:10,
        name:"Momos",
        type:"food",
        count:0,
        price:60,
        url:"https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:11,
        name:"Lemon Mojito",
        type:"drink",
        count:0,
        price:100,
        url:"https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:12,
        name:"Oreo Shake",
        type:"drink",
        count:0,
        price:80,
        url:"https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:13,
        name:"Coffee",
        type:"drink",
        count:0,
        price:30,
        url:"https://images.pexels.com/photos/1036444/pexels-photo-1036444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:14,
        name:"Chai",
        type:"drink",
        count:0,
        price:20,
        url:"https://images.pexels.com/photos/17391565/pexels-photo-17391565/free-photo-of-drink-tea-chai-tea-bag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:15,
        name:"Gulab Jamun",
        type:"dessert",
        count:0,
        price:25,
        url:"https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
    {
        id:16,
        name:"Ice Cream",
        type:"dessert",
        count:0,
        price:70,
        url:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=708&q=80",
        changeCount: function (cnt){
            this.count = cnt;
        }},
        {
            id:17,
            name:"Red Sauce Pasta",
            type:"food",
            count:0,
            price:120,
            url:"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            changeCount: function (cnt){
                this.count = cnt;
            }},
            {
                id:18,
                name:"Fresh Orange Juice",
                type:"drink",
                count:0,
                price:60,
                url:"https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                changeCount: function (cnt){
                    this.count = cnt;
                }},
                {
                    id:19,
                    name:"Kesar Badam MilkShake",
                    type:"drink",
                    count:0,
                    price:70,
                    url:"https://images.pexels.com/photos/593126/pexels-photo-593126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    changeCount: function (cnt){
                        this.count = cnt;
                    }},
                    {
                        id:20,
                        name:"Strawberry Cake",
                        type:"dessert",
                        count:0,
                        price:90,
                        url:"https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        changeCount: function (cnt){
                            this.count = cnt;
                        }}
]


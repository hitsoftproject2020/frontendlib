import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//首页区组件
import AdminLogin from "./../components/admin/login.vue";
import HomeMain  from "./../components/home/main.vue";
//引入Customer的组件
import CustomerMain  from "./../components/customer/main.vue";
import CustomerList  from "./../components/customer/list.vue";
import CustomerAdd  from "./../components/customer/add.vue";
import CustomerModify  from "./../components/customer/modify.vue";
import CustomerView  from "./../components/customer/view.vue";

//引入Room的组件
import RoomMain  from "./../components/room/main.vue";
import RoomList  from "./../components/room/list.vue";
import RoomAdd  from "./../components/room/add.vue";
import RoomModify  from "./../components/room/modify.vue";
import RoomView  from "./../components/room/view.vue";

//引入RoomType的组件
import RoomTypeMain  from "./../components/roomtype/main.vue";
import RoomTypeList  from "./../components/roomtype/list.vue";
import RoomTypeAdd  from "./../components/roomtype/add.vue";
import RoomTypeModify  from "./../components/roomtype/modify.vue";
import RoomTypeView  from "./../components/roomtype/view.vue";

//引入RoomOrder的组件
import RoomOrderMain  from "./../components/roomorder/main.vue";
import RoomOrderList  from "./../components/roomorder/list.vue";
import RoomOrderAdd  from "./../components/roomorder/add.vue";
import RoomOrderModify  from "./../components/roomorder/modify.vue";
import RoomOrderView  from "./../components/roomorder/view.vue";

//引入Service组件
import ServiceMain  from "./../components/service/main.vue";
import ServiceList  from "./../components/service/list.vue";
import ServiceAdd  from "./../components/service/add.vue";
import ServiceModify  from "./../components/service/modify.vue";
import ServiceView  from "./../components/service/view.vue";

//引入ServiceOrder组件
import ServiceOrderMain  from "./../components/serviceorder/main.vue";
import ServiceOrderList  from "./../components/serviceorder/list.vue";
import ServiceOrderAdd  from "./../components/serviceorder/add.vue";
import ServiceOrderModify  from "./../components/serviceorder/modify.vue";
import ServiceOrderView  from "./../components/serviceorder/view.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/customer",name:"customermain", component:CustomerMain,children:[
		    {path:"list",name:"customerlist",component:CustomerList},
		    {path:"add",name:"customeradd",component:CustomerAdd},
			{path:"modify/:no",name:"customermodify",component:CustomerModify},
			{path:"view/:no",name:"customerview",component:CustomerView,props:true},
			{path:"", redirect: "list" }
	    ]},
	{path:"/room",name:"roommain", component:RoomMain,children:[
			{path:"list",name:"roomlist",component:RoomList},
			{path:"add",name:"roomadd",component:RoomAdd},
			{path:"modify/:no",name:"roommodify",component:RoomModify},
			{path:"view/:no",name:"roomview",component:RoomView},
			{path:"", redirect: "list" }
		]},
	{path:"/roomorder",name:"roomordermain", component:RoomOrderMain,children:[
			{path:"list",name:"roomorderlist",component:RoomOrderList},
			{path:"add",name:"roomorderadd",component:RoomOrderAdd},
			{path:"modify/:no",name:"roomordermodify",component:RoomOrderModify},
			{path:"view/:no",name:"roomorderview",component:RoomOrderView},
			{path:"", redirect: "list" }
		]},	
	{path:"/roomtype",name:"roomtypemain", component:RoomTypeMain,children:[
			{path:"list",name:"roomtypelist",component:RoomTypeList},
			{path:"add",name:"roomtypeadd",component:RoomTypeAdd},
			{path:"modify/:no",name:"roomtypemodify",component:RoomTypeModify},
			{path:"view/:no",name:"roomtypeview",component:RoomTypeView},
			{path:"", redirect: "list" }
		]},
	{path:"/service", name:"servicemain", component:ServiceMain,children:[
			{path:"list",name:"servicelist",component:ServiceList},
			{path:"add",name:"serviceadd",component:ServiceAdd},
			{path:"modify/:id",name:"servicemodify",component:ServiceModify,props:true},
			{path:"view/:id",name:"serviceview",component:ServiceView,props:true},
			{path:"", redirect: "list" }
		]},
	{path:"/serviceorder", name:"serviceordermain", component:ServiceOrderMain,children:[
			{path:"list",name:"serviceorderlist",component:ServiceOrderList},
			{path:"add",name:"serviceorderadd",component:ServiceOrderAdd},
			{path:"modify/:id",name:"serviceordermodify",component:ServiceOrderModify,props:true},
			{path:"view/:id",name:"serviceorderview",component:ServiceOrderView,props:true},
			{path:"", redirect: "list" }
		]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router

<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间订单管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">订单编号</th>
					<th scope="col">房客ID</th>
					<th scope="col">房间ID</th>
					<th scope="col">预定日期</th>
					<th scope="col">入住日期</th>
					<th scope="col">离开日期</th>
					<th scope="col">订单状态</th>
					<th scope="col">备注</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="rom in roomorderList" v-bind:key="rom.roid">
				  <td>{{rom.roid}}</td>
				  <td>{{rom.customer.cid}}</td>
				  <td>{{rom.room.rid}}</td>
				  <td>{{rom.rodate}}</td>
				  <td>{{rom.checkinDate}}</td>
				  <td>{{rom.checkoutDate}}</td>
				  <td>{{rom.rostate}}</td>
				  <td>{{rom.roremark}}</td>
					<td>
					  <router-link v-bind:to="'/roomorder/modify/'+rom.roid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteRoomOrder(rom.roid)"  class="btn btn-danger">删除</a>
					  <router-link to="/roomorder/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/roomorder/add" class="btn btn-default">增加房间订单</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomOrderList",
		data(){
			return {
				roomorderList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/roomorder/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.roomorderList=result.data.list;
					
				});
			},
			deleteBehave(roid){
				let checkresult=confirm("您确认要删除此订单么");
				if(checkresult){
					axios.post("http://localhost:8200/roomorder/delete",{roid:roid}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}


			}
		}
	}
</script>

<style>
</style>

<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">房间编号</th>
					<th scope="col">房间楼层</th>
					<th scope="col">房型编号</th>
					<th scope="col">房型状态</th>
					<th scope="col">备注</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="rm in roomList" v-bind:key="rm.rid">
				  <td>{{rm.rid}}</td>
				  <td>{{rm.floor}}</td>
				  <td>{{rm.roomtype.tid}}</td>
				  <td>{{rm.rstate}}</td>
				  <td>{{rm.rremark}}</td>
					<td>
					  <router-link v-bind:to="'/room/modify/'+rm.rid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteRoom(rm.rid)"  class="btn btn-danger">删除</a>
					  <router-link to="/room/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/room/add" class="btn btn-default">增加房间</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomList",
		data(){
			return {
				roomList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/room/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.roomList=result.data.list;
					
				});
			},
			deleteRoom(rid){
				let checkresult=confirm("您确认要删除此房间么");
				if(checkresult){
					axios.post("http://localhost:8200/room/delete",{rid:rid}).then(result=>{
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

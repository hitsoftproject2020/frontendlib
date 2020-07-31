<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房型管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">房型编号</th>
					<th scope="col">房型名称</th>
					<th scope="col">房型价格</th>
					<th scope="col">房型床位数</th>
					<th scope="col">备注</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="rtm in roomtypeList" v-bind:key="rtm.tid">
				  <td>{{rtm.tid}}</td>
				  <td>{{rtm.tname}}</td>
				  <td>{{rtm.tprice}}</td>
				  <td>{{rtm.bedbum}}</td>
				  <td>{{rtm.tremark}}</td>
					<td>
					  <router-link v-bind:to="'/roomtype/modify/'+rtm.tid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteRoomType(rtm.tid)"  class="btn btn-danger">删除</a>
					  <router-link to="/roomtype/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/roomtype/add" class="btn btn-default">增加房型</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomTypeList",
		data(){
			return {
				roomtypeList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/roomtype/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.roomtypeList=result.data.list;
					
				});
			},
			deleteRoomType(tid){
				let checkresult=confirm("您确认要删除此房型么");
				if(checkresult){
					axios.post("http://localhost:8200/roomtype/delete",{tid:tid}).then(result=>{
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

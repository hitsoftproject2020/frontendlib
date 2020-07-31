<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">服务管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">服务编号</th>
					<th scope="col">服务名称</th>
					<th scope="col">服务价格</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="sm in serviceList" v-bind:key="sm.sid">
				  <td>{{sm.sid}}</td>
				  <td>{{sm.sname}}</td>
				  <td>{{sm.sprice}}</td>
					<td>
					  <router-link v-bind:to="'/service/modify/'+sm.sid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteService(sm.sid)"  class="btn btn-danger">删除</a>
					  <router-link to="/service/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/service/add" class="btn btn-default">增加房型</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"ServiceList",
		data(){
			return {
				serviceList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/service/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.serviceList=result.data.list;
					
				});
			},
			deleteService(sid){
				let checkresult=confirm("您确认要删除此房型么");
				if(checkresult){
					axios.post("http://localhost:8200/service/delete",{sid:sid}).then(result=>{
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

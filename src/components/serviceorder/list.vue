<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">服务订单管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">订单编号</th>
					<th scope="col">房客ID</th>
					<th scope="col">服务ID</th>
					<th scope="col">数量</th>
					<th scope="col">订单日期</th>
					<th scope="col">订单状态</th>
					<th scope="col">备注</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="som in serviceorderList" v-bind:key="som.soid">
				  <td>{{som.soid}}</td>
				  <td>{{som.customer.cid}}</td>
				  <td>{{som.service.sid}}</td>
				  <td>{{som.serviceNum}}</td>
				  <td>{{som.sodate}}</td>
				  <td>{{som.sostate}}</td>
				  <td>{{som.soremark}}</td>
					<td>
					  <router-link v-bind:to="'/serviceorder/modify/'+sm.sid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteService(sm.sid)"  class="btn btn-danger">删除</a>
					  <router-link to="/serviceorder/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/serviceorder/add" class="btn btn-default">增加房型</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"ServiceOrderList",
		data(){
			return {
				serviceorderList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/serviceorder/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.serviceorderList=result.data.list;
					
				});
			},
			deleteServiceOrder(soid){
				let checkresult=confirm("您确认要删除此房型么");
				if(checkresult){
					axios.post("http://localhost:8200/serviceorder/delete",{soid:soid}).then(result=>{
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

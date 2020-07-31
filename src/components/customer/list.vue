<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房客管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">房客编号</th>
				  <th scope="col">房客用户名</th>
				  <th scope="col">房客密码</th>
				  <th scope="col">房客真实姓名</th>
				  <th scope="col">房客性别</th>
				  <th scope="col">房客身份证号码</th>
				  <th scope="col">房客电话号码</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="cm in customerList" v-bind:key="cm.cid">
				  <td>{{cm.cid}}</td>
				  <td>{{cm.cnameString}}</td>
				  <td>{{cm.cpassWord}}</td>
				  <td>{{cm.crealName}}</td>
				  <td>{{cm.csex}}</td>
				  <td>{{cm.cidno}}</td>
				  <td>{{cm.cphoneno}}</td>
					<td>
					  <router-link v-bind:to="'/customer/modify/'+cm.cid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteCustomer(cm.cid)"  class="btn btn-danger">删除</a> 
					  <router-link to="/customer/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		
		<!-- /.box-body -->
		<router-link to="/customer/add" class="btn btn-default">增加部门</router-link>
	</div>
	
</template>

<script>
	//import axios from "axios";
	export default {
		name:"CustomerList",
		data(){
			return {
				customerList:[]
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/customer/getbyall",{
					params:{
						
					}
				}).then(result=>{
					this.customer=result.data.list;
					
				});
			},
			deleteCustomer(cid){
				let checkresult=confirm("您确认要删除此房客信息么");
				if(checkresult){
					this.axiosJSON.post("/customer/delete",{cid:cid}).then(result=>{
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

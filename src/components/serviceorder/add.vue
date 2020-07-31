<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加服务订单</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客ID</label>
				    <input type="text" class="form-control" v-model="service.cid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">服务ID</label>
				    <input type="text" class="form-control" v-model="service.sid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">数量</label>
				    <input type="text" class="form-control" v-model="service.serviceNum">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">订单日期</label>
				    <input type="text" class="form-control" v-model="serviceorder.sodate">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">订单状态</label>
				    <input type="text" class="form-control" v-model="serviceorder.sostate">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">备注</label>
				    <input type="text" class="form-control" v-model="serviceorder.soremark">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/serviceorder/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"ServiceOrderAdd",
		data(){
			return {
				serviceorder:{
					
					customer:{
						cid:0
					},
					service:{
						sid:0
					},
					
					serviceNum:0,
					sodate:null,
					sostate:"",
					soremark:""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/serviceorder/add",this.service).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/serviceorder/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>

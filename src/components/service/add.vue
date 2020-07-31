<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加服务类型</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">服务名称</label>
				    <input type="text" class="form-control" v-model="service.sname">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">服务价格</label>
				    <input type="text" class="form-control" v-model="service.sprice">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/service/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"ServiceAdd",
		data(){
			return {
				service:{
					sname:"",
					sprice:0
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/service/add",this.service).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/service/list"); //编程方式跳转到部门列表组件
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

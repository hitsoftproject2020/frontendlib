<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加房型</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">房型名称</label>
				    <input type="text" class="form-control" v-model="roomtype.tname">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房型价格</label>
				    <input type="text" class="form-control" v-model="roomtype.tprice">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/roomtype/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomTypeAdd",
		data(){
			return {
				roomtype:{
					tname:"",
					tprice:0
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/roomtype/add",this.roomtype).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/roomtype/list"); //编程方式跳转到部门列表组件
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

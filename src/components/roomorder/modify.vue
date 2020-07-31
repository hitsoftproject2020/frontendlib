<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改爱好</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">入住日期</label>
                    <input type="text" class="form-control" v-model="behave.no" >
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">离开日期</label>
                    <input type="text" class="form-control" v-model="behave.name">
                </div>
				<div class="form-group">
				    <label for="exampleInputPassword1">订单状态</label>
				    <input type="text" class="form-control" v-model="behave.name">
				</div>
				<div class="form-group">
				    <label for="exampleInputPassword1">备注</label>
				    <input type="text" class="form-control" v-model="behave.name">
				</div>
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/roomorder/list" class="btn btn-default">取消</router-link>
            </form>

        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</template>

<script>
    import axios from "axios";
    //部门修改组件
    export default {
        name:"RoomOrderModify",
        data(){
            return {
                roomorder:{
                    checkinDate:null,
					checkoutDate:null,
					rostate:"",
                    roremark:"",
					roid:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let roomorderId=this.$route.params.roid;
            this.getRoomOrder(roomorderId);

        },
        methods:{
            getRoomOrder(roid){

                axios.get("http://localhost:8200/roomorder/get?no="+roid).then(result=>{
                    this.roomorder=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/roomorder/modify",this.roomorder).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/roomorder/list"); //编程方式跳转到爱好列表组件
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

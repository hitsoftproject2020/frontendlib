<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改房型</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">房型床位数</label>
                    <input type="text" class="form-control" v-model="roomtype.bednum" >
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">备注</label>
                    <input type="text" class="form-control" v-model="roomtype.tremark">
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/roomtype/list" class="btn btn-default">取消</router-link>
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
        name:"RoomTypeModify",
        data(){
            return {
                roomtype:{
                    bednum:0,
                    tremark:"",
					tid:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let roomtypeId=this.$route.params.tid;
            this.getRoomType(roomtypeId);

        },
        methods:{
            getRoomType(tid){

                axios.get("http://localhost:8200/roomtype/getbyno?no="+tid).then(result=>{
                    this.roomtype=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/roomtype/modify",this.roomtype).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/roomtype/list"); //编程方式跳转到爱好列表组件
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

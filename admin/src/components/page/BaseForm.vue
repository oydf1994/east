<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="商品地址">
                        <el-input v-model="url"></el-input>
                        <el-button @click="getGoods">提取</el-button>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品价格(元)">
                        <el-input v-model="form.price"></el-input>
                    </el-form-item>
                    <el-form-item label="开奖模式">
                        <el-radio-group v-model="form.type">
                            <el-radio label="1">定时开奖</el-radio>
                            <el-radio label="2">人数开奖</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="开奖时间" v-if="form.type == 1">
                        <el-date-picker v-model="form.lottery" type="datetime" placeholder="选择日期时间"
                            value-format="timestamp">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="开奖人数" v-if="form.type == 2">
                        <el-input-number v-model="form.people" :min="1">
                        </el-input-number>
                    </el-form-item>
                    <el-form-item label="初始化人员">
                        <el-input-number v-model="form.initPeople" :min="1">
                        </el-input-number>
                    </el-form-item>
                    <!-- <el-form-item label="发布模式">
                        <el-radio-group v-model="form.radio">
                            <el-radio label="定时发布"></el-radio>
                            <el-radio label="立即发布"></el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                    <el-form-item label="发布时间">
                        <el-date-picker v-model="form.timing" type="datetime" placeholder="选择日期时间"
                            value-format="timestamp">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="商品banner图">
                        <el-row>
                            <el-col :span="24">
                                <el-card>
                                    <img :src="o" class="image" v-for="(o, index) in form.banner" :key="o"
                                        @click="handlePictureCardPreview(o)">
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="商品详情图">
                        <el-row>
                            <el-col :span="24">
                                <el-card>
                                    <img :src="o" class="image" v-for="(o, index) in form.details" :key="o"
                                        @click="handlePictureCardPreview(o)">
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">发布抽奖</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import host from '../../assets/javascript/host'
    export default {
        name: 'baseform',
        data: function () {
            return {
                form: {
                    banner: [], // banner 图标上传列表
                    details: [] // 商品详情图上传列表
                },
                action: host + '/upload',
                dialogImageUrl: "",
                dialogVisible: false,
                url: ''
            }
        },
        methods: {
            getGoods() {
                this.$api.get('http://127.0.0.1:3000/query', {
                    url: this.url
                }).then(res => {
                    if (res) {
                        this.form = {
                            ...this.form,
                            ...res
                        }
                    }
                })
            },
            // 文件上传成功
            handleAvatarSuccess(response, file, fileList) {
                this.form.banner = fileList.map(i => {
                    return i.response.data
                })
                console.log(this.form.banner)
            },
            handleAvatarSuccess2(response, file, fileList) {
                this.form.details = fileList.map(i => {
                    return i.response.data
                })
                console.log(this.form.details)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file;
                this.dialogVisible = true;
            },
            handleRemove(file, fileList) {
                this.form.banner = fileList.map(i => {
                    return i.response.data
                })
            },
            handleRemove2(file, fileList) {
                this.form.details = fileList.map(i => {
                    return i.response.data
                })
            },
            onSubmit() {
                this.$api.post('/goods/add', this.form).then(res => {
                    if (res) {
                        console.log(res)
                        this.$api.success('提交成功！');
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .input {
        width: 350px;
    }

    .image {
        width: 200px;
        margin-right: 10px;
    }
</style>
<template>
    <div>
        <div class="container">
            <div class="form-box">
                <!-- <el-upload :action="src" list-type="picture-card" :on-preview="handlePictureCardPreview" drag
                    :on-success="handleAvatarSuccess">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog> -->
                <input type="file" multiple @change="upFile">
            </div>
        </div>
    </div>
</template>

<script>
    import host from '../../assets/javascript/host'
    export default {
        data: function () {
            return {
                fileList: [],
                src: host + '/upload',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handlePreview(file) {
                console.log(file);
            },
            handleAvatarSuccess(res, file) {
                var user = {
                    nickName: 'Mia',
                    avatarUrl: res.data,
                    gender: 'admin'
                }
                this.$api.post('/user/add', user).then(res => {
                    console.log(res)
                })
            },
            async upFile(e) {
                let files = e.target.files;
                for (let i = 0; i < files.length; i++) {
                    let formData = new FormData();
                    formData.append('myFile', files[i]);
                    var res = await this.$api.file('/upload', formData)
                    var user = {
                        nickName: 'Mia',
                        avatarUrl: res,
                        gender: 'admin'
                    }
                    await this.$api.post('/user/add', user)
                }
            }
        }
    }
</script>
<style scoped>
    .input {
        width: 350px;
    }

    .image {
        width: 100px;
        height: 100px;
    }
</style>
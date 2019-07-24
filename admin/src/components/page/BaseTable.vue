<template>
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.name" placeholder="筛选名称关键词" class="handle-input mr10"></el-input>
                <el-select v-model="query.status" placeholder="状态" class="mr10">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                <el-button type="primary" icon="el-icon-delete" class="handle-del mr10">批量上架</el-button>
                <el-button type="primary" icon="el-icon-delete" class="handle-del mr10">批量下架</el-button>
            </div>
            <el-table :data="list" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="名称">
                </el-table-column>
                <el-table-column prop="price" label="价格">
                </el-table-column>
                <el-table-column prop="type" label="开奖模式">
                </el-table-column>
                <el-table-column prop="address" label="发布时间">
                </el-table-column>
                <el-table-column prop="initPeople" label="初始化人数">
                </el-table-column>
                <el-table-column prop="currentPeople" label="已参加人数">
                </el-table-column>
                <el-table-column prop="address" label="开奖状态">
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="del(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {
        fetchData
    } from '../../api/index';
    export default {
        name: 'basetable',
        data() {
            return {
                options: [{
                    value: 0,
                    label: '全部'
                }, {
                    value: 1,
                    label: '未上架'
                }, {
                    value: 2,
                    label: '上架中'
                }, {
                    value: 3,
                    label: '已下架'
                }],
                query: {},
                list: [],
                cur_page: 1,
                editVisible: false,
                delVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
            }
        },
        created() {
            this.getList()
        },
        computed: {},
        methods: {
            getList() {
                this.$api.get('/goods/list').then(res => {
                    if (res) {
                        this.list = res
                    }
                })
            },
            del(id) {
                this.$api.get('/goods/del', {
                    id: id
                }).then(res => {
                    console.log(res)
                    if (res) {
                        this.getList()
                    }
                })
            },
            handleSelectionChange() {},
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
            },
            // 获取 easy-mock 的模拟数据
            search() {},
            // 编辑
            handleEdit() {},
            // 确定删除
            deleteRow() {}
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .del-dialog-cnt {
        font-size: 16px;
        text-align: center
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }
</style>
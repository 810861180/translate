<template>
    <div class="main_bg">
        <div class="main_div">
            <b-container>
                <b-jumbotron header="在线翻译！" lead="简单 / 易用 / 便捷，支持English、日本語、한국어、français、русский язык..." ></b-jumbotron>
                <div class="subject">
                    <div>
                        <b-form-select :options="foods" v-model="food"/>
                        <b-button @click="translateText">翻译</b-button>
                    </div>
                    <textarea class="imports" placeholder="" v-model="content"></textarea>
                    <textarea class="result" disabled v-model="contents"></textarea>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
let md5 = require('md5')
export default {
    data() {
        return{
            food:'EN',
            content:'',
            contents:'',
            apiUrl:'http://openapi.youdao.com/api',
            
            data:{
                query: '',
                appKey:'6f52c18fea79fc8d',
                from: 'auto',
                to: '',
                salt:(new Date).getTime(),
                sign: null,
            },
            foods: [
                {value: 'EN', text: 'English' },
                {value: 'ja', text: '日本語' },
                {value: 'ko', text: '한국어' },
                {value: 'fr', text: '法语' },
                {value: 'ru', text: '俄语' },
                {value: 'pt', text: '葡萄牙文' },
                {value: 'es', text: '西班牙文' },
                {value: 'vi', text: '越南文' }
            ],
        }
    },
    watch: {
        content() {
            if (this.content === '') {
                this.contents = ''
            }
        }
    },
    methods:{
        translateText() {
            let data = this.data
            data.query = this.content
            data.to = this.food
            data.sign = md5(data.appKey + data.query + data.salt + 'X7fcyESGYgaR324a7n6HY5bLP6gkWDeL')
            debugger
            this.$http.post(this.apiUrl, data)
            .then((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
    
</style>

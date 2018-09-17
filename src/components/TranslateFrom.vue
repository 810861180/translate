<template>
    <div class="main_bg">
        <div class="main_div">
            <b-container>
                <b-jumbotron header="在线翻译！" lead="简单 / 易用 / 便捷，支持English、日本語、한국어、ไทย" ></b-jumbotron>
                <div class="subject">
                    <div>
                        <b-form-select :options="foods" v-model="food"/>
                        <b-button @click="translate">翻译</b-button>
                    </div>
                    <textarea class="imports" placeholder="" v-model="content"></textarea>
                    <textarea class="result" disabled v-model="contents"></textarea>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            food:1,
            content:'',
            contents:'',
            foods: [
                {value: 1, text: 'English' },
                {value: 2, text: '日本語' },
                {value: 3, text: '한국어' },
                {value: 4, text: 'ไทย' }
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
        translate() {
            this.contents = this.content
        }
    }
}
</script>

<style scoped>
    
</style>

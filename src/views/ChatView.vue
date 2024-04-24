<template>
    <div class="chat-container" style="height: 60vh;width:37vh;">
        <!-- 标题区域 -->
        <div class="title-container">
            <div class="title-name">聊天</div>
            <div class="title-sub">在这里可以向我提问关于茶的专业知识~</div>
        </div>
        <!-- 主要聊天内容区域 -->
        <div class="message-container">
            <!-- 若没有消息默认显示内容 -->
            <div v-if="messageList.length == 0" class="default-container">
                <div style="text-align: center;">
                    <t-icon name="gesture-ranslation-1" size="40" color="var(--td-brand-color-4)"></t-icon>
                    <div class="title-sub">你好！我能为你做些什么？</div>
                </div>
            </div>
            <div class="message-item" v-for="item,index in messageList" :key="index">
                <t-comment
                :author="item.author"
                :avatar="item.avatar"
                :datetime="item.datetime"
                :content="item.content"
                >
                </t-comment>
            </div>
            <div v-if="isgenerating" class="stop-generating-container">
                <t-popup content="停止生成">
                    <t-icon name="stop-circle" size="14" style="cursor: pointer;" @click="onClickCancel"></t-icon>
                </t-popup>
            </div>

        </div>
        <!-- 输入框区域 -->
        <div class="input-box-container">
            <!-- 上方工具栏区域 -->
            <div class="input-toolbox-container">
                <t-popup content="清除对话内容" >
                    <t-icon name="clear" size="16" @click="clearMessage" style="cursor: pointer;"></t-icon>
                </t-popup>
            </div>
            <!-- 输入框和发送区域 -->
            <div style="display: flex;">
                <t-textarea
                v-model="inputvalue"
                placeholder="在这里输入..."
                name="description"
                :autosize="{ minRows: 2, maxRows: 2 }"
            />
            <div style="width: 4px"></div>
            <t-button @click="sendMessage" style="height: 55.33px;" ><t-icon name="send"></t-icon></t-button>
            </div>

        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            inputvalue:'',
            isgenerating:false,
            messageList:[
                // {
                //     avatar:"https://tdesign.gtimg.com/site/avatar.jpg",
                //     author:"小灵",
                //     datetime:"今天16:38",
                //     content:"这里是评论者写的评论内容。"
                // },
                // {
                //     avatar:"https://tdesign.gtimg.com/site/avatar.jpg",
                //     author:"你",
                //     datetime:"今天16:38",
                //     content:"这里是评论者写的评论内容。"
                // },
                // {
                //     avatar:"https://tdesign.gtimg.com/site/avatar.jpg",
                //     author:"小灵",
                //     datetime:"今天16:39",
                //     content:"这里是评论者写的评论内容ddd。"
                // },
            ],
            timeoutID:null,
            avatarList:[
                <div><t-avatar>User</t-avatar></div>,
                <div><t-avatar>小灵</t-avatar></div>
            ]
        }
    },
    methods:{
        async sendMessage(){
            if (this.inputvalue == ''){
                return
            }
            var author = '你'
            var avatar = this.avatarList[0]
            let new_message = this.createMessage(avatar,author,this.inputvalue);
            this.messageList.push(new_message)
            this.inputvalue = ''

            this.isgenerating=true

            await this.getResponseFromAPI()
        },

        getTimeString(){
            let now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let timeString = `${hours}:${minutes}`;
            return timeString;
        },

        createMessage(avatar,author,content_string){
            let now_time = this.getTimeString();
            let message = {
                avatar:avatar,
                author:author,
                datetime:"今天"+now_time,
                content:content_string
            }
            return message
        },

        clearMessage(){
            // console.log('clear');
            this.messageList = []
        },

        onClickCancel(){
            // console.log('cancel');
            clearTimeout(this.timeoutID)
            var length = this.messageList.length
            this.messageList[length-1].content = '已取消生成。'
            this.isgenerating=false
        },

        async getResponseFromAPI(){
            // 模拟5秒后得到返回
            var that = this
            var author = '小灵'
            var avatar = this.avatarList[1]
            // 先给用户一个正在加载的动画,并且可以取消
            var response_loading = <div><t-loading text="加载中..." size="small"></t-loading></div>
            let new_response = this.createMessage(avatar,author,response_loading)
            this.messageList.push(new_response)

            this.timeoutID = setTimeout(function() {
                // console.log("5 秒后执行");
                // 获取到最后一个message,更改content
                let response = '这是返回文字。'
                var response_div = function(){
                    return <vue-typed-js strings={[response]} loop={false} startDelay={0} typeSpeed={100} contentType={'html'} showCursor={false} ><span class="typing"></span></vue-typed-js>
                }

                new_response.content = response_div
                that.messageList.pop()
                that.messageList.push(new_response)
                that.isgenerating=false
            }, 5000);
        }
    }
}


</script>

<style scoped>
.chat-container{
    background-color: white;
}
.title-container{
    height: 50px;
    border-bottom: 1px solid var(--td-gray-color-3);
}
.title-name{
    color: var(--td-brand-color-6);
    text-align: center;
    font-size: 14px;
    padding: 4px 0 0px 0;
}
.title-sub{
    color: var(--td-brand-color-4);
    text-align: center;
    font-size: 10px;
}

.message-container{
    height: calc(100% - 140px);
    overflow-y: auto;
    background-color: var(--td-gray-color-1)
}
.message-item{
    padding: 8px 16px;
    /* background-color:white; */
    border-bottom: 1px solid var(--td-gray-color-2);
}
.input-box-container{
    border-top: 1px solid var(--td-gray-color-3);
    padding: 8px 8px 0 8px;
}
.input-toolbox-container{
    display: flex;
    margin-bottom: 8px;
}
.stop-generating-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
}
.default-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
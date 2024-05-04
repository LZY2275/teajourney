<template>
    <div class="chat-container" style="height: 60vh;width:37vh;">
        <!-- 标题区域 -->
        <div class="title-container">
            <div class="title-name">{{$t('聊天')}}</div>
            <div class="title-sub">{{$t('在这里可以向我提问关于茶的专业知识')}}~</div>
        </div>
        <!-- 主要聊天内容区域 -->
        <div class="message-container">
            <!-- 若没有消息默认显示内容 -->
            <div v-if="messageList.length == 0" class="default-container">
                <div style="text-align: center;">
                    <t-icon name="gesture-ranslation-1" size="40" color="var(--td-brand-color-4)"></t-icon>
                    <div class="title-sub">{{$t('你好！我能为你做些什么？')}}</div>
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
                <t-popup :content="$t('停止生成')">
                    <t-icon name="stop-circle" size="14" style="cursor: pointer;" @click="onClickCancel"></t-icon>
                </t-popup>
            </div>

        </div>
        <!-- 输入框区域 -->
        <div class="input-box-container">
            <!-- 上方工具栏区域 -->
            <div class="input-toolbox-container">
                <div style="display: flex;align-items: center;height: 23.33px;">
                    <t-popup :content="$t('清除对话内容')">
                        <t-icon name="clear" size="16" @click="clearMessage" style="cursor: pointer;"></t-icon>
                    </t-popup>
                </div>
                <div style="display: flex;align-items: center;height: 23.33px;">
                    <t-popup :content="$t('前一页')">
                        <t-icon name="chevron-left" size="16" @click="current = current - 1 < 0 ? 1 : current - 1" style="cursor: pointer;"></t-icon>
                    </t-popup>
                </div>
                <div style="height: 23.33px;flex: 1;">
                    <t-swiper :current="current" :navigation="{ showSlideBtn:'never' }" :autoplay="false" :loop="true">
                        <t-swiper-item>
                            <div style="display: flex;">
                                <div class="input-yuxian-container" @click="handleSend($t('你好'))">{{$t('你好')}}</div>
                                <div class="input-yuxian-container" @click="handleSend($t('六大茶类'))">{{$t('六大茶类')}}</div>
                            </div>
                        </t-swiper-item>
                        <t-swiper-item>
                            <div style="display: flex;">
                                <div class="input-yuxian-container" @click="handleSend($t('红茶'))">{{$t('红茶')}}</div>
                                <div class="input-yuxian-container" @click="handleSend($t('帮我推荐一款茶叶'))">{{$t('帮我推荐一款茶叶')}}</div>
                            </div>
                        </t-swiper-item>
                        <t-swiper-item>
                            <div style="display: flex;">
                                <div class="input-yuxian-container" @click="handleSend($t('绿茶'))">{{$t('绿茶')}}</div>
                                <div class="input-yuxian-container" @click="handleSend($t('波士顿倾茶事件'))">{{$t('波士顿倾茶事件')}}</div>
                            </div>
                        </t-swiper-item>
                    </t-swiper>
                </div>
                <div style="display: flex;align-items: center;height: 23.33px;">
                    <t-popup :content="$t('后一页')">
                        <t-icon name="chevron-right" size="16" @click="current = current + 1 > yuxianMax-1 ? 0 : current + 1" style="cursor: pointer;"></t-icon>
                    </t-popup>
                </div>
            </div>
            <!-- 输入框和发送区域 -->
            <div style="display: flex;">
                <t-textarea
                v-model="inputvalue"
                :placeholder="$t('在这里输入...')"
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
import axios from 'axios'


export default{
    data(){
        return{
            inputvalue:'',
            isgenerating:false,
            current:0,
            yuxianMax:3, //最大预先定义好的输入为n页
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
                <div><t-avatar image="https://i.postimg.cc/hPpPpCbs/62f66965f3daaaee03e755d7c3a78fad.jpg"></t-avatar></div>
            ],
            controller_async :null
        }
    },
    mounted(){

    },
    methods:{
        // async getResponseFromQingyunkeAPI(msg){
        //     var author = '小灵'
        //     var avatar = this.avatarList[1]
        //     // 先给用户一个正在加载的动画,并且可以取消
        //     var response_loading = <div><t-loading text="加载中..." size="small"></t-loading></div>
        //     let new_response = this.createMessage(avatar,author,response_loading)
        //     this.messageList.push(new_response)


        //     this.controller_async = new AbortController();
        //     var controller = this.controller_async;
        //     var signal = controller.signal;

        //     var that = this

        //     axios.get('/api/api.php?key=free&appid=0&msg='+msg,{signal})
        //     .then((response)=>{
        //         if (response.status == 200){
        //             let response_str = response.data.content
        //             var response_div = function(){
        //                 return <vue-typed-js strings={[response_str]} loop={false} startDelay={0} typeSpeed={100} contentType={'html'} showCursor={false} ><span class="typing"></span></vue-typed-js>
        //             }

        //             new_response.content = response_div
        //             that.messageList.pop()
        //             that.messageList.push(new_response)
        //             that.isgenerating=false
        //         }
        //         else{
        //             var length = this.messageList.length
        //             that.messageList[length-1].content = '请求失败，请重试。'
        //             that.isgenerating=false
        //         }
        //     })
        //     .catch((error)=>{
        //         console.log('error:',error)
        //         return null
        //     })
        // },

        // 将message中的所有\n转换成<br>
        transferMeassage(message){
            message = message.replace(/\n/g,'<br>')
            return message
        },

        async getResponseFromQingyunkeAPI(msg){
            var author = this.$t('小灵')
            var avatar = this.avatarList[1]
            // 先给用户一个正在加载的动画,并且可以取消
            var response_loading = <div><t-loading text="Loading..." size="small"></t-loading></div>
            let new_response = this.createMessage(avatar,author,response_loading)
            this.messageList.push(new_response)


            this.controller_async = new AbortController();
            var controller = this.controller_async;
            var signal = controller.signal;

            var that = this

            axios.get('/api/getResponse?message='+msg,{signal})
            .then((response)=>{
                // console.log('response:',response)
                if (response.status == 200){
                    let response_str = response.data.output.choices[0].message.content

                    response_str = that.transferMeassage(response_str)
                    var response_div = function(){
                        return <vue-typed-js strings={[response_str]} loop={false} startDelay={0} typeSpeed={20} contentType={'html'} showCursor={false} ><span class="typing"></span></vue-typed-js>
                    }

                    new_response.content = response_div
                    that.messageList.pop()
                    that.messageList.push(new_response)
                    that.isgenerating=false
                }
                else{
                    var length = this.messageList.length
                    that.messageList[length-1].content = that.$t('请求失败，请重试。')
                    that.isgenerating=false
                }
            })
            .catch((error)=>{
                console.log('error:',error)
                return null
            })
        },

        async handleSend(msg){
            var author = this.$t('你')
            var avatar = this.avatarList[0]
            let new_message = this.createMessage(avatar,author,msg);
            this.messageList.push(new_message)


            this.isgenerating=true
            await this.getResponseFromAPI(msg)
        },


        async sendMessage(){
            if (this.inputvalue == ''){
                return
            }
            var author = this.$t('你')
            var avatar = this.avatarList[0]
            let new_message = this.createMessage(avatar,author,this.inputvalue);
            this.messageList.push(new_message)
            var message = this.inputvalue

            this.inputvalue = ''

            this.isgenerating=true

            await this.getResponseFromAPI(message)
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
                datetime:this.$t("今天")+now_time,
                content:content_string
            }
            return message
        },

        clearMessage(){
            // console.log('clear');
            this.messageList = []
            var that = this
            axios.get('/api/clearMessage')
            .then((response)=>{
                if (response.status == 200){
                    console.log('clear message success')
                    that.$message.info(that.$t('清除上下文完成！'));
                }
                else{
                    console.log('clear message failed')
                }
            })
        },

        onClickCancel(){
            // console.log('cancel');
            // clearTimeout(this.timeoutID)
            this.controller_async.abort()
            var length = this.messageList.length
            this.messageList[length-1].content = this.$t('已取消生成。')
            this.isgenerating=false
        },

        async getResponseFromAPI(msg){


            await this.getResponseFromQingyunkeAPI(msg)

            // 模拟过程
            // this.timeoutID = setTimeout(function() {
            //     // console.log("5 秒后执行");
            //     // 获取到最后一个message,更改content
            //     let response = '这是返回文字。'
            //     var response_div = function(){
            //         return <vue-typed-js strings={[response]} loop={false} startDelay={0} typeSpeed={100} contentType={'html'} showCursor={false} ><span class="typing"></span></vue-typed-js>
            //     }

            //     new_response.content = response_div
            //     that.messageList.pop()
            //     that.messageList.push(new_response)
            //     that.isgenerating=false
            // }, 5000);
        },

        handlePrevious(){
            // console.log('previous');
            var current_page = this.current
            if (current_page = 0){
                current_page = this.yuxianMax-1
            }else{
                current_page = current_page-1
            }
            this.current = current_page
        },

        handleNext(){
            // console.log('next');
            var current_page = this.current
            if (current_page = this.yuxianMax-1){
                current_page = 0
            }else{
                current_page = current_page+1
            }
            this.current = current_page
        }
    },
    beforeDestroy(){
        // clearTimeout(this.timeoutID)
        this.controller_async.abort()
        // 清除所有的message，包括后台清除
        this.messageList = []
        var that = this
        axios.get('/clearMessage')
        .then((response)=>{
            if (response.status == 200){
                console.log('clear message success')
                that.$message.info('清除上下文完成！');
            }
            else{
                console.log('clear message failed')
            }
        })

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
    height: calc(100% - 148px);
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
.input-yuxian-container{
    padding: 0 12px;
    border-radius: 80px;
    border: 1px solid var(--td-gray-color-3);
    margin-left: 8px;
    cursor: pointer;
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
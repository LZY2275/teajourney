<template>
    <div class="intro-overlay" id="intro-container">
        <div class="container">
            <div class="title">{{ title }}</div>
            <vue-typed-js
                class="typedText"
                :strings="typingTexts"
                :loop="false"
                :startDelay="600"
                :typeSpeed="80"
                :contentType="'html'"
                :showCursor="false"
            >
            <span class="typing"></span>
            </vue-typed-js>
        </div>
        <div class="move">
            <p>滑动以继续</p>
            <img src="../assets/img/Triangle.png" width="20px" height="20px"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'IntroOverlay',
    data() {
        return {
            title: '灵芽之旅',
            typingTexts: [
                "复此雪山客，晨朝掇灵芽</br>茶作为中华优秀传统文化的重要组成部分，随着现代生活节奏加快，真正的茶文化渐渐淡出大众视野<br>我们以茶的相关数据为基础，通过展现茶的生态旅途，宣传茶行业和茶文化</br><br>且听我们娓娓道来...",
            ],
        };
    },
    methods: {
        handleScroll() {
            // 2秒后设置showOverlay
            var that = this
            var container = document.getElementById('intro-container')
            container.classList.add('animate__animated')
            container.classList.add('animate__fadeOutUp');
            setTimeout(function(){
                that.showOverlay = false;
                document.body.style.overflow = '';
                that.$emit('overlayVisible', false)
            },500)

        },
    },
    mounted() {
        var container = document.getElementById('intro-container')
        container.classList.add('animate__animated')
        container.classList.add('animate__fadeInDown');
        window.addEventListener('wheel', this.handleScroll);
        document.body.style.overflow = 'hidden';
    },
    beforeDestroy() {
        this.$el.classList.add('fade-out');
        document.body.style.overflow = '';
        window.removeEventListener('wheel', this.handleScroll);
    },
    };
</script>

<style scoped>
    .title{
        text-shadow: 0px 1.82px 7.29px;
        font-size: 9.77vh;
        font-weight: 400;
        color: rgb(255, 255, 255, 1);
        vertical-align: top;
        font-family: "HanaMinA", sans-serif;
        animation: fadeIn 3s ease-in-out;
    }
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .intro-overlay {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        /* background-color: transparent; */
        z-index: 1000;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
    }

    .container{
        height: 85%;
        flex: auto;
        align-items: center;
        justify-content: center;
    }

    .intro-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
    }

    .scroll-down-icon {
        position: absolute;
        bottom: 20px;
        font-size: 30px;
        color: white;
        animation: bounce 100s infinite;
    }

    .intro-overlay.fade-out {
        animation: fadeOut 0.5s ease-in-out;
    }

    @keyframes fadeOut {
        0% {
        opacity: 1;
        }
        100% {
        opacity: 0;
        transform: translateY(-100%);
        }
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
    .typedText{
        color: white;
        font-size: 20px;
        font-family: "HanaMinA", sans-serif;
    }
    .move{
        width: 100%;
        flex: auto;
        animation: jump 1s infinite alternate;
        color: #FFFFFF;
    }
    @keyframes jump {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
    }
</style>
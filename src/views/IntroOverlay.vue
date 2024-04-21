<template>
    <div class="intro-overlay" v-if="showOverlay">
        <div class="container">
            <div class="title">{{ title }}</div>
            <vue-typed-js
                class="typedText"
                :strings="typingTexts"
                :loop="false"
                :startDelay="600"
                :typeSpeed="100"
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
            showOverlay: true,
            typingTexts: [
                "纠正一个错误的方法有很多，而解决一个错误的终极方法, 就是不给它发生</br>的机会。",
            ],
        };
    },
    methods: {
        handleScroll() {
            this.showOverlay = false;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        this.$el.classList.add('fade-out');
        window.removeEventListener('scroll', this.handleScroll);
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
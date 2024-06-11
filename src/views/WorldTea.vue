<template>
    <div class="world" style="width: 100%;height: 100%;display: flex;">
        <div style="width: 200px;height: 100%;">
            <div class="title" style="padding: 16px 24px 0px 24px;">世界名茶</div>
            <div class="subtitle" style="padding: 0 24px;">{{subtitle}}</div>
            <div class="content-container">
                <p class="font-content">{{ $t(content) }}</p>
            </div>
        </div>
        <div style="padding: 16px 0px 0px 0; width: calc(100% - 200px);">
            <t-space size="6.9vw">
                <div>
                    <p class="type-text">{{ $t('绿茶') }}</p>
                    <div style="align-items: center; justify-content: center;">
                        <img src="https://i0.wp.com/aboxtik.com/wp-content/uploads/2023/08/Gyokuro-04.jpg?w=1200&ssl=1" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">日本京都玉露</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="https://8q0vp9w5bj.user-space.cdn.idcfcloud.net/production/imgs/images/000/012/812/original.jpg?1590985635" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">玄米茶</p>
                    </div>
                </div>
                <div>
                    <p class="type-text">{{ $t('白茶') }}</p>
                </div>
                <div>
                    <p class="type-text">{{ $t('黄茶') }}</p>
                </div>
                <div>
                    <p class="type-text">{{ $t('乌龙茶') }}</p>
                </div>
                <div>
                    <p class="type-text">{{ $t('红茶') }}</p>
                    <div style="align-items: center; justify-content: center;">
                        <img src="https://i0.wp.com/aboxtik.com/wp-content/uploads/2023/08/black-tea-02.jpg?w=1200&ssl=1" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">英国早餐茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="https://image.maigoo.com/upload/images/20221205/10450476262_640x426.jpg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">锡兰红茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="https://image.maigoo.com/upload/images/20221205/10480078289_640x426.jpg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">阿萨姆红茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="http://5b0988e595225.cdn.sohucs.com/images/20190120/29828fb213bc47c4aa19d495d0b203a6.jpeg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">格雷伯爵茶</p>
                    </div>
                </div>
                <div>
                    <p class="type-text">{{ $t('黑茶') }}</p>
                </div>
                <!-- <div>
                    <p class="type-text">{{ $t('特色茶') }}</p>
                </div> -->
            </t-space>
        </div>
    </div>
</template>

<script>
export default{
    name: 'WorldTea',
    data(){
        return {
            subtitle: 'WORLD TEA',
            content: '茶与世界'
        }
    },
}
</script>

<style scoped>
    .world{
        background-color: var(--td-bg-color-container);
    }

    .title{
        width: 97px;
        height: 29px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 26.06px;
        color: rgba(50, 132, 110, 1);
        text-align: left;
        vertical-align: middle;
    }

    .subtitle{
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 17.38px;
        color: rgba(50, 132, 110, 1);
        text-align: left;
        vertical-align: middle;
    }

    .font-content{
        text-align: left;
        text-indent: 2em;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5em;
        color: rgba(50, 132, 110, 0.5);
    }
    .content-container{
        padding: 16px 24px;
    }

    .type-text{
        line-height: 60px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(50, 132, 110, 1);
    }
    .tea-text{
        font-size: 15px;
        font-weight: 500;
        line-height: 1.5em;
        color: rgba(50, 132, 110, 0.9);
    }
</style>
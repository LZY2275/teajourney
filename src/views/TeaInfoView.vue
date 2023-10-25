<template>
    <div style="height: 35vh; width: 280px ;overflow-y: auto;" class="tea-info-container">
        <p class="tea-info-title">{{ teatitle }}</p>
        <div style="width: 100%;display: flex;margin-bottom: 8px;">
            <div class="tea-info-card" style="text-align: center;">
                <div style="display: flex;justify-content: center;">
                    <p class="range-text">{{ teaprizerange[0] }}-{{ teaprizerange[1] }}</p><p class="range-note">元/斤</p>
                </div>
                <p style="font-size: 10px;">平均价格</p>
            </div>
            <div class="tea-info-card" style="margin-left: 2%;">
                <div style="display: flex;justify-content: center;">
                    <p class="range-text">{{ teafermentdegrange[0] }}-{{ teafermentdegrange[1] }}</p><p class="range-note">%</p>
                </div>
                <p style="font-size: 10px;">发酵度</p>
            </div>
        </div>
        <img src="../assets/img/teaimg.png" alt="" class="tea-info-img">
        <p class="tea-info-content" v-html="teacontent"></p>
    </div>
   

</template>

<script>
export default {
    name:'TeaInfoView',
    data() {
      return {
        teatitle:'祁门红茶',
        teacontent:'<p>祁门红茶，又称祁红，是中国安徽省黄山市祁门县出产的一种名优红茶。祁门红茶起源于明代，具有400多年的历史。它以其独特的外形、香气和口感而闻名于世。</p><p>祁门红茶的茶叶选自祁门县境内的高山茶园，采用传统的手工制作工艺。茶叶外形条索紧结，色泽乌润，金毫显露。冲泡时，茶汤呈红褐色，香气浓郁，口感醇厚。</p><p>祁门红茶的品质受土壤、气候和制作工艺的影响，因此，不同年份和产区的祁门红茶呈现出不同的特点。一般来说，祁门红茶具有独特的果香和花香，同时带有一定的甜味和淡淡的苦涩感。它富含多种有益物质，如茶多酚、咖啡因和氨基酸，具有提神醒脑、消除疲劳、抗氧化等功效。</p><p>祁门红茶是中国四大名茶之一，也是国内外茶叶市场上备受追捧的茶品之一。它被誉为“红茶之王”，享有“色香味俱佳，汤色红艳明亮，滋味醇和回甘”的美誉。无论是作为日常饮品还是送礼品，祁门红茶都是一种受欢迎的选择。</p>',
        teaimg:"../assets/img/teaimg.png",
        teaprizerange:[200,500],
        teafermentdegrange:[80,90],
      };
    },
    mounted() {
      
    },
    beforeDestroy() {
      
    },
    methods: {
      
    },
    created(){
      
    }

  };
            
        
</script>

<style scoped>
    .tea-info-container{
        margin-left: 20px;
    }
    .tea-info-img{
        width: 260px;
        height: 180px;
        border-radius: 5px;
        object-fit: cover;
    }
    .tea-info-title{
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 26.06px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 15px;
        text-align: left;
    }
    .tea-info-content{
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.85);
        text-align: left;
        text-indent:2em;
    }
    .tea-info-card{
        width: 48%;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 6px 0;
    }

    .flex3{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .range-text{
        font-size: 20px;

    }

    .range-note{
        font-size: 8px;
        display: flex;
        justify-content: center;
        align-items: end;
    }

</style>
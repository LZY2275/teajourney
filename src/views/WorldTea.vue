<template>
    <div style="width: 100%;height: 100%;display: flex;">
        <div style="width: 300px;height: 100%; background-color: var(--td-bg-color-container);">
            <div class="title" style="padding: 16px 24px 0px 24px;">世界名茶</div>
            <div class="subtitle" style="padding: 0 24px;">{{subtitle}}</div>
            <div class="content-container">
                <p class="font-content">{{ $t(content) }}</p>
            </div>
        </div>
        <div style="width: calc(100% - 300px);">
            <!-- <t-space size="6.9vw">
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
                    <p class="type-text">{{ $t('特色茶') }}</p>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0611%2F390909c7j00sewq75000wd200dw0099g00it00ci.jpg&thumbnail=660x2147483647&quality=80&type=jpg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">摩洛哥薄荷茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="http://5b0988e595225.cdn.sohucs.com/images/20190120/0dd514fbbe134e35964cbc30e0132b1d.jpeg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">欧洲洋甘菊茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="http://5b0988e595225.cdn.sohucs.com/images/20190120/90ede00fe2d34c7fb6a30b3f47f6bbb1.jpeg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">南非如意茶</p>
                    </div>
                    <div style="align-items: center; justify-content: center; margin-top: 20px;">
                        <img src="https://k.sinaimg.cn/n/sinakd20210616ac/560/w1080h1080/20210616/2745-krpikqf4356890.jpg/w700d1q75cms.jpg" style="width: 80px; height: 80px; border-radius: 50%;">
                        <p class="tea-text">泰舒茶</p>
                    </div>
                </div>
            </t-space> -->
            <t-swiper :duration="300" :interval="6000" :navigation="{ placement: 'outside' }">
                <t-swiper-item>
                    <div style="margin: 0.5vh 0px;width: 100%;">
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 1.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('中国普洱茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('普洱是中国云南省传统生产的一种发酵茶。发酵是指微生物发酵（称为“湿堆”），通常在茶叶充分干燥和揉捻后进行。 当茶经历受控的微生物发酵时，它也会继续氧化，直到达到所需的风味。这个过程生产出的茶被称为“黑茶”') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 2.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('俄罗斯大篷车') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('俄罗斯大篷车茶，是一款拼配茶。起源于中国，但已成俄罗斯茶的主食。据说，这种浓烈的混合茶的烟熏味来自于商队在将茶叶从中国运往俄罗斯时使用的熏制和保存方法。这种茶的烟熏风味受到俄罗斯人的欢迎') }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 3.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('英国早餐茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('英国早餐茶，也称英伦早餐茶、英式早餐茶或英国早茶,是一款经典的英国拼配红茶，一般采用印度阿萨姆、斯里兰卡和肯亚产的茶叶混合而成，是英国具代表性的茶饮之一') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 4.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('印度玛莎拉奶茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('印度奶茶是一种以红茶叶为主，再加入香料及药草调味的饮品，其特色为浓郁的香味。源自于印度，传统以绿色小豆蔻荚、肉桂、丁香粉、姜及黑椒粒与红茶叶熬煮') }}</div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 5.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('日本抹茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('抹茶起源于中国，在日本得到发展，是一种特殊种植和加工的绿茶叶的精细研磨粉末。通常为冲泡热水后饮用，也常用于制作糕点及甜点') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 6.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('土耳其茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('土耳其茶，被当地人称为 Chai，是土耳其文化的一个非常重要的方面。印度奶茶是一种产于黑海沿岸的红茶，不加牛奶饮用。土耳其各地几乎每顿饭都供应印度奶茶。土耳其茶以传统方式盛放在郁金香形状的玻璃杯中,称为“ince belli”') }}</div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 7.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('摩洛哥薄荷茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('摩洛哥以其招牌薄荷茶而闻名，这种茶是用当地种植的茶、新鲜薄荷和糖制成的。薄荷茶是一种草本茶。人们将薄荷叶浸泡在热水中，然后再放入少许冰糖，之后薄荷茶便制成了') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 8.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('埃及木槿花茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('这种花草茶根本不是由茶制成的，而是由木槿花制成的—Karkade 也被称为木槿茶，数千年前曾供埃及法老享用。这种草本茶富含抗氧化剂，可热饮或冰饮。味道类似于蔓越莓汁的酸味') }}</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </t-swiper-item>
                <t-swiper-item>
                    <div style="margin: 0.5vh 0px;width: 100%;">
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 9.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('阿根廷玛黛茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('它也被称为Yerba Mate，在南美洲（包括巴西和巴拉圭）很受欢迎。从技术上讲，马黛茶并不是一种茶，因为它不是来自茶树植物——它实际上是一种本土冬青树。它是一种花草茶') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 10.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('美国 甜茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%; height: 90px;">{{ $t('甜茶，也称为甜冰茶，是一种流行的冰茶风格，在美国（尤其是南方）和印度尼西亚等国家/地区盛行。甜茶最常见的制作方法是在茶冲泡或热的时候向红茶中添加糖或简单糖浆，但也经常使用人造甜味剂。甜茶一般都是冰的。有时可能会调味，最常见的是柠檬') }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 11.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('泰式奶茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('泰式奶茶在泰语中称为泰茶即是具泰国风格的奶茶，其茶叶是来自泰北茶树或是锡兰红茶，可作冷饮或热饮。泰式奶茶在世界各地的泰国料理餐厅中普遍提供') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 12.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('马来西亚拉茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('与香港奶茶非常相似，但略有不同。这种浓红茶加入了甜炼乳，但这种茶的与众不同之处在于它的制备方式。将茶从一个容器戏剧性地倒到另一个容器中。直到它获得其标志性的泡沫稠度') }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 13.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('意大利格雷伯爵茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('格雷伯爵茶，常简称为伯爵茶，以祁门红茶或正山小种为基底，搭配锡兰红茶，并添加香柠檬精油的一种调味茶。有些以调味油衬托，有些煙香制成伯爵茶，也有直接加入干燥果皮，风味各异，随个人口味选择') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 14.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('南非路易波士') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%;">{{ $t('路易波士茶、南非国宝茶，是一种生长在南非开普顿北部弗因博斯的豆科灌木植物，有“南非的红宝石”的美誉。它不含咖啡因') }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="three-padding"></div>
                        <div style="display: flex;">
                            <div class="four-container">
                                <div><img src="../assets/img/切片 15.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('中国西藏酥油茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%; height: 80px;">{{ $t('西藏的酥油茶或婆茶电茶叶、赵和酥油搅拌制成的。酥油茶中使用的特殊茶是异常浓烈的烟熏红茶，加上咸味、油味，带来独特的味道。西藏高海拔地区的天气非常寒冷，当地人使用酥油茶（或称波茶）作为保暖的方式，并在饮食中添加额外的热量') }}</div>
                                </div>
                            </div>
                            <div class="three-padding"></div>
                            <div class="four-container">
                                <div><img src="../assets/img/切片 16.jpg"></div>
                                <div class="right">
                                    <div class="item-title">{{ $t('中国台湾珍珠奶茶') }}</div>
                                    <div class="item-note" style="margin-top:8px; width: 100%; height: 70px;">{{ $t('起源于1980年代初期的台湾。台湾移民于1990年代将其带到美国。这种饮料也已扩散到其他国家。珍珠奶茶通常带有木薯淀粉制成的珍珠圆子，但也可以加入其他配料，例如仙草，芦荟，红豆等') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </t-swiper-item>
            </t-swiper>
        </div>
    </div>
</template>

<script>
export default{
    name: 'WorldTea',
    data(){
        return {
            subtitle: 'WORLD TEA',
            content: '茶在中国是流传已久的习惯和文化，世界各国也有许多喜爱喝茶的人，而每个国家地区喜爱的茶类、饮用习惯都有不同。'
        }
    },
}
</script>

<style scoped>
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
    .four-container {
        margin-top: 10px;
        width: 50%;
        display: flex;
        margin-left: 10px;
    }

    .four-container img {
        width: 110px;
        height: 110px;
        border-radius: 8px
    }
    .item-title {
        font-size: 17px;
        font-weight: 500;
        color: rgba(50, 132, 110, 1);
        text-align: left;
    }

    .item-note {
        height: 60px;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        color: rgba(50, 132, 110, 0.5);
        text-align: left;
    }
    .three-padding {
        width: 3.984%;
    }
    .right{
        margin-left: 10px; 
        justify-content: center; 
        display: flex; 
        flex-direction: column; 
        width: 100%; 
        height: 100%; 
        padding: auto;
    }
</style>
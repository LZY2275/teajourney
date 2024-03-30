<template>
  <footer class="about">
    <div style="width: 1280px;text-align: left;margin-top: 36px;">
      <div class="footer-title">Tea Journey</div>
      <div style="margin-top: 12px;">
        <div style="display: flex">
          <p style="color:var(--td-brand-color-5); font-weight: bold; font-size: 16px;line-height: 22px;margin-right: 12px;">FOLLOW:</p>
          <t-link theme="primary" href="https://github.com/LZY2275" target="_blank">
            <t-icon slot="prefix-icon" name="logo-github" size="22"></t-icon>
            <span>GITHUB</span>
          </t-link>
        </div>
        <div style="margin-top: 24px; font-size: 14px;color: var(--td-brand-color-5);">
          © 2024 <t-link href="https://github.com/LZY2275" target="_blank" theme="primary">Zhouyou Lai</t-link>,
          <t-link href="https://github.com/wubeizi" target="_blank" theme="primary">JIafeng Li</t-link> and
          <t-link href="https://github.com/XiongHaocheng" target="_blank" theme="primary">Haocheng Xiong</t-link>. All rights reserved.
        </div>
      </div>
      <div>
        <p class="footer-title" style="margin-top: 12px;">Reference</p>
        <div style="margin-top: 12px;margin-bottom: 24px;">
          <!-- 文献列表 -->
          <p class="note" style="color: var(--td-brand-color-5);">[1] Zhang C, Wang X, Zhao C, et al. PromotionLens: Inspecting Promotion Strategies of Online E-commerce via Visual Analytics[J]. IEEE Transactions on Visualization and Computer Graphics, 2022, 29(1): 767-777.</p>
          <p class="note" style="color: var(--td-brand-color-5);">[2] Tovanich N, Soulié N, Heulot N, et al. MiningVis: visual analytics of the Bitcoin mining economy[J]. IEEE Transactions on Visualization and Computer Graphics, 2021, 28(1): 868-878.</p>
        </div>
    </div>
    </div>
  </footer>
</template>

<style scoped>
.about {
  width: 100%;
  background-color: rgba(252, 249, 232, 1);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(204, 204, 204, 0.5);
}

.footer-title{
  font-size: 18px;
  color: var(--td-brand-color-5);


}

</style>
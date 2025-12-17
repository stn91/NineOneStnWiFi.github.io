# 宿舍WiFi极速计划 - 官方网站

## 🚀 使用方法

### 一键部署到GitHub Pages

1. **创建GitHub仓库**
   - 登录GitHub → New Repository
   - 命名为 `wifi-dorm` 或任意名称
   - 选择 **Public**
   - 勾选 **Add a README file**
   - 点击 **Create repository**

2. **上传文件**
   - 点击 **Add file** → **Upload files**
   - 拖拽以下5个文件到上传区域：
     - `index.html`
     - `style.css`
     - `script.js`
     - `config.js`
     - `README.md`
   - 点击 **Commit changes**

3. **启用GitHub Pages**
   - 进入仓库的 **Settings** 标签
   - 左侧菜单找到 **Pages**
   - **Source** 选择 **Deploy from a branch**
   - **Branch** 选择 **main** 分支，**/(root)** 文件夹
   - 点击 **Save**
   - 等待1分钟，访问提供的URL即可！🎉

## ✏️ 如何修改内容

**只需修改 `config.js` 文件**，无需改动其他代码！

### 修改示例

```javascript
// 修改标题
title: "我的宿舍网络服务",

// 修改功能特点
features: [
    {
        icon: "fa-bolt",        // Font Awesome图标名
        title: "超快速度",       // 标题
        description: "支持HTML标签<br><strong>重点文字</strong>" // 描述
    }
],

// 修改套餐
plans: [
    {
        name: "学生特惠版",     // 套餐名
        price: "￥19/月",      // 价格
        speed: "50M带宽",       // 速度
        features: [...],        // 功能列表
        recommended: true,      // 是否推荐
        cta: "立即开通"         // 按钮文字
    }
],

// 修改联系方式
contact: {
    phone: "你的电话",
    email: "你的邮箱",
    time: "服务时间",
    location: "办公地点"
}
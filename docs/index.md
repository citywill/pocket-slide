# PocketSlide ：幻灯片/演示文稿开发模块

基于 PocketStack 的幻灯片/演示文稿开发模块。不同于 slidev、reveal.js 等工具，该项目以AI友好为原则，非常适合以 Vibe Coding 的方式开发演示文稿项目。

![PocketSlide](./assets/screenshot.png)

## 特性

- **幻灯片操作** - 基于 React 的演示文稿组件，支持全屏、键盘导航
- **URL 状态同步** - 分页状态自动同步到 URL，刷新后保持位置
- **响应式布局** - 适配不同屏幕尺寸，支持全屏展示
- **自定义背景** - 支持任意图片作为幻灯片背景，打造个性化演示风格
- **主题模式** - 支持浅色/深色/系统主题切换，适应不同使用场景
- **主题颜色** - 支持主题颜色定制（蓝色/绿色/红色/灰度），灵活适配品牌色
- **模糊效果** - 支持背景模糊和透明度设置，增强视觉层次感
- **AI IDE 开发** - 支持通过 AI IDE 快速创建幻灯片

## 快速开始

### 环境要求

- Node.js 18.0.0+
- npm 9.0.0+

### 安装部署

```bash
# 克隆项目
git clone https://github.com/citywill/pocket-slide.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器
http://localhost:5173
```

## 创建幻灯片项目

按照以下三个步骤，快速创建你的幻灯片演示。

### 1. 创建幻灯片目录

在 `src/modules/slides/` 下创建模块目录：

```
src/modules/slides/
  你的项目/
    Index.tsx
    你的幻灯片1.tsx
    你的幻灯片2.tsx
```

### 2. 创建幻灯片

使用 CoverSlide 或 ContentSlide 组件：

```tsx
import ContentSlide from '../components/ContentSlide';

export default function MySlide() {
  return (
    <ContentSlide title="我的标题">
      <p>内容</p>
    </ContentSlide>
  );
}
```

### 3. 创建首页，组织幻灯片

在 Index.tsx 中组合所有幻灯片：

```tsx
import SlidesViewer from '../components/SlidesViewer';
import MySlide from './MySlide';

export default function Index() {
  return (
    <SlidesViewer>
      <MySlide />
    </SlidesViewer>
  );
}
```

## 本项目基于 PocketStack 开发

本项目基于 PocketStack 开发。 PocketStack 是一款 AI 友好的全栈开发框架，助力实现100%的AI友好开发。

http://github.com/citywill/pocket-stack
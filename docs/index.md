# PocketSlide ：幻灯片/演示文稿开发模块

基于 PocketStack 的幻灯片/演示文稿开发模块。不同于 slidev、reveal.js 等工具，该项目以AI友好为原则，非常适合以 Vibe Coding 的方式开发演示文稿项目。

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

### 创建幻灯片项目

按照以下三个步骤，快速创建你的幻灯片演示。

#### 1. 创建幻灯片目录

在 `src/modules/slides/` 下创建模块目录：

```
src/modules/slides/
  你的项目/
    Index.tsx
    你的幻灯片1.tsx
    你的幻灯片2.tsx
```

#### 2. 创建幻灯片

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

#### 3. 创建首页，组织幻灯片

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

## 核心组件

### SlidesViewer

幻灯片查看器组件，用于包裹所有幻灯片页面。

```tsx
import SlidesViewer from '@/modules/slides/components/SlidesViewer';

<SlidesViewer>
  <Slide1 />
  <Slide2 />
  <Slide3 />
</SlidesViewer>
```

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| children | `React.ReactNode[]` | - | 幻灯片内容数组 |
| className | `string` | - | 自定义样式类 |
| showNavigation | `boolean` | `true` | 是否显示导航按钮 |
| onSlideChange | `(index: number) => void` | - | 翻页回调函数 |
| backgroundImage | `string` | - | 全局背景图片 URL |
| backgroundOpacity | `number` | `50` | 背景透明度，0-100 |
| backgroundBlur | `number` | `0` | 背景模糊程度，单位 px |
| logoSrc | `string` | `/logo.svg` | Logo 图片路径 |

### CoverSlide

封面幻灯片组件，用于展示封面。

```tsx
import CoverSlide from '@/modules/slides/components/CoverSlide';

<CoverSlide
  title="幻灯片标题"
  subtitle="副标题"
  author="作者"
  date="2024-01-01"
/>
```

#### Props

| 属性 | 类型 | 说明 |
|------|------|------|
| title | `string` | 主标题 |
| subtitle | `string` | 副标题 |
| author | `string` | 作者 |
| date | `string` | 日期 |
| className | `string` | 自定义样式类 |
| backgroundImage | `string` | 背景图片 URL |
| backgroundOpacity | `number` | 背景透明度，0-100，默认 50 |
| backgroundBlur | `number` | 背景模糊程度，单位 px，默认 0 |

### ContentSlide

内容幻灯片组件，用于展示正文内容。

```tsx
import ContentSlide from '@/modules/slides/components/ContentSlide';

<ContentSlide title="页面标题">
  <div>内容区域</div>
</ContentSlide>
```

#### Props

| 属性 | 类型 | 说明 |
|------|------|------|
| title | `string` | 页面标题 |
| children | `React.ReactNode` | 内容区域 |
| className | `string` | 自定义样式类 |
| backgroundImage | `string` | 背景图片 URL |
| backgroundOpacity | `number` | 背景透明度，0-100，默认 50 |
| backgroundBlur | `number` | 背景模糊程度，单位 px，默认 0 |

## 使用说明

### 键盘操作

- `→` 或 `↓`：下一页
- `←` 或 `↑`：上一页
- `Esc`：退出全屏

### 点击操作

- 左右箭头按钮：翻页
- 全屏按钮：进入/退出全屏

## 背景图片参数

三个组件都支持背景图片相关参数：

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| backgroundImage | `string` | - | 背景图片 URL 地址 |
| backgroundOpacity | `number` | `50` | 透明度，0-100，值越小越透明 |
| backgroundBlur | `number` | `0` | 模糊程度，0 为不模糊，单位 px |

### 使用示例

```tsx
// 基础用法
<ContentSlide title="标题" backgroundImage="/bg.jpg">

// 调整透明度
<CoverSlide title="标题" backgroundImage="/bg.jpg" backgroundOpacity={30} />

// 添加模糊
<ContentSlide title="标题" backgroundImage="/bg.jpg" backgroundBlur={8}>
  <p>带模糊背景的内容页</p>
</ContentSlide>
```

### 全局背景设置

通过 SlidesViewer 可以设置全局背景，所有幻灯片都会继承：

```tsx
<SlidesViewer backgroundImage="https://example.com/bg.jpg" backgroundOpacity={20}>
  <YourSlide />
</SlidesViewer>
```

## Logo 组件

### 组件位置

Logo 组件位于 `src/modules/slides/components/Logo.tsx`

### 组件属性

| 属性 | 类型 | 说明 |
|------|------|------|
| className | `string` | 自定义样式（如位置、大小） |
| src | `string` | logo 图片路径（可选） |

### 全局传参方式

通过 SlidesViewer 的 `logoSrc` 属性统一设置所有幻灯片的 logo 图片：

```tsx
<SlidesViewer logoSrc="/logo.svg">
  <YourSlide />
</SlidesViewer>
```

### Context 机制

SlidesViewer 使用 React Context 提供 logoSrc，CoverSlide 和 ContentSlide 通过 `useLogoSrc()` hook 获取值。

## 主题配置

### 主题模式

支持三种主题模式：浅色模式、深色模式、系统模式

```tsx
import { useTheme } from '@/components/theme-provider';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  // 切换主题模式
  setTheme('light');  // 浅色模式
  setTheme('dark');   // 深色模式
  setTheme('system'); // 系统模式
}
```

### 主题颜色

支持四种主题颜色：蓝色、绿色、红色、灰度

```tsx
import { useTheme } from '@/components/theme-provider';

function ColorThemeSwitcher() {
  const { colorTheme, setColorTheme } = useTheme();

  // 切换主题颜色
  setColorTheme('blue');  // 蓝色 - 专业沉稳
  setColorTheme('green'); // 绿色 - 活力自然
  setColorTheme('red');   // 红色 - 热情活力
  setColorTheme('gray');  // 灰度 - 简约低调
}
```

### 实现说明

- **主题模式**：使用 CSS 类名 `light` / `dark` 切换
- **主题颜色**：通过 CSS 变量 `color-blue` / `color-green` 等切换
- **组件**：`ThemeProvider` 提供主题上下文
- **切换组件**：`ModeToggle` 支持交互切换

## 图标使用

项目使用 Heroicons 图标库，支持 outline 和 solid 两种风格。

### Outline 风格

```tsx
import { StarIcon, HeartIcon, BoltIcon } from '@heroicons/react/24/outline';

// 使用
<StarIcon className="size-6 text-primary" />
```

### Solid 风格

```tsx
import { StarIcon } from '@heroicons/react/24/solid';

// 使用
<StarIcon className="size-6 text-primary" />
```

## AI IDE 开发

通过 AI IDE（如 Trae），你可以快速创建幻灯片演示：

### 开发流程

1. **创建幻灯片目录** - 在 `src/modules/slides/` 下创建项目目录

2. **编写并提交提示词** - 向 AI 描述幻灯片内容，或直接发送提示词

3. **浏览幻灯片** - AI 自动生成代码，刷新页面即可预览

### 示例提示词

```
创建一页"项目成果"幻灯片，包含标题和三个成果展示区块
```

### 示例代码

```tsx
import ContentSlide from '@/modules/slides/components/ContentSlide';

export default function ProjectResults() {
  return (
    <ContentSlide title="项目成果">
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border bg-card">
          <h4>成果一</h4>
          <p>成果描述</p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h4>成果二</h4>
          <p>成果描述</p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h4>成果三</h4>
          <p>成果描述</p>
        </div>
      </div>
    </ContentSlide>
  );
}
```

## URL 参数

SlidesViewer 自动将当前分页同步到 URL 参数 `?slide=N`，刷新页面后会自动恢复到之前的分页位置。

## 完整示例

参考 `src/modules/slides/example/` 目录下的示例文件。

```tsx
import SlidesViewer from '@/modules/slides/components/SlidesViewer';
import CoverSlide from '@/modules/slides/components/CoverSlide';
import ContentSlide from '@/modules/slides/components/ContentSlide';

function MyPresentation() {
  return (
    <SlidesViewer>
      <CoverSlide
        title="我的演示"
        subtitle="这是一个示例"
        author="作者"
        date={new Date().toLocaleDateString()}
      />
      <ContentSlide title="第一页">
        <p>内容...</p>
      </ContentSlide>
      <ContentSlide title="第二页">
        <p>更多内容...</p>
      </ContentSlide>
    </SlidesViewer>
  );
}
```

## PocketStack

本项目基于 PocketStack 开发。 PocketStack 是一款 AI 友好的全栈开发框架。

http://github.com/citywill/pocket-stack
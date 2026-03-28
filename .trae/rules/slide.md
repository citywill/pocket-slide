# 幻灯片/演示文稿开发模块 Pocket Slide

该模块可以创建多个演示文稿，每个演示文稿可以包含多个幻灯片。

## 目录结构

每个演示文稿的目录放在`src/modules/slides/`目录下，每个目录对应一个演示文稿。

- `src/modules/slides/components/` - 组件目录
  - `CoverSlide.tsx` - 封面幻灯片组件
  - `ContentSlide.tsx` - 内容幻灯片组件
  - `SlidesViewer.tsx` - 幻灯片查看器组件
  - `Logo.tsx` - Logo 组件
- `src/modules/slides/slidename/` - 演示文稿目录
  - `index.tsx` - 演示文稿首页
  - `Slide1.tsx` - 第一页幻灯片
  - `Slide2.tsx` - 第二页幻灯片
- `menu.ts` - 导航菜单组件
- `routes.tsx` - 路由配置

## 组件

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

## 示例

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

### 使用背景图片

```tsx
<SlidesViewer backgroundImage="https://example.com/bg.jpg" backgroundOpacity={20}>
  <CoverSlide
    title="封面标题"
    backgroundImage="https://example.com/cover-bg.jpg"
    backgroundOpacity={30}
  />
  <ContentSlide title="内容页" backgroundBlur={8}>
    <p>带模糊背景的内容页</p>
  </ContentSlide>
</SlidesViewer>
```

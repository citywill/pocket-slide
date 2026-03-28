# AI 开发指南

PocketSlide 以 AI 友好为原则设计，非常适合以 Vibe Coding 的方式开发演示文稿项目。

## 开发流程

### 1. 创建幻灯片目录

在 `src/modules/slides/` 下创建项目目录：

```
src/modules/slides/
  你的项目/
    Index.tsx
    Slide1.tsx
    Slide2.tsx
```

### 2. 编写提示词

向 AI 描述幻灯片内容，可以是简单的需求描述：

```
创建一页"项目成果"幻灯片，包含标题和三个成果展示区块
```

或更详细的需求：

```
创建一个封面幻灯片：
- 标题：吉林省应急管理
- 副标题：智慧应急 科技赋能
- 作者：应急管理厅
- 使用山川背景图片
```

### 3. 浏览幻灯片

AI 自动生成代码后，刷新页面即可预览。

## 示例提示词

### 创建封面

```
创建一个封面幻灯片，包含：
- 主标题：项目汇报
- 副标题：2024年度总结
- 作者：技术部
- 日期：2024-12-31
```

### 创建内容页

```
创建一个内容页，标题为"项目成果"，
包含一个三列布局的成果展示，每个成果包含标题和描述文字
```

### 创建列表页

```
创建一个列表页，标题为"功能特性"，
包含6个功能项，每个功能项有图标、标题和描述
```

### 创建带背景的内容页

```
创建一个内容页，标题为"团队介绍"，
使用森林背景图片，透明度30%，添加8px模糊效果
```

## 完整示例

### 提示词

```
创建一个幻灯片演示文稿，包含以下页面：
1. 封面页：标题"产品介绍"，副标题"新一代智能平台"
2. 简介页：介绍产品的3个核心特性
3. 功能页：展示6个主要功能模块
4. 尾页：谢谢观看

使用蓝色主题，封面使用科技感背景图
```

### AI 生成的代码

```tsx
// Index.tsx
import SlidesViewer from '../components/SlidesViewer';
import CoverSlide from '../components/CoverSlide';
import ContentSlide from '../components/ContentSlide';

export default function Index() {
  return (
    <SlidesViewer
      backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      backgroundOpacity={10}
    >
      <CoverSlide
        title="产品介绍"
        subtitle="新一代智能平台"
        author="产品部"
        date={new Date().toLocaleDateString()}
      />
      <ContentSlide title="核心特性">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-card">
            <h4>特性一</h4>
            <p>特性描述</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h4>特性二</h4>
            <p>特性描述</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h4>特性三</h4>
            <p>特性描述</p>
          </div>
        </div>
      </ContentSlide>
      <ContentSlide title="主要功能">
        <div className="grid grid-cols-2 gap-4">
          {/* 6个功能模块 */}
        </div>
      </ContentSlide>
      <CoverSlide
        title="谢谢观看"
        subtitle="基于 React 的演示文稿组件库"
        author="Pocket Stack"
      />
    </SlidesViewer>
  );
}
```

## 最佳实践

### 1. 渐进式描述

先描述整体结构，再补充细节：

```
先说：创建一个产品介绍演示文稿，包含封面、3页内容、尾页

再说：封面使用科技感背景，内容页使用三列布局
```

### 2. 提供参考

如果已有设计稿或参考项目，可以提供给 AI：

```
参考 src/modules/slides/example 的结构来创建
```

### 3. 明确组件需求

指定使用哪些组件：

```
使用 CoverSlide 作为封面
使用 ContentSlide 作为内容页
```

### 4. 指定样式规则

```
使用 rounded-2xl 圆角
使用 primary 颜色作为主题色
使用 bg-card 作为卡片背景
```

## 迭代优化

### 修改单个页面

```
将第一页的标题从"产品介绍"改为"产品手册"
```

### 调整样式

```
将所有内容页的透明度从30%改为50%
```

### 添加新页面

```
在第二页和第三页之间插入一页"使用案例"
```

### 删除页面

```
删除第三页"技术规格"
```

## 与 AI IDE 配合

推荐使用支持 AI 辅助的 IDE（如 Trae），可以获得更好的开发体验：

1. **代码补全**：AI 自动补全组件代码
2. **语法检查**：实时检查代码错误
3. **快速预览**：保存后自动刷新页面
4. **多文件编辑**：同时修改多个相关文件

## 目录结构建议

```
src/modules/slides/
├── components/           # 公共组件（已存在）
├── your-project/         # 你的项目
│   ├── Index.tsx         # 入口文件
│   ├── Cover.tsx         # 封面
│   ├── Content1.tsx      # 内容页1
│   ├── Content2.tsx      # 内容页2
│   └── BackCover.tsx     # 尾页
└── example/              # 参考示例
```
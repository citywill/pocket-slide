import ContentSlide from '../components/ContentSlide';

export default function LogoGuide() {
  return (
    <ContentSlide title="Logo 组件">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">组件位置</h4>
            <p className="text-sm text-muted-foreground">Logo 组件位于 <code className="text-xs bg-muted px-1 rounded">src/modules/slides/components/Logo.tsx</code></p>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">组件属性</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><code>className</code> - 自定义样式（如位置、大小）</li>
              <li><code>src</code> - logo 图片路径（可选）</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">全局传参方式</h4>
            <p className="text-sm text-muted-foreground">通过 SlidesViewer 的 <code className="text-xs bg-muted px-1 rounded">logoSrc</code> 属性统一设置所有幻灯片的 logo 图片</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">使用示例</h4>
            <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// 在 SlidesViewer 中统一设置
<SlidesViewer logoSrc="/logo.svg">
  <YourSlide />
</SlidesViewer>

// 或在组件中单独使用
<Logo className="w-12" src="/custom-logo.png" />`}
            </pre>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">Context 机制</h4>
            <p className="text-sm text-muted-foreground">SlidesViewer 使用 React Context 提供 logoSrc，CoverSlide 和 ContentSlide 通过 useLogoSrc() hook 获取值</p>
          </div>
        </div>
      </div>
    </ContentSlide>
  );
}
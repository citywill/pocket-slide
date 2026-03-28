import ContentSlide from '../components/ContentSlide';

export default function QuickStartGuide() {
  return (
    <ContentSlide title="快速开始">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          按照以下三个步骤，快速创建你的幻灯片演示。
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">1</span>
              创建幻灯片项目
            </h4>
            <p className="text-sm text-muted-foreground">在 <code className="text-xs bg-muted px-1 rounded">src/modules/slides/</code> 下创建模块目录</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`// 目录结构
src/modules/slides/
  你的项目/
    Index.tsx
    你的幻灯片1.tsx
    你的幻灯片2.tsx`}
            </pre>
          </div>

          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">2</span>
              创建幻灯片
            </h4>
            <p className="text-sm text-muted-foreground">使用 CoverSlide 或 ContentSlide 组件</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`import ContentSlide from '../components/ContentSlide';

export default function MySlide() {
  return (
    <ContentSlide title="我的标题">
      <p>内容</p>
    </ContentSlide>
  );
}`}
            </pre>
          </div>

          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">3</span>
              创建首页，组织幻灯片
            </h4>
            <p className="text-sm text-muted-foreground">在 Index.tsx 中组合所有幻灯片</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`import SlidesViewer from '../components/SlidesViewer';
import MySlide from './MySlide';

export default function Index() {
  return (
    <SlidesViewer>
      <MySlide />
    </SlidesViewer>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </ContentSlide>
  );
}
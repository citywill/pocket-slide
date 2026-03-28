import { SparklesIcon, PhotoIcon, SunIcon, PaintBrushIcon, RectangleStackIcon, DocumentTextIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ContentSlide from '../components/ContentSlide';

export default function PocketSlideIntro() {
  const features = [
    { title: '幻灯片操作', desc: '基于 React 的演示文稿组件，支持全屏、键盘导航', icon: SparklesIcon },
    { title: '自定义背景', desc: '支持任意图片作为幻灯片背景，打造个性化演示风格', icon: PhotoIcon },
    { title: '主题模式', desc: '支持浅色/深色主题切换，适应不同使用场景', icon: SunIcon },
    { title: '主题颜色', desc: '支持主题颜色定制，灵活适配品牌色或项目风格', icon: PaintBrushIcon },
    { title: '封面组件', desc: '提供 CoverSlide 封面组件，适用于标题页、全屏展示等场景', icon: RectangleStackIcon },
    { title: '内容组件', desc: '提供 ContentSlide 内容组件，支持背景图片、模糊和透明度设置', icon: DocumentTextIcon },
  ];

  return (
    <ContentSlide title="关于 PocketSlide">
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted-foreground">
            PocketSlide 是一个轻量级的幻灯片组件，专为 React 应用设计，
            支持全屏演示、键盘导航和 URL 状态同步。
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">核心功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 rounded-lg border bg-card flex items-start gap-3">
                <feature.icon className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/citywill/pocket-slide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="size-5" />
            <span className="font-medium">github.com/citywill/pocket-slide</span>
          </a>
        </div>
      </div>
    </ContentSlide>
  );
}
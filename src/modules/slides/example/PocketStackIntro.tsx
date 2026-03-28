import { CubeIcon, CodeBracketIcon, PaintBrushIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ContentSlide from '../components/ContentSlide';

export default function PocketStackIntro() {
  const features = [
    { title: '基于 PocketBase', desc: '轻量级后端框架，自带数据库和认证', icon: CubeIcon },
    { title: 'React + TypeScript', desc: '现代化前端技术栈', icon: CodeBracketIcon },
    { title: 'shadcn/ui', desc: '精美的 UI 组件库', icon: PaintBrushIcon },
    { title: 'TailwindCSS', desc: '灵活的样式解决方案', icon: CommandLineIcon },
  ];

  const techStack = [
    'React 18', 'TypeScript', 'Vite', 'PocketBase',
    'TailwindCSS', 'shadcn/ui', 'React Router', 'Heroicons'
  ];

  return (
    <ContentSlide title="关于 PocketStack">
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted-foreground">
            Pocket Slide 是基于 PocketStack 的 Vibe Coding 项目。PocketStack 是一款 AI 友好的全栈 Vibe Coding 框架。
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">核心特性</h3>
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

        <div>
          <h3 className="text-xl font-semibold mb-4">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/citywill/pocket-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="size-5" />
            <span className="font-medium">github.com/citywill/pocket-stack</span>
          </a>
        </div>
      </div>
    </ContentSlide>
  );
}

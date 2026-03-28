import ContentSlide from '../components/ContentSlide';
import {
  CommandLineIcon,
  ArrowDownTrayIcon,
  RocketLaunchIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

const installSteps = [
  {
    icon: ArrowDownTrayIcon,
    title: '克隆项目',
    code: 'git clone https://github.com/citywill/pocket-slide.git',
  },
  {
    icon: CommandLineIcon,
    title: '安装依赖',
    code: 'npm install',
  },
];

const runSteps = [
  {
    icon: RocketLaunchIcon,
    title: '启动开发服务器',
    code: 'npm run dev',
  },
  {
    icon: CursorArrowRaysIcon,
    title: '打开浏览器',
    code: 'http://localhost:5173',
  },
];

export default function InstallGuide() {
  return (
    <ContentSlide title="安装指南">
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border bg-card col-span-1 space-y-4">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <ArrowDownTrayIcon className="size-5" />
              环境要求
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Node.js 18.0.0+</li>
              <li>npm 9.0.0+</li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2">
            <div className="p-5 rounded-lg border bg-card space-y-4">
              <h4 className="font-medium text-primary flex items-center gap-2">
                <CommandLineIcon className="size-5" />
                项目安装
              </h4>
              <div className="space-y-3">
                {installSteps.map((step) => (
                  <div key={step.title} className="space-y-1">
                    <p className="text-sm font-medium">{step.title}</p>
                    <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                      {step.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card space-y-4">
              <h4 className="font-medium text-primary flex items-center gap-2">
                <RocketLaunchIcon className="size-5" />
                启动前端
              </h4>
              <div className="space-y-3">
                {runSteps.map((step) => (
                  <div key={step.title} className="space-y-1">
                    <p className="text-sm font-medium">{step.title}</p>
                    <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                      {step.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSlide>
  );
}
import ContentSlide from '../components/ContentSlide';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/components/theme-provider';

const themeModes = [
  { key: 'light', name: '浅色模式', icon: SunIcon, desc: '明亮的浅色主题' },
  { key: 'dark', name: '深色模式', icon: MoonIcon, desc: '护眼的深色主题' },
  { key: 'system', name: '系统模式', icon: ComputerDesktopIcon, desc: '跟随操作系统设置' },
];

const colorThemes = [
  { key: 'blue', name: '蓝色', color: 'bg-blue-500', desc: '专业沉稳' },
  { key: 'green', name: '绿色', color: 'bg-green-500', desc: '活力自然' },
  { key: 'red', name: '红色', color: 'bg-red-500', desc: '热情活力' },
  { key: 'gray', name: '灰度', color: 'bg-neutral-500', desc: '简约低调' },
];

export default function ThemeGuide() {
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme();

  return (
    <ContentSlide title="主题模式与颜色">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">主题模式</h3>
          <p className="text-sm text-muted-foreground">点击切换主题模式</p>
          <div className="grid grid-cols-3 gap-3">
            {themeModes.map((mode) => (
              <button
                key={mode.key}
                onClick={() => setTheme(mode.key as 'light' | 'dark' | 'system')}
                className={`p-4 rounded-lg border text-center space-y-2 transition-all ${theme === mode.key ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}
              >
                <mode.icon className="h-8 w-8 mx-auto text-primary" />
                <h4 className="font-medium text-sm">{mode.name}</h4>
                <p className="text-xs text-muted-foreground">{mode.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">主题颜色</h3>
          <p className="text-sm text-muted-foreground">点击切换主题颜色</p>
          <div className="grid grid-cols-2 gap-3">
            {colorThemes.map((color) => (
              <button
                key={color.key}
                onClick={() => setColorTheme(color.key as 'blue' | 'green' | 'red' | 'gray')}
                className={`p-4 rounded-lg border flex items-center gap-3 transition-all ${colorTheme === color.key ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}
              >
                <span className={`h-8 w-8 rounded-full ${color.color}`} />
                <div className="text-left">
                  <h4 className="font-medium text-sm">{color.name}</h4>
                  <p className="text-xs text-muted-foreground">{color.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg border bg-muted/50">
        <h4 className="font-medium mb-2">实现说明</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 主题模式：使用 CSS 类名 <code className="text-primary">light</code> / <code className="text-primary">dark</code> 切换</li>
          <li>• 主题颜色：通过 CSS 变量 <code className="text-primary">color-blue</code> / <code className="text-primary">color-green</code> 等切换</li>
          <li>• 组件：<code className="text-primary">ThemeProvider</code> 提供主题上下文</li>
          <li>• 切换组件：<code className="text-primary">ModeToggle</code> 支持交互切换</li>
        </ul>
      </div>
    </ContentSlide>
  );
}
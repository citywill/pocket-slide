import ContentSlide from '../components/ContentSlide';
import UsageImage from './assets/image.png';

export default function UsageGuide() {
  return (
    <ContentSlide title="使用说明" backgroundImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">键盘操作</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>→ 或 ↓：下一页</li>
              <li>← 或 ↑：上一页</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="font-medium mb-2">点击操作</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>左右箭头按钮：翻页</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={UsageImage}
            alt="使用说明"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </ContentSlide>
  );
}

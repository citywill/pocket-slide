import { useState, useEffect } from 'react';
import ContentSlide from '../components/ContentSlide';
import { XMarkIcon } from '@heroicons/react/24/outline';
import createNewSlide from './assets/create-new-slide.png';
import playSlide from './assets/play-slide.png';
import submitPrompt from './assets/submit-prompt.png';

const images = [
  { src: createNewSlide, alt: '创建幻灯片目录' },
  { src: submitPrompt, alt: '提交提示词' },
  { src: playSlide, alt: '浏览幻灯片' },
];

export default function AIIDESlideCreation() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <ContentSlide title="用 AI 开发幻灯片">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          通过 AI IDE（如 Trae），你可以快速创建幻灯片演示。
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">1</span>
              创建一个幻灯片目录
            </h4>
            <p className="text-sm text-muted-foreground">在 <code className="text-xs bg-muted px-1 rounded">src/modules/slides/</code> 下创建项目目录</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`src/modules/slides/
  你的项目/
    Index.tsx`}
            </pre>
          </div>

          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">2</span>
              编写并提交提示词
            </h4>
            <p className="text-sm text-muted-foreground">向 AI 描述幻灯片内容，或直接发送提示词</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`创建一页"项目成果"幻灯片，
包含标题和三个成果展示区块`}
            </pre>
          </div>

          <div className="p-5 rounded-lg border bg-card space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <span className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">3</span>
              浏览幻灯片
            </h4>
            <p className="text-sm text-muted-foreground">AI 自动生成代码，刷新页面即可预览</p>
            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`// AI 生成后刷新页面
// 通过 URL 参数访问对应幻灯片
?slide=1`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className="p-0 border-0 bg-transparent cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="rounded-lg border hover:ring-2 hover:ring-primary/50 transition-all" />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <XMarkIcon className="size-6" />
            </button>
            <img
              src={selectedImage}
              alt="预览"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </ContentSlide>
  );
}
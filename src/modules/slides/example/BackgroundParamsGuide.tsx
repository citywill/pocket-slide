import { useState } from 'react';
import ContentSlide from '../components/ContentSlide';

const backgroundImages = [
  { key: 'mountain', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', name: '山川' },
  { key: 'ocean', url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80', name: '海洋' },
  { key: 'city', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80', name: '城市' },
  { key: 'forest', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80', name: '森林' },
];

const components = [
  {
    name: 'SlidesViewer',
    params: ['backgroundImage?', 'backgroundOpacity?', 'backgroundBlur?'],
    desc: '幻灯片查看器容器（全局）',
  },
  {
    name: 'CoverSlide',
    params: ['backgroundImage?', 'backgroundOpacity?', 'backgroundBlur?'],
    desc: '封面/封底幻灯片',
  },
  {
    name: 'ContentSlide',
    params: ['backgroundImage?', 'backgroundOpacity?', 'backgroundBlur?'],
    desc: '内容幻灯片',
  },
];

const paramDetails = [
  { name: 'backgroundImage', type: 'string', default: '-', desc: '背景图片 URL 地址' },
  { name: 'backgroundOpacity', type: 'number', default: '50', desc: '透明度，0-100，值越小越透明' },
  { name: 'backgroundBlur', type: 'number', default: '0', desc: '模糊程度，0 为不模糊，单位 px' },
];

const examples = [
  { title: '基础用法', code: '<ContentSlide title="标题" backgroundImage="/bg.jpg">' },
  { title: '调整透明度', code: '<CoverSlide title="标题" backgroundImage="/bg.jpg" backgroundOpacity={30} />' },
  { title: '添加模糊', code: '<ContentSlide title="标题" backgroundImage="/bg.jpg" backgroundBlur={8} />' },
];

export default function BackgroundParamsGuide() {
  const [bgImage, setBgImage] = useState(backgroundImages[0].url);
  const [opacity, setOpacity] = useState(50);
  const [blur, setBlur] = useState(0);

  return (
    <ContentSlide title="背景图片参数说明" backgroundImage={bgImage} backgroundOpacity={opacity} backgroundBlur={blur}>
      <div className="p-4 rounded-2xl bg-white/30  border border-white/20 shadow-xl">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-base font-semibold mb-2">背景图片</h3>
              <div className="flex gap-2 flex-wrap">
                {backgroundImages.map((bg) => (
                  <button
                    key={bg.key}
                    onClick={() => setBgImage(bg.url)}
                    className={`px-2 py-1 rounded-lg border text-sm transition-all ${bgImage === bg.url ? 'border-primary bg-primary/10' : 'border-white/20 bg-white/10 hover:border-primary/50'}`}
                  >
                    {bg.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">透明度</h3>
              <div className="flex gap-2 flex-wrap">
                {[10, 30, 50, 70, 90].map((v) => (
                  <button
                    key={v}
                    onClick={() => setOpacity(v)}
                    className={`px-2 py-1 rounded-lg border text-sm transition-all ${opacity === v ? 'border-primary bg-primary/10' : 'border-white/20 bg-white/10 hover:border-primary/50'}`}
                  >
                    {v}%
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">模糊</h3>
              <div className="flex gap-2 flex-wrap">
                {[0, 2, 4, 8, 12].map((v) => (
                  <button
                    key={v}
                    onClick={() => setBlur(v)}
                    className={`px-2 py-1 rounded-lg border text-sm transition-all ${blur === v ? 'border-primary bg-primary/10' : 'border-white/20 bg-white/10 hover:border-primary/50'}`}
                  >
                    {v}px
                  </button>
                ))}
              </div>
            </div>
          </div>

        <div>
          <h3 className="text-base font-semibold mb-2">支持的组件</h3>
          <div className="grid grid-cols-3 gap-4">
            {components.map((comp) => (
              <div key={comp.name} className="p-2 px-4 rounded-lg border bg-card/70">
                <h4 className="font-medium text-primary text-sm">{comp.name}</h4>
                <p className="text-xs text-muted-foreground">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-semibold mb-2">参数详情</h3>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-xs bg-card/70">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-2 font-medium">参数名</th>
                    <th className="text-left p-2 font-medium">类型</th>
                    <th className="text-left p-2 font-medium">默认值</th>
                    <th className="text-left p-2 font-medium">说明</th>
                  </tr>
                </thead>
                <tbody>
                  {paramDetails.map((param) => (
                    <tr key={param.name} className="border-t">
                      <td className="p-2 font-mono text-primary">{param.name}</td>
                      <td className="p-2 text-muted-foreground">{param.type}</td>
                      <td className="p-2 text-muted-foreground">{param.default}</td>
                      <td className="p-2">{param.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">使用示例</h3>
            <div className="grid gap-1">
              {examples.map((ex) => (
                <div key={ex.title} className="p-2 rounded-lg border bg-card/70">
                  <h4 className="font-medium text-xs">{ex.title}</h4>
                  <code className="text-xs text-muted-foreground break-all">{ex.code}</code>
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
import CoverSlide from '../components/CoverSlide';

export default function ExampleIndex() {
  return (
    <CoverSlide
      title="PocketSlide | 幻灯片示例"
      subtitle="基于 PocketStack 的演示文稿模块"
      author="Pocket Stack"
      date={new Date().toLocaleDateString('zh-CN')}
      backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&q=80" 
      backgroundOpacity={20}
    />
  );
}

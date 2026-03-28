import CoverSlide from '../components/CoverSlide';

export default function BackCover() {
  return (
    <CoverSlide
      title="谢谢观看"
      subtitle="基于 React 的演示文稿组件库"
      author="Pocket Stack"
      date={new Date().toLocaleDateString('zh-CN')}
      backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      backgroundOpacity={10}
    />
  );
}
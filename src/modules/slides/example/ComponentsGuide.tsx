import ContentSlide from '../components/ContentSlide';

export default function ComponentsGuide() {
  return (
    <ContentSlide title="封面和内容页组件">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-primary">CoverSlide 封面组件</h3>
          <p className="text-sm text-muted-foreground">适用于标题页、首页、尾页等场景</p>
          <div className="rounded-lg border bg-card p-4">
            <h4 className="font-medium mb-3">属性说明</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><code>title</code> - 主标题</li>
              <li><code>subtitle</code> - 副标题</li>
              <li><code>author</code> - 作者</li>
              <li><code>date</code> - 日期</li>
              <li><code>backgroundImage</code> - 背景图片</li>
              <li><code>backgroundOpacity</code> - 背景透明度 (0-100)</li>
              <li><code>className</code> - 自定义样式</li>
            </ul>
          </div>
          <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`import CoverSlide from '../components/CoverSlide';

<CoverSlide
  title="吉林省应急管理"
  subtitle="智慧应急 科技赋能"
  author="应急管理厅"
  date={new Date()}
/>`}
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-primary">ContentSlide 内容组件</h3>
          <p className="text-sm text-muted-foreground">适用于正文页，支持任意 React 内容</p>
          <div className="rounded-lg border bg-card p-4">
            <h4 className="font-medium mb-3">属性说明</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><code>title</code> - 章节标题</li>
              <li><code>children</code> - React 内容</li>
              <li><code>backgroundImage</code> - 背景图片</li>
              <li><code>backgroundOpacity</code> - 背景透明度</li>
              <li><code>backgroundBlur</code> - 背景模糊 (px)</li>
              <li><code>className</code> - 自定义样式</li>
            </ul>
          </div>
          <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`import ContentSlide from '../components/ContentSlide';

<ContentSlide title="章节标题">
  <div className="space-y-4">
    <h3>内容标题</h3>
    <p>这里是具体内容...</p>
  </div>
</ContentSlide>`}
          </pre>
        </div>
      </div>
    </ContentSlide>
  );
}
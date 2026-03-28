import { StarIcon, HeartIcon, BoltIcon, FireIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid, BoltIcon as BoltIconSolid, FireIcon as FireIconSolid } from '@heroicons/react/24/solid';
import ContentSlide from '../components/ContentSlide';

const outlineIcons = [
  { name: 'StarIcon', Icon: StarIcon },
  { name: 'HeartIcon', Icon: HeartIcon },
  { name: 'BoltIcon', Icon: BoltIcon },
  { name: 'FireIcon', Icon: FireIcon },
];

const solidIcons = [
  { name: 'StarIcon', Icon: StarIconSolid },
  { name: 'HeartIcon', Icon: HeartIconSolid },
  { name: 'BoltIcon', Icon: BoltIconSolid },
  { name: 'FireIcon', Icon: FireIconSolid },
];

export default function IconsGuide() {
  return (
    <ContentSlide title="图标使用">
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted-foreground">
            项目使用 <code>Heroicons</code> 图标库，支持 outline 和 solid 两种风格。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-medium mb-3 text-muted-foreground">Outline</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {outlineIcons.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card">
                  <item.Icon className="size-8 text-primary" />
                  <code className="text-xs font-medium">{item.name}</code>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-3 text-muted-foreground">Solid</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {solidIcons.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card">
                  <item.Icon className="size-8 text-primary" />
                  <code className="text-xs font-medium">{item.name}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border bg-card">
          <h4 className="font-medium mb-2">使用方法</h4>
          <pre className="text-sm bg-muted p-3 rounded-md overflow-x-auto">
{`import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid'; // solid 风格`}
          </pre>
        </div>
      </div>
    </ContentSlide>
  );
}
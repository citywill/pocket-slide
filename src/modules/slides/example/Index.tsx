import SlidesViewer from '../components/SlidesViewer';
import Cover from './Cover';
import PocketStackIntro from './PocketStackIntro';
import PocketSlideIntro from './PocketSlideIntro';
import InstallGuide from './InstallGuide';
import QuickStartGuide from './QuickStartGuide';
import UsageGuide from './UsageGuide';
import ComponentsGuide from './ComponentsGuide';
import LogoGuide from './LogoGuide';
import ThemeGuide from './ThemeGuide';
import BackgroundParamsGuide from './BackgroundParamsGuide';
import IconsGuide from './IconsGuide';
import AIIDESlideCreation from './AIIDESlideCreation';
import BackCover from './BackCover';

export default function Index() {
  return (
    <SlidesViewer
      backgroundImage="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80"
      backgroundOpacity={10}
    >
      <Cover />
      <PocketSlideIntro />
      <InstallGuide />
      <QuickStartGuide />
      <AIIDESlideCreation />
      <UsageGuide />
      <ComponentsGuide />
      <LogoGuide />
      <ThemeGuide />
      <BackgroundParamsGuide />
      <IconsGuide />
      <PocketStackIntro />
      <BackCover />
    </SlidesViewer>
  );
}

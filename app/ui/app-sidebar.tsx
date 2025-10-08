import { Button } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

function AppSidebar() {
  return (
    <aside className="min-w-60 w-60 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          사이드바
        </h4>
        <ChevronDown className="mt-1" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500"
        >
          포스트1
        </Button>
        <Button variant={'ghost'}>포스트2</Button>
        <Button variant={'ghost'}>포스트3</Button>
        <Button variant={'ghost'}>포스트4</Button>
        <Button variant={'ghost'}>포스트5</Button>
        <Button variant={'ghost'}>포스트6</Button>
        <Button variant={'ghost'}>포스트7</Button>
        <Button variant={'ghost'}>포스트8</Button>
      </div>
    </aside>
  );
}

export default AppSidebar;

import { Button } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

function AppSidebar() {
  return (
    <aside className="min-w-60 w-60 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Categories
        </h4>
        <ChevronDown className="mt-1" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리1
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리2
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리3
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리4
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리5
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리6
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리7
        </Button>
        <Button
          variant={'ghost'}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500 cursor-pointer"
        >
          카테고리8
        </Button>
      </div>
    </aside>
  );
}

export default AppSidebar;

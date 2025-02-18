/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

interface AddButtonProps {
  children: JSX.Element;
}

const AddButtonSheet = ({ children }: AddButtonProps): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <PlusIcon></PlusIcon>
        </Button>
      </SheetTrigger>
      <SheetTitle className="hidden" />
      <SheetContent
        side="top"
        aria-describedby={undefined}
        className="flex h-full w-full flex-row justify-center"
      >
        <div className="w-full 2xl:max-w-screen-2xl">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default AddButtonSheet;

import { SortableDragHandle } from '@/components/sortable';
import { Card } from '@/components/ui/card';
import { GripVertical } from 'lucide-react';
import AccountsConfigurationCards from './accounts-configuration-cards';
import { Separator } from '@/components/ui/separator';
import { Institution } from '@/types/institution';

interface AccountsConfigurationGroupProps {
  group: Institution;
  isReorder: boolean;
}

const AccountsConfigurationGroup = (props: AccountsConfigurationGroupProps) => {
  return (
    <Card className="flex flex-row items-center gap-2 border-2 bg-background p-2">
      {/* TODO: I want this to be full height */}
      {props.isReorder && (
        <SortableDragHandle
          variant="outline"
          size="icon"
          className="h-full min-h-[75px] w-7 shrink-0"
        >
          <GripVertical />
        </SortableDragHandle>
      )}
      <div className="flex w-full flex-col gap-2">
        <span className="text-lg font-semibold tracking-tight">{props.group.name}</span>
        <Separator />
        <AccountsConfigurationCards
          accounts={props.group.accounts}
          isReorder={props.isReorder}
        />
      </div>
    </Card>
  );
};

export default AccountsConfigurationGroup;
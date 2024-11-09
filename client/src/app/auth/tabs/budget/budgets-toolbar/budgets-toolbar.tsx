import { Button } from '@/components/ui/button';
import BudgetsToolcard from './budgets-toolcard';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { getDateFromMonthsAgo, isInArray } from '@/lib/utils';
import React from 'react';

interface BudgetsToolbarProps {
  selectedDates: Date[];
  addSelectedDate: (date: Date) => void;
  removeSelectedDate: (date: Date) => void;
}

const BudgetsToolbar = (props: BudgetsToolbarProps): JSX.Element => {
  const [index, setIndex] = React.useState(0);

  const dates = Array.from({ length: 11 }, (_, i) => getDateFromMonthsAgo(i + index));

  const handleClick = (date: Date) => {
    if (isInArray(date, props.selectedDates)) {
      props.removeSelectedDate(date);
    } else {
      props.addSelectedDate(date);
    }
  };

  return (
    <div>
      <div className="flex flex-row-reverse justify-center gap-1">
        <Button
          className="m-1 h-8 w-6 p-1"
          variant="ghost"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <ChevronRightIcon />
        </Button>
        {dates.map((date: Date, i: number) => (
          <BudgetsToolcard
            key={i}
            date={date}
            isSelected={isInArray(date, props.selectedDates)}
            underBudget={date.getMonth() % 2 === 0}
            handleClick={handleClick}
          />
        ))}
        <Button
          className="m-1 h-8 w-6 p-1"
          variant="ghost"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default BudgetsToolbar;
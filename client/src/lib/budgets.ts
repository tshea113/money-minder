import { type Budget } from '@/types/budget';
import { transactionCategories } from '@/types/transaction';
import { getParentCategory } from './category';
import { areStringsEqual } from './utils';

export enum BudgetGroup {
  Income,
  Spending,
}

export const getBudgetsForMonth = (budgetData: Budget[], date: Date): Budget[] =>
  budgetData.filter(
    (b: Budget) =>
      new Date(b.date).getMonth() === new Date(date).getMonth() &&
      new Date(b.date).getUTCFullYear() === new Date(date).getUTCFullYear()
  ) ?? [];

export const getBudgetsForGroup = (
  budgetData: Budget[] | undefined,
  budgetGroup: BudgetGroup
): Budget[] => {
  if (budgetData == null) return [];

  if (budgetGroup === BudgetGroup.Income) {
    return (
      budgetData.filter(
        (b) => getParentCategory(b.category, transactionCategories) === 'income'
      ) ?? []
    );
  } else if (budgetGroup === BudgetGroup.Spending) {
    return (
      budgetData.filter(
        (b) => getParentCategory(b.category, transactionCategories) !== 'income'
      ) ?? []
    );
  } else {
    return budgetData;
  }
};

export const getBudgetGroupForCategory = (category: string): BudgetGroup => {
  if (areStringsEqual(category, 'Income')) {
    return BudgetGroup.Income;
  } else {
    return BudgetGroup.Spending;
  }
};

export const getSignForBudget = (category: string): number => {
  switch (getBudgetGroupForCategory(getParentCategory(category, transactionCategories))) {
    case BudgetGroup.Spending:
      return -1;
    case BudgetGroup.Income:
    default:
      return 1;
  }
};

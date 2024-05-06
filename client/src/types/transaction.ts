interface Transaction {
  id: string;
  amount: number;
  date: Date;
  category: string;
  subcategory: string;
  merchantName: string;
  pending: boolean;
  deleted: Date;
  source: string;
  accountId: string;
}

interface NewTransaction extends Partial<Transaction> {}

interface Category {
  label: string;
  value: string;
  parent: string;
  subCategories: Category[] | null;
}

const categories: Category[] = [
  {
    label: 'Auto & Transport',
    value: 'auto & transport',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Auto Insurance',
    value: 'auto insurance',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Auto Payment',
    value: 'auto payment',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Gas & Fuel',
    value: 'gas & fuel',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Parking',
    value: 'parking',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Public Transportation',
    value: 'public transportation',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Ride Share',
    value: 'ride share',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Service & Parts',
    value: 'service & parts',
    parent: 'auto & transport',
    subCategories: null,
  },
  {
    label: 'Bills & Utilities',
    value: 'bills & utilities',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Internet',
    value: 'internet',
    parent: 'bills & utilities',
    subCategories: null,
  },
  {
    label: 'Mobile Phone',
    value: 'mobile phone',
    parent: 'bills & utilities',
    subCategories: null,
  },
  {
    label: 'Television',
    value: 'television',
    parent: 'bills & utilities',
    subCategories: null,
  },
  {
    label: 'Utilities',
    value: 'utilities',
    parent: 'bills & utilities',
    subCategories: null,
  },
  {
    label: 'Education',
    value: 'education',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Books & Supplies',
    value: 'books & supplies',
    parent: 'education',
    subCategories: null,
  },
  {
    label: 'Student Loan',
    value: 'student loan',
    parent: 'education',
    subCategories: null,
  },
  {
    label: 'Tuition',
    value: 'tuition',
    parent: 'education',
    subCategories: null,
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Activities',
    value: 'activities',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Arts',
    value: 'arts',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Movies',
    value: 'movies',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Music',
    value: 'music',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Books',
    value: 'books',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Games',
    value: 'games',
    parent: 'entertainment',
    subCategories: null,
  },
  {
    label: 'Fees & Charges',
    value: 'fees & charges',
    parent: '',
    subCategories: null,
  },
  {
    label: 'ATM Fee',
    value: 'atm fee',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Bank Fee',
    value: 'bank fee',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Finance Charge',
    value: 'finance charge',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Late Fee',
    value: 'late fee',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Service Fee',
    value: 'service fee',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Trade Commissions',
    value: 'trade commissions',
    parent: 'fees & charges',
    subCategories: null,
  },
  {
    label: 'Financial',
    value: 'financial',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Roth IRA',
    value: 'roth ira',
    parent: 'financial',
    subCategories: null,
  },
  {
    label: 'Investment',
    value: 'investment',
    parent: 'financial',
    subCategories: null,
  },
  {
    label: 'Food & Dining',
    value: 'food & dining',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Alcohol & Bars',
    value: 'alcohol & bars',
    parent: 'food & dining',
    subCategories: null,
  },
  {
    label: 'Coffee Shops',
    value: 'coffee shops',
    parent: 'food & dining',
    subCategories: null,
  },
  {
    label: 'Food Delivery',
    value: 'food delivery',
    parent: 'food & dining',
    subCategories: null,
  },
  {
    label: 'Groceries',
    value: 'groceries',
    parent: 'food & dining',
    subCategories: null,
  },
  {
    label: 'Restaurants',
    value: 'restaurants',
    parent: 'food & dining',
    subCategories: null,
  },
  {
    label: 'Gifts & Donations',
    value: 'gifts & donations',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Charity',
    value: 'charity',
    parent: 'gifts & donations',
    subCategories: null,
  },
  {
    label: 'Gift',
    value: 'gift',
    parent: 'gifts & donations',
    subCategories: null,
  },
  {
    label: 'Health & Fitness',
    value: 'health & fitness',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Dentist',
    value: 'dentist',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Doctor',
    value: 'doctor',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Eyecare',
    value: 'eyecare',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Gym',
    value: 'gym',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Health Insurance',
    value: 'health insurance',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Pharmacy',
    value: 'pharmacy',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Sports',
    value: 'sports',
    parent: 'health & fitness',
    subCategories: null,
  },
  {
    label: 'Home',
    value: 'home',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Furnishings',
    value: 'furnishings',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Home Improvement',
    value: 'home improvement',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Home Insurance',
    value: 'home insurance',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Home Services',
    value: 'home services',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Home Supplies',
    value: 'home supplies',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Lawn & Garden',
    value: 'lawn & garden',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Mortgage & Rent',
    value: 'mortgage & rent',
    parent: 'home',
    subCategories: null,
  },
  {
    label: 'Income',
    value: 'income',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Bonus',
    value: 'bonus',
    parent: 'income',
    subCategories: null,
  },
  {
    label: 'Interest Income',
    value: 'interest income',
    parent: 'income',
    subCategories: null,
  },
  {
    label: 'Paycheck',
    value: 'paycheck',
    parent: 'income',
    subCategories: null,
  },
  {
    label: 'Reimburstments',
    value: 'reimburstments',
    parent: 'income',
    subCategories: null,
  },
  {
    label: 'Tax Return',
    value: 'tax return',
    parent: 'income',
    subCategories: null,
  },
  {
    label: 'Investments',
    value: 'investments',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Buy',
    value: 'buy',
    parent: 'investments',
    subCategories: null,
  },
  {
    label: 'Deposit',
    value: 'deposit',
    parent: 'investments',
    subCategories: null,
  },
  {
    label: 'Dividend & Cap Gains',
    value: 'dividend & cap gains',
    parent: 'investments',
    subCategories: null,
  },
  {
    label: 'Sell',
    value: 'sell',
    parent: 'investments',
    subCategories: null,
  },
  {
    label: 'Withdrawl',
    value: 'withdrawl',
    parent: 'investments',
    subCategories: null,
  },
  {
    label: 'Loans',
    value: 'loans',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Loan Fees & Charges',
    value: 'loan fees & charges',
    parent: 'loans',
    subCategories: null,
  },
  {
    label: 'Loan Insurance',
    value: 'loan insurance',
    parent: 'loans',
    subCategories: null,
  },
  {
    label: 'Loan Interest',
    value: 'loan interest',
    parent: 'loans',
    subCategories: null,
  },
  {
    label: 'Loan Payments',
    value: 'loan payments',
    parent: 'loans',
    subCategories: null,
  },
  {
    label: 'Loan Principal',
    value: 'loan principal',
    parent: 'loans',
    subCategories: null,
  },
  {
    label: 'Misc',
    value: 'misc',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Personal Care',
    value: 'personal care',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Hair',
    value: 'hair',
    parent: 'personal care',
    subCategories: null,
  },
  {
    label: 'Laundry',
    value: 'laundry',
    parent: 'personal care',
    subCategories: null,
  },
  {
    label: 'Spa & Massage',
    value: 'spa & massage',
    parent: 'personal care',
    subCategories: null,
  },
  {
    label: 'Pets',
    value: 'pets',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Pet Food & Supplies',
    value: 'pet food & supplies',
    parent: 'pets',
    subCategories: null,
  },
  {
    label: 'Pet Grooming',
    value: 'pet grooming',
    parent: 'pets',
    subCategories: null,
  },
  {
    label: 'Veterinary',
    value: 'veterinary',
    parent: 'pets',
    subCategories: null,
  },
  {
    label: 'Shopping',
    value: 'shopping',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Clothing',
    value: 'clothing',
    parent: 'shopping',
    subCategories: null,
  },
  {
    label: 'Electronics & Software',
    value: 'electronics & software',
    parent: 'shopping',
    subCategories: null,
  },
  {
    label: 'Hobbies',
    value: 'hobbies',
    parent: 'shopping',
    subCategories: null,
  },
  {
    label: 'Household',
    value: 'household',
    parent: 'shopping',
    subCategories: null,
  },
  {
    label: 'Taxes',
    value: 'taxes',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Federal Tax',
    value: 'federal tax',
    parent: 'taxes',
    subCategories: null,
  },
  {
    label: 'Local Tax',
    value: 'local tax',
    parent: 'taxes',
    subCategories: null,
  },
  {
    label: 'Property Tax',
    value: 'property tax',
    parent: 'taxes',
    subCategories: null,
  },
  {
    label: 'Sales Tax',
    value: 'sales tax',
    parent: 'taxes',
    subCategories: null,
  },
  {
    label: 'State Tax',
    value: 'state tax',
    parent: 'taxes',
    subCategories: null,
  },
  {
    label: 'Transfer',
    value: 'transfer',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Credit Card Payment',
    value: 'credit card payment',
    parent: 'transfer',
    subCategories: null,
  },
  {
    label: 'Travel',
    value: 'travel',
    parent: '',
    subCategories: null,
  },
  {
    label: 'Air Travel',
    value: 'air travel',
    parent: 'travel',
    subCategories: null,
  },
  {
    label: 'Hotel',
    value: 'hotel',
    parent: 'travel',
    subCategories: null,
  },
  {
    label: 'Rental Car & Taxi',
    value: 'rental car & taxi',
    parent: 'travel',
    subCategories: null,
  },
  {
    label: 'Vacation',
    value: 'vacation',
    parent: 'travel',
    subCategories: null,
  },
  {
    label: 'Other',
    value: 'other',
    parent: '',
    subCategories: null,
  },
];

export type { Transaction, NewTransaction };
export type { Category };
export { categories };

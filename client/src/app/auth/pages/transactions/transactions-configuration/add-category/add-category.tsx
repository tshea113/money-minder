import { Input } from '@/components/ui/input';
import ResponsiveButton from '@/components/responsive-button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { translateAxiosError } from '@/lib/requests';
import { AxiosError } from 'axios';
import { AuthContext } from '@/components/auth-provider';
import React from 'react';
import { ICategory } from '@/types/category';
import { toast } from 'sonner';
import CategoryInput from '@/components/category-input';
import { transactionCategories } from '@/types/transaction';

interface AddCategoryProps {}

const AddCategory = (props: AddCategoryProps): JSX.Element => {
  const [newCategoryName, setNewCategoryName] = React.useState('');
  const [newCategoryParent, setNewCategoryParent] = React.useState('');

  const { request } = React.useContext<any>(AuthContext);

  const queryClient = useQueryClient();
  const doAddCategory = useMutation({
    mutationFn: async (category: ICategory) => console.log(category),
    onSuccess: async () => {
      console.log('bingus');
    },
    onError: (error: AxiosError) => toast.error(translateAxiosError(error)),
  });

  const submitBudget = (): any => {
    const newCategory: ICategory = {
      value: newCategoryName,
      parent: newCategoryParent,
    };
    doAddCategory.mutate(newCategory);
  };

  return (
    <div className="flex w-full flex-grow flex-row items-center gap-4 p-2">
      <div className="flex grow flex-col gap-2">
        <span className="text-sm">Category Name</span>
        <Input
          type="text"
          value={newCategoryName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewCategoryName(e.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm">Parent Category</span>
        <CategoryInput
          selectedCategory={newCategoryParent}
          setSelectedCategory={setNewCategoryParent}
          categories={transactionCategories}
          parentsOnly={true}
        />
      </div>

      <ResponsiveButton
        loading={doAddCategory.isPending}
        onClick={submitBudget}
        className="self-end"
      >
        Add Category
      </ResponsiveButton>
    </div>
  );
};

export default AddCategory;

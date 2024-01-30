import { z } from 'zod';

export const updateFinanceFormSchema = z.object({
    modalTitle: z.string().min(1, 'O campo de título precisa ser preenchido.'),
    modalValue: z.string().min(1, 'Você precisa inserir um valor.'),
    modalValueType: z.string().refine(valueType => {
        return valueType === 'profit' || valueType === 'expense';
    }),
});

export type updateFinanceFormData = z.infer<typeof updateFinanceFormSchema>;

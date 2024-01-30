import { z } from 'zod';

export const createFinanceFormSchema = z.object({
    title: z.string().min(1, 'O campo de título precisa ser preenchido.'),
    value: z.string().min(1, 'Você precisa inserir um valor.'),
    valueType: z.string().refine(valueType => {
        return valueType === 'profit' || valueType === 'expense';
    }),
});

export type createFinanceFormData = z.infer<typeof createFinanceFormSchema>;

import { transactions } from '../models/database'

export const createTransactions = async (data : any) => {
    try {
        const {id, amount, from_account, to_account, timestamp, description , status} = data;
        if (!id || !amount || !from_account || !to_account || !timestamp || !description || !status) {
            return "Hay nhap day du cac truong";
        }
        // console.log('Creating with data:', data);
        if (!data) throw new Error('No transaction data received');
        const createdTransaction = await transactions.create(data);
        return createdTransaction;
    } catch(error){
        console.log(error);
    }
}
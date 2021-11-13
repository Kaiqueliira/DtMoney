import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: Date;
    type: string;
}

export function TransactionsTable() {
    const [transactions, setTransaction] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then((data) => setTransaction(data.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transactions) => (
                            <tr>
                                <td>{transactions.title}</td>
                                <td className={transactions.type}> {transactions.type === 'withdraw' ? '-' : ''} R$  {transactions.amount}</td>
                                <td>{transactions.category}</td>
                                <td>{transactions.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}
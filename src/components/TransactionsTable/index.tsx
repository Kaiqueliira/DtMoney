import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transactions {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

export function TransactionsTable() {
    const [transactions, setTransaction] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransaction(response.data.transactions))

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
                        transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td>{transactions.title}</td>
                                    <td className={transactions.type}>{Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transactions.amount)}</td>
                                    <td>{transactions.category}</td>
                                    <td>{
                                        Intl.DateTimeFormat('pt-BR').format(new Date(transactions.createdAt))
                                    }</td>
                                </tr>)
                        }
                        )
                    }
                </tbody>
            </table>
        </Container>
    )
}
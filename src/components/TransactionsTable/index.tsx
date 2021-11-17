import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionsTable() {

    const transactions = useContext(TransactionsContext)

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
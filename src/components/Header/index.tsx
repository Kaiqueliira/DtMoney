import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface PropsHeader {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: PropsHeader) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>

        </Container>
    )
}
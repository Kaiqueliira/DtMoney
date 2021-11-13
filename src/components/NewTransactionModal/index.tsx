import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Container>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose} >
                <h1>Cadastrar Transação</h1>
            </Modal>
        </Container>
    )
}
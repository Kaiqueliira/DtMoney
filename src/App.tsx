import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';


function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)

  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyles />
    </>
  );
}

export default App;

import KnotMain from '@pages/KnotMain';
import { ModalProvider } from './app/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <KnotMain />
    </ModalProvider>
  );
}

export default App;

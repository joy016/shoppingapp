import type { AppProps } from 'next/app';
import LayoutWrapper from './components/LayoutWrapper';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>
  );
}

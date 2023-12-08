// src/app/_app.js

import { Provider } from 'react-redux';
import { store } from '@/Redux';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

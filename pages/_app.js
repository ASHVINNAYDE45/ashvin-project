import LayoutPage from "@/components/layout"
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/custom.css";
import "@/styles/theme.min.css";

// export default function App({ Component, pageProps }) {
//    const getLayout = Component.getLayout || ((page) => page);
//   // return(
//   // <LayoutPage>
//   //  <Component {...pageProps} />
//   // </LayoutPage> 
//   // )
//   return getLayout(<Component {...pageProps} />);
// }
import { useStore, Provider } from "react-redux";
import { wrapper } from "@/utiles/store";

const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore();

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
});

export default WrappedApp;
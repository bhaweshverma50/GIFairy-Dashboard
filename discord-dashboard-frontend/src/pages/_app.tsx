import "../utils/styles/globals.scss";
import { AppPropsWithLayout } from "../utils/types";

function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

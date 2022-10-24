import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "../components/modules/footer/Footer";
import Navbar from "../components/navbarProfile";

import { useEffect, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../config/redux/store";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    document.title = "uTicket | Fly Everywhere";
  }, []);

  return (
    <Fragment>
      {router.pathname != "/auth" &&
      router.pathname !== "/404" &&
      router.pathname != "/auth/signup" &&
      router.pathname != "/auth/login" ? (
        <Navbar />
      ) : null}

      <Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Fragment>

      {router.pathname != "/auth" &&
      router.pathname !== "/404" &&
      router.pathname != "/auth/signup" &&
      router.pathname != "/auth/login" ? (
        <Footer />
      ) : null}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default MyApp

MyApp.getInitialProps = async ({ ctx }) => {
  const token = ctx.req?.cookies?.token || null;
  const refreshToken = ctx.req?.cookies?.refreshToken || null;
  const id = ctx.req?.cookies?.id || null;
  const role = ctx.req?.cookies?.role || null;

  return {
    token: token,
    refreshToken: refreshToken,
    id: id,
    role: role,
  };
};

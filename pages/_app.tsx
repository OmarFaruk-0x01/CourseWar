import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import NEXTProg from "nextjs-progressbar";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { AnimateSharedLayout } from "framer-motion";
const {
  theme: { colors },
} = resolveConfig(tailwindConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <NEXTProg
        //@ts-ignore
        color={colors.primary["500"]}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      {/* @ts-ignore */}
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </IconContext.Provider>
  );
}

export default MyApp;

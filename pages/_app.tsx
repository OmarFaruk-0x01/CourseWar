import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import NEXTProg from "nextjs-progressbar";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
const {
  theme: { colors },
} = resolveConfig(tailwindConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      {/* @ts-ignore */}
      <NEXTProg color={colors.primary["500"]} height={3} showOnShallow options={{showSpinner: false}}/>
      <Component 
       {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;

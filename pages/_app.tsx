import "styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/inter";
import "@fontsource/eb-garamond";
import Image from "next/image";

import logo from "public/images/logo.svg";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="flex justify-between items-center wrapper mt-8 mb-16">
        <Link href="/">
          <a className="w-12 h-12 block">
            <Image src={logo} alt="swiss codes logo" />
          </a>
        </Link>
        <div className="space-x-12">
          <Link href="/days">
            <a className="text-gray-300 uppercase font-semibold hover:text-white ">
              Days
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-300 uppercase font-semibold hover:text-white ">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-300 uppercase font-semibold hover:text-white ">
              Contact
            </a>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <div className="flex items-center gap-6">
              <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold whitespace-nowrap">
                LET&apos;S WORK TOGETHER
              </h1>
              <Button type="primary" onClick={() => window.open("mailto:jadeeechen@gmail.com")}>Email</Button>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;

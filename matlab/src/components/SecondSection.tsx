import React from "react";
import { Button } from "../components/Button";
export const SecondSection = () => {
    return (
        <>
            <div className="bg-black flex ">
                <div className="h-[580px]  p-20">
                    <p className="text-[44px] text-[#ED0137]">Introduction</p>

                    <p>
                        We've all been in the mud once, and now we've <br />{" "}
                        decided to fight it out. <br />
                        Pay tribute to those pioneers of WEB3 and the <br />{" "}
                        warriors who dedicated their love to the <br />{" "}
                        blockchain. Save the lucky ones alive, join us to <br />
                        save the future! <br />
                        Our mission is to empower everyone to share <br />
                        wealth and succeed. <br />
                        read more...
                    </p>
                    <br />
                    <Button />
                </div>
                <div className="mt-[-80px]">
                    <img src="/ninja.svg" alt="" />
                </div>
            </div>
        </>
    );
};

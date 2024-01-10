import React, { FC } from "react";
import "./index.css";
import Image from "next/image";
import { client1 } from "@/assets/images";
import { rate } from "@/assets/icons";

const ClientSay: FC = () => {
  return (
    <div className="clientsay-content p-10">
      <div className="flex w-full align-item pb-5 ">
        <p className="thin pe-2">what </p>
        <p className="bold">Clients</p>
        <p className="thin ps-2">Say</p>
      </div>
      <div className="align-item">
        <p className="text  " style={{ width: "500px" }}>
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>
      <div>
        <div
          className="flex my-10 gap-sm client-feed"
          style={{
            justifyContent: "center",
            maxHeight: "475px",
          }}
        >
          <Image
            src={client1}
            alt="best developers"
            style={{ width: "fit-content" }}
            className="img-client"
          />

          <div className="client-feeedback p-6">
            <h6><strong>Best Developers</strong></h6>
            <p className="text py-3 pe-10 feedback-text  " style={{fontSize:"13px"}}>
              Outward clothes promise at gravity do excited. Sufficient
              particular impossible by reasonable oh expression is. Yet
              preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
            <Image src={rate} alt="rateing is 5 star" />
            <p className="text">
              <strong>Robert Johnson</strong>
            </p>
            <p className="text">Drictor at Behance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;

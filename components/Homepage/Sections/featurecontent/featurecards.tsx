"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { features } from "@/featuredata";
import "./index.css";
import Link from "next/link";

interface Item {
  name: string;
  details: string;
  more: string;
}

const FeatureCard: FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [width, setWidth] = useState<number>(0);

  const Carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Carousel.current) {
      setWidth(Carousel.current.scrollWidth - Carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div
      className="display-container "
      style={{
        position: "relative",
      }}
    >
      <>
        <motion.div
          ref={Carousel}
          className="carousel py-10 my-5 "
          style={{ width: "100%", overflow: "hidden", paddingLeft: "400px" }}
        >
          <motion.div
            className="first-set inner-carousel flex px-5"
            style={{ justifyContent: "center"}}
            drag="x"
            dragConstraints={{ right: width/2, left: -width }}
            transition={{
              type: "tween",
              damping: 20,
              stiffness: 150,
            }}
          >
            {features ? (
              <div className="flex " style={{ textAlign: "center" }}>
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="card mx-3 p-5 flex flex-col"
                    style={{ width: "350px", height: "242px", gap: "20px" }}
                  >
                    <p className="span-text">{item.name}</p>
                    <p>{item.details}</p>
                    <Link href="#" className="span-text">
                      {item.more}
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </motion.div>
        </motion.div>
      </>
      <div style={{textAlign:"center"}}>
        <button className="btn-not-hover" style={{ padding: "10px 40px" }}>
          Explore All
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;

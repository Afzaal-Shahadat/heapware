"use client";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Imgsec from "@/components/Imgsec";
import ScrollSection from "@/components/ScrollSection";
import Scrollingsection from "@/components/Scrollingsection";
import Counter from "@/components/counter";
import Couser from "@/components/couser";
import Tittle from "@/components/tittle";
import Video from "@/components/video";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// https://heapware.netlify.app/static/media/main.b47c319e54ba8cb1d071.jpg

function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check the window width on the client side
    setWindowWidth(window.innerWidth);

    // Add a resize event listener to update the width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* <Grid /> */}
      {/* <Head /> */}
      <Head />
      <Header />
      <Video />
      {windowWidth < 1232 ? <Scrollingsection /> : <ScrollSection />}
      {/* <Counter /> */}
      {/* <Couser /> */}
      {/* <Tittle /> */}
      {/* <Imgsec /> */}
      <Footer />
    </>
  );
}
export default Home;

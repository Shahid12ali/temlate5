import React from 'react';
import Top_Head from './multiy-components/headers/top-header';
import Header from './multiy-components/headers/header';
import Hero from './multiy-components/home/hero-section';
import Editers from './multiy-components/home/editers';
import Our_Product from './multiy-components/home/our-product';
import ClassicSection from './multiy-components/home/clasic-product';
import Neural from './multiy-components/home/neural';
import CenteredDetails from './multiy-components/home/furture-post';


export default function Home() {
  return (
    <div>
      <Top_Head />
      <Header />
      <Hero />
      <Editers />
      <Our_Product />
      <ClassicSection />
      <Neural />
      <CenteredDetails />
    </div>
  );
}

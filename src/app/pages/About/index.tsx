import React from 'react';
import { Banner } from './banner';
import { Part1 } from './Part1';
import { Part2 } from './part2';
import { Part3 } from './part3';

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

export { AboutPage };

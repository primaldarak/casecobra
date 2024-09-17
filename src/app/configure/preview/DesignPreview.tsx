'use client';

import Phone from '@/components/Phone';
import { COLORS } from '@/validators/option-validators';
import { Configuration } from '@prisma/client';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => setShowConfetti(true), []);

  const { color } = configuration;
  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;

  return (
    <> 
      <div
        className="pointer-events-none select-none absolute inset-0 
    overflow-hidden flex justify-center"
        aria-hidden="true">
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>
      <div
        className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 
    sm:grid-rows-1 sm:gap-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone imgSrc={configuration.croppedImageUrl!} />
        </div>
      </div>
    </>
  );
};

export default DesignPreview;

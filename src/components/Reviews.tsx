/* eslint-disable @next/next/no-img-element */
'use client';
import { useRef } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useInView } from 'framer-motion';

const PHONES = [
  '/testimonials/1.jpg',
  '/testimonials/2.jpg',
  '/testimonials/3.jpg',
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
];

function splitArray<T>(arr: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < arr.length; i++) {
    const index = i % numParts;

    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(arr[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 
      items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      {isInView ? (
        <>
          <ReviewColumn />
        </>
      ) : null}
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="purchases"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />

      <ReviewGrid></ReviewGrid>
    </MaxWidthWrapper>
  );
}

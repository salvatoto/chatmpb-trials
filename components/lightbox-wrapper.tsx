'use client';

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxWrapperProps {
  images: string[];
}

export function LightboxWrapper({ images }: LightboxWrapperProps) {
  const [open, setOpen] = useState(false);

  const slides = images.map(image => ({ src: image }));

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Image
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
}
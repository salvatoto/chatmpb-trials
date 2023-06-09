'use client';

import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { LightboxWrapper } from './lightbox-wrapper'

const components = {
  Image,
  LightboxWrapper
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
} 

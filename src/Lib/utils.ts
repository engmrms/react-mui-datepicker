/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import './ar-sa'

export const twMerge = extendTailwindMerge(config => ({
  ...config,
  classGroups: {
    ...(config.classGroups ?? {}),
    'font-size': [
      'text-caption-01',
      'text-caption-02',
      'text-subtitle-01',
      'text-subtitle-02',
      'text-body-01',
      'text-body-02',
    ],
  },
}))

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

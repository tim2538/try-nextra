'use client';
import { Comfortaa, Prompt } from 'next/font/google';

export const prompt = Prompt({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const comfortaa = Comfortaa({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap'
});

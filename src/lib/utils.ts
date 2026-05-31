import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind classes safely.
 * Solves class conflicts when passing classes down as props.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// src/app/not-found.tsx
import { redirect } from 'next/navigation';

export default function RootNotFound() {
  redirect('/en/not-found');
}

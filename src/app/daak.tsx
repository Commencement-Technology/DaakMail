'use client';

import { invoke } from '@tauri-apps/api/core';
import { useEffect, useState } from 'react';

export default function DaakTestGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke<string>('greet', { name: 'Daak Mail' })
      .then((result) => setGreeting(result))
      .catch(console.error);
  }, []);

  // Necessary because we will have to use Greet as a component later.
  return <div className="text-blue-500">{greeting}</div>;
}

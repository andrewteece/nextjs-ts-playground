'use client';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useState } from 'react';
import Counter from '../Counter';

export default function PlayPage() {
  const [echo, setEcho] = useState('');

  const callApi = async () => {
    const res = await fetch('/api/echo', {
      method: 'POST',
      body: JSON.stringify({ msg: 'hello' }),
    });
    const data = (await res.json()) as { msg: string };
    setEcho(data.msg);
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-semibold'>Playground</h2>

      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent className='space-x-2'>
          <Counter />
          <Button size='sm' variant='outline' onClick={callApi}>
            Call /api/echo
          </Button>
        </CardContent>
      </Card>

      {echo && <p>API said: {echo}</p>}
    </div>
  );
}

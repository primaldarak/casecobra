'use client';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);

  useEffect(() => {
    const configurationId = localStorage.getItem('configurationId');

    if (configurationId) {
      setConfigId(configurationId);
    }
  }, []);

  const {} = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus(),
  });

  return <div>page</div>;
};

export default Page;

import React from 'react';
import { Button } from './components/ui/Button';

export default function ORCIDLogin() {
  const handleLogin = () => {
    window.location.href = `https://orcid.org/oauth/authorize?client_id=PUBLIC_ORCID_CLIENT_ID&response_type=code&scope=/authenticate&redirect_uri=https://research-tracker.vercel.app/auth/callback`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Research Tracker</h1>
        <p className="text-gray-600">Login with ORCID to monitor your publications</p>
        <Button onClick={handleLogin} className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
          Login with ORCID
        </Button>
      </div>
    </div>
  );
}
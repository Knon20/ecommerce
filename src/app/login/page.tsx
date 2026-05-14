'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../stores/useAuthStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-ecommerce-pearl.vercel.app';
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'omit', // En producción Vercel backend puede necesitar include si está en el mismo dominio, o para CORS.
        // Wait, the cookies won't work cross-domain if they aren't on the same site. But the backend sets httpOnly cookie.
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      setAuthenticated(true);
      router.push('/cart');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl overflow-hidden">
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-black">Knon</span> Store
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-black mb-2">Inicia Sesión en tu Cuenta</h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form onSubmit={handleLogin} className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-black text-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white transition-colors"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

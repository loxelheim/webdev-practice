import { useState } from 'react';


export default function SignInForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault()
    const credentials = { email, password }
    // Login Versuch starten...
    console.log(credentials)

    if (credentials.email == "test@test.de" && credentials.password == "123456") {
      setIsLoggedIn(true);
    }

    setEmail('');
    setPassword('');

  };

  return (<section className="flex flex-col items-center justify-center min-h-[450px] p-10 bg-[#fdf6e3] border-[6px] border-[#8b5e34] shadow-[0_0_40px_rgba(180,140,0,0.2),inset_0_0_100px_rgba(139,94,52,0.1)] rounded-[3rem] relative overflow-hidden font-serif">
    
    {/* Animated Magic Sparkles (Background elements) */}
    <div className="absolute top-4 right-8 text-amber-400 animate-pulse text-2xl">✦</div>
    <div className="absolute bottom-10 left-6 text-emerald-400 animate-bounce text-xl">✧</div>

    {isLoggedIn ? (
        <div className="text-center space-y-6">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-4xl font-extrabold text-[#2d5a27] italic tracking-tight">
                Welcome, Traveler!
            </h3>
            <p className="text-[#8b5e34] font-medium tracking-wide">The gates to the realm are open.</p>
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-8 relative z-10">
            
            <div className="text-center">
                <h2 className="text-3xl font-black text-[#5c3d2e] drop-shadow-sm italic">
                    Seeker's <span className="text-[#d97706] drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">Entrance</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#d97706] to-transparent mx-auto mt-2"></div>
            </div>
            
            <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-[#8b5e34] ml-2 tracking-[0.2em]">Identify Thyself</label>
                <input 
                    type="email" 
                    placeholder="Scroll of Email..." 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="w-full px-6 py-4 bg-white/50 border-2 border-[#d4b483] rounded-full text-[#5c3d2e] placeholder:text-[#a89078] focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all italic shadow-inner"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-[#8b5e34] ml-2 tracking-[0.2em]">Secret Incantation</label>
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    className="w-full px-6 py-4 bg-white/50 border-2 border-[#d4b483] rounded-full text-[#5c3d2e] focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all shadow-inner"
                />
            </div>
            
            <button 
                type="submit" 
                className="group relative w-full py-4 bg-gradient-to-b from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-white font-bold rounded-full shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-[6px] transition-all overflow-hidden"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Cast Login <span className="group-hover:rotate-12 transition-transform italic text-xl">🪄</span>
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>

            <p className="text-center text-[#8b5e34] text-sm italic">
                Forgotten your runes? <a href="#" className="underline decoration-emerald-500 text-emerald-700 font-bold hover:text-emerald-500">Call the Owl</a>
            </p>
        </form>
    )}
</section>);
};
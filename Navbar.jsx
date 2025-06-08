// الملف: components/Navbar.jsx import React, { useState } from 'react';

export default function Navbar() { const [lang, setLang] = useState('ar');

return ( <div className="w-full bg-black text-white p-4 flex justify-between items-center"> <h1 className="text-xl font-bold">STYLER</h1>

<div className="flex gap-4">
    {/* زر اللغة العربية */}
    <button
      className={`flex items-center gap-2 px-3 py-1 rounded ${lang === 'ar' ? 'bg-white text-black' : ''}`}
      onClick={() => setLang('ar')}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Yemen.svg/32px-Flag_of_Yemen.svg.png"
        alt="اليمن"
        className="w-5 h-4"
      />
      عربي
    </button>

    {/* زر اللغة الإنجليزية */}
    <button
      className={`flex items-center gap-2 px-3 py-1 rounded ${lang === 'en' ? 'bg-white text-black' : ''}`}
      onClick={() => setLang('en')}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
        alt="English"
        className="w-5 h-4"
      />
      English
    </button>
  </div>
</div>

); }



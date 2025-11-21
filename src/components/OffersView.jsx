import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const STORAGE_KEY = 'site_offers_v1';

const OffersView = ({ navigateTo }) => {
  const [offers, setOffers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [externalUrl, setExternalUrl] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setOffers(JSON.parse(raw));
  }, []);

  const save = (next) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setOffers(next);
  };

  const handleAdminLogin = () => {
    const pw = prompt('Introduceți parola administrator (ex: admin)');
    if (pw === 'admin') setIsAdmin(true);
    else alert('Parolă greșită');
  };

  const addOffer = (e) => {
    e.preventDefault();
    const newOffer = { id: Date.now(), title: title || 'Ofertă', desc, externalUrl };
    const next = [newOffer, ...offers];
    save(next);
    setTitle(''); setDesc(''); setExternalUrl('');
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-emerald-500 mb-6 transition-colors">Înapoi acasă</button>
          <SectionTitle title="Oferte Viitoare" subtitle="Tabere și cursuri" sportMode={'ski'} />
        </div>

        {isAdmin ? (
          <form onSubmit={addOffer} className="max-w-2xl mx-auto bg-slate-50 p-6 rounded-xl mb-8">
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titlu ofertă" className="w-full mb-3 p-3 rounded-lg border" />
            <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Descriere" className="w-full mb-3 p-3 rounded-lg border" rows={4} />
            <input value={externalUrl} onChange={e => setExternalUrl(e.target.value)} placeholder="Link extern Rezervare (ex: https://...)" className="w-full mb-3 p-3 rounded-lg border" />
            <div className="flex gap-3 justify-end">
              <button type="submit" className="px-5 py-2 bg-emerald-500 text-white rounded-lg font-bold">Adaugă ofertă</button>
            </div>
          </form>
        ) : (
          <div className="text-center mb-6">
            <button onClick={handleAdminLogin} className="px-4 py-2 bg-white border rounded-lg">Login admin</button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {offers.length === 0 && <p className="text-center text-slate-500">Nu există oferte încă.</p>}
          {offers.map(o => (
            <div key={o.id} className="bg-white rounded-2xl shadow p-6 border">
              <h3 className="font-black text-xl mb-2">{o.title}</h3>
              <p className="text-slate-700 mb-4">{o.desc}</p>
              {o.externalUrl && (
                <a href={o.externalUrl} target="_blank" rel="noreferrer">
                  <Button className="!px-6 !py-3" sportMode={'ski'}>Rezervă loc</Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersView;

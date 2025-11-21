import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const STORAGE_KEY = 'site_news_posts_v1';

const NewsView = ({ navigateTo }) => {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setPosts(JSON.parse(raw));
  }, []);

  const save = (next) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPosts(next);
  };

  const handleAdminLogin = () => {
    const pw = prompt('Introduceți parola administrator (ex: admin)');
    if (pw === 'admin') setIsAdmin(true);
    else alert('Parolă greșită');
  };

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title: title || 'Anunț', content, date: new Date().toISOString() };
    const next = [newPost, ...posts];
    save(next);
    setTitle(''); setContent('');
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-emerald-500 mb-6 transition-colors">Înapoi acasă</button>
          <SectionTitle title="Noutăți" subtitle="Ultimele anunțuri" sportMode={'ski'} />
        </div>

        {isAdmin ? (
          <form onSubmit={addPost} className="max-w-2xl mx-auto bg-slate-50 p-6 rounded-xl mb-8">
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titlu" className="w-full mb-3 p-3 rounded-lg border" />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Conținut" className="w-full mb-3 p-3 rounded-lg border" rows={4} />
            <div className="flex gap-3 justify-end">
              <button type="submit" className="px-5 py-2 bg-emerald-500 text-white rounded-lg font-bold">Publică</button>
            </div>
          </form>
        ) : (
          <div className="text-center mb-6">
            <button onClick={handleAdminLogin} className="px-4 py-2 bg-white border rounded-lg">Login admin</button>
          </div>
        )}

        <div className="space-y-6">
          {posts.length === 0 && <p className="text-center text-slate-500">Nu există anunțuri încă.</p>}
          {posts.map(p => (
            <article key={p.id} className="bg-white rounded-2xl shadow p-6 border">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-black text-xl mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{new Date(p.date).toLocaleString()}</p>
                  <p className="text-slate-700">{p.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsView;

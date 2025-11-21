import React from 'react';
import { Snowflake, Check, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { RESERVATION_URL } from '../constants';

const PackagesPage = ({ sportMode }) => {
  const packages = [
    { 
      title: "Start", 
      sub: "Începători", 
      price: "150 RON",
      duration: "1 oră",
      color: sportMode === 'ski' ? "bg-emerald-500" : "bg-indigo-500", 
      feat: ["1 la 1 cu monitorul", "Ritmul tău", "Siguranță maximă", "Echipament inclus (opțional)"] 
    },
    { 
      title: "Gașca", 
      sub: "Grup (2-4 pers)", 
      price: "100 RON / pers",
      duration: "2 ore",
      color: "bg-blue-500", 
      feat: ["Distracție cu prietenii", "Învățare prin joc", "Competiție amicală", "Reducere de grup"] 
    },
    { 
      title: "Pro", 
      sub: "Avansați", 
      price: "200 RON",
      duration: "1.5 ore",
      color: "bg-purple-500", 
      feat: ["Tehnică avansată", "Video analiză", "Corectare stil", "Carving & Off-piste"] 
    }
  ];

  const faqs = [
    { q: "Trebuie să am echipamentul meu?", a: "Nu neapărat. Avem un centru de închirieri partener chiar lângă școală, unde primești reducere ca elev al nostru." },
    { q: "De la ce vârstă se poate începe?", a: "Pentru schi, recomandăm vârsta minimă de 4 ani. Pentru snowboard, 7-8 ani este ideal pentru dezvoltarea echilibrului." },
    { q: "Ce se întâmplă dacă vremea e rea?", a: "Siguranța e prioritară. Dacă instalațiile sunt oprite sau vremea e periculoasă, reprogramăm lecția fără costuri suplimentare." },
    { q: "Pot anula rezervarea?", a: "Da, cu minim 24 de ore înainte pentru rambursare integrală sau reprogramare." }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Alege Stilul" title="Pachete pentru Toți" sportMode={sportMode} />
        
        {/* Packages Grid */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto mb-24">
          {packages.map((pkg, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all border border-slate-100 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className={`w-14 h-14 ${pkg.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg text-white mx-auto md:mx-0`}>
                  <Snowflake size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{pkg.title}</h3>
                <p className="text-slate-400 font-bold text-sm uppercase mb-6">{pkg.sub}</p>
                
                <div className="mb-8 md:mb-0">
                  <span className="text-4xl font-black text-slate-800">{pkg.price}</span>
                  <span className="text-slate-500 font-medium"> / {pkg.duration}</span>
                </div>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <ul className="space-y-4 mb-8">
                  {pkg.feat.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <div className={`mt-1 min-w-[1.25rem] h-5 rounded-full ${pkg.color} flex items-center justify-center text-white`}>
                        <Check size={12} strokeWidth={4} />
                      </div> 
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href={RESERVATION_URL} className="w-full !text-sm !py-4 bg-white border-2 border-slate-200 hover:border-transparent" sportMode={sportMode}>Rezervă Acum</Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Întrebări Frecvente</h3>
            <p className="text-slate-600">Tot ce trebuie să știi înainte să ajungi pe pârtie.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className={`mt-1 min-w-[2.5rem] h-10 rounded-xl ${sportMode === 'ski' ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'} flex items-center justify-center`}>
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{item.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;

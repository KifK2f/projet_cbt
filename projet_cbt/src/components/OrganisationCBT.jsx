import React from 'react';
import "../assets/css/organisation-cbt.css";

const MemberCard = ({ name, role, phone, type, isMain }) => (
  <div className={`col-6 col-md-4 ${isMain ? 'col-lg-12 mb-4' : 'col-lg-3 mb-4'}`}>
    <div className="text-center">
      <div className={`photo-frame ${type === 'gold' ? 'frame-gold' : 'frame-blue'}`}>
        <img src="https://via.placeholder.com/200x250" alt={name} />
      </div>
      <div className="info-box mx-auto" style={{ maxWidth: '220px' }}>
        <p className="member-name">{name}</p>
        <p className="member-role">{role}</p>
        <p className="member-phone">Tél : {phone}</p>
      </div>
    </div>
  </div>
);

const NotreHistoire = () => {
  const bureauExecutif = [
    { name: "Rév. AYADOME Kokou Elie", role: "Président National de la CBT", phone: "90 86 03 00 / 98 71 42 42", type: "gold", isMain: true },
    { name: "Rév. COMAR CODJIA Kokou", role: "Vice Président", phone: "90 10 40 20 / 99 83 15 68", type: "gold" },
    { name: "Rév. FINOU Kossi Joseph", role: "Secrétaire Administratif", phone: "92 51 37 07", type: "gold" },
    { name: "Diacre OLOYEDE Sunday O.", role: "Trésorier Général", phone: "90 29 12 14", type: "gold" },
    { name: "PALI Pigassani Jules", role: "Trésorier Adjoint", phone: "91 26 80 52", type: "gold" },
    { name: "Pasteur LOKO Kodjo Paul", role: "Secrétaire Administratif Adjoint", phone: "97 49 34 73", type: "gold" },
    { name: "Rév. AMEDJIKPO Kouami Charles", role: "Directeur DMEFT-CBT", phone: "90 21 81 32", type: "gold" },
  ];

  const departements = [
    { name: "Past. SANVI Komlan Jacques", role: "Directeur de l'UMH", phone: "90 77 64 87" },
    { name: "EGOU Abra épse AMEDJIKPO", role: "Directrice de l'UMF", phone: "90 38 84 50" },
    { name: "Rév. DABLA Yao Amétépé", role: "Directeur de la JCBT", phone: "90 35 47 93" },
    { name: "KODJO Kafui Louange épse AYADOME", role: "Directrice Développement des Enfants", phone: "93 01 36 86" },
    { name: "Rév. SENOU Yawo", role: "Directeur Mission-Evangélisation", phone: "97 42 68 86" },
    { name: "ASSIDJAH Abalo Oscar", role: "Directeur des Projets", phone: "92 51 37 07" },
    { name: "Rév. TCHALARE", role: "Directeur de l'IBBT", phone: "93 85 09 85" },
  ];

  const zones = [
    { name: "Pasteur AFATSAO Kodjo David", role: "V. Modérateur Zone Agapé", phone: "90 89 30 66" },
    { name: "Rév APEMEKOU Komivi", role: "Modérateur Zone Béthel", phone: "91 98 63 19" },
    { name: "Rév. MAYIKOU Koffi Emmanuel", role: "Modérateur Zone ZION", phone: "90 74 99 65" },
    { name: "Rév. ATITSO Kodzo Robert", role: "Modérateur Zone Jésus la Victoire", phone: "90 32 62 13" },
    { name: "Rév. AROUKA Mawussi", role: "Modérateur Zone Jésus la Vérité", phone: "90 19 89 74" },
    { name: "Rév. KOMAGBE Hougbedji Agbo", role: "Modérateur Zone Jésus la Vie", phone: "92 90 02 23" },
    { name: "Rév. AGBO Kossi", role: "Modérateur Zone Jésus la Solution", phone: "92 52 82 02" },
    { name: "Rév. AYEFOUINE Béni Esdras", role: "Modérateur Zone Jésus la Paix", phone: "90 72 42 77" },
    { name: "Rév. ATAKPAH Koffidé", role: "Modérateur Zone Héritier de la Grâce", phone: "90 73 89 01" },
    { name: "Past. ODJOBO Komlan", role: "Modérateur Zone Yeesu Ni Ona", phone: "70 27 84 53" },
    { name: "Past. PILABA Dikati", role: "Modérateur Zone Christ Roi", phone: "91 76 85 04" },
    { name: "Past. ODJO Babatoundé", role: "Modérateur Zone Dieu d'Abord", phone: "91 26 56 31" },
    { name: "Past. TIDEMA Bikalabou", role: "Modérateur Zone Jésus le Roc", phone: "90 74 42 81" },
    { name: "Rév. NEMBA Koamkahoga", role: "Modérateur Zone Bonne Nouvelle", phone: "91 83 09 47" },
    { name: "Rév. TOUGOUR Emmanuel", role: "Modérateur Zone Grâce de Dieu", phone: "91 17 48 41" },
    { name: "Past. ANATOR Yawo Sédoh", role: "Modérateur Zone Fleuve de Vie", phone: "90 31 92 65" },
    { name: "Rév. KPADJIBA Tognon", role: "Modérateur Zone Moisson", phone: "92 51 10 16" },
  ];

  return (
    <div className="org-container py-5 text-center">
      
      {/* SECTION 1 */}
      <div className="section-wrapper container">
        <div className="banner banner-red">Membres du Bureau Exécutif</div>
        <div className="row justify-content-center">
          {bureauExecutif.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-wrapper container">
        <div className="banner banner-blue">Directeurs des Départements</div>
        <div className="row justify-content-center">
          {departements.map((m, i) => <MemberCard key={i} {...m} type="blue" />)}
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="section-wrapper container-fluid">
        <div className="banner banner-blue">Modérateurs des Zones</div>
        <div className="row justify-content-center px-lg-5">
          {zones.map((m, i) => <MemberCard key={i} {...m} type="blue" />)}
        </div>
      </div>

    </div>
  );
};

export default NotreHistoire;
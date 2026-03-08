import React, { useEffect, useState } from 'react';
import "../assets/css/organisation-cbt.css";
import OrganisationCBTService from "../service/OrganisationCBTService";

const MemberCard = ({ name, role, phone, type, is_main, url_image }) => (
  <div className={is_main ? 'main-member' : 'executif-card'}>
    <div className={is_main ? 'president-card-wrapper' : 'text-center'}>
      <div className={`photo-frame ${type === 'gold' ? 'frame-gold' : 'frame-blue'} ${is_main ? 'frame-main' : ''}`}>
        <img
          src={`http://localhost:8000/storage/organisationCBT/${url_image}`}
          alt={name}
          className={is_main ? 'img-main' : ''}
        />
      </div>
      <div className={`info-box mt-2 ${is_main ? 'info-main mt-3' : ''}`} style={{ width: is_main ? '300px' : '250px' }}>
        <p className="member-name">{name}</p>
        <p className="member-role">{role}</p>
        <p className="member-phone">Tél : {phone}</p>
      </div>
    </div>
  </div>
);

const ScrollingSection = ({ title, president, members, type }) => {
  if (!members.length && !president) return null;

  const displayMembers = [...members, ...members];

  return (
    <div className="section-wrapper">
      <div className={`banner ${type === 'gold' ? 'banner-red' : 'banner-blue'}`}>{title}</div>

      {/* PRESIDENT */}
      {president && (
        <div className="president-wrapper">
          <MemberCard {...president} type="gold" is_main={true} />
        </div>
      )}

      {/* AUTRES MEMBRES EXECUTIF */}
      {members.length > 0 && (
        <div className="scroll-wrapper">
          <div className="scroll-track speed-normal">
            {displayMembers.map((m, i) => (
              <MemberCard key={i} {...m} type={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ZonesSection = ({ title, members }) => {
  if (!members.length) return null;

  const rows = [];
  for (let i = 0; i < members.length; i += 6) {
    rows.push(members.slice(i, i + 6));
  }

  return (
    <div className="section-wrapper">
      <div className="banner banner-blue">{title}</div>
      {rows.map((row, idx) => {
        // Dupliquer la ligne pour scroll infini
        const displayRow = [...row, ...row];
        return (
          <div key={idx} className="scroll-wrapper">
            <div className="scroll-track speed-normal">
              {displayRow.map((m, i) => (
                <div key={i} className="zone-card">
                  <MemberCard {...m} type="blue" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrganisationCBT = () => {
  const [bureauExecutif, setBureauExecutif] = useState([]);
  const [departements, setDepartements] = useState([]);
  const [zones, setZones] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => {
    OrganisationCBTService.getAllorganisationCBT()
      .then(res => {
        const data = res.data;
        setPresident(data.find(m => m.is_main));
        setBureauExecutif(data.filter(m => m.category === 'executif' && !m.is_main));
        setDepartements(data.filter(m => m.category === 'departement'));
        setZones(data.filter(m => m.category === 'zone'));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="org-container py-5 text-center">

      {/* BUREAU EXECUTIF */}
      <ScrollingSection
        title="Membres du Bureau Exécutif"
        president={president}
        members={bureauExecutif}
        type="gold"
      />

      {/* DEPARTEMENTS */}
      <ScrollingSection title="Directeurs des Départements" members={departements} type="blue" />

      {/* ZONES */}
      {/* <ScrollingSection title="Modérateurs des Zones" members={zones} type="blue" /> */}
      <ZonesSection title="Modérateurs des Zones" members={zones} />
    </div>
  );
};

export default OrganisationCBT;
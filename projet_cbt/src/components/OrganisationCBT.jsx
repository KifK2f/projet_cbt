import React, { useEffect, useState } from 'react';
import "../assets/css/organisation-cbt.css";
import OrganisationCBTService from "../service/OrganisationCBTService";

// const MemberCard = ({ name, role, phone, type, is_main, url_image }) => (
//   <div className={`col-6 col-md-4 ${is_main ? 'col-lg-12 mb-4' : 'col-lg-3 mb-4'}`}>
//     <div className="text-center">
//       <div className={`photo-frame ${type === 'gold' ? 'frame-gold' : 'frame-blue'}`}>
//         <img
//           src={`http://localhost:8000/storage/organisationCBT/${url_image}`}
//           alt={name}
//           className="img-fluid"
//         />
//       </div>

//       <div className="info-box mx-auto" style={{ maxWidth: '220px' }}>
//         <p className="member-name">{name}</p>
//         <p className="member-role">{role}</p>
//         <p className="member-phone">Tél : {phone}</p>
//       </div>
//     </div>
//   </div>
// );

const MemberCard = ({
  name,
  role,
  phone,
  type,
  is_main,
  url_image
}) => (
  <div
    className={`
      col-6 col-md-4 
      ${is_main ? 'col-lg-12 mb-5 main-member' : 'col-lg-3 mb-4'}
    `}
  >
    <div className="text-center">

      <div
        className={`
          photo-frame 
          ${type === 'gold' ? 'frame-gold' : 'frame-blue'}
          ${is_main ? 'frame-main' : ''}
        `}
      >
        <img
          src={`http://localhost:8000/storage/organisationCBT/${url_image}`}
          alt={name}
          className={`img-fluid ${is_main ? 'img-main' : ''}`}
        />
      </div>

      <div
        className={`info-box mx-auto ${is_main ? 'info-main' : ''}`}
        style={{ maxWidth: is_main ? '300px' : '220px' }}
      >
        <p className="member-name">{name}</p>
        <p className="member-role">{role}</p>
        <p className="member-phone">Tél : {phone}</p>
      </div>

    </div>
  </div>
);

const OrganisationCBT = () => {

  const [bureauExecutif, setBureauExecutif] = useState([]);
  const [departements, setDepartements] = useState([]);
  const [zones, setZones] = useState([]);

  useEffect(() => {
    OrganisationCBTService.getAllorganisationCBT()
      .then(res => {
        const data = res.data;

        // Filtrage selon le type venant de la base
        setBureauExecutif(data.filter(m => m.category === "executif"));
        setDepartements(data.filter(m => m.category === "departement"));
        setZones(data.filter(m => m.category === "zone"));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="org-container py-5 text-center">

      {/* SECTION 1 */}
      <div className="section-wrapper container">
        <div className="banner banner-red">Membres du Bureau Exécutif</div>
        <div className="row justify-content-center">
          {bureauExecutif.map((m, i) => (
            <MemberCard
              key={i}
              name={m.name}
              role={m.role}
              phone={m.phone}
              url_image={m.url_image}
              type="gold"
              is_main={m.is_main}
            />
          ))}
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-wrapper container">
        <div className="banner banner-blue">Directeurs des Départements</div>
        <div className="row justify-content-center">
          {departements.map((m, i) => (
            <MemberCard
              key={i}
              name={m.name}
              role={m.role}
              phone={m.phone}
              url_image={m.url_image}
              type="blue"
            />
          ))}
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="section-wrapper container-fluid">
        <div className="banner banner-blue">Modérateurs des Zones</div>
        <div className="row justify-content-center px-lg-5">
          {zones.map((m, i) => (
            <MemberCard
              key={i}
              name={m.name}
              role={m.role}
              phone={m.phone}
              url_image={m.url_image}
              type="blue"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default OrganisationCBT;
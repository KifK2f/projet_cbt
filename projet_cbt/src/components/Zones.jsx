import React, { useEffect, useState } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ChurchIcon from "@mui/icons-material/Church";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GroupsIcon from "@mui/icons-material/Groups";
import "../assets/css/zones.css";

const Zones = () => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [annee, setAnnee] = useState(2026);

  useEffect(() => {
    // Données complètes des zones avec églises simulées
    const modérateurs = [
      { id: 1, zone: "AGAPE", moderateur: "Rév. AKPAGLI Marcelin", contacts: "90354134" },
      { id: 2, zone: "BETHEL", moderateur: "Rév. APEMEKOU Emmanuel", contacts: "91986319" },
      { id: 3, zone: "ZION", moderateur: "Rév. FINOU Joseph", contacts: "92513707" },
      { id: 4, zone: "VICTOIRE", moderateur: "Past. ATTISSO Robert", contacts: "90326213" },
      { id: 5, zone: "VERITE", moderateur: "Rév. MAWUSSI Emmanuel", contacts: "90198974" },
      { id: 6, zone: "VIE", moderateur: "Rév. KOMAGBE Agbo", contacts: "92900223" },
      { id: 7, zone: "SOLUTION", moderateur: "Rév. AGBO KOSSI", contacts: "92528202" },
      { id: 8, zone: "PAIX", moderateur: "Rév. AYEFOUNE Béni Esdras", contacts: "90724277" },
      { id: 9, zone: "HERITIERS DE LA GRACE", moderateur: "Rév. ATAKPAH Koffide", contacts: "90738901" },
      { id: 10, zone: "YEESU NI ONA", moderateur: "Rév. ODJOBO Komlan", contacts: "70278453" },
      { id: 11, zone: "CHRIST-ROI", moderateur: "Past. PILABA Dikati", contacts: "91738504" },
      { id: 12, zone: "DIEU D’ABORD", moderateur: "Rév. ODJO Babatoundé", contacts: "91265631" },
      { id: 13, zone: "ROC", moderateur: "Past. TIDEMA Bikalabou", contacts: "90744281" },
      { id: 14, zone: "BONNE NOUVELLE", moderateur: "Rév. NEMBA Koamkahoga", contacts: "91930947" },
      { id: 15, zone: "GRACE DE DIEU", moderateur: "Rév. TOUGOUR Emmanuel", contacts: "91174841" },
      { id: 16, zone: "FLEUVE DE VIE", moderateur: "Past. ANATOR Yawo Sédoh", contacts: "90319265" },
      { id: 17, zone: "LA MOISSON", moderateur: "Past. KPADJIBA TOGNON", contacts: "92511016" },
    ];

    const zonesData = modérateurs.map((z, idx) => ({
      id: z.id,
      attributs: {
        ...z,
        annee: 2026,
        eglises: [
          { id: idx*10+1, nom: `Église de ${z.zone} A`, pasteur: `Past. ${z.zone} A` },
          { id: idx*10+2, nom: `Église de ${z.zone} B`, pasteur: `Past. ${z.zone} B` },
          { id: idx*10+3, nom: `Église de ${z.zone} C`, pasteur: `Past. ${z.zone} C` }
        ]
      }
    }));

    setZones(zonesData);
  }, []);

  const anneesDisponibles = [...new Set(zones.map(z => z.attributs.annee))];

  return (
    <section className="zones-section">
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center mb-2">
            <LocationCityIcon className="me-2 cbt-blue" style={{ fontSize: "2.5rem" }} />
            <h2 className="fw-bold m-0">Département des Zones</h2>
          </div>
          <p className="text-muted">Organisation territoriale et modérateurs de la Convention</p>

          <div className="mt-4">
            {anneesDisponibles.map(a => (
              <button
                key={a}
                className={`btn btn-year me-2 ${a === annee ? "active" : ""}`}
                onClick={() => { setAnnee(a); setSelectedZone(null); }}
              >
                Année {a}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          {/* Liste des Zones */}
          <div className={selectedZone ? "col-lg-6" : "col-lg-12"}>
            <div className="table-responsive shadow-sm rounded border">
              <table className="table table-hover align-middle mb-0">
                <thead className="cbt-bg-blue text-white">
                  <tr>
                    <th><GroupsIcon /> Zone</th>
                    <th><PersonIcon /> Modérateur</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {zones
                    .filter(z => z.attributs.annee === annee)
                    .map((z) => (
                      <tr 
                        key={z.id} 
                        className={selectedZone?.id === z.id ? "table-active-selected" : ""}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedZone(z)}
                      >
                        <td className="fw-bold cbt-blue">{z.attributs.zone}</td>
                        <td>
                          <div className="d-flex flex-column">
                            <span>{z.attributs.moderateur}</span>
                            <small className="text-muted"><PhoneIcon sx={{fontSize: 14}} /> {z.attributs.contacts}</small>
                          </div>
                        </td>
                        <td className="text-center">
                          <button className={`btn btn-sm ${selectedZone?.id === z.id ? 'btn-primary' : 'btn-outline-primary'}`}>
                            {selectedZone?.id === z.id ? <ArrowForwardIosIcon sx={{fontSize: 14}} /> : "Voir Églises"}
                          </button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Détails des Églises */}
          {selectedZone && (
            <div className="col-lg-6 mt-4 mt-lg-0 animate-fade-in">
              <div className="card border-primary shadow">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0"><ChurchIcon className="me-2"/> Églises de {selectedZone.attributs.zone}</h5>
                  <button className="btn-close btn-close-white" onClick={() => setSelectedZone(null)}></button>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    {selectedZone.attributs.eglises.map(eglise => (
                      <div key={eglise.id} className="list-group-item d-flex justify-content-between align-items-start py-3">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold text-dark">{eglise.nom}</div>
                          <small className="text-muted">Pasteur Titulaire : {eglise.pasteur}</small>
                        </div>
                        {/* <span className="badge bg-soft-primary rounded-pill">Actif</span> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-light text-center">
                  <small className="text-muted">Total : {selectedZone.attributs.eglises.length} églises répertoriées</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Zones;
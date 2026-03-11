import React, { useEffect, useState } from "react";
import "../assets/css/zones.css";

const Zones = () => {
  const [zones, setZones] = useState([]);
  const [annee, setAnnee] = useState(2026);

  useEffect(() => {
    // Simulation API
    const dataAPI = [
      { id: 1, attributs: { zone: "AGAPE", moderateur: "Rév. AKPAGLI Marcelin", contacts: "90354134", annee: 2026 } },
      { id: 2, attributs: { zone: "BETHEL", moderateur: "Rév. APEMEKOU Emmanuel", contacts: "91986319", annee: 2026 } },
      { id: 3, attributs: { zone: "ZION", moderateur: "Rév. FINOU Joseph", contacts: "92513707", annee: 2026 } },
      { id: 4, attributs: { zone: "VICTOIRE", moderateur: "Past. ATTISSO Robert", contacts: "90326213", annee: 2026 } },
      { id: 5, attributs: { zone: "VERITE", moderateur: "Rév. MAWUSSI Emmanuel", contacts: "90198974", annee: 2026 } },
      { id: 6, attributs: { zone: "VIE", moderateur: "Rév. KOMAGBE Agbo", contacts: "92900223", annee: 2026 } },
      { id: 7, attributs: { zone: "SOLUTION", moderateur: "Rév. AGBO KOSSI", contacts: "92528202", annee: 2026 } },
      { id: 8, attributs: { zone: "PAIX", moderateur: "Rév. AYEFOUNE Béni Esdras", contacts: "90724277", annee: 2026 } },
      { id: 9, attributs: { zone: "HERITIERS DE LA GRACE", moderateur: "Rév. ATAKPAH Koffide", contacts: "90738901", annee: 2026 } },
      { id: 10, attributs: { zone: "YEESU NI ONA", moderateur: "Rév. ODJOBO Komlan", contacts: "70278453", annee: 2026 } },
      { id: 11, attributs: { zone: "CHRIST-ROI", moderateur: "Past. PILABA Dikati", contacts: "91738504", annee: 2026 } },
      { id: 12, attributs: { zone: "DIEU D’ABORD", moderateur: "Rév. ODJO Babatoundé", contacts: "91265631", annee: 2026 } },
      { id: 13, attributs: { zone: "ROC", moderateur: "Past. TIDEMA Bikalabou", contacts: "90744281", annee: 2026 } },
      { id: 14, attributs: { zone: "BONNE NOUVELLE", moderateur: "Rév. NEMBA Koamkahoga", contacts: "91930947", annee: 2026 } },
      { id: 15, attributs: { zone: "GRACE DE DIEU", moderateur: "Rév. TOUGOUR Emmanuel", contacts: "91174841", annee: 2026 } },
      { id: 16, attributs: { zone: "FLEUVE DE VIE", moderateur: "Past. ANATOR Yawo Sédoh", contacts: "90319265", annee: 2026 } },
      { id: 17, attributs: { zone: "LA MOISSON", moderateur: "Past. KPADJIBA TOGNON", contacts: "92511016", annee: 2026 } },
    ];

    setZones(dataAPI);
  }, []);

  const anneesDisponibles = [...new Set(zones.map(z => z.attributs.annee))];

  return (
    <section className="zones-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Zones & Modérateurs {annee}</h2>
          <p className="text-muted">Liste des modérateurs par zone pour l'année sélectionnée</p>

          <div className="mb-4">
            {anneesDisponibles.map(a => (
              <button
                key={a}
                className={`btn me-2 ${a === annee ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setAnnee(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Zone</th>
                <th>Nom et Prénoms</th>
                <th>Contacts</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {zones
                .filter(z => z.attributs.annee === annee)
                .map((z, idx) => (
                  <tr key={z.id}>
                    <td>{idx + 1}</td>
                    <td>{z.attributs.zone}</td>
                    <td>{z.attributs.moderateur}</td>
                    <td>{z.attributs.contacts}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary" 
                        onClick={() => alert(`Voir les églises de la zone ${z.attributs.zone}`)}>
                        Voir Églises
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Zones;
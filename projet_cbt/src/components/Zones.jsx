import React, { useEffect, useState } from "react";
import "../assets/css/zones.css";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ChurchIcon from "@mui/icons-material/Church";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from '@mui/icons-material/DateRange';

import ZoneService from "../service/ZoneService";
import EgliseService from "../service/EgliseService";

const Modal = ({ open, onClose, zone, eglises }) => {
  if (!open) return null;

  return (
    <div
      className="zones-modal-overlay"
      onClick={onClose} // ferme si on clique hors de la modal
    >
      <div className="zones-modal" onClick={(e) => e.stopPropagation()}>
        <div className="zones-modal-header">
          <h5>
            <ChurchIcon className="me-2" />
            Églises de la zone {zone?.name}
          </h5>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="zones-modal-body">
          {eglises.length === 0 ? (
            <p>Aucune église répertoriée.</p>
          ) : (
            <div className="eglises-table">
              {eglises.map((e) => (
                <div key={e.id} className="eglise-item">
                  <div className="eglise-name">{e.name}</div>
                  <div className="eglise-info">
                    <PersonIcon className="icon-small" /> {e.pastor} |{" "}
                    <PhoneIcon className="icon-small" /> {e.phone}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="zones-modal-footer">
          Total : {eglises.length} églises
        </div>
      </div>
    </div>
  );
};

const Zones = () => {
  const [zones, setZones] = useState([]);
  const [eglises, setEglises] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [eglisesZone, setEglisesZone] = useState([]);
  const [annee, setAnnee] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    ZoneService.getAllZones().then((res) => {
      setZones(res.data);
      if (res.data.length > 0) setAnnee(res.data[0].year);
    });

    EgliseService.getAllEglises().then((res) => {
      setEglises(res.data);
    });
  }, []);

  const openZone = (zone) => {
    setSelectedZone(zone);
    const list = eglises.filter((e) => e.zone_id === zone.id);
    setEglisesZone(list);
  };

  const annees = [...new Set(zones.map((z) => z.year))];

  return (
    <section className="zones-page">
      <div className="container">
        {/* Header */}
        <div className="zones-header">
          <h2>Département des Zones</h2>

          {/* Dropdown Année */}
          <div className="year-dropdown">
            <button
              className="year-dropdown-btn"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <DateRangeIcon style={{ color : '#4b9cde'}}/>
              Année {annee}
              <span className={`arrow ${openDropdown ? "rotate" : ""}`}>▾</span>
            </button>

            {openDropdown && (
              <div className="year-dropdown-menu">
                {annees.map((a) => (
                  <div
                    key={a}
                    className={`year-option ${annee === a ? "active" : ""}`}
                    onClick={() => {
                      setAnnee(a);
                      setOpenDropdown(false);
                    }}
                  >
                    Année {a}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tableau Zones */}
        <div className="zones-table-wrapper">
          <table className="zones-table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Modérateur</th>
                <th>Téléphone</th>
                <th>Églises</th>
              </tr>
            </thead>
            <tbody>
              {zones
                .filter((z) => z.year === annee)
                .map((z) => {
                  const total = eglises.filter((e) => e.zone_id === z.id).length;
                  return (
                    <tr key={z.id} onClick={() => openZone(z)}>
                      <td>{z.name}</td>
                      <td>
                        <PersonIcon className="icon-small" /> {z.moderator}
                      </td>
                      <td>
                        <PhoneIcon className="icon-small" /> {z.phone}
                      </td>
                      <td className="eglise-count">{total}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        open={selectedZone != null}
        zone={selectedZone}
        eglises={eglisesZone}
        onClose={() => setSelectedZone(null)}
      />
    </section>
  );
};

export default Zones;
import React, { useEffect, useState } from "react";
import "../assets/css/datesUtiles.css";

import TodayIcon from "@mui/icons-material/Today";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HistoryIcon from "@mui/icons-material/History";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import DateUtileService from "../service/DateUtileService";

const DatesUtiles = () => {

  const [dates, setDates] = useState([]);
  const [annee, setAnnee] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  // chargement API
  useEffect(() => {

    DateUtileService.getAllDates().then((res) => {

      setDates(res.data);

      if(res.data.length > 0){
        setAnnee(res.data[0].year);
      }

    });

  }, []);

  // récupérer années disponibles
  const annees = [...new Set(dates.map(d => d.year))].sort((a,b)=>b-a);

  const today = new Date();

  const getStatus = (date) => {

    const d = new Date(date);

    if (d.toDateString() === today.toDateString()) return "present";

    if (d < today) return "past";

    return "future";

  };

  // filtrer par année
  const filteredDates = dates.filter(d => d.year === annee);

  // tri intelligent
  const sortedDates = [...filteredDates].sort((a, b) => {

    const sa = getStatus(a.event_date);
    const sb = getStatus(b.event_date);

    if (sa === "present") return -1;
    if (sb === "present") return 1;

    if (sa === "future" && sb === "past") return -1;
    if (sa === "past" && sb === "future") return 1;

    return new Date(a.event_date) - new Date(b.event_date);

  });

  return (
    <section className="dates-section-modern">

      <div className="dates-header">

        <CalendarMonthIcon className="header-icon" />

        <h2 className="dates-title-modern">
          DATES UTILES {annee}
        </h2>

        {/* dropdown année */}

        <div className="year-dropdown">

          <button
            className="year-dropdown-btn"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Année {annee}

            <span className={`arrow ${openDropdown ? "rotate" : ""}`}>
              <ArrowDropDownIcon />
            </span>

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


      {/* LISTE DES DATES */}

      <div className="dates-grid">

        {sortedDates.map((d) => {

          const status = getStatus(d.event_date);

          return (

            <div key={d.id} className={`date-card ${status}`}>

              <div className="date-card-label">

                <span className={`badge badge-${status}`}>
                  {d.label}
                </span>

              </div>

              <div className="date-card-icon">

                {status === "present" && <TodayIcon />}

                {status === "future" && <EventAvailableIcon />}

                {status === "past" && <HistoryIcon />}

              </div>

              <div className="date-card-content">

                <div className="date-card-title">
                  {d.title}
                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
};

export default DatesUtiles;
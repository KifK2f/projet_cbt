
import React, { useState } from "react";
import "../assets/css/datesUtiles.css";
import TodayIcon from "@mui/icons-material/Today";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HistoryIcon from "@mui/icons-material/History";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";



const DatesUtiles = () => {
	// Ajout d'un attribut année pour chaque date
	const dates = [
		{ id:1, label:"25 Janv", titre:"Dimanche de la formation théologique", date:"2026-01-25", annee: 2026 },
		{ id:2, label:"23-27 Fév", titre:"Comité Exécutif", date:"2026-02-23", annee: 2026 },
		{ id:3, label:"15 Mars", titre:"Dimanche de l’AG & Prière pour la CBT", date:"2026-03-15", annee: 2026 },
		{ id:4, label:"16 Mars", titre:"Assemblée Générale", date:"2026-03-16", annee: 2026 },
		{ id:5, label:"5 Avril", titre:"Dimanche de Pâque", date:"2026-04-05", annee: 2026 },
		{ id:6, label:"24 Mai", titre:"Dimanche de Pentecôte", date:"2026-05-24", annee: 2026 },
		{ id:7, label:"Juin", titre:"Mois de la Mission", date:"2026-06-01", annee: 2026 },
		{ id:8, label:"6-10 Juillet", titre:"Pastorale", date:"2026-07-06", annee: 2026 },
		{ id:9, label:"Août", titre:"Mois Enfant CBT", date:"2026-08-01", annee: 2026 },
		{ id:10, label:"Octobre", titre:"Mois de soutien aux ministères : ABT, Wycliffe, CPC", date:"2026-10-01", annee: 2026 },
		{ id:11, label:"Novembre", titre:"Mois de soutien aux Ministres de l’Évangile", date:"2026-11-01", annee: 2026 },
		{ id:12, label:"1er Novembre", titre:"Journée Nationale des œuvres sociales", date:"2026-11-01", annee: 2026 },
		// Ajoute ici d'autres années si besoin, exemple :
		// { id:13, label:"10 Janv", titre:"Exemple année 2025", date:"2025-01-10", annee: 2025 },
	];

	// Générer la liste des années disponibles à partir des dates
	const annees = [...new Set(dates.map(d => d.annee))].sort((a, b) => b - a);
	const [annee, setAnnee] = useState(annees[0]);
	const [openDropdown, setOpenDropdown] = useState(false);

	const today = new Date();
	const getStatus = (date) => {
		const d = new Date(date);
		if (d.toDateString() === today.toDateString()) return "present";
		if (d < today) return "past";
		return "future";
	};

	// Filtrer les dates selon l'année sélectionnée
	const filteredDates = dates.filter(d => d.annee === annee);
	const sortedDates = [...filteredDates].sort((a, b) => {
		const sa = getStatus(a.date);
		const sb = getStatus(b.date);
		if (sa === "present") return -1;
		if (sb === "present") return 1;
		if (sa === "future" && sb === "past") return -1;
		if (sa === "past" && sb === "future") return 1;
		return new Date(a.date) - new Date(b.date);
	});

	return (
		<section className="dates-section-modern">
			<div className="dates-header">
				<CalendarMonthIcon className="header-icon" />
				<h2 className="dates-title-modern">DATES UTILES {annee}</h2>
				{/* Dropdown Année */}
				<div className="year-dropdown">
					<button
						className="year-dropdown-btn"
						onClick={() => setOpenDropdown(!openDropdown)}
					>
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
			<div className="dates-grid">
				{sortedDates.map((d) => {
					const status = getStatus(d.date);
					return (
						<div key={d.id} className={`date-card ${status}`}>
							<div className="date-card-label">
								<span className={`badge badge-${status}`}>{d.label}</span>
							</div>
							<div className="date-card-icon">
								{status === "present" && <TodayIcon />}
								{status === "future" && <EventAvailableIcon />}
								{status === "past" && <HistoryIcon />}
							</div>
							<div className="date-card-content">
								<div className="date-card-title">{d.titre}</div>
								{/* <div className="date-card-desc">Description optionnelle</div> */}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default DatesUtiles;


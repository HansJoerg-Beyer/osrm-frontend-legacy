/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM localization
// [German language support]


OSRM.Localization["de"] = {
// own language
"CULTURE": "de-DE",
"LANGUAGE": "Deutsch",
// gui
"GUI_START": "Start",
"GUI_END": "Ziel",
"GUI_RESET": "Reset",
"GUI_ZOOM_ON_ROUTE": "Zoom auf Route",
"GUI_ZOOM_ON_USER": "Zoom auf Anwender",
"GUI_SEARCH": "Zeigen",
"GUI_REVERSE": "Umdrehen",
"GUI_START_TOOLTIP": "Startposition eingeben",
"GUI_END_TOOLTIP": "Zielposition eingeben",
"GUI_MAIN_WINDOW": "Hauptfenster",
"GUI_ZOOM_IN": "Vergrößern",
"GUI_ZOOM_OUT": "Verkleinern",
// config
"GUI_CONFIGURATION": "Einstellungen",
"GUI_LANGUAGE": "Sprache",
"GUI_UNITS": "Einheiten",
"GUI_KILOMETERS": "Kilometer",
"GUI_MILES": "Meilen",
// mapping
"GUI_MAPPING_TOOLS": "Kartenwerkzeuge",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Unbenannte Straßen hervorheben",
"GUI_SHOW_PREVIOUS_ROUTES": "Frühere Routen zeigen",
"GUI_EXTERNAL_TOOLS": "Externe Programme:",
"OPEN_EDITOR": "Editor",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "Notes",
"OPEN_EDITOR_FAILED": "Zoomen Sie näher heran, um den Editor zu öffnen.",
"OPEN_JOSM_FAILED": "Zoomen Sie näher heran, um JOSM zu öffnen.",
"OPEN_OSMBUGS_FAILED": "Zoomen Sie näher heran, um Notes zu setzen.",
// geocoder
"SEARCH_RESULTS": "Suchergebnisse",
"FOUND_X_RESULTS": "%i Ergebnisse gefunden",
"TIMED_OUT": "Zeitüberschreitung",
"NO_RESULTS_FOUND": "Keine Ergebnisse gefunden",
"NO_RESULTS_FOUND_SOURCE": "Keine Ergebnisse gefunden für Start",
"NO_RESULTS_FOUND_TARGET": "Keine Ergebnisse gefunden für Ziel",
// routing
"ROUTE_DESCRIPTION": "Routenbeschreibung",
"GET_LINK_TO_ROUTE": "Generiere Link",
"ROUTE_LINK": "Routenlink",
"GENERATE_LINK_TO_ROUTE": "Warte auf Antwort",
"LINK_TO_ROUTE_TIMEOUT": "nicht möglich",
"GPX_FILE": "GPX Datei",
"DISTANCE": "Distanz",
"DURATION": "Dauer",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Ihre Route wird berechnet",
"NO_ROUTE_FOUND": "Keine Route hierher möglich",
// printing
"OVERVIEW_MAP": "Übersichtskarte",
"NO_ROUTE_SELECTED": "Keine Route ausgewählt",
// routing engines
"ENGINE_0": "Auto (schnellste)",
"ENGINE_1": "Fahrrad (schnellste)",
"ENGINE_2": "Fußgaenger",
"ENGINE_3": "Rollator",
"ENGINE_4": "Rollstuhl",
"ENGINE_5": "Sehbehindert",
"ENGINE_6": "Blind",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "MapBox Terrain",
//"TILE_SERVER_4": "MapBox Labelled Satellite",
//"TILE_SERVER_5": "MapBox Satellite",
// overlay server names
// (only required if names are different to OSRM.config)
"OVERLAY_SERVER_0": "Kleine Komponenten",
// directions
"N": "Norden",
"E": "Ost",
"S": "Süden",
"W": "Westen",
"NE": "Nordost",
"SE": "Südost",
"SW": "Südwest",
"NW": "Nordwest",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Unbekannte Anweisung[ auf <b>%s</b>]",
"DIRECTION_1":"Geradeaus weiterfahren[ auf <b>%s</b>]",
"DIRECTION_2":"Leicht rechts abbiegen[ auf <b>%s</b>]",
"DIRECTION_3":"Rechts abbiegen[ auf <b>%s</b>]",
"DIRECTION_4":"Scharf rechts abbiegen[ auf <b>%s</b>]",
"DIRECTION_5":"Wenden[ auf <b>%s</b>]",
"DIRECTION_6":"Scharf links abbiegen[ auf <b>%s</b>]",
"DIRECTION_7":"Links abbiegen[ auf <b>%s</b>]",
"DIRECTION_8":"Leicht links abbiegen[ auf <b>%s</b>]",
"DIRECTION_9":"Sie erreichen Ihr Zwischenziel [ auf <b>%s</b>]",
"DIRECTION_10":"Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]",
"DIRECTION_11-1":"In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-2":"In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-3":"In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-4":"In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-5":"In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-6":"In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-7":"In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-8":"In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-9":"In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_11-x":"In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen",
"DIRECTION_15":"Sie haben Ihr Ziel erreicht",
// street types
"HIGHWAY_DEFAULT": "Straße",
"HIGHWAY_PATH": "Pfad",
"HIGHWAY_FOOTWAY": "Fußweg",
"HIGHWAY_CYCLEWAY": "Radweg",
"HIGHWAY_BRIDLEWAY": "Reitweg",
"HIGHWAY_STEPS": "Stufen",
"HIGHWAY_MOTORWAY": "Autobahn",
"HIGHWAY_MOTORWAY_LINK": "Autobahn",
"HIGHWAY_TRUNK": "Straße",
"HIGHWAY_TRUNK_LINK": "Straße",
"HIGHWAY_PRIMARY": "Straße",
"HIGHWAY_PRIMARY_LINK": "Straße",
"HIGHWAY_SECONDARY": "Straße",
"HIGHWAY_SECONDARY_LINK": "Straße",
"HIGHWAY_TERTIARY": "Straße",
"HIGHWAY_TERTIARY_LINK": "Straße",
"HIGHWAY_LIVING_STREET": "Spielstraße",
"HIGHWAY_PEDESTRIAN": "Fußgängerweg",
"HIGHWAY_RESIDENTAL": "Straße",
"HIGHWAY_unclassified": "Straße",
"HIGHWAY_service": "Straße",
"HIGHWAY_track": "Pfad",
"HIGHWAY_raceway": "Rennstrecke",
"HIGHWAY_road": "Straße"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
  OSRM.Localization.setLanguage("de", true);

import React from 'react'

const Beruflich = () => {
  return (
    <section className="wrapper" id="beruflich" aria-label="beruflich abschnitt">
        <h2>Berufliche Erfahrung</h2>
        <div className='exp'>
            <p className='date'>02.2019 - heute</p>
            <article>
                <h3>OptimumOne GmbH, Ulm, Deutschland</h3>
                <h4>Berechnungsingenieur</h4>
                <ul>
                    <li>Durchführung von FEM-Analysen für kundenspezifische Bauteile mit Ansys</li>
                    <li>Anwendung von diverse Berechnungsnormen, wie z.B. FKM, AD2000, DIN EN 13455</li>
                </ul>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>05.2022 - heute</p>
            <article>
                <h3>MKT Webdesign, Ulm, Deutschland</h3>
                <h4>Freelancer im Bereich Web Design</h4>
                <ul>
                    <li>Planen und Umsetzung des Design der Website</li>
                    <li>Sichtbarkeit und Reichweite der Website mit SEO erhöhen</li>
                </ul>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>02.2018 - 07.2018</p>
            <article>
                <h3>Kyungpook National University, Daegu, Südkorea</h3>
                <h4>Masterand</h4>
                <ul>
                    <li>Unterstüztung der Doktoranden im Fluidtechnik Labor</li>
                    <li>Master-Thesis: “Numerical simulation of oscillationg foils in a side-by-side arrangement for energy extraction”</li>
                </ul>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>11.2015 - 06.2016</p>
            <article>
                <h3>Hochschule Aalen, Aalen, Deutschland</h3>
                <h4>Tutor und Bachelorand im Messtechniklabor</h4>
                <ul>
                    <li>Betreuung der Studenten im Messtechniklabor</li>
                    <li>Bachelor-Thesis: “Identifikation der Schräglaufsteifigkeiten für die modellgestützte Spurregelung mit Validierung im Versuchsfahrzeug”</li>
                </ul>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>09.2014 - 03.2015</p>
            <article>
                <h3>Voith Hydro GmbH & Co. KG, Heidenheim, Deutschland</h3>
                <h4>Praktikant</h4>
                <ul>
                    <li>Unterstüztung der Mitarbeiter in Stahlwasserbau-spezifische Projekte</li>
                    <li>Erstellung von internen Berechnungstool in Excel und FEM-Berechnungen von spezifischen Bauteilen</li>
                </ul>
            </article>
        </div>
       
    </section>
  )
}

export default Beruflich
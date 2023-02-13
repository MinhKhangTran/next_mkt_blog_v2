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
       
    </section>
  )
}

export default Beruflich
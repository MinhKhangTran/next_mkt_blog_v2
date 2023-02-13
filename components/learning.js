import React from 'react'

const Learning = () => {
  return (
    <section className="wrapper" id="learning" aria-label="learning abschnitt">
        <h2>Aus- und Weiterbildung</h2>
        <div className='exp'>
            <p className='date'>03.2020 - heute</p>
            <article>
                <h3>Autodidakt</h3>
                <h4>Web Design und Web Development</h4>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>08.2016 - 07.2018</p>
            <article>
                <h3>Hochschule Heilbronn, Heilbronn, Deutschland</h3>
                <h4>Master of Engineering, Allgemeiner Maschinenbau</h4>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>08.2017 - 07.2018</p>
            <article>
                <h3>Kyungpook National University, Daegu, Südkorea</h3>
                <h4>Austauschstudent in Südkorea</h4>
            </article>
        </div>
        <div className='exp'>
            <p className='date'>08.2016 - 07.2018</p>
            <article>
                <h3>Hochschule Aalen, Aalen, Deutschland</h3>
                <h4>Bachelor of Engineering, Allgemeiner Maschinenbau</h4>
            </article>
        </div>  
    </section>
  )
}

export default Learning
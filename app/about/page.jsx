import React from 'react'

// THis adds title to this route only
export const metadata = {
    title: 'About Philippe Ducasse'
}

const AboutPage = () => {
    return (
        <div>
            <h1>Philippe Ducasse, Web Developer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, recusandae voluptatibus. Ratione quidem architecto enim neque,
                quas porro id numquam et molestiae inventore quam sapiente debitis
                dolorum ex quae dignissimos?
            </p>
        </div>
    )
}

export default AboutPage
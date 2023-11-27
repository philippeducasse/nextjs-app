import React from 'react'
// files that correspond to components and not individual pages live under components folder
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href='/'>Philippe Ducasse</Link>
                </div>
                <div className='links'>
                    <Link href='/about'>About</Link>
                    <Link href='/about/projects'>Projects</Link>
                    <Link href='/code/repos'>Code</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
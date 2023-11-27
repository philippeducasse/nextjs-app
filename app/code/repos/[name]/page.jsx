import React from 'react'
import Repo from '@/app/components/repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/repoDirs'
import { Suspense } from 'react' // suspense boundaries allow loading of components as they appear and not making the whole page stall

const RepoPage = ({ params: { name } }) => {
    return (
        <div className='card'>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name}></Repo>
            </Suspense>
            <Suspense fallback={<div>Loading repo directories...</div>}>
                <RepoDirs name={name}></RepoDirs>
            </Suspense>
            <Link className='btn btn-back' href='/code/repos'>Back to all repositories</Link>
        </div>
    )
}

export default RepoPage
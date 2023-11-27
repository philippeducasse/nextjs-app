import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepos(){
    const response = await fetch('https://api.github.com/users/philippeducasse/repos',
    //fetch automatically stores data in cache. But if data changes regularly/ quickly,
    // this allows for data to be fetched every n seconds.
    {
        next: {
            revalidate: 60,
        }
    }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000)); // waits one second to display spinner
    const repos = await response.json()
    return repos
}
const ReposPage = async () => {
    const repos = await fetchRepos();
  return (
    <div className='repo-container'>
        <h2>Repositories</h2>
        <ul className = 'repo-list'>
            { repos.map((repo) => (
                <li key={repo.id}>
                    {/* This Link uses dynamic routing, leads to [repo] folder */}
                    <Link href={`/code/repos/${repo.name}`}> 
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className='repo-details'>
                            <span>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye /> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default ReposPage
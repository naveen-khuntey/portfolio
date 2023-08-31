import React from 'react'
import { GithubRepo } from '../APIs/GithubRepoAPI'

export const GHRepos = () => {
   const repos = [
      'naveen-khuntey/Sparsh-frontend',
      'naveen-khuntey/coin-tracker-v1',
      'naveen-khuntey/metaversus',
      'naveen-khuntey/pizza-joint',
      'naveen-khuntey/joba-router',
   ]

   return (
      <div className="gh-repo-cont">
         {repos.map((repo) => (
            <GithubRepo repoName={repo} key={repo} className="github-repo" />
         ))}
      </div>
   )
}

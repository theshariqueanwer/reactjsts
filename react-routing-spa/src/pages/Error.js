import React from 'react'
import MainNavigation from '../components/MainNavigation'

function Error() {
  return (
    <>
    <MainNavigation />
    <main>
        <h1>404</h1>
        <p>Page not found</p>
        <h2>An error occurred!</h2>
        <p>Could not find this page!</p>
        <p>The page you are looking for does not exist</p>
    </main>
    </>
  )
}

export default Error

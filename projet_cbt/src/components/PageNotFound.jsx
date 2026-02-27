import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  
  return (
    <div className="px-6 py-4 bg-gray-100 ">
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 text-center">
    <div className="mb-8">
      <h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">404</h2>
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">Page introuvable</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
    </div>
    <div className="mt-8">
      <a href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Retour à la page d’accueil
      </a>
    </div>
  </div>
  <div className="mt-16 w-full max-w-2xl">
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
          Si vous pensez qu’il s’agit d’une erreur, veuillez contacter le support.</span>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}

export default PageNotFound
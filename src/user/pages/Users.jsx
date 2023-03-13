import React, { useEffect, useState } from 'react'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

import UsersList from '../components/UsersList'

const Users = () => {
  const [Users, setUsers] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:5000/api/users')    
      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(responseData.message)
      }
      setUsers(responseData.users)
    }
    fetchUsers()
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })
  }, [])
  
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={() => setError(null)} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && Users && (<UsersList items={Users} />)}
    </React.Fragment>
  )
}

export default Users
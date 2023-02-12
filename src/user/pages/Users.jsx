import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: 'https://www.stylist.co.uk/images/app/uploads/2020/09/11153556/3-11-crop-1599835068-963x963.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
      places: 3
    }
  ]
  
  return <UsersList items={USERS} />
}

export default Users
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { UserContext } from '../App'

const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <Layout>
      <h1>Edit Profile</h1>
      <div>
        <div>
          <div>
            <p>
              <strong>Name</strong>
            </p>
            <p>{user.name}</p>
          </div>
          <div>
            <p>
              <strong>email</strong>
            </p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

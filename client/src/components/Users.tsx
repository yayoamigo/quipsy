import React from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }   
    }   
`

export const Users = () => {
  return (
    <div>

    </div>
  )
}

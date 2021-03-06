import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionsOvierview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionsOvierviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />
      return <CollectionsOvierview collections={data.collections} />
    }}
  </Query>
)

export default CollectionsOvierviewContainer

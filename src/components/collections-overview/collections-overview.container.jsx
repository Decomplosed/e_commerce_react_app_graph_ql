import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionsOvierview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
  {
    colllections {
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

import axios from 'axios'

export default {
  async getPartners(offset) {
    const res = await axios.post('https://api.kivaws.org/graphql', {
      query: `
        query GetPartners($offset: Int!) {
          general {
            partners(offset: $offset) {
              totalCount
              values {
                id
                name
                countries {
                  name
                  isoCode
                  region
                  ppp
                  numLoansFundraising
                  fundsLentInCountry
                }
              }
            }
          }
        }        
      `,
      variables: {
        offset
      }
    })
    return res
  }
}

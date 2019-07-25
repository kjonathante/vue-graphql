import axios from 'axios'

export default {
  async getPartners() {
    const res = await axios.post('https://api.kivaws.org/graphql', {
      query: `{
            general {
              partners {
                values {
                  id,
                  name,
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
          }`
    })
    return res
  },
  async getPartnersOrderByName(offset) {
    const res = await axios.post('https://api.kivaws.org/graphql', {
      query: `
        query GetPartners($Offset: Int!) {
          general{
            partners(offset: $Offset){
              totalCount,
              values {
                id,
                name
              }
            }
          }
        }`,
      variables: {
        Offset: offset
      }
    })
    return res
  }
}

import { gql } from "@apollo/client"


export const CountryDetail = gql`query CountryDetail($country: ID!) {
  country(code: $country) {
    name
    capital
    currency
    native
    continent{
      name
    }
  
  }
}
`
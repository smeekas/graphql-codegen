import { gql } from "@apollo/client"

export const AllCountries = gql`query AllCountires {
  countries(
    filter: { continent: { in: ["AS", "EU", "AF", "NA", "SA", "AU", "OC"] } }
  ) {
    name
    code
  }
}`

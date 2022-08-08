import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type _Entity = Continent | Country | Language;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type AllCountiresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountiresQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, code: string }> };

export type CountryDetailQueryVariables = Exact<{
  country: Scalars['ID'];
}>;


export type CountryDetailQuery = { __typename?: 'Query', country?: { __typename?: 'Country', name: string, capital?: string | null, currency?: string | null, native: string, continent: { __typename?: 'Continent', name: string } } | null };


export const AllCountiresDocument = gql`
    query AllCountires {
  countries(filter: {continent: {in: ["AS", "EU", "AF", "NA", "SA", "AU", "OC"]}}) {
    name
    code
  }
}
    `;

/**
 * __useAllCountiresQuery__
 *
 * To run a query within a React component, call `useAllCountiresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountiresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountiresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountiresQuery(baseOptions?: Apollo.QueryHookOptions<AllCountiresQuery, AllCountiresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCountiresQuery, AllCountiresQueryVariables>(AllCountiresDocument, options);
      }
export function useAllCountiresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCountiresQuery, AllCountiresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCountiresQuery, AllCountiresQueryVariables>(AllCountiresDocument, options);
        }
export type AllCountiresQueryHookResult = ReturnType<typeof useAllCountiresQuery>;
export type AllCountiresLazyQueryHookResult = ReturnType<typeof useAllCountiresLazyQuery>;
export type AllCountiresQueryResult = Apollo.QueryResult<AllCountiresQuery, AllCountiresQueryVariables>;
export const CountryDetailDocument = gql`
    query CountryDetail($country: ID!) {
  country(code: $country) {
    name
    capital
    currency
    native
    continent {
      name
    }
  }
}
    `;

/**
 * __useCountryDetailQuery__
 *
 * To run a query within a React component, call `useCountryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryDetailQuery({
 *   variables: {
 *      country: // value for 'country'
 *   },
 * });
 */
export function useCountryDetailQuery(baseOptions: Apollo.QueryHookOptions<CountryDetailQuery, CountryDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryDetailQuery, CountryDetailQueryVariables>(CountryDetailDocument, options);
      }
export function useCountryDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryDetailQuery, CountryDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryDetailQuery, CountryDetailQueryVariables>(CountryDetailDocument, options);
        }
export type CountryDetailQueryHookResult = ReturnType<typeof useCountryDetailQuery>;
export type CountryDetailLazyQueryHookResult = ReturnType<typeof useCountryDetailLazyQuery>;
export type CountryDetailQueryResult = Apollo.QueryResult<CountryDetailQuery, CountryDetailQueryVariables>;
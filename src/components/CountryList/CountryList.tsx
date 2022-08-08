import React, { useCallback, useEffect, useState } from "react";
import styles from "./CountryList.module.css";
import { useAllCountiresQuery } from "../../graphql/generated/apolloQueries";
import Country from "../Country/Country";
import CountryFilter from "../CountryFilter/CountryFilter";
import { ApolloQueryResult } from "@apollo/client";
import Loading from "../Loading/Loading";
function CountryList() {
  const [countries, setCounties] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<string>("");
  const searchHandler = useCallback(
    (searchWord: string) => {
      console.log("CALLBACK");
      setFiltered(searchWord);
    },
    [countries]
  );
  const { data, loading, error } = useAllCountiresQuery();
  useEffect(() => {
    if (data) {
      console.log(data);
      setCounties(data?.countries!);
    }
  }, [data]);
  if (loading) {
    return <Loading />;
  }
  console.log(filtered);
  return (
    <>
      <CountryFilter onSearch={searchHandler} />
      <div className={styles.countryList}>
        {countries
          .filter((country) => {
            return country.name.toLowerCase().includes(filtered);
          })
          .map((country) => {
            return (
              <Country
                key={country.code}
                name={country.name}
                code={country.code}
              />
            );
          })}
      </div>
    </>
  );
}

export default CountryList;

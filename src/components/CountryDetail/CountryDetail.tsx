import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useCountryDetailQuery } from "../../graphql/generated/apolloQueries";
import { TbBuildingBank } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./CountryDetail.module.css";
import Loading from "../Loading/Loading";
function CountryDetail() {
  const params = useParams();
  const { data, loading } = useCountryDetailQuery({
    variables: {
      country: params.id!,
    },
  });
  console.log(data);
  const [photo, setPhoto] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getPhoto() {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${data?.country?.name}&per_page=5`,
        {
          headers: {
            Authorization: process.env.REACT_APP_PEXEL_KEY as string,
          },
        }
      );
      const countryDetails = await res.json();
      console.log(countryDetails);

      if (countryDetails.photos.length === 0) {
        setPhoto("black");
        return;
      }
      console.log(countryDetails.photos.length)
      let i=0,len=countryDetails.photos.length;
      setInterval(() => {
        
        setPhoto(countryDetails.photos[((i++)%len)].src.landscape);
      }, 3000)
    }
    if (data) {
      if (!data?.country) {
        navigate("/404");
        return;
      }
      getPhoto();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (loading || !photo) {
    return <Loading />;
  }
  return (
    <div className={styles.backdrop}>
      <div
        style={{ background: `no-repeat center/cover  url(${photo})` }}
        className={styles.image}
      ></div>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <div className={styles.name}>{data?.country?.name}</div>
          <div className={styles.native}>native: {data?.country?.native}</div>
          <div className={styles.capital}>
            <TbBuildingBank className={styles.icon} />
            <div>{data?.country?.capital}</div>
          </div>
          <div className={styles.capital}>
            <GrCurrency className={styles.icon} />
            <div>{data?.country?.currency}</div>
          </div>
          <div className={styles.capital}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>{data?.country?.continent?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;

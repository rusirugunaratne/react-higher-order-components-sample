import { useEffect, useState } from "react";

export const withDataFetching = (WrappedComponent, endpoint) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);

    return <WrappedComponent {...props} data={data} loading={loading} />;
  };
};

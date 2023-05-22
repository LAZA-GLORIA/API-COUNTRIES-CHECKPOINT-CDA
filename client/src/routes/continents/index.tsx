import React from "react";
import { useGetContinentsQuery } from "../../gql/generated/schema";

function ContinentsPage() {
  const { loading, error, data } = useGetContinentsQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const continents = data?.continents || [];

  return (
    <div>
      <h1>Continents</h1>
      <ul>
        {continents.map((continent) => (
          <li key={continent.code}>
            {continent.code}: {continent.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContinentsPage;

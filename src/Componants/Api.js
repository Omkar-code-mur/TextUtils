/** @format */

import React, { useEffect, useState } from "react";

function GithubUser({ name, location, src }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Location : {location}</p>
      <img src={`${src}`} height={"150px"} alt={`${name}'s Profile pic`} />
    </div>
  );
}

export default function Api() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/github`)
      .then((response) => response.json())
      .then(setData).then(()=>setLoading(false))
      .catch(setError)
  }, []);
  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null;
  
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        src={data.avatar_url}
      />
    );
  
  
}

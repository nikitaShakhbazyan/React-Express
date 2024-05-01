import { useState, useEffect } from 'react';
import { Fetch } from './fetching/fetch';

type Gift = {
  id:number,
  title:string,
  descirption:string
};

function App() {
  const [data, setData] = useState<Gift[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Fetch();
        setData(res);
      } catch (error) {
        console.error('Error fetching :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>ID: {item.id}</h1>
          <h2>Title: {item.title}</h2>
          <p>Description: {item.descirption}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

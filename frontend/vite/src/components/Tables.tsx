import { useState, useEffect } from 'react';
import { Fetch } from '../fetching/fetch';
import './tables.css'

type Gift = {
    id:number,
    title:string,
    descirption:string
  };

const Tables = () => {
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
    <div className='container'>
      {data.map((item, index) => (
        <div className='gift' key={index}>
          <h1>ID: {item.id}</h1>
          <h2>Title: {item.title}</h2>
          <p>Description: {item.descirption}</p>
        </div>
      ))}
    </div>
  );
}

export default Tables
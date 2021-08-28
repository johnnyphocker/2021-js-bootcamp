import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    try {
      let res = await fetch('http://localhost:5000/'); // test de servidor local
      let { companies } = await res.json();
      setCompanies(companies);
    } catch(err) {
      console.log(err.message)
    }
  };

  return (
    <section className='p-8'>
      <div className="border-b-2 mb-4 pt-4">
        <h2 className='font-bold'>Compañías</h2>
        {
          companies.length && companies.map(company => {
            return (
              <div key={company.ecid} className='border-b mb-4'>
                <p>{company.name}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Post;
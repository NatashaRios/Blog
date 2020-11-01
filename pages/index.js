import Posts from '../components/Posts';
import Navbar from '../components/Navbar'
import { useState } from 'react';
import styles from '../styles/Home.module.scss'

export default function Home({ blog }){
  const [searchParams, setSearchParams] = useState('');

  function handleSearch(value){
    setSearchParams(value)
  }

  
return (
  <>
    <Navbar handhleSearch={handleSearch} type='text' placeholder='Search...' logo='DEV'/>
    <section>
      <Posts blog={blog} searchParams={searchParams} title='Posts'/>
    </section>
  </>
  )
}


export async function getStaticProps(){
  const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1');
  const json = await data.json();
  
  return{
    props: {
      blog: json
    },
    revalidate: 3600
  };
}
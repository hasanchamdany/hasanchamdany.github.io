import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import React from 'react'
import { getProjectData } from './../../utils/getMarkdownData';
import { getProjectSlugs } from './../../utils/getSlugs';


const index = ({projects}) => {
  console.log("ini isi props")
  console.log(projects)
  return (
    <DefaultLayout>
      <div className='w-full h-screen bg-dark-base'>

      </div>
    </DefaultLayout>
  )
}

export default index

export async function getStaticProps() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectData(slug));
  console.log(projects)
  return {
    props: {
      projects,
    },
  };
}
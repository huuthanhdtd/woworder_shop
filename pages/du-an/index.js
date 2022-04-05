import React, { useState } from 'react';
import ProjectsPage from '../../components/Projects';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';

function Project({ projects }) {
  const seo = {
    metaTitle: 'Dự án',
    metaDescription: `All projects`,
  };
  return (
    <>
      <Seo seo={seo} />
      <ProjectsPage projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const projectsRes = await fetchAPI('/projects', { populate: '*' });
  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

export default Project;

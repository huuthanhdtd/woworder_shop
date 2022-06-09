import React from 'react';
import ProjectsPage from '../../components/Projects';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';

function Project({ projects, projectCommon }) {
  const seo = {
    metaTitle: `${projectCommon.attributes.seo.metaTitle}`,
    metaDescription: `${projectCommon.attributes.seo.metaDescription}`,
    shareImage: projectCommon.attributes.background,
    article: true,
  };
  return (
    <>
      <Seo seo={seo} />
      <ProjectsPage
        projects={projects}
        bannerProject={projectCommon}
        image={projectCommon.attributes.background}
      />
    </>
  );
}

export async function getStaticProps() {
  const [projectsRes, pageProjectRes] = await Promise.all([
    fetchAPI('/projects', { populate: '*' }),
    fetchAPI('/page-project', { populate: '*' }),
  ]);
  return {
    props: {
      projects: projectsRes.data,
      projectCommon: pageProjectRes.data,
    },
    revalidate: 1,
  };
}

export default Project;

import React, { useMemo } from 'react';
import Detail from '../../components/Projects/Detail';
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import { reverse } from '../../lib/reverse';
function DetailProject({ project, projects }) {
  const seo = {
    metaTitle: project.attributes.title,
    metaDescription: project.attributes.description,
    shareImage: project.attributes.image,
    article: true,
  };

  const data = useMemo(() => {
    return reverse(projects);
  }, [projects]);
  return (
    <>
      <Seo seo={seo} />
      <Detail project={project} projects={data} />
    </>
  );
}

export async function getStaticPaths() {
  const projectsRes = await fetchAPI('/projects', {
    fields: ['slug  '],
  });
  return {
    paths: projectsRes.data.map((project) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const projectRes = await fetchAPI('/projects', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const allProject = await fetchAPI('/projects', { populate: '*' });
  return {
    props: {
      project: projectRes.data[0],
      projects: allProject.data,
    },
    revalidate: 1,
  };
}

export default DetailProject;

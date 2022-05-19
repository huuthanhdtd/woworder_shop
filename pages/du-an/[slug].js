import React, { useEffect, useMemo, useState } from 'react';
import Detail from '../../components/Projects/Detail';
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import { reverse } from '../../lib/reverse';
import { useRouter } from 'next/router';

function DetailProject() {
  const { query } = useRouter();
  const [resp, setGetData] = useState({
    projects: null,
    project: null,
    seo: null,
    projectCommon: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [projectRes, projectCommonRes, allProject] = await Promise.all([
        fetchAPI('/projects', {
          filters: {
            slug: query.slug,
          },
          populate: '*',
        }),
        fetchAPI('/page-project', {
          populate: '*',
        }),
        fetchAPI('/projects', { populate: '*' }),
      ]);

      setGetData({
        project: projectRes.data[0],
        projects: reverse(allProject.data),
        projectCommon: projectCommonRes.data,
        seo: {
          metaTitle: projectRes.data[0].attributes.title,
          metaDescription: projectRes.data[0].attributes.description,
          shareImage: projectRes.data[0].attributes.image,
          article: true,
        },
      });
    };

    fetchData();
  }, [query]);
  return (
    <>
      {resp.project && (
        <>
          <Seo seo={resp.seo} />
          <Detail
            project={resp.project}
            projects={resp.projects}
            projectContentMarkdown={resp.project.attributes.content}
            projectCommon={resp.projectCommon}
            image={resp.project.attributes.image}
          />
        </>
      )}
    </>
  );
}

export default DetailProject;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

  let { userId } = useParams();

  useEffect(() => {
    console.log(userId);
  }, [])

  return (
    <div>project-detail</div>
  )
}

export default ProjectDetail;
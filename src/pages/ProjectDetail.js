import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppNav from '../components/layouts/nav';

const ProjectDetail = () => {

  let { userId } = useParams();

  useEffect(() => {
    console.log(userId);
  }, [])

  return (
    <AppNav />
  )
}

export default ProjectDetail;
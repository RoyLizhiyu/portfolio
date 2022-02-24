import React from 'react'
import ProjectStyle from './style'
import SectionTitle from '../SectionTitle/SectionTitle'
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectItem from './ProjectItem/ProjectItem';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import projects from '../../assets/projects/projects';

function ProjectSection() {
  return (
    <ProjectStyle>
        <div className='container'>
            <SectionTitle title='PROJECTS' subtitle="My recent works" />

            <div className='projectItems'>
              <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={'auto'}
              navigation
              breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
              >
              {projects.map((project)=>{
                return <SwiperSlide key = {project.id}>
                  <ProjectItem
                  img = {project.img}
                  title = {project.title}
                  description = {project.description}
                   />
                </SwiperSlide>
              })}
              </Swiper>
            </div>
        </div>
    </ProjectStyle>
  )
}

export default ProjectSection
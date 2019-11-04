import React from 'react';
import style from './Projects.module.css'

function Projects() {
  return (
    <div className={style.projects}>
      <div className={style.container}>
        <div className={style.sectionTitle}>My projects</div>
        <div className={style.projectsWrap}>

          <div className={style.projectItem}>
            <a className={style.projectLink} href="link">watch the project</a>
            <div className={style.projectDescr}>title project</div>
          </div>

          <div className={style.projectItem}>
            <a className={style.projectLink} href="link">watch the project</a>
            <div className={style.projectDescr}>title project</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;

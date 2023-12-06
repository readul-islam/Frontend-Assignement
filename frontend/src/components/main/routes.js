import { lazy } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from '../../modules/Home/Home';
import CourseList from '../../modules/Courses/CourseList';
import Course from '../../modules/Courses/Course';
import Dashboard from '../../modules/Dashboard/pages/Dashboard';
import ContentPlayer from '../../modules/Dashboard/pages/ContentPlayer.jsx';

// const Dashboard = lazy(() => import("../../modules/Dashboard/pages/Dashboard"));

const routes = [
  { id: uuidv4(), path: '/', component: Home },
  { id: uuidv4(), path: '/home', component: Home },
  { id: uuidv4(), path: '/courses', component: CourseList },
  { id: uuidv4(), path: '/course/:courseName/:courseId', component: Course },
  { id: uuidv4(), path: '/dashboard', component: Dashboard },
  {
    id: uuidv4(),
    path: '/dashboard/:courseName/:userId/:courseId',
    component: ContentPlayer,
  },
];

export default routes;

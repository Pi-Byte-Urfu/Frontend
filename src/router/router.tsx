
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ProfilePage from "../layers/pages/profile_page/components/page/ProfilePage";
import { loginAction } from "../layers/modules/login_form/actions/LoginAction";
import { registrationAction } from "../layers/modules/RegistrationForm/actions/RegistrationAction";
import { logoutAction } from "../root/header/logoutAction";
import CoursesList from "../layers/modules/courses_list/components/CoursesList";
import GroupList from "../layers/modules/groups_list/components/GroupList";
import QuestionsList from "../layers/modules/questions_list/components/QuestionsList";
import { coursesListLoader } from "../layers/modules/courses_list/loaders/CoursesListLoader";
import CoursePage from "../layers/pages/course_page/components/page/CoursePage";
import CourseIndexPage from "../layers/pages/course_page/components/index_page/CourseIndexPage";
import ModulePage from "../layers/pages/module_page/components/page/ModulePage";
import ModulePageIndex from "../layers/pages/module_page/components/index/ModulePageIndex";
import Step from "../layers/modules/step/components/step/Step";
import CourseEditor from "../layers/pages/course_page_editor/components/page/CourseEditor";
import { createModuleAction } from "../layers/pages/course_page_editor/actions/createModuleAction";
import ModuleEditor from "../layers/pages/module_page_editor/components/page/ModuleEditor";
import { moduleEditorLoader } from "../layers/pages/module_page_editor/loaders/moduleEditorLoader";
import { courseEditorLoader } from "../layers/pages/course_page_editor/loaders/courseEditorLoader";
import { createStepAction } from "../layers/pages/module_page_editor/actions/createStepAction";
import { createCourseAction } from "../layers/pages/profile_page/actions/createCourseActions";
import ProfileEditor from "../layers/pages/profile_editor/components/page/ProfileEditor";
import UploaderImg from "../layers/components/uploader_img/components/UploaderImg";
import MDXEditorText from "../layers/modules/mdx/mdx_editor_text/components/editor/MDXEditorText";
import { profileDataLoader } from "../layers/pages/profile_editor/loaders/profileDataLoader";
import { profileEditDataAction } from "../layers/pages/profile_editor/actions/profileEditDataAction";
import { profileEditPasswordAction } from "../layers/pages/profile_editor/actions/profileEditPasswordAction";
import { modulesListLoader } from "../layers/modules/modules_list/loaders/modulesListLoader";
import { courseLoader } from "../layers/pages/course_page/loaders/courseLoader";
import IndexPage from "../layers/pages/index_page/IndexPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'profile/:userId',
        element: <ProfilePage />,
        children: [
          {
            path: 'courses/',
            element: <CoursesList />,
            loader: coursesListLoader,
          },
          {
            path: 'questions/',
            element: <QuestionsList />
          },
          {
            path: 'groups/',
            element: <GroupList />
          }
        ]
      },
      {
        path: 'profileEdit/',
        element: <ProfileEditor/>,
        loader: profileDataLoader,
      },
      {
        path: 'profileEdit/editData',
        action: profileEditDataAction,
      },
      {
        path: 'profileEdit/editPassword',
        action: profileEditPasswordAction,
      },
      {
        path: '/createCourse',
        action: createCourseAction,
      },
      {
        path: '/course/:courseId',
        element: <CoursePage />,
      },
      {
        path: '/course/:courseId/description',
        loader: courseLoader
      },
      {
        path: '/courseEditor/:courseId',
        element: <CourseEditor />,
        loader: courseEditorLoader,
        children: [
          {
            path: 'createModule',
            action: createModuleAction,
          },
        ]
      },
      {
        path: 'courseEditor/:courseId/module/:moduleId',
        element: <ModuleEditor />,
        loader: moduleEditorLoader,
      },
      {
        path: 'courseEditor/:courseId/module/:moduleId/createStep',
        action: createStepAction
      },
      {
        path: '/course/:id/module/:id',
        element: <ModulePage />,
        children: [
          {
            index: true,
            element: <ModulePageIndex />
          },
          {
            path: 'step/:id',
            element: <Step />
          }
        ]
      },
      {
        path: '/textEditor',
        element: <MDXEditorText/>
      }
    ]
  },
  {
    path: '/login',
    action: loginAction
  },
  {
    path: '/registration',
    action: registrationAction,
  },
  {
    path: '/logout',
    action: logoutAction,
    element: <ProfilePage />
  },  
  {
    path: '/modulesList/:courseId',
    loader: modulesListLoader,
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
])

export default router;

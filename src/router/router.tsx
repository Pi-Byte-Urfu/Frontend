
import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../root/Root";
import ProfilePage from "../layers/pages/profile_page/components/page/ProfilePage";
import { loginAction } from "../layers/modules/login_form/actions/LoginAction";
import { registrationAction } from "../layers/modules/RegistrationForm/actions/RegistrationAction";
import { logoutAction } from "../root/header/logoutAction";
import CoursesList from "../layers/modules/courses_list/components/CoursesList"
import QuestionsList from "../layers/modules/questions_list/components/QuestionsList";
import { coursesListLoader } from "../layers/modules/courses_list/loaders/CoursesListLoader";
import CoursePage from "../layers/pages/course_page/components/page/CoursePage";
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
import { stepsListLoader } from "../layers/modules/steps_list/loaders/stepsListLoader";
import ChoiceStep from "../layers/pages/module_page_editor/components/choice_step/ChoiceStep";
import { updateCourseAction } from "../layers/pages/course_page_editor/actions/updateCourseAction";
import { updateModuleAction } from "../layers/pages/module_page_editor/actions/updateModuleAction";
import { theoryLoader } from "../layers/pages/module_page_editor/components/thoery_editor/loaders/theoryLoader";
import { updateTheoryAction } from "../layers/pages/module_page_editor/actions/updateTheoryAction";
import TheoryEditor from "../layers/pages/module_page_editor/components/thoery_editor/component/TheoryEditor";
import Theory from "../layers/pages/module_page/components/theory/Theory";
import Groups from "../layers/modules/groups_list/components/page/component/Groups";
import ErrorPage from "../layers/pages/error_page/ErrorPage";
import { createGroupActon } from "../layers/modules/groups_list/components/page/actions/createGroupAction";
import { groupsListLoader } from "../layers/modules/groups_list/components/groups_list/loaders/groupsListLoader";
import { groupInfoLoader } from "../layers/modules/groups_list/components/group_info/loader/groupInfoLoader";
import GroupInfo from "../layers/modules/groups_list/components/group_info/component/GroupInfo";
import { groupConnectAction } from "../layers/modules/groups_list/components/connect/action/groupConnectAction";
import GroupConnect from "../layers/modules/groups_list/components/connect/component/GroupConnect";
import GroupsIndex from "../layers/modules/groups_list/components/index/GroupsIndex";
import TeacherRatePage from "../layers/pages/teacher_rate/components/page/component/TeacherRatePage";
import TaskEditor from "../layers/pages/module_page_editor/components/task_editor/component/TaskEditor";
import { updateTaskAction } from "../layers/pages/module_page_editor/components/task_editor/actions/updateTaskAction";
import { taskLoader } from "../layers/pages/module_page_editor/components/task_editor/loader/taskLoader";
import Task from "../layers/pages/module_page/components/task/component/Task";
import { tasksListAction } from "../layers/pages/teacher_rate/components/tasks_list/actions/tasksListAction";
import StudentProgressPage from "../layers/pages/student_progress_page/components/page/component/StudentProgressPage";
import { studentProgressLoader } from "../layers/pages/student_progress_page/components/page/loaders/studentProgressLoader";
import ServerErrorPage from "../layers/pages/server_error_page/ServerErrorPage";
import ModuleEditorIndex from "../layers/pages/module_page_editor/components/index/ModuleEditorIndex";
import { bindinCoursesForGroupLoader } from "../layers/modules/groups_list/components/courses_list_bindin/loader/bindinCoursesForGroupLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'ErrorPage',
        element: <ServerErrorPage/>
      },
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'studentProgress/:userId/course/:courseId',
        element: <StudentProgressPage/>,
        loader: studentProgressLoader,
      },
      {
        path: 'teacherRate/groups/:groupId/courses/:courseId',
        element: <TeacherRatePage/>,
        loader: groupInfoLoader,
        children: [
          {
            path: 'newRate/:pageId/:userId',
            action: tasksListAction,
          }
        ]
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
            element: <Groups/>,
            children: [
              {
                index: true,
                element: <GroupsIndex/>
              },
              {
                path: 'createGroup',
                action: createGroupActon,
              },
              {
                path: 'updateGroup',
              },
              {
                path: 'info/:groupId',
                loader: groupInfoLoader,
                element: <GroupInfo/>
              }
            ]
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
        loader: courseLoader
      },

      // CourseEditor **********************************

      {
        path: '/courseEditor/:courseId',
        element: <CourseEditor />,
        loader: courseEditorLoader,
        children: [
          {
            path: 'createModule',
            action: createModuleAction,
          },{
            path: 'updateCourse',
            action: updateCourseAction
          }
        ]
      },

      // ModuleEditor ***************************************************

      {
        path: 'courseEditor/:courseId/module/:moduleId/',
        element: <ModuleEditor />,
        loader: moduleEditorLoader,
        children: [
          {
            index: true,
            element: <ModuleEditorIndex/>
          },
          {
            path: 'choiceStep',
            element: <ChoiceStep/>,
          },
          {
            path: 'updateModule',
            action: updateModuleAction,
          },
          {
            path: 'step/0/:stepId',
            loader: theoryLoader,
            element: <TheoryEditor/>,
            children: [
              {
                path: 'update',
                action: updateTheoryAction
              }
            ]
          },
          {
            path: 'step/2/:stepId',
            loader: taskLoader,
            element: <TaskEditor/>,
            children: [
              {
                path: 'update',
                action: updateTaskAction,
              }
            ]
          }
        ]
      },
      {
        path: 'courseEditor/:courseId/module/:moduleId/createStep',
        action: createStepAction
      },

      // Module

      {
        path: '/course/:courseId/module/:moduleId',
        element: <ModulePage />,
        loader: moduleEditorLoader,
        children: [
          {
            index: true,
            element: <ModuleEditorIndex/>
          },
          {
            path: 'step/0/:stepId',
            element: <Theory/>,
            loader: theoryLoader
          }, 
          {
            path: 'step/2/:stepId',
            element: <Task/>,
            loader: taskLoader,
          }
        ]
      },
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
  },
  {
    path: '/stepsList/:moduleId',
    loader: stepsListLoader,
  },
  {
    path: '/groupsList/:teacherId',
    loader: groupsListLoader,
  }, 
  {
    path: '/groups/connect/:groupId',
    element: <GroupConnect/>,
    action: groupConnectAction,
  }, {
    path: '/bindinCoursesForGroup/:groupId',
    loader: bindinCoursesForGroupLoader,
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
])

export default router;

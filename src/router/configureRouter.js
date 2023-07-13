import { createBrowserRouter } from 'react-router-dom';

import App from 'components/App/App';
import Welcome from 'components/features/Welcome/Welcome';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
import Question from 'components/features/Questionnaire/Question/Question';
import NotFound from 'components/features/NotFound/NotFound';

function configureAppRouter() {
  return createBrowserRouter([
    { element: <App />,
      children: [
        { index: true,
          element: <Welcome />
        },
        { path: '/questionnaire',
          element: <Questionnaire />,
          children: [
            { path: ':questionId',
              element: <Question />
            }
          ]
        },
        { path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);
}

export default configureAppRouter;

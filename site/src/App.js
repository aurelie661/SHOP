import './helpers/string.helpers';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import React, {Suspense, useContext} from 'react';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from 'use-local-storage';
import BaseScreen from './Screens/BaseScreen';
import LoadingSpinner from './Components/LoadingSpinner';
import logo from './Components/assets/logo.png';
import logo2 from './Components/assets/logo2.png';
import Form from 'react-bootstrap/Form';
const HomeScreen = React.lazy(() => import('./Screens/home/HomeScreen'));
const AdminScreen = React.lazy(() => import('./Screens/admin/AdminScreen'));
const RegisterScreen = React.lazy(() => import('./Screens/register/RegisterScreen'));
const LoginScreen = React.lazy(() => import('./Screens/login/LoginScreen'));
const ContactScreen = React.lazy(() => import('./Screens/contact/ContactScreen'));
const AccountScreen = React.lazy(() => import('./Screens/account/AccountScreen'));
const LogoutScreen = React.lazy(() => import('./Screens/logout/LogoutScreen'));
const MenScreenView = React.lazy(() => import('./Screens/menPage/MenScreenView'));
const WomenScreenView = React.lazy(() => import('./Screens/womenPage/WomenScreenView'));
const ChildScreenView = React.lazy(() => import('./Screens/childPage/ChildScreenView'));
const BabyScreenView = React.lazy(() => import('./Screens/babyPage/BabyScreenView'));
const ProductScreen = React.lazy(() => import('./Screens/product/ProductScreen'));
const NotFoundScreen = React.lazy(() => import('./Screens/notFound/NotFoundScreen'));


function App() {
  const { auth } = useContext(AuthContext);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
console.log(auth.role);
  return (
    <div className="App" data-theme={theme}>
    <Form>
            <Form.Check 
               onClick={switchTheme}
               type="switch"
               id="custom-switch"
            />
            <div id="label-switch">
               {theme === 'light' ? <i className="fas fa-moon">Mode sombre</i> : <i className="fas fa-sun">Mode clair</i>}
            </div>
            {theme === 'light' ?
            <img className="logo" src={logo} title="Safia boutique"/>
            :
            <img className="logo" src={logo2} title="Safia boutique"/>
            }
    </Form>
    
      <Router>
        <Routes>
          <Route path='/' element={<BaseScreen/>}>
              <Route index element={<Suspense fallback={<LoadingSpinner/>}>
                                      <HomeScreen/>
                                    </Suspense>
                                    }/>
              {auth.role === 2 &&
              <Route path='/admin' element={<Suspense fallback={<LoadingSpinner/>}>
                                              <AdminScreen/>
                                            </Suspense>
                                            }/>
              }
              {auth.role === 0 &&
              <Route path='/register' element={<Suspense fallback={<LoadingSpinner/>}>
                                              <RegisterScreen/>
                                            </Suspense>
                                            }/>
              }
              {auth.role === 0 &&
              <Route path='/login' element={<Suspense fallback={<LoadingSpinner/>}>
                                              <LoginScreen/>
                                            </Suspense>
                                            }/>
              }
              {auth.role === 0 &&
              <Route path='/contact' element={<Suspense fallback={<LoadingSpinner/>}>
                                                <ContactScreen/>
                                              </Suspense>
                                              }/>
              }
              {auth.role > 0 &&
              <Route path='/account' element={<Suspense fallback={<LoadingSpinner/>}>
                                                <AccountScreen/>
                                              </Suspense>
                                              }/>
              }
              {auth.role > 0 &&
              <Route path='/logout' element={<Suspense fallback={<LoadingSpinner/>}>
                                              <LogoutScreen/>
                                            </Suspense>
                                            }/>
              }
              <Route path="/Homme" element={<Suspense fallback={<LoadingSpinner/>}>
                                              <MenScreenView/>
                                            </Suspense>
                                            }/>
              <Route path="/Femme" element={<Suspense fallback={<LoadingSpinner/>}>
                                              <WomenScreenView/>
                                            </Suspense>
                                            }/>
              <Route path="/Enfant" element={<Suspense fallback={<LoadingSpinner/>}>
                                              <ChildScreenView/>
                                            </Suspense>
                                            }/>
              <Route path="/Bebe" element={<Suspense fallback={<LoadingSpinner/>}>
                                              <BabyScreenView/>
                                           </Suspense>
                                           }/>
              <Route path='/product' element={<Suspense fallback={<LoadingSpinner/>}>
                                              <ProductScreen/>
                                            </Suspense>
                                            }/>
            </Route>
            <Route path='*' element={<NotFoundScreen/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

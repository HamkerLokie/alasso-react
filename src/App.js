import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useGetFromStore } from './hooks/zustandHooks'
import { useAuthStore, useContentStore } from './store'
import { Navigate } from 'react-router-dom'
import { lazy, useEffect, useState, Suspense, useTransition } from 'react'
import SkeletonDisplay from './skeletons/SkeletonDisplay'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './Error/ErrorFallback'
import Navbar from './Components/Navbar'
import NPTEL from './Components/NPTEL'

const Developers = lazy(() => import('./Components/Developers'))
const Intro = lazy(() => import('./Promotions/Intro'))
const StudyMaterial = lazy(() => import('./Components/StudyMaterial'))
const NptelCourse = lazy(() => import('./Components/NptelCourse'))
const LoginPage = lazy(() => import('./Components/LoginPage'))
const LoginAlert = lazy(() => import('./Popups/LoginAlert'))
const AdminAlert = lazy(() => import('./Popups/AdminAlert'))
const Roadmap = lazy(() => import('./Roadmap/Roadmap'))
const CreditCourse = lazy(() => import('./Components/CreditCourse'))
const PageNotFound = lazy(() => import('./Components/PageNotFound'))
const NptelNotes = lazy(() => import('./Components/NptelNotes'))
const CreditInside = lazy(() => import('./Components/CreditInside'))
const DevbyLokie = lazy(() => import('./Promotions/DevbyLokie'))
const Download = lazy(() => import('./Popups/Download'))
const Dress = lazy(() => import('./Components/Dress'))
const Home = lazy(() => import('./Components/Home'))
const Signup = lazy(() => import('./Components/Signup'))
const Help = lazy(() => import('./Components/Help'))
const DisplayContent = lazy(() => import('./Components/DisplayContent'))
const Footer = lazy(() => import('./Components/Footer'))
const Contest = lazy(() => import('./Contest/Contest'))
const Semester_Nav = lazy(() => import('./Components/Semester_Nav'))

function App () {
  const [isPending, startTransition] = useTransition()
  const [showIntro, setShowIntro] = useState(true)

  const isLoggedIn = useGetFromStore(useAuthStore, state => state.isLoggedIn)

  const PrivateRoute = ({ element, redirectTo, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to={redirectTo} />
  }

  useEffect(() => {
    startTransition(() => {
      const introTimeout = setTimeout(() => {
        setShowIntro(false)
      }, 2500)

      return () => clearTimeout(introTimeout)
    })
  }, [])
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            },
            style: {
              background:
                'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
              color: 'white'
            }
          }
        }}
      ></Toaster>
      <BrowserRouter>
        {showIntro ? (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<SkeletonDisplay />}>
              <Intro />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path='' element={<Home />} />
                <Route
                  path='download'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <Download />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path=':pagenotfound'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PageNotFound />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='login-alert-404'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <LoginAlert />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='admin-alert-404'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <AdminAlert />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path='creditcourse'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<CreditCourse />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='creditcourse/:platform'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<CreditInside />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='studymaterial'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<StudyMaterial />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='nptel'
                  element={
                    <PrivateRoute
                      element={<NPTEL />}
                      redirectTo='/login-alert-404'
                      isAuthenticated={isLoggedIn}
                    />
                  }
                />
                <Route
                  path='nptel/:courseName'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<NptelCourse />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='nptel/:courseName/:notes'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<NptelNotes />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path='signup'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <Signup />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='login'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <LoginPage />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path='help'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <Help />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='developers'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <Developers />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='devbylokie'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <DevbyLokie />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path='buy/dress/cu'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<Dress />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path=':selectcourse/semester/:selectsem'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<Semester_Nav />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path=':course/semester/:sem/subject/:sub'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<DisplayContent />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path='contests'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<Contest />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path='roadmap'
                  element={
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                      <Suspense fallback={<SkeletonDisplay />}>
                        <PrivateRoute
                          element={<Roadmap />}
                          redirectTo='/login-alert-404'
                          isAuthenticated={isLoggedIn}
                        />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  )
}

export default App

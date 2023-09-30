import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sem_num from '../Popups/Sem_num';
import Modal from 'react-modal';
import axios from '../axios';
import { toast } from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useStore } from 'zustand';
import { useContentStoe } from '../store';
import { responsive } from '../utils/responsive';
import { customStyles } from '../utils/customStyles';

const StudyMaterial = () => {
  const [semListClass, setSemListClass] = useState('');
  const [semPop, setSemPop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const { courses } = useStore(useContentStoe);

  useEffect(() => {
    useContentStoe.getState().fetchCourses();
    toast.success('All Courses Updated');
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const promises = courses.map(async (course, index) => {
        const { semester, courseName } = course;
        const img = new Image();
        img.src = `/course_images/img${index}.jpg`;

        return new Promise((resolve) => {
          img.onload = () => {
            setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
            resolve();
          };
        });
      });

      await Promise.all(promises);
    };

    loadImages();
  }, [courses]);

  const [selectedSemester, setSelectedSemester] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleClick = (sem, course) => {
    setSelectedSemester(sem);
    setSelectedCourse(course);
    setSemPop(true);
    setShowModal(!showModal);
    setDisplay();
  };

  const setDisplay = () => {
    setSemListClass(semListClass === '' ? 'hidden' : '');
  };

  return (
    <div className='sub-cont'>
      <div className='banner'>
        <img src='/images/courses_top.png' alt='' />
      </div>

      <div className='subs'>Courses</div>

      <div className='carousel'>
        <Carousel className='c-c' responsive={responsive}>
          {courses.length > 0 ? (
            courses.map((course, index) => {
              const { semester, courseName } = course;
              const isImageLoaded = loadedImages.includes(index);

              return (
                <div className='c-item' key={course._id}>
                  <div
                    className={`name-code`}
                    onClick={() => {
                      handleClick(semester, courseName);
                    }}
                  >
                    <div
                      className={`blur-load ${isImageLoaded ? 'loaded' : ''}`}
                      style={{
                        backgroundImage: `url('/course_images/img${index}.jpg')`,
                      }}
                    >
                      <img
                        src={`/course_images/img${index}.png`}
                        alt={`${courseName}`}
                        loading='lazy'
                      />
                    </div>
                    <button
                      onClick={() => {
                        handleClick(semester, courseName);
                      }}
                    >
                      {courseName}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{
                alignItems: 'center',
                textAlign: 'center',
                width: '100vw',
              }}
            >
              <InfinitySpin width='200' color='blue' />
            </div>
          )}
        </Carousel>
      </div>
      {semPop && (
        <Modal
          ariaHideApp={false}
          style={customStyles}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <Sem_num
            item={courses}
            selectedCourse={selectedCourse}
            selectedSemester={selectedSemester}
          />
        </Modal>
      )}
    </div>
  );
};

export default StudyMaterial;

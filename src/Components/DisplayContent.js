import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/Display.css';
import axios from '../axios';
import Unit from '../Popups/Unit';
import Modal from 'react-modal';
import { toast } from 'react-hot-toast';
import { customStyles } from '../utils/customStyles';
import { useTransition } from 'react';

const DisplayContent = () => {
  const { course, sem, sub } = useParams();
  const [isPending, startTransition] = useTransition();
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState('');
  const [catName, setCatName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [semPop, setSemPop] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const getFilesList = async () => {
        try {
          const { data } = await axios.get('/getAllFiles');
          setFilesList(data);
          const temp = data.filter(
            (i) =>
              i.semester.toString() === sem &&
              i.subject.toUpperCase() === sub.toUpperCase()
          );
          setFilteredData(temp);
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };
      getFilesList();
    });

    toast.success(`${sub} Selected`);
  }, []);

  const openPopup = (category) => {
    const filteredDataByCategory = filteredData.filter(
      (file) => file.file_category.toLowerCase() === category
    );

    setCategory(filteredDataByCategory);
    setCatName(category);
    setSemPop(true);
    setShowModal(!showModal);
  };

  const renderButton = (category) => (
    <button className='display-btn' onClick={() => openPopup(category)}>
      <div> {category.charAt(0).toUpperCase() + category.slice(1)}</div>
      <div>
        {' '}
        <i className='fa fa-plus-square-o' aria-hidden='true'></i>
      </div>
    </button>
  );

  return (
    <div className='display-wrapper'>
      <div className='sub-cont'>
        <div className='display-tool'>
          Study Material {'->'} {course.toUpperCase()} {'->'} {sem} {'->'}{' '}
          {sub.toUpperCase()}{' '}
        </div>
        <div className=' xx display-text'>{sub.toUpperCase()}</div>
        <img src='/images/courses_banner.png' alt='' />
      </div>

      <div className='contents'>
        {['syllabus', 'worksheet', 'assignment', 'pre-post', 'notes', 'em'].map(
          (category) => renderButton(category)
        )}
      </div>

      {semPop && (
        <Modal
          ariaHideApp={false}
          style={customStyles}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <Unit category={category} catName={catName} />
        </Modal>
      )}
    </div>
  );
};

export default DisplayContent;

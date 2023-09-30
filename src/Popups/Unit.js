import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import './css/unit.css';

const Unit = ({ category, catName }) => {
  useEffect(() => {
    toast.success(`ALL ${catName.toUpperCase() + 'S'}`);
  }, []);

  const reformattedData = category.reduce((acc, item) => {
    const { unit } = item;

    if (!acc[`unit${unit}`]) {
      acc[`unit${unit}`] = [];
    }

    acc[`unit${unit}`].push(item);

    return acc;
  }, {});

  const downloadFile = (link, title) => {
    window.location.assign(link);
    toast.success(`DOWNLOADED`);
  };

  const renderUnits = () => {
    const units = [];

    for (let i = 1; i <= 3; i++) {
      const unitKey = `unit${i}`;
      const unitData = reformattedData[unitKey];

      units.push(
        <div key={unitKey} className={`units ${unitKey}`}>
          <span>{`Unit ${i}`}</span>
          {unitData?.length > 0 ? (
            unitData.map((item) => (
              <div className='showMaterial' key={item._id}>
                <div className='material'>{item.title}</div>
                <a href='#/' onClick={() => downloadFile(item.link, item.title)}>
                  Download
                </a>
              </div>
            ))
          ) : (
            <div className='no-content'>No content to show</div>
          )}
        </div>
      );
    }

    return units;
  };

  return <div className='unit-pop-wrap'>{renderUnits()}</div>;
};

export default Unit;

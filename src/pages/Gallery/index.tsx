import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { getThumb, Picture } from './service';
import { GalleryStyle, ContentWrapper, CardWrapper } from './style';
import Audio from './components/Audio';
import Footer from '../../components/Footer';

type OrderType = 'default' | 'score' | 'time';

const Gallery = () => {
  const [isR18, setIsR18] = useState(false);
  const [page, setPage] = useState(1);
  const [orderType, setOrderType] = useState<OrderType>('default');
  const [pictureList, setPictureList] = useState<Picture[]>([]);

  useEffect(() => {
    getThumb(orderType, page, isR18)
      .then(res => {
        setPictureList(res.thumbs);
      })
      .catch(error => {
        message.error(error.message);
      });
  }, []);

  return (
    <>
      <GalleryStyle>
        {/* <Audio /> */}
        <ContentWrapper>
          {pictureList.map(picture => (
            <CardWrapper key={picture.picture_id}>
              <Link to="/picture">
                <div className="card">
                  <img src={picture.thumb_dir} alt="loading" />
                </div>
                <p>{picture.total_score}</p>
              </Link>
            </CardWrapper>
          ))}
        </ContentWrapper>
      </GalleryStyle>
      <Footer />
    </>
  );
};

export default Gallery;

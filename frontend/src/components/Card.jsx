import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <div className="card-content">
        {/* Add any content or text here if needed */}
      </div>
      <div className="card-actions">
        <div className="card-action-icon">
          <AiOutlineHeart />
        </div>
        <div className="card-action-icon">
          <AiOutlineShareAlt />
        </div>
      </div>
    </div>
  );
};

export default Card;

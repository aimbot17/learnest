import React from "react";

interface CardData {
  courseImage: {
    url: string;
  };
  title: string;
  keywords: string;
  currency: string;
  price: number;
}

const CourseCard: React.FC<{ cardData: CardData }> = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="border border-black w-96 h-[80vh] rounded-lg m-5">
      <img src={cardData?.courseImage?.url} alt={cardData?.title} />
      <h1>{cardData?.title}</h1>
      <div>{cardData?.keywords}</div>
      <div>{cardData?.currency}{cardData?.price}</div>
    </div>
  );
};

export default CourseCard;

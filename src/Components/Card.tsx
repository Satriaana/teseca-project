import React from "react";
import { Card } from "antd";

type Props = {
    title?: string;
    imagePath?:string;
    description?:string;
    style?:React.CSSProperties;
    className?:string;
  
}; 

const { Meta } = Card;

const CardComponent = ({
  title,
  imagePath = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  description,
  style,
  className,
  ...props
}:Props):JSX.Element => {
  return (

      <Card
        hoverable
        style={{ width: 240 }}
        className={`${className}`}
        cover={<img alt="example" src={imagePath} />}
      >
        <Meta title={title} description={description} />
      </Card>
      
  );
};

export default CardComponent;
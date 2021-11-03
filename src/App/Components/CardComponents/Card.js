import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CardComponent = ({
  title = " ",
  imagePath = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  description = "",
}) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={imagePath} />}
      >
        <Meta title={title} description={description} />
      </Card>
      ,
    </div>
  );
};

export default CardComponent;

import classNames from "./Contintro.module.scss";
import { Card } from 'antd';
import {  Row, Col } from "antd";
import { Image } from 'antd';
import contentintro from "../../assets/img/contentintro.png";

const Contintro = () => {
  return (
    <div className={classNames.contintro}>
      <div className={classNames.ContintroCardWrapper}>
        <Card
          style={{ backgroundColor: "#C5C5C5" }}
          border="no-border"
          shadow="medium"
        >
          <Row>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Image 
              width={550}
              src={contentintro}
              preview={false}
        
              className={classNames.contentintro}>

              </Image>
            
            </Col>
            
            <Col lg={12} md={12} sm={12} xs={24}>
              <div className={classNames.card}>
                <Card  className={classNames.topcard}
                style={{ backgroundColor: "#F1F1F1" }}
                border="no-border"
                shadow="medium">
                  <h1 style={{ fontWeight: "600" }}>
                    Vikings Season 04 </h1>
                    </Card>
                    <br></br>
                    
                  <h2 style={{ fontWeight: "500" }}>
                      Kate | Premieres on Netflix on Friday, Sept. 10 </h2>
                      <br></br>
                      <p>
                        <h2 style={{ fontWeight: "500" }}>
                          As long as Netflix keeps dropping films about kick-ass woman assassins, 
                          we'll keep watching them. Mary Elizabeth Winstead (who already displayed 
                          her impressive action skills in Birds of Prey) stars in Kate as a ruthless 
                          criminal operative who is slipped a fatal poison on her final job and has 
                          less than 24 hours to solve her murder and exact revenge on her enemies. 
                          Woody Harrelson, Tadanobu Asano, Michiel Huisman, and Miyavi round out the cast.
                        </h2></p>
                      <p><h3>Genre:- Action, Fiction</h3></p>
              </div>
            </Col>
           </Row>
      
        </Card>
    
      
      </div>
    
    </div>
  );
};

export default Contintro;

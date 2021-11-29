import React, { useEffect, useState } from 'react'
import "./FAQ.scss";
import axios from 'axios';
import {
  Container, Row, Col
} from "reactstrap";

const FAQ = () => {

  const url = '/api/faq/faq-director';
  var newData = [];
  

  const getAllFaqs = () => {
    axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      newData = response.data;
      setData(newData);
    })
  }

  const [faqData, setData] = useState(newData)
  useEffect(() => {
    getAllFaqs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const DisplayFaq = () => (
  // <>
  // {getAllFaqs()}
  // if (faq.length '{'>'}' 0){

  //   faq.map((faq, index) =>{
  //     return(<>
  //             <h2 class = "display-3">{faq.que}</h2>
  //             <p class = "lead">{faq.ans}</p>
  //             </>
  //     )
  //   } )
  //   }
  //   else{
  //     <>
  //     <h2 class = "display-3"> 
  //      No FAQs yet.       
  //     </h2>
  //   </>
  //   }
  // </>);

  return (
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-default">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Container className="py-lg-md d-flex">
        <div className="col px-0">
          <Row>
            <Col lg="12">
              <h1 className="display-3 text-white">
                FAQs
              </h1>
              {
                faqData.map((faq, index) => {
                  if (faqData.length > 0) {
                    return (
                      <>
                        <h2 className="display-4 text-white">{index + 1}. {faq.que}</h2>
                        <p className="description mt-3 text-white" style={{ fontSize: "20px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {faq.ans}</p>
                      </>
                    )
                  }
                  else {
                    console.log("hii");
                    return (<>
                      <h2 class="display-3">No FAQ Available</h2>
                    </>
                    )
                  }
                })
              }
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;

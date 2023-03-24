import Editor from "@/admin/helpers/editor/Editor";
import CardBlog from "@/common/components/cardBlog/CardBlog";
import React, { useState, useEffect } from "react";
import { index } from "@/admin/mock-data/mock-pages";
import { Card, CardBody, Col, Container, Row, FormGroup, Label, Input, CardHeader, Button, CardFooter } from "reactstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";



export default function Page() {
    let mode = useSelector(state => state?.pageModel?.editMode);
    let idpage = useSelector(state => state?.pageModel?.pageDetails._id);
    let pageContent = useSelector(state => state?.pageModel?.pageDetails.content);
    let pagetitle = useSelector(state => state?.pageModel?.pageDetails.title)
    let pageurl = useSelector(state => state?.pageModel?.pageDetails.url)

    let translation =  useSelector(state => state?.translationModel?.translation)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log({

            title: title,
            url: url,
            author: "stephanie32000",
            content: pageContent
        })
    }, []);
    function navigateTo() {
        dispatch.pageModel.setPage({ page: "Index" })
    }
    function addPage() {
        if (mode) {

            dispatch.pageModel.editPagesAsync({ 
                title: title,
                url: url,
                author: "stephanie32000",
                content: pageContent,
                id: idpage
            }).then((res: any) => { console.log(res) });

        }
        else {   dispatch.pageModel.addPagesAsync({

            title: title,
            url: url,
            author: "stephanie32000",
            content: pageContent
        }).then((res: any) => { console.log(res) });}

        if(translation){
            dispatch.translationModel.addTranslationAsync(translation).then((res: any)=> {console.log("test")}) }
      

    }

    const [title, setTitle] = useState(pagetitle)
    const [url, setUrl] = useState(pageurl)
    const changeUrl = (event: any) => {



        setUrl(event.target.value)
    }
    const changeTitle = (event: any) => {

        console.log("test");

        setTitle(event.target.value)
    }
    const [buttonSize, setButtonSize] = useState("8");


    const [xs, setXs] = useState("large")
    const handleButtonClick = (size: any) => {



        if (size === "3") {
            setXs("phone");
        }
        if (size === "5") {
            console.log(5)
            setXs("laptop");
        } else if (size === "8") {
            setXs("large");
        }
    }
    return (
        <Container fluid >

            <Row className="mt-5">
                <Col className=" mb-4 " xs={12} >
                    <div className=" d-flex  justify-content-center ">
                        <button
                            className="btn btn-success mx-2"
                            onClick={() => handleButtonClick("3")}
                        >
                            <i className="bi bi-phone me-2"></i>
                            Smartphone
                        </button>
                        <button
                            className="btn btn-warning mx-2"
                            onClick={() => handleButtonClick("5")}
                        >
                            <i className="bi bi-laptop me-2"></i>
                            Laptop
                        </button>
                        <button
                            className="btn btn-danger mx-2"
                            onClick={() => handleButtonClick("8")}

                        >
                            <i className="bi bi-window-fullscreen me-2"></i>
                            Large Screen
                        </button>
                    </div>
                </Col>
                <Col className="  justify-content-center   "  >
                    <div className={`justify-content-center mx-auto ${xs == 'phone' ? 'width-3buttons-phone' : ''} ${xs == 'laptop' ? "width-3buttons-laptop" : ''} ${xs == 'large' ? 'width-3buttons-large' : ''}`}>
                        <Card className="  card-admin " >
                            <CardBody>{Editor(pageContent)}</CardBody>
                        </Card>
                    </div>
                </Col>



                <Col xs={12} >
                    <Card>
                        <CardHeader className="bg-white">
                            <div className="d-flex justify-content-end">
                                <i className="bi bi-gear-fill"></i>

                            </div>
                        </CardHeader>
                        <CardBody className="mt-5">
                            <FormGroup row>
                                <Label for="exampleEmail" sm={4}>Page name:</Label>
                                <Col sm={8}>
                                    <Input type="text" id="exampleEmail" placeholder="page name" value={title} onChange={() => changeTitle(event)} />
                                </Col>
                            </FormGroup>

                        </CardBody>
                        <CardBody className="mt-5">
                            <FormGroup row>
                                <Label for="exampleurl" sm={4}>url :</Label>
                                <Col sm={8}>
                                    <Input type="text" id="exampleurl" placeholder="url" value={url} onChange={() => changeUrl(event)} />
                                </Col>
                            </FormGroup>

                        </CardBody>
                        <CardFooter className="bg-white mt-2 mb-2 d-flex justify-content-end">

                            <div>
                                <Button onClick={addPage} outline color="success" className=""> to do here
                                    validate
                                </Button>
                                {" "}
                                <Button color="secondary" onClick={navigateTo}>
                                    cancel
                                </Button>
                            </div>

                        </CardFooter>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
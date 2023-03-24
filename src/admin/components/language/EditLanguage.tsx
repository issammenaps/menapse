
import {
    Card,
    CardBody,
    Button,
    CardHeader,
    CardFooter,
    FormGroup,
    Form,
    Label,
    Col,
    Input,

} from "reactstrap";
import { useFormik, FormikProvider, FieldArray } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
export default function EditLanguage(props: any) {

    const dispatch = useDispatch();

    const handleSubmit = (values: any) => {

        console.log(values); 
        dispatch.languageModel.saveLanguage(values).then((res: any)=>{
                console.log(res);
                
        }).catch((err: any)=>{
            console.log(err);
            
        });
        
    }

    const formik = useFormik({
        initialValues: props,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: handleSubmit,
    })


    return (
        <div className="container-fluid d-flex flex-column  justif-content-center align-items-center  justify-content-center align-items-center "
        >
            <Card
            className="py-2 px-4"
                style={{
                    width: '50rem',
                    marginTop: '5rem'
                }}
            >
                <CardHeader className="bg-white">
                    Create new language
                </CardHeader>
                <CardBody className="d-flex justify-content-start flex-column my-5 ">
                    <Form>
                        <FormGroup row>
                            <Label
                                for="title"
                                sm={2}
                            >
                                Name*
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="title"
                                    placeholder="title"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    name="title"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                                for="ISOCode"
                                sm={2}
                            >
                                ISO Code*
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="ISOCode"
                                    name="ISOCode"
                                    placeholder="Abbreviation"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.ISOCode}
                                />
                            </Col>
                        </FormGroup>


                 
                        <FormGroup row>
                            <Label
                                for="Flag"
                                sm={2}
                            >
                                Flag*
                            </Label>
                            <Col sm={10}>
                                <Input  
                                    id="Flag"
                                    name="Flag"
                                    type="file"
                                    onChange={formik.handleChange}
                                    value={formik.values.flag}

                                />
                               
                            </Col>
                        </FormGroup>
                       
                    </Form>

                </CardBody>
                <CardFooter className="bg-white d-flex justify-content-end mb-2">


                    <Button style={{marginRight: 10}} onClick={formik.handleSubmit}>
                        validate
                    </Button>
            
                    <Button>
                        Cancel
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

import { Components } from '@/admin/mock-data/components-list/components';
import { useFormik, FormikProvider, FieldArray } from 'formik';

import { useEffect, useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row,
    Container, FormGroup, Label, Input
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { IGenericModal } from './IGenericModal';
import { IComponent } from '@/admin/helpers/interfaces/IComponent';
import uuid from 'react-uuid';
import { camelToFlat, formatObject, refactorProps } from '@/helpers/helpers';

export default function GenericModal({ modal, toggle, className, closeBtn, confirmBtn, id, props }: IGenericModal) {
    const [formValues, setFormValues] = useState<string[]>([]);
    let addFormFields = () => {
        setFormValues([...formValues, '']);
    };

    let removeFormFields = (i: number) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };

    console.log(props)
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("")

    const languagesIsloaded = useSelector((state: any) => state.languageModel.isloaded);
    const [isLoading, setIsLoading] = useState(false);
    const uuidPattern = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    useEffect(() => {


        const getLanguages = async () => {
            if (languagesIsloaded == false) {

                dispatch.languageModel.getLanguageAsync().then((res: any) => {
                    setIsLoading(true);
                    dispatch.languageModel.setIsLoading(isLoading)
                    console.log(isLoading);

                })
            } else {
                setIsLoading(false);
                return;
            };
        }

        getLanguages();


    }, []);


    const languages = useSelector((state: any) => state.languageModel.languages);

    const handleSubmit = (values: any) => {

        const { translation, object } = refactorProps(values, languages, props);

        dispatch.translationModel.addTranslation(translation)

        dispatch.pageModel.addProps({ id: id, props: object })
        toggle();


    }

    const formik = useFormik({
        initialValues: formatObject(props, languages),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: handleSubmit,
    })



    const handleChange = function (event: any) {
        setFilter(event.target.value)
    }

    const selectComponent = (component: IComponent) => {

        let newComponent = JSON.parse(JSON.stringify({ ...component, id: uuid().toString() }))

        dispatch.pageModel.addChild({ id: id, component: newComponent })

        toggle();

        // confirmBtn()
    }

    const validate = () => {

        toggle()
    }




    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size={props !== undefined ? "lg" : "xl"} centered fullscreen="xl">
            <ModalHeader toggle={toggle} close={closeBtn}>
                Components
            </ModalHeader>
            <ModalBody>
                <div className='d-flex justify-content-end'>
                    <div className="input-group mb-3 w-25">
                        <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} />
                        <div className="input-group-append">
                            <button className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
                <Container className={`d-flex  ${props ? "justify-content-start flex-column" : "justify-content-center"} align-items-start`}>
                    {
                        props ? Object.keys(props).map((item, index) => {
                            console.log(item, formik.values)
                            return <>
                                {item.toLowerCase().indexOf(filter) > -1 && <> <FormGroup row className='w-100 d-flex'>
                                    <Label
                                        sm={3}
                                        hidden={props[item].isHiden || props[item].isTranslated == true}
                                    >
                                        {item}
                                    </Label>
                                    <Col sm={9}>
                                        <div hidden>{props[item].isTranslated == true && !formik.values[item].match(uuidPattern) ? formik.values[item] = uuid().toString() : ''}</div>
                                        {props[item].type == "object" && <>
                                            <button
                                                type='button'
                                                className='primary-btn'
                                                onClick={() => addFormFields()}>
                                                add new 
                                            </button>
                                            {props[item].value.length > 0 && (
                                                
                                                props[item].value.map((element: any, index: any) => {
                                                    return (
                                                        <h1 key={index}>{element}</h1>
                                                    );
                                                })
                                            )}
                                        </>
                                        }
                                        <Input
                                            hidden={props[item].isHiden || props[item].isTranslated == true}
                                            type={props[item].type}
                                            onChange={formik.handleChange}
                                            value={formik.values[item]}
                                            name={item}
                                        />
                                    </Col>
                                </FormGroup>
                                    {props[item].isTranslated && <>
                                        {languages.map((lang: any, index: number) => {
                                            return <FormGroup row className='w-100 d-flex'>
                                                <Label
                                                    sm={3}
                                                    hidden={props[item].isHiden}
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    {camelToFlat(item)}  <img src={lang.flag} />
                                                </Label>
                                                <Col sm={9}>

                                                    <Input
                                                        hidden={props[item].isHiden}
                                                        type={props[item].type}
                                                        onChange={formik.handleChange}
                                                        value={formik.values[item + '_' + lang.iSOCode]}
                                                        name={item + '_' + lang.iSOCode}
                                                    />
                                                </Col>
                                            </FormGroup>

                                        })

                                        }

                                    </>
                                    }

                                </>}
                            </>
                        })
                            :
                            <Row xs="6" className='d-flex justify-content-center align-items-center '>
                                {Components.map((item) => {
                                    return <>
                                        {item.type.toLowerCase().indexOf(filter) > -1 && <Col className='d-flex justify-content-center align-items-center flex-column m-2 p-5 border pointer' onClick={() => selectComponent(item)}>
                                            <i className={item.icon}></i>
                                            <span>{item?.name}</span>
                                        </Col>}
                                    </>
                                })}
                            </Row>}
                </Container>
            </ModalBody>
            <ModalFooter>

                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                {props && <Button color="secondary" onClick={formik.handleSubmit}>
                    validate
                </Button>}
            </ModalFooter>
        </Modal>
    )
}

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row,
    Container, FormGroup, Label, Input, Form
} from 'reactstrap';
import { ILanguageModal } from './ILanguageModal';
import { useFormik, FormikProvider, FieldArray } from 'formik';

export default function LanguageModal({ modal, toggle, className, closeBtn }: ILanguageModal) {



    const handleSubmit = (values: any) => {

        
       


    }
    const formik = useFormik({
        initialValues: {key: "", en: ""},
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: handleSubmit,
    })




    return (
        <Modal isOpen={modal} toggle={toggle} className={className} size={"xl"} centered fullscreen="xl">
            <ModalHeader toggle={toggle} close={closeBtn}>
                Languages
            </ModalHeader>
            <ModalBody>
                <Container className={`d-flex  justify-content-start flex-column align-items-start w-100`}>

                  
                        <FormGroup row className='w-100'>
                            <Label
                                for="key"
                                sm={2}
                            >
                                Key
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="key"
                                    name="key"
                                    placeholder="key"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.key}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row className='w-100'>
                            <Label
                                for="en"
                                sm={2}
                            >
                                EN
                            </Label>
                            <Col sm={10} >
                                <Input
                                    id="en"
                                    name="en"
                                    placeholder="english translation"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.en}
                                />
                            </Col>
                        </FormGroup>
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    validate
                </Button>
                <Button color="secondary" onClick={toggle}>
                    search
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )

}
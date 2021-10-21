import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import ChooseSymptom from './ChooseSymptom';
import { useTranslation } from "react-i18next";
import "../i18n";


function InputForm() {


    const { t, i18n } = useTranslation();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthDate] = useState(new Date());
    const [address, setAddress] = useState("");
    const [medications, setMedications] = useState("");
    const [relativeName, setRelativeName] = useState("");
    const [relativeNumber, setRelativeNumber] = useState("");
    const [reason, setReason] = useState("");

    return (
        <div className="HealthCardBox">
            <Container>
                <form>
                    <Container className="subBox">
                        <Row className="boxSubtitle">{t("overview.title")}</Row>
                        <HealthCardField field="ID" patientInfo="999999" />

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("name.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <input
                                        className="inputBox"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("gender.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <select 
                                        value={gender}
                                        autosize={false}
                                        onChange={(e) => setGender(e.target.value)}>
                                        <option value="Male"> {t("male.answer")}</option>
                                        <option value="Female"> {t("female.answer")}</option>
                                    </select>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("birthdate.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <DatePicker
                                        selected = {birthdate}
                                        onChange={(e) => setBirthDate(e.target.selected)} />
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("address.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <textarea
                                        className="inputBox"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}>
                                    </textarea>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("medications.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <textarea
                                        className="inputBox"
                                        value={medications}
                                        onChange={(e) => setMedications(e.target.value)}>
                                    </textarea>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("relativename.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <input
                                        className="inputBox"
                                    type="text"
                                        value={relativeName}
                                        onChange={(e) => setRelativeName(e.target.value)}>
                                    </input>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("relativenumber.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <input 
                                        className="inputBox"
                                    type="text"
                                        value={relativeNumber}
                                        onChange={(e) => setRelativeNumber(e.target.value)}>
                                    </input>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("reason.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <textarea 
                                    className = "inputBox"
                                    value={reason}
                                        onChange={(e) => setReason(e.target.value)}>
                                    </textarea>
                                </label>
                            </Col>
                        </Row>


                    </Container>
                    <Container className="subBox">
                        <Row className="boxSubtitle">{t("currentsymptoms.title")}</Row>
                        <ChooseSymptom firstSymptom={t("fever.label")} secondSymptom={t("headache.label")} thirdSymptom={t("nightchills.label")} />
                        <ChooseSymptom firstSymptom={t("sorethroat.label")} secondSymptom={t("cough.label")} thirdSymptom={t("breathing.label")} />
                        <ChooseSymptom firstSymptom={t("diarrhoea.label")} secondSymptom={t("chestpain.label")} thirdSymptom={t("legnumb.label")} />
                        <ChooseSymptom firstSymptom={t("handnumb.label")} secondSymptom={t("facenumb.label")} />

                    </Container>

                    <Container className="subBox">
                        <Row className="boxSubtitle">{t("chronicconditions.title")}</Row>
                        <ChooseSymptom firstSymptom={t("diabetes.label")} secondSymptom={t("highbloodpressure.label")} thirdSymptom={t("highcholesterol.label")} />
                        <ChooseSymptom firstSymptom={t("asthma.label")} secondSymptom={t("chronickidney.label")} thirdSymptom={t("arthritis.label")} />
                        <ChooseSymptom firstSymptom={t("pancreaticcancer.label")} secondSymptom={t("livercancer.label")} thirdSymptom={t("colorectalcancer.label")} />
                        <ChooseSymptom firstSymptom={t("copd.label")} secondSymptom={t("depression.label")} thirdSymptom={t("lungcancer.label")} />
                    </Container>

                    <input type="submit" value="Submit" />
                </form>
            </Container>

        </div>
    );
}

export default InputForm;



// return (
//     <div className="HealthCardBox">
//         <Container>
//             <form onSubmit={handleSubmit}>
//                 <Container className="subBox">
//                     <Row className="boxSubtitle">OVERVIEW</Row>
//                     <HealthCardField field="ID" patientInfo="999999" />
//                     <HealthCardField field={t("gender.label")} patientInfo={t("male.answer")} />
//                     <HealthCardField field={t("birthdate.label")} patientInfo="01/01/1950" />
//                     <HealthCardField field={t("medications.label")} patientInfo="Adezio" />
//                     <HealthCardField field="Diabetic" patientInfo="No" />
//                     <HealthCardField field="Smoker" patientInfo="Yes" />
//                     <HealthCardField field={t("others.label")} patientInfo="High blood pressure" />
//                     <HealthCardField field={t("reason.label")} patientInfo="To get X-ray chest scan" />
//                 </Container>
//                 <Container className="subBox">
//                     <Row className="boxSubtitle">SYMPTOMS</Row>
//                     <SymptomRow firstSymptom={t("fever.label")} secondSymptom={t("headache.label")} thirdSymptom={t("nightchills.label")} />
//                     <SymptomRow firstSymptom={t("sorethroat.label")} secondSymptom={t("cough.label")} thirdSymptom={t("breathing.label")} />
//                     <SymptomRow firstSymptom={t("diarrhoea.label")} secondSymptom={t("chestpain.label")} thirdSymptom={t("legnumb.label")} />
//                     <SymptomRow firstSymptom={t("handnumb.label")} secondSymptom={t("facenumb.label")} />

//                 </Container>
//                 <input type="submit" value="Submit" />
//             </form>
//         </Container>

//     </div>
// );
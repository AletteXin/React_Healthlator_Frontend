import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import InputForm from './InputForm';
import SymptomRow from './SymptomRow';
import { useTranslation } from "react-i18next";
import "../i18n";

function HealthCard({ previousName, previousId, entryRecorded, setEntryRecorded }) {

    const { t, i18n } = useTranslation();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [medications, setMedications] = useState("");
    const [relativeName, setRelativeName] = useState("");
    const [relativeNumber, setRelativeNumber] = useState("");
    const [reason, setReason] = useState("");
    const [error, setError] = useState("")

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/records/show', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            body: JSON.stringify({
                id: previousId,
                Name: previousName,
            })
        }).then(response => response.json().then(data => {
            console.log("Connected")
            console.log(data.record_details[0][0]["Gender"])
            setId(data.record_details[0][0]["id"]);
            setName(data.record_details[0][0]["Name"]);
            setGender(data.record_details[0][0]["Gender"]);
            setBirthDate(data.record_details[0][0]["Birthdate"]);
            setAddress(data.record_details[0][0]["Address"]);
            setMedications(data.record_details[0][0]["Medications"]);
            setRelativeName(data.record_details[0][0]["Nameofnextkin"]);
            setRelativeNumber(data.record_details[0][0]["Phoneofnextkin"]);
            setReason(data.record_details[0][0]['Reasonforvisit']);
            setError(data.record_details[0][0]['Errormessage']);
        }))

    });

    console.log(name)
    console.log(previousId)
    console.log(previousName)
    console.log(error)


    const createNewForm = (e) => {
        window.location.reload();
    };

    return (
        <div>

            {error != "" ?
                (<Container>
                    <p>{error}</p>
                    <InputForm setEntryRecorded={setEntryRecorded} entryRecorded={entryRecorded} />
                </Container>)
                : (
                    <div className="HealthCardBox">
                        <Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("overview.title")}</Row>
                                <HealthCardField field="Form ID" patientInfo={id} />
                                <HealthCardField field={t("name.label")} patientInfo={name} />
                                <HealthCardField field={t("gender.label")} patientInfo={gender} />
                                <HealthCardField field={t("birthdate.label")} patientInfo={birthdate} />
                                <HealthCardField field={t("address.label")} patientInfo={address} />
                                <HealthCardField field={t("medications.label")} patientInfo={medications} />
                                <HealthCardField field={t("relativename.label")} patientInfo={relativeName} />
                                <HealthCardField field={t("relativenumber.label")} patientInfo={relativeNumber} />
                                <HealthCardField field={t("reason.label")} patientInfo={reason} />
                            </Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("currentsymptoms.title")}</Row>
                                <SymptomRow firstSymptom={t("fever.label")} secondSymptom={t("headache.label")} thirdSymptom={t("nightchills.label")} />
                                <SymptomRow firstSymptom={t("sorethroat.label")} secondSymptom={t("cough.label")} thirdSymptom={t("breathing.label")} />
                                <SymptomRow firstSymptom={t("diarrhoea.label")} secondSymptom={t("chestpain.label")} thirdSymptom={t("legnumb.label")} />
                                <SymptomRow firstSymptom={t("handnumb.label")} secondSymptom={t("facenumb.label")} />
                            </Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("chronicconditions.title")}</Row>
                                <SymptomRow firstSymptom={t("diabetes.label")} secondSymptom={t("highbloodpressure.label")} thirdSymptom={t("highcholesterol.label")} />
                                <SymptomRow firstSymptom={t("asthma.label")} secondSymptom={t("chronickidney.label")} thirdSymptom={t("arthritis.label")} />
                                <SymptomRow firstSymptom={t("pancreaticcancer.label")} secondSymptom={t("livercancer.label")} thirdSymptom={t("colorectalcancer.label")} />
                                <SymptomRow firstSymptom={t("copd.label")} secondSymptom={t("depression.label")} thirdSymptom={t("lungcancer.label")} />
                            </Container>

                        </Container>

                        <Container>
                            <button onClick={(e) => createNewForm(e)}>Create New Form</button>
                        </Container>
                    </div>)}

        </div>
    );
}

export default HealthCard;

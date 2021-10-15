import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import SymptomRow from './SymptomRow';
import { useTranslation } from "react-i18next";
import "../i18n";

function HealthCard() {


    const {t, i18n } = useTranslation();


    return (
        <div className="HealthCardBox">
            <Container>
                <Container className="subBox">
                    <Row className="boxSubtitle">OVERVIEW</Row>
                    <HealthCardField field="ID" patientInfo="999999" />
                    <HealthCardField field={t("gender.label")} patientInfo={t("male.answer")} />
                    <HealthCardField field={t("birthdate.label")} patientInfo="01/01/1950" />
                    <HealthCardField field={t("address.label")} patientInfo="Bandar Utama" />
                    <HealthCardField field={t("medications.label")} patientInfo="Adezio" />
                    <HealthCardField field="Diabetic" patientInfo="No" />
                    <HealthCardField field="Smoker" patientInfo="Yes" />
                    <HealthCardField field={t("others.label")} patientInfo="High blood pressure" />
                    <HealthCardField field={t("reason.label")} patientInfo="To get X-ray chest scan" />
                </Container>
                <Container className="subBox">
                    <Row className="boxSubtitle">SYMPTOMS</Row>
                    <SymptomRow firstSymptom={t("fever.label")} secondSymptom={t("headache.label")} thirdSymptom={t("nightchills.label")} />
                    <SymptomRow firstSymptom={t("sorethroat.label")} secondSymptom={t("cough.label")} thirdSymptom={t("breathing.label")} />
                    <SymptomRow firstSymptom={t("diarrhoea.label")} secondSymptom={t("chestpain.label")} thirdSymptom={t("legnumb.label")} />
                    <SymptomRow firstSymptom={t("handnumb.label")} secondSymptom={t("facenumb.label")} />

                </Container>

                <Container className="subBox">
                    <Row className="boxSubtitle">EXISTING HEALTH CONDITIONS</Row>
                    <SymptomRow firstSymptom={t("diabetes.label")} secondSymptom={t("highbloodpressure.label")} thirdSymptom={t("highcholesterol.label")} />
                    <SymptomRow firstSymptom={t("asthma.label")} secondSymptom={t("chronickidney.label")} thirdSymptom={t("arthritis.label")} />
                    <SymptomRow firstSymptom={t("pancreaticcancer.label")} secondSymptom={t("livercancer.label")} thirdSymptom={t("colorectalcancer.label")} />
                    <SymptomRow firstSymptom={t("copd.label")} secondSymptom={t("depression.label")} thirdSymptom={t("lungcancer.label")}/>
                </Container>

            </Container>

        </div>
    );
}

export default HealthCard;

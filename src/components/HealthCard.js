import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import SymptomRow from './SymptomRow';


function HealthCard() {
    return (
        <div className="HealthCardBox">
            <Container>
                <Container className="subBox">
                    <Row className="boxSubtitle">OVERVIEW</Row>
                    <HealthCardField field="Name" patientInfo="Hello" />
                    <HealthCardField field="Gender" patientInfo="Male" />
                    <HealthCardField field="Birthdate" patientInfo="01/01/1950" />
                    <HealthCardField field="Medications" patientInfo="Adezio" />
                    <HealthCardField field="Diabetic" patientInfo="No" />
                    <HealthCardField field="Smoker" patientInfo="Yes" />
                    <HealthCardField field="Other conditions" patientInfo="High blood pressure" />
                    <HealthCardField field="Reason for visit" patientInfo="To get X-ray chest scan" />
                </Container>
                <Container className="subBox">
                    <Row className="boxSubtitle">SYMPTOMS</Row>
                    <SymptomRow firstSymptom="Fever" secondSymptom="Headache" thirdSymptom="Night chills" />
                    <SymptomRow firstSymptom="Sore throat" secondSymptom="Cough" thirdSymptom="Breathing difficulties" />
                    <SymptomRow firstSymptom="Weak legs" secondSymptom="Diarrhoea" thirdSymptom="Chest pain" />
                </Container>

            </Container>

        </div>
    );
}

export default HealthCard;

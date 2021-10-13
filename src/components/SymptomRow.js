import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SymptomRow({ firstSymptom, secondSymptom, thirdSymptom }) {
    return (


        <Row>
            <Col className="symptomBox">{firstSymptom}</Col>
            <Col className="symptomBox">{secondSymptom}</Col>
            <Col className="symptomBox">{thirdSymptom}</Col>
        </Row>


    );
}

export default SymptomRow;

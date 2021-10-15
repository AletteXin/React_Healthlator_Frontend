import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";


function Language({ }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {

        i18n.changeLanguage(event.target.value);

    };

    return (

        <Row onChange={changeLanguage}>
            <Col></Col>
            <Col className="languageBox">
                <input type="radio" value="en" name="language" defaultChecked /> ENG
                </Col>
            <Col className="languageBox">
                <input type="radio" value="bm" name="language" /> BM
                </Col>
            <Col className="languageBox">
                <input type="radio" value="ch" name="language" /> 中文
                </Col>
            <Col></Col>
        </Row>

    );
}

export default Language;

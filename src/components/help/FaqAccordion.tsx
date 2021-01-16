import { Accordion, Card } from 'react-bootstrap'
import content from './content'

const FaqAccordion = () => {
  return (
    <Accordion>
      {content.map(({ answer, ask }, i) => (
        <Card key={ask.normalize()}>
          <Accordion.Toggle as={Card.Header} eventKey={i.toString()} style={{ cursor: 'pointer' }}>
            {ask}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body dangerouslySetInnerHTML={{ __html: answer }} />
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )
}

export default FaqAccordion

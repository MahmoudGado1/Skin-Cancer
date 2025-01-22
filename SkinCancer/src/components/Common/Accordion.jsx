import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";
function AccordionExample() {
  return (
    <div className="accordion container">
      <div className="accordion-content">
        <div className="header-line line-depart">
          <span className="line" />
          <span className="text">Find answers to your questions</span>
        </div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header> What is SkinVision?</Accordion.Header>
            <Accordion.Body>
              SkinVision is a regulated medical service that takes control over
              your skin health to a new level. It expands your ability to
              self-examine your skin and elevates your knowledge when to act,
              how and why. It is designed to provide accurate and timely skin
              cancer detection, along with the most reliable personalised skin
              health advice and health path recommendation. At the centre of the
              service is the SkinVision app, which is a regulated medical device
              that merges AI technology with the expertise of skin health
              professionals and dermatologists. SkinVision is a service of
              choice whether you want to address your most immediate concerns,
              learn what steps you should take next, understand your skin risk
              profile and introduce the most intelligent skin health regime to
              your seasonal rhythm.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can SkinVision help me detect skin cancer?
            </Accordion.Header>
            <Accordion.Body>
              With the SkinVision app, you can immediately detect signs of the
              most common types of skin cancer, but it is not a diagnosis. Early
              detection is critical in skin cancer treatment and is one of the
              greatest challenges of modern dermatology, posing significant risk
              to your health and life. The sooner you detect a potential risk
              and get in touch with your doctor, the higher the chance you will
              avoid the worst outcome. If you detect a sign of skin cancer using
              the SkinVision service, we advise you to visit a doctor, who can
              make a definite diagnosis if you need to be treated for skin
              cancer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What are the symptoms of skin cancer?
            </Accordion.Header>
            <Accordion.Body>
              Most cancers have some pretty obvious signs, including lumps and
              bumps, tenderness, pain or sickness. But when it comes to skin
              cancer symptoms, they aren&apos;t always as plain to see. Skin cancer
              is slow-growing and often free of glaring warning signs. This can
              make early detection tricky.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is a mole and how do you know it’s safe?
            </Accordion.Header>
            <Accordion.Body>
              While for many of us moles are just brown spots on our body we may
              not pay much attention to, they come in various shapes, sizes, and
              forms that can tell us important things about our skin health.
              Understanding all types of skin moles helps us identify any
              suspicious spots for skin cancer and keep our skin healthy.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionExample;

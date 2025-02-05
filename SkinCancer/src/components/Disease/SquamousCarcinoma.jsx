import "./MerkelCarcinoma.css"; 
import sccCause from "../../assets/gallery/causes2.png"
import sccShape from "../../assets/gallery/scc-examples-2ad126.jpg"
import sccTreatment from "../../assets/gallery/Squamous-Cell-Carcinoma-Diagnosis-and-Treatment.jpg"
const SquamousCarcinoma = () => {
  return (
    <div className="merkel-carcinoma container">
      {/* Left Section: Text Content */}
      <div className="leftMerkel">
        <div className="header-line disease">
          <span className="line" />
          <span className="text">Squamous Cell Carcinoma</span>
        </div>
        <div className="merkelBody">
          <h1>Understanding Squamous Cell Carcinoma</h1>
          <p>
            <strong>Squamous Cell Carcinoma (SCC)</strong> is a common type of
            skin cancer that arises from the squamous cells in the outer layers
            of the skin. It often appears as a firm, red nodule or a flat lesion
            with a scaly or crusted surface. SCC is typically caused by
            long-term exposure to ultraviolet (UV) radiation.
          </p>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>What Causes Squamous Cell Carcinoma?</h2>
              <p>
                SCC is primarily caused by cumulative UV exposure from the sun
                or tanning beds. Other risk factors include:
              </p>
              <ul>
                <li>
                  <strong>UV exposure:</strong> Prolonged exposure to sunlight
                  or artificial UV light.
                </li>
                <li>
                  <strong>Fair skin:</strong> People with light skin, hair, and
                  eyes are at higher risk.
                </li>
                <li>
                  <strong>Weakened immune system:</strong> Individuals with
                  conditions like HIV/AIDS or those taking immunosuppressive
                  drugs.
                </li>
                <li>
                  <strong>Chemical exposure:</strong> Contact with arsenic or
                  other harmful chemicals.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={sccCause} alt="Squamous Cell Carcinoma Causes" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Symptoms of Squamous Cell Carcinoma</h2>
              <p>
                SCC often presents as a firm, red nodule or a flat lesion with a
                scaly or crusted surface. Common characteristics include:
              </p>
              <ul>
                <li>Rough, scaly patches on the skin.</li>
                <li>Open sores that don&apos;t heal or heal and return.</li>
                <li>Raised growths with a central depression.</li>
                <li>Lesions on sun-exposed areas like the face, ears, and hands.</li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={sccShape} alt="Symptoms of Squamous Cell Carcinoma" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Treatment Options</h2>
              <p>
                Treatment for SCC depends on the size, location, and stage of
                the cancer. Common treatments include:
              </p>
              <ul>
                <li>
                  <strong>Surgery:</strong> Excision of the tumor and
                  surrounding tissue.
                </li>
                <li>
                  <strong>Mohs surgery:</strong> A precise surgical technique
                  for removing skin cancer layer by layer.
                </li>
                <li>
                  <strong>Radiation therapy:</strong> Used for tumors that are
                  hard to treat with surgery.
                </li>
                <li>
                  <strong>Cryotherapy:</strong> Freezing cancer cells with
                  liquid nitrogen.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={sccTreatment} alt="Treatment for Squamous Cell Carcinoma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquamousCarcinoma;

import "./MerkelCarcinoma.css"; // Reuse the same CSS file
// import bccCause from "../../assets/gallery/causes.jpg"; 
import bccShape from "../../assets/gallery/bcc-examples-7eb1bf.gif";
import bccTreatment from "../../assets/gallery/guide-basal-cell-carcinoma-symptoms-signs-infographic.jpg";

const BasalCarcinoma = () => {
  return (
    <div className="merkel-carcinoma container">
      {/* Left Section: Text Content */}
      <div className="leftMerkel">
        <div className="header-line disease">
          <span className="line" />
          <span className="text">Basal Cell Carcinoma</span>
        </div>
        <div className="merkelBody">
          <h1>Understanding Basal Cell Carcinoma</h1>
          <p>
            <strong>Basal Cell Carcinoma (BCC)</strong> is the most common type
            of skin cancer. It arises from the basal cells in the deepest layer
            of the epidermis. BCC typically appears as a shiny, pearly bump or a
            pinkish patch of skin and is often caused by long-term exposure to
            ultraviolet (UV) radiation.
          </p>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>What Causes Basal Cell Carcinoma?</h2>
              <p>
                BCC is primarily caused by cumulative UV exposure from the sun
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
                  <strong>Age:</strong> BCC is more common in people over 50.
                </li>
                <li>
                  <strong>Weakened immune system:</strong> Individuals with
                  conditions like HIV/AIDS or those taking immunosuppressive
                  drugs.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={bccTreatment} alt="Basal Cell Carcinoma Causes" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Symptoms of Basal Cell Carcinoma</h2>
              <p>
                BCC often appears as a shiny, pearly bump or a pinkish patch of
                skin. Common characteristics include:
              </p>
              <ul>
                <li>
                  <strong>Pearly or waxy bump:</strong> Often with visible blood
                  vessels.
                </li>
                <li>
                  <strong>Flat, scaly patch:</strong> May resemble a scar.
                </li>
                <li>
                  <strong>Sores that don&apos;t heal:</strong> May bleed, ooze,
                  or crust over.
                </li>
                <li>
                  <strong>Location:</strong> Commonly found on sun-exposed areas
                  like the face, ears, and neck.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={bccShape} alt="Symptoms of Basal Cell Carcinoma" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Treatment Options</h2>
              <p>
                Treatment for BCC depends on the size, location, and stage of
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
                  <strong>Cryotherapy:</strong> Freezing cancer cells with
                  liquid nitrogen.
                </li>
                <li>
                  <strong>Topical treatments:</strong> Creams or gels like
                  imiquimod or 5-fluorouracil for superficial BCC.
                </li>
                <li>
                  <strong>Radiation therapy:</strong> Used for tumors that are
                  hard to treat with surgery.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={bccTreatment} alt="Treatment for Basal Cell Carcinoma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasalCarcinoma;
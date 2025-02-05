import "./MerkelCarcinoma.css";
import merkelCause from "../../assets/gallery/causes.jpg";
import merkelshape from "../../assets/gallery/shape.jpg";
import merkeltreatment from "../../assets/gallery/mcc-indication-dor.jpg"
const MerkelCarcinoma = () => {
  return (
    <div className="merkel-carcinoma container">
      {/* Left Section: Text Content */}
      <div className="leftMerkel">
        <div className="header-line disease">
          <span className="line" />
          <span className="text">Merkel Cell Carcinoma</span>
        </div>
        <div className="merkelBody">
          <h1>Understanding Merkel Cell Carcinoma</h1>
          <p>
            <strong>Merkel Cell Carcinoma (MCC)</strong> is a rare and
            aggressive type of skin cancer that typically appears as a
            flesh-colored or bluish-red nodule, often on sun-exposed areas like
            the face, head, or neck. It is known for its rapid growth and
            potential to spread (metastasize) to other parts of the body.
          </p>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>What Causes Merkel Cell Carcinoma?</h2>
              <p>
                MCC is often associated with the{" "}
                <strong>Merkel cell polyomavirus (MCV)</strong>, which is found
                in most cases of this cancer. Other risk factors include:
              </p>
              <ul>
                <li>
                  <strong>UV exposure:</strong> Prolonged exposure to
                  ultraviolet (UV) light from the sun or tanning beds.
                </li>
                <li>
                  <strong>Weakened immune system:</strong> People with
                  conditions like HIV/AIDS or those taking immunosuppressive
                  drugs are at higher risk.
                </li>
                <li>
                  <strong>Age:</strong> MCC is more common in people over 50.
                </li>
                <li>
                  <strong>Fair skin:</strong> Individuals with light skin tones
                  are more susceptible.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={merkelCause} alt="Merkel Cell Carcinoma" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Symptoms of Merkel Cell Carcinoma</h2>
              <p>
                MCC often presents as a painless, firm, shiny nodule that grows
                rapidly. Common characteristics include:
              </p>
              <ul>
                <li>Red, purple, or skin-colored appearance.</li>
                <li>
                  Located on sun-exposed areas like the face, neck, or arms.
                </li>
                <li>May ulcerate or bleed as it progresses.</li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={merkelshape} alt="Symptoms of Merkel Cell Carcinoma " />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Treatment Options</h2>
              <p>
                Treatment for MCC depends on the stage of the cancer and may
                include:
              </p>
              <ul>
                <li>
                  <strong>Surgery:</strong> Removal of the tumor and surrounding
                  tissue.
                </li>
                <li>
                  <strong>Radiation therapy:</strong> To kill cancer cells and
                  shrink tumors.
                </li>
                <li>
                  <strong>Immunotherapy:</strong> Drugs like pembrolizumab or
                  avelumab to boost the immune system&apos;s ability to fight
                  cancer.
                </li>
                <li>
                  <strong>Chemotherapy:</strong> Used in advanced cases to slow
                  the spread of cancer.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={merkeltreatment} alt="Symptoms of Merkel Cell Carcinoma " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerkelCarcinoma;

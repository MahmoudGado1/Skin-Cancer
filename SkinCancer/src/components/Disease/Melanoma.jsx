import "./MerkelCarcinoma.css"; // Reuse the same CSS file
import melanomaCause from "../../assets/gallery/R.jpg"; // Update image paths
import melanomaShape from "../../assets/gallery/type.jpg";
import melanomaTreatment from "../../assets/gallery/treat.jpg";

const Melanoma = () => {
  return (
    <div className="merkel-carcinoma container">
      {/* Left Section: Text Content */}
      <div className="leftMerkel">
        <div className="header-line disease">
          <span className="line" />
          <span className="text">Melanoma</span>
        </div>
        <div className="merkelBody">
          <h1>Understanding Melanoma</h1>
          <p>
            <strong>Melanoma</strong> is a type of skin cancer that develops from
            melanocytes, the cells responsible for producing melanin (skin
            pigment). It is less common than other skin cancers but is more
            aggressive and can spread to other parts of the body if not detected
            early.
          </p>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>What Causes Melanoma?</h2>
              <p>
                Melanoma is primarily caused by exposure to ultraviolet (UV)
                radiation from the sun or tanning beds. Other risk factors
                include:
              </p>
              <ul>
                <li>
                  <strong>UV exposure:</strong> Intense, intermittent sun
                  exposure, especially during childhood.
                </li>
                <li>
                  <strong>Fair skin:</strong> People with light skin, hair, and
                  eyes are at higher risk.
                </li>
                <li>
                  <strong>Family history:</strong> A family history of melanoma
                  increases the risk.
                </li>
                <li>
                  <strong>Moles:</strong> Having many moles or atypical moles
                  (dysplastic nevi).
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={melanomaCause} alt="Melanoma Causes" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Symptoms of Melanoma</h2>
              <p>
                Melanoma often appears as a new or changing mole. Common signs
                include:
              </p>
              <ul>
                <li>
                  <strong>Asymmetry:</strong> One half of the mole doesn&apos;t
                  match the other.
                </li>
                <li>
                  <strong>Border irregularity:</strong> The edges are ragged,
                  notched, or blurred.
                </li>
                <li>
                  <strong>Color variation:</strong> The mole has different
                  shades of brown, black, or even red, white, or blue.
                </li>
                <li>
                  <strong>Diameter:</strong> The mole is larger than 6mm (about
                  the size of a pencil eraser).
                </li>
                <li>
                  <strong>Evolving:</strong> The mole changes in size, shape, or
                  color over time.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={melanomaShape} alt="Symptoms of Melanoma" />
            </div>
          </div>

          <div className="merkelContent1">
            <div className="merkelText">
              <h2>Treatment Options</h2>
              <p>
                Treatment for melanoma depends on the stage of the cancer and
                may include:
              </p>
              <ul>
                <li>
                  <strong>Surgery:</strong> Removal of the tumor and surrounding
                  tissue.
                </li>
                <li>
                  <strong>Immunotherapy:</strong> Drugs like pembrolizumab or
                  nivolumab to boost the immune system&apos;s ability to fight
                  cancer.
                </li>
                <li>
                  <strong>Targeted therapy:</strong> Medications that target
                  specific genetic mutations in melanoma cells.
                </li>
                <li>
                  <strong>Radiation therapy:</strong> Used in advanced cases to
                  shrink tumors.
                </li>
                <li>
                  <strong>Chemotherapy:</strong> Rarely used, but may be an
                  option for advanced melanoma.
                </li>
              </ul>
            </div>
            <div className="merkelImage">
              <img src={melanomaTreatment} alt="Treatment for Melanoma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Melanoma;
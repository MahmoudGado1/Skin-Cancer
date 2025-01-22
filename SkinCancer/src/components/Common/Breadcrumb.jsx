import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Breadcrumb.css';
// eslint-disable-next-line react/prop-types
function BreadcrumbExample({ position }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active href="">
        {position}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;
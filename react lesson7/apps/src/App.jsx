import "./main.scss";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AOS from "aos";
import "aos/dist/aos.css";
function App(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  useEffect(() => {
    AOS.init({
      delay:300
    });
    AOS.refresh();
  }, []);
  const DarkMode = () => {
    setDark("dark");
  };

  const LightMode = () => {
    setDark("light");
  };
  const [dark, setDark] = useState("light");

  return (
    <div className={`app ${dark}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-9"></div>
          <div className="col-xl-3">
            <div className="icons">
              <BsFillMoonFill data-aos="fade-left" onClick={DarkMode} />
              <BsSun data-aos="fade-down" onClick={LightMode} />
            </div>
          </div>

          <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Modal title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;

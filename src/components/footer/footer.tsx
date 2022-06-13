import "./footer.css";

export default function Footer() {
  return (
    <footer className="text-light">
      <div
        style={{ borderTop: "3.6px solid #FFFFFF" }}
        className="row p-4 pt-5 mt-5 m-0 "
      >
        <div className="col-6 ">
          <h5 className="font-weight-bold">Features</h5>
          <ul className="list-unstyled text-small linkList">
            <li>
              <a className="text-light" href="#">
                Gyms
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Yoga
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Meditation
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Happiness
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h5 className="font-weight-bold">Resources</h5>
          <ul className="list-unstyled text-small linkList">
            <li>
              <a className="text-light" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Join Us
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Signup
              </a>
            </li>
            <li>
              <a className="text-light" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

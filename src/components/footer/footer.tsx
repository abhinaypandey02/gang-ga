export default function Footer(){
    return(
        <footer className="text-dark" >
        <div style={{borderTop:"1px solid #618d61"}} className="row p-4 pt-5 mt-5 m-0 ">
          <div className="col-6 ">
            <h5 className="font-weight-bold">Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-dark" href="#">Cool stuff</a></li>
              <li><a className="text-dark" href="#">Random feature</a></li>
              <li><a className="text-dark" href="#">Team feature</a></li>
              <li><a className="text-dark" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6">
            <h5 className='font-weight-bold'>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-dark" href="#">Resource</a></li>
              <li><a className="text-dark" href="#">Resource name</a></li>
              <li><a className="text-dark" href="#">Another resource</a></li>
              <li><a className="text-dark" href="#">Final resource</a></li>
            </ul>
          </div>
     
        </div>
      </footer>

    )
}
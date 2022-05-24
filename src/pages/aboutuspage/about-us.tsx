import NavigationBar from "../../components/navigationBar/navigation_bar";

export default function LandingPage() {
    return (
        <div className="1">
            <div className="container-fluid d-flex flex-column min-vh-100 text-light">
                <div className="row">
                    <NavigationBar />
                </div>
                <div className="row d-flex flex-grow-1 align-content-center justify-content-center">
                    <div className="col-12 text-center">
                        <h1 className="display-4 mx-auto mb-5">
                            <strong>
                               
                            </strong>
                        </h1>
                       
                    </div>
                </div>
            </div>
            <div className="container-fluid min-vh-100 pt-4">
                <div className="container text-center text-light">
                    <br/>
                    <div className="row d-flex justify-content-around p-3">
                        <div className="col-lg-3  p-3">
                            <h1>Hello</h1>
                        </div>
                        <div className="col-lg-3 p-3">
                            
                        </div>
                        <div className="col-lg-3  p-3">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
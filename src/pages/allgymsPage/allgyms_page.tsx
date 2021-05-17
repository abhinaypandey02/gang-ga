import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavigationBar from "../../components/navigationBar/navigation_bar";
import { Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function AllGymsPage() {

    const useStyles = makeStyles({
        root: {
            width: 400,
        },
    });

    function valuetext(value: number) {
        return `${value}°C`;
    }

    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([0, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="div">
            <Navbar id='nav1' sticky="top" className='pt-md-5 px-md-5 d-flex' bg="transparent" variant='dark' expand="lg">
                <Navbar.Brand href="#home" className='d-none	d-sm-none d-md-block'>Gang-ga</Navbar.Brand>
                <div className="d-flex w-75 ms-auto ">

                    <input className="form-control m-0 px-md-3 py-2 rounded-pill w-100 bg-transparent text-light " type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                    <Button className='rounded-pill ' variant='light '>
                        Go
                        </Button>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link2">Login</Nav.Link>
                        <Nav.Link href="#link22">Signup</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 m-2 bg-light">
                        <div className={classes.root}>
                            <Typography id="range-slider" gutterBottom>
                                Price Range
                             </Typography>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        </div>
                    </div>
                    <div className="col-3 m-2 bg-light">
                  
                    </div>
                    <div className="col-3 m-2  bg-light">21111</div>
                    <div className="col-3 m-2 bg-light">21111</div>
                    <div className="col-3 m-2 bg-light">21111</div>
                    <div className="col-3 m-2 bg-light">21111</div>
                </div>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>
        </div>




    )
}
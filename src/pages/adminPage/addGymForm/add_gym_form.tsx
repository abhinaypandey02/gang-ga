import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CheckboxLabels from "../../../components/materialuiComponents/checkBox/checkbox";
import { defaultGym } from "../../../interfaces/gym";
import { addGym } from "../../../utils/firebase/firestore";
import { v4 } from "uuid";
export default function AddGymForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    function onSubmit(data: any) {
        setLoading(true);
        const tempGym = { ...defaultGym };
        tempGym.uid = v4();
        tempGym.name = data.name;
        tempGym.price = data.price;
        tempGym.description = data.description;
        tempGym.location.area = data.area;
        tempGym.location.locality = data.locality;
        tempGym.location.district = data.district;
        tempGym.location.state = data.state;
        tempGym.location.latitude = parseInt(data.latitude);
        tempGym.location.longitude = parseInt(data.longitude);
        tempGym.type=data.type;
        tempGym.features = data.features
            .split(",")
            .map((feature: string) => feature.trim());
        addGym(tempGym).then(() => {
            reset();
            alert("Gym added!");
            setLoading(false);
        });
    }

    function FormGroup({
        id,
        name,
        type,
        placeholder,
    }: {
        id: string;
        name: string;
        type: string;
        placeholder: string;
    }) {
        return (
            <Form.Group className="mb-2">
                <Form.Label>{name}</Form.Label>
                <Form.Control
                    {...register(id)}
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className="rounded-pill bg-transparent text-light"
                />
            </Form.Group>
        );
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {FormGroup({
                id: "name",
                name: "Name",
                type: "text",
                placeholder: "Enter Name",
            })}
            {FormGroup({
                id: "price",
                name: "Price per day",
                type: "number",
                placeholder: "Enter Rate per day",
            })}
            {FormGroup({
                id: "latitude",
                name: "Latitude",
                type: "text",
                placeholder: "Enter Latitude",
            })}
            {FormGroup({
                id: "longitude",
                name: "Longitude",
                type: "text",
                placeholder: "Enter Longitude",
            })}
            {FormGroup({
                id: "state",
                name: "State",
                type: "text",
                placeholder: "Enter State",
            })}
            {FormGroup({
                id: "district",
                name: "District",
                type: "text",
                placeholder: "Enter District",
            })}
            {FormGroup({
                id: "area",
                name: "Area",
                type: "text",
                placeholder: "Enter Area",
            })}
            {FormGroup({
                id: "locality",
                name: "Locality",
                type: "text",
                placeholder: "Enter Locality",
            })}
            {FormGroup({
                id: "features",
                name: "Features",
                type: "text",
                placeholder: "Comma Seperated Features",
            })}
            <Form.Group className="mb-2">
                <Form.Label>Type</Form.Label>
                <Form.Control
                    as="select"
                    {...register("type")}
                    className="bg-transparent text-light"
                >
                    <option value="gym" className="text-dark">Gym</option>
                    <option value="park" className="text-dark">Park</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    {...register("description")}
                    id={"description"}
                    name={"description"}
                    placeholder="Description"
                    className="bg-transparent text-light"
                />
            </Form.Group>
            <Button
                disabled={loading}
                type="submit"
                variant="light"
                className="rounded-pill my-2"
            >
                Add
            </Button>
        </Form>
    );
}

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
        tempGym.features = data.features
            .split(",")
            .map((feature: string) => feature.trim());
        addGym(tempGym).then(() => {
            reset();
            alert("Gym added!")
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
                name: "Gym Name",
                type: "text",
                placeholder: "Enter Gym Name",
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
                placeholder: "Enter Gym's Latitude",
            })}
            {FormGroup({
                id: "longitude",
                name: "Longitude",
                type: "text",
                placeholder: "Enter Gym's Longitude",
            })}
            {FormGroup({
                id: "state",
                name: "State",
                type: "text",
                placeholder: "Enter Gym's State",
            })}
            {FormGroup({
                id: "district",
                name: "District",
                type: "text",
                placeholder: "Enter Gym's District",
            })}
            {FormGroup({
                id: "area",
                name: "Area",
                type: "text",
                placeholder: "Enter Gym's Area",
            })}
            {FormGroup({
                id: "locality",
                name: "Locality",
                type: "text",
                placeholder: "Enter Gym's Locality",
            })}
            {FormGroup({
                id: "features",
                name: "Features of Gym",
                type: "text",
                placeholder: "Comma Seperated Gym Features",
            })}
            <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    {...register("description")}
                    id={"description"}
                    name={"description"}
                    placeholder="Gym Description"
                    className="rounded-pill bg-transparent text-light"
                />
            </Form.Group>
            <Button
                disabled={loading}
                type="submit"
                variant="light"
                className="rounded-pill my-2"
            >
                Add Gym
            </Button>
        </Form>
    );
}

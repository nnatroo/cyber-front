import {useEffect, useState} from "react";
import classes from "../modules/Address.module.scss";
import Edit from "../assets/edit.svg"
import Close from "../assets/close.svg"
import Subtract from "../assets/subtract.svg"
import Line from "../assets/line.svg"
import Line2 from "../assets/line-second.svg"
import Header from "../components/Header.jsx";
import PaymentSteps from "../components/PaymentSteps.jsx";
import {Link} from "react-router";
import layout from "../modules/layout.module.scss";
import {Footer} from "../components/Footer.jsx";

export const Address = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const savedAddresses = localStorage.getItem("addresses");
        setAddresses(JSON.parse(savedAddresses) ?? []);
    }, []);

    const [selectedAddress, setSelectedAddress] = useState(() => {
        const savedSelected = localStorage.getItem("selectedAddress");
        return savedSelected ? Number(savedSelected) : addresses[0]?.id || null;
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }, [addresses]);

    useEffect(() => {
        if (selectedAddress !== null) {
            localStorage.setItem("selectedAddress", selectedAddress);
        }
    }, [selectedAddress]);

    const validateAddress = (address) => {
        let newErrors = {};
        if (!address.name.trim()) newErrors.name = "Name is required";
        if (!address.details.trim()) newErrors.details = "Address is required";
        if (!address.phone.trim()) newErrors.phone = "Phone number is required";
        return newErrors;
    };

    const handleChange = (id, field, value) => {
        setAddresses((prevAddresses) =>
            prevAddresses.map((address) =>
                address.id === id ? {...address, [field]: value} : address
            )
        );

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: {...prevErrors[id], [field]: ""}
        }));
    };

    const toggleEdit = (id) => {
        setAddresses((prev) =>
            prev.map((address) => {
                if (address.id === id) {
                    if (address.isEditing) {
                        const validationErrors = validateAddress(address);
                        if (Object.keys(validationErrors).length > 0) {
                            setErrors((prevErrors) => ({
                                ...prevErrors,
                                [id]: validationErrors
                            }));
                            return address;
                        }
                    }
                    return {...address, isEditing: !address.isEditing};
                }
                return address;
            })
        );
    };

    const deleteAddress = (id) => {
        setAddresses((prevAddresses) => prevAddresses.filter((address) => address.id !== id));

        if (selectedAddress === id) {
            const newAddresses = addresses.filter((address) => address.id !== id);
            setSelectedAddress(newAddresses.length > 0 ? newAddresses[0].id : null);
        }
    };

    const isAnyAddressInvalid = () => {
        return addresses.some((address) => {
            const validationErrors = validateAddress(address);
            return Object.keys(validationErrors).length > 0;
        });
    };

    return (
<>
    <Header/>
            <div className={`${classes['main-wrapper']} ${layout['container']}`}>
                <PaymentSteps/>
                <div className={classes["address-container"]}>
                {addresses.length === 0 ? (<h3>Add Address</h3>) : (<h3>Select Address</h3>)}
                {addresses.map((address) => (
                    <div key={address.id} className={classes["address-card"]}>
                        <div className={classes["address-details"]}>
                            {address.isEditing ? (
                                <div className={classes["edit-address"]}>
                                    <div className={classes["flexes"]}>
                                        <div className={classes["flexes-text"]}>
                                            <h4>Name</h4>
                                            <input
                                                type="text"
                                                value={address.name || ""}
                                                onChange={(e) => handleChange(address.id, "name", e.target.value)}
                                                placeholder="Enter Name"
                                            />
                                            {errors[address.id]?.name &&
                                                <p>{errors[address.id].name}</p>}
                                        </div>
                                        <div className={classes["flexes-text"]}>
                                            <h4>Address</h4>
                                            <input
                                                type="text"
                                                value={address.details || ""}
                                                onChange={(e) => handleChange(address.id, "details", e.target.value)}
                                                placeholder="Enter Address"
                                            />
                                            {errors[address.id]?.details &&
                                                <p>{errors[address.id].details}</p>}
                                        </div>
                                    </div>
                                    <div className={classes["flexes"]}>
                                        <div className={classes["flexes-text"]}>
                                            <h4>Phone Number</h4>
                                            <input
                                                type="text"
                                                value={address.phone || ""}
                                                onChange={(e) => handleChange(address.id, "phone", e.target.value)}
                                                placeholder="Enter Phone"
                                            />
                                            {errors[address.id]?.phone &&
                                                <p>{errors[address.id].phone}</p>}
                                        </div>
                                        <div className={classes["btns-add-delete"]}>
                                            <button onClick={() => toggleEdit(address.id)}>
                                                Save
                                            </button>
                                            <button onClick={() => deleteAddress(address.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={classes["address"]}>
                                    <div className={classes["address-content"]}>
                                        <input
                                            type="radio"
                                            name="address"
                                            value={address.id}
                                            checked={selectedAddress === address.id}
                                            onChange={() => setSelectedAddress(address.id)}
                                        />
                                        <div className={classes["address-info"]}>
                                            <h2>{address.name} <span className={classes["label"]}>{address.label}</span>
                                            </h2>
                                            <div className={classes["address-details-text"]}>
                                                <p>{address.details}</p>
                                                <p>{address.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes["btns-add-deletes"]}>
                                            <button onClick={() => toggleEdit(address.id)}>
                                                <img src={Edit} alt={"edit"}/>
                                            </button>
                                            <button onClick={() => deleteAddress(address.id)}><img src={Close}
                                                                                                   alt={"close"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div className={classes["liner"]}>
                    <button className={classes["add-button"]} onClick={() => {
                        setAddresses([...addresses, {
                            id: Date.now(),
                            label: "New",
                            name: "",
                            details: "",
                            phone: "",
                            isEditing: true
                        }]);
                    }}
                            disabled={isAnyAddressInvalid()}
                    >
                        <img src={Line} alt={"line"} className={classes["line"]}/>
                        <img src={Subtract} alt={"add"}/>
                        <img src={Line2} alt={"line"} className={classes["line"]}/>
                    </button>
                    <h3>Add New Address</h3>
                </div>
                <div className={classes["buttons"]}>
                    <button className={classes["back-button"]}>Back</button>
                    <Link to='/shipping'>
                    <button className={classes["next-button"]}>Next</button>
                    </Link>
                </div>
            </div>
        </div>
<Footer/>
</>
    );
};

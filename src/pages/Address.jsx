import {useEffect, useState} from "react";
import classes from "../modules/Address.module.scss";
import group from "../assets/group.svg"
import shopping from "../assets/shopping.svg"
import vector from "../assets/vector.svg"
import edit from "../assets/edit.svg"
import close from "../assets/close.svg"
import subtract from "../assets/subtract.svg"
import line from "../assets/line.svg"
import line2 from "../assets/line-second.svg"
import save from "../assets/save.svg"
export const Address = () => {
    const [addresses, setAddresses] = useState(() => {
        const savedAddresses = localStorage.getItem("addresses");
        return savedAddresses
            ? JSON.parse(savedAddresses)
            : [
                {
                    id: 1,
                    label: "Home",
                    name: "2118 Thornridge",
                    details: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
                    phone: "(209) 555-0104",
                    isEditing: false,
                },
                {
                    id: 2,
                    label: "Office",
                    name: "Headoffice",
                    details: "2715 Ash Dr. San Jose, South Dakota 83475",
                    phone: "(704) 555-0127",
                    isEditing: false,
                },
            ];
    });

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
                address.id === id ? { ...address, [field]: value } : address
            )
        );

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: { ...prevErrors[id], [field]: "" }
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
                    return { ...address, isEditing: !address.isEditing };
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
            <div className={classes["stepper"]}>
                <div className={classes["step"]}>
                    <div className={classes["step-icon"]}><img src={vector} alt={"destination"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 1</span>
                        <h3>Address</h3>
                    </div>
                </div>

                <div className={classes["step"]}>
                    <div className={classes["step-icon"]}><img src={shopping} alt={"shipping"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 2</span>
                        <h3>Shipping</h3>
                    </div>
                </div>

                <div className={classes["step"]}>
                    <div className={classes["step-icon"]}><img src={group} alt={"payment"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 3</span>
                        <h3>Payment</h3>
                    </div>
                </div>
            </div>

            <div className={classes["address-container"]}>
                <h3>Select Address</h3>
                {addresses.map((address) => (
                    <div key={address.id} className={classes["address-card"]}>
                        <div className={classes["address-details"]}>
                            {address.isEditing ? (
                                <div className={classes["edit-address"]}>
                                    <div className={classes["flexes"]}>
                                        <div  className={classes["flexes-text"]}>
                                            <h4>Name</h4>
                                            <input
                                                type="text"
                                                value={address.name || ""}
                                                onChange={(e) => handleChange(address.id, "name", e.target.value)}
                                                placeholder="Enter Name"
                                            />
                                            {errors[address.id]?.name &&
                                                <p className={classes["error"]}>{errors[address.id].name}</p>}
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
                                                <p className={classes["error"]}>{errors[address.id].details}</p>}
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
                                                <p className={classes["error"]}>{errors[address.id].phone}</p>}
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
                                    <div className={classes["btns-add-deletes"]}>
                                    <button onClick={() => toggleEdit(address.id)}>
                                                <img src={edit} alt={"edit"}/>
                                        </button>
                                        <button onClick={() => deleteAddress(address.id)}><img src={close} alt={"close"}/></button>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div>
                ))}
                <div>
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
                        <img src={line} alt={"line"} className={classes["line"]}/>
                        <img src={subtract} alt={"add"}/>
                        <img src={line2} alt={"line"} className={classes["line"]}/>
                    </button>
                </div>
                <div className={classes["buttons"]}>
                    <button className={classes["back-button"]}>Back</button>
                    <button className={classes["next-button"]}>Next</button>
                </div>
            </div>
        </>
    );
};
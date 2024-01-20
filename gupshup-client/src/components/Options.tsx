// import { Dialog, Switch, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useState } from "react";
// import { UserInterface } from "../../interfaces/user";
// import { classNames, requestHandler } from "../../utils";
// import Button from "../Button";
// import Input from "../Input";
// import Select from "../Select";

import React, { useState, useEffect } from 'react';
import { getOptions } from "../api";
import { OptionInterface } from "../interfaces/option";

const OptionModal: React.FC = () => {
    const [options, setOptions] = useState<OptionInterface | null>(null);

    const getOptionsData = async () => {
        try {
            const response = await getOptions();
            const { data } = response;
            console.log(data);
            setOptions(data || null);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    useEffect(() => {
        getOptionsData();
    }, []);

    return (
        <div>
            {/* Render your modal content here */}
            {/* <button onClick={onClose}>Close Modal</button> */}
            {/* <button onClick={() => onSuccess(options)}>Submit Options</button> */}
        </div>
    );
};

export default OptionModal;
